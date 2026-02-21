import { getContentfulClient } from '~/utils/contentful'

// ─── Tipos de dominio (camelCase) ──────────────────────────────────────────

export interface Service {
  id: string
  title: string
  shortDescription: string
  mainImage: string
  order: number
  whatsappUrl: string
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function normalizeUrl(url: unknown): string {
  if (typeof url !== 'string' || !url) return ''
  return url.startsWith('//') ? `https:${url}` : url
}

function extractAssetUrl(asset: unknown): string {
  if (!asset || typeof asset !== 'object') return ''
  const a = asset as Record<string, unknown>
  const fields = a['fields'] as Record<string, unknown> | undefined
  const file = fields?.['file'] as Record<string, unknown> | undefined
  return normalizeUrl(file?.['url'])
}

const WHATSAPP_BASE = 'https://wa.me/34617899547?text='

function buildWhatsappUrl(title: string): string {
  const message = `Hola Laura, me encantaría recibir un presupuesto para el servicio de ${title}. La fecha aproximada de mi evento es el _____ y seremos unos _____ invitados.`
  return `${WHATSAPP_BASE}${encodeURIComponent(message)}`
}

// ─── Composable ────────────────────────────────────────────────────────────

export function useServices() {
  async function fetchServices(): Promise<Service[]> {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'servicio',
      order: ['fields.orden'],
    })

    return entries.items
      .map((entry) => {
        const f = entry.fields as Record<string, unknown>
        const title = String(f['titulo'] ?? '')

        return {
          id: entry.sys.id,
          title,
          shortDescription: String(f['descripcion_corta'] ?? ''),
          mainImage: extractAssetUrl(f['imagen_principal']),
          order: typeof f['orden'] === 'number' ? f['orden'] : 0,
          whatsappUrl: buildWhatsappUrl(title),
        } satisfies Service
      })
      .sort((a, b) => a.order - b.order)
  }

  return { fetchServices }
}
