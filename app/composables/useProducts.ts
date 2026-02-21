import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { getContentfulClient } from '~/utils/contentful'

// ─── Tipos de dominio (camelCase) ──────────────────────────────────────────

export interface Category {
  id: string
  name: string
  slug: string
}

export interface Product {
  id: string
  title: string
  slug: string
  price: number
  description: string
  isCustomizable: boolean
  categorySlug: string
  categoryName: string
  mainImage: string
  allImages: string[]
  minQuantity: number
  maxQuantity: number | null
}

// ─── Helpers de extracción segura ──────────────────────────────────────────

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

// ─── Composable ────────────────────────────────────────────────────────────

export function useProducts() {

  // ── fetchCategories ──────────────────────────────────────────────────────
  async function fetchCategories(): Promise<Category[]> {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'categoria',
    })

    return entries.items.map((entry) => {
      const f = entry.fields as Record<string, unknown>
      return {
        id: entry.sys.id,
        name: String(f['nombre'] ?? ''),
        slug: String(f['slug'] ?? ''),
      }
    })
  }

  // ── Mapper interno ───────────────────────────────────────────────────────
  function mapProduct(entry: { sys: { id: string }; fields: Record<string, unknown> }): Product {
    const f = entry.fields

    // Imagen principal
    const mainImageUrl = extractAssetUrl(f['imagen_principal'])

    // Galería adicional
    const galeriaUrls: string[] = []
    const galeria = f['galeria_imagenes']
    if (Array.isArray(galeria)) {
      for (const asset of galeria) {
        const url = extractAssetUrl(asset)
        if (url) galeriaUrls.push(url)
      }
    }

    // allImages: [0] = principal, [1..n] = galería
    const allImages = [mainImageUrl, ...galeriaUrls].filter(Boolean)

    // Categoría (referencia resuelta via include: 2)
    const categoriaEntry = f['categoria'] as Record<string, unknown> | undefined
    const categoriaFields = categoriaEntry?.['fields'] as Record<string, unknown> | undefined
    const categorySlug = categoriaFields?.['slug'] ? String(categoriaFields['slug']) : 'otros'
    const categoryName = categoriaFields?.['nombre'] ? String(categoriaFields['nombre']) : ''

    // Rich Text → HTML
    let description = ''
    if (f['descripcion'] && typeof f['descripcion'] === 'object') {
      try {
        // @ts-expect-error — rich text node type varía entre versiones
        description = documentToHtmlString(f['descripcion'])
      }
      catch {
        description = ''
      }
    }

    const minQty = typeof f['cantidad_minima'] === 'number' ? f['cantidad_minima'] : 1
    const maxQty = typeof f['cantidad_maxima'] === 'number' ? f['cantidad_maxima'] : null

    return {
      id: entry.sys.id,
      title: String(f['titulo'] ?? ''),
      slug: String(f['slug'] ?? ''),
      price: typeof f['precio'] === 'number' ? f['precio'] : 0,
      description,
      isCustomizable: Boolean(f['es_personalizable']),
      categorySlug,
      categoryName,
      mainImage: mainImageUrl,
      allImages,
      minQuantity: minQty,
      maxQuantity: maxQty,
    }
  }

  // ── fetchProducts ────────────────────────────────────────────────────────
  async function fetchProducts(): Promise<Product[]> {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'producto',
      include: 2,
    })

    return entries.items.map(entry =>
      mapProduct(entry as unknown as { sys: { id: string }; fields: Record<string, unknown> })
    )
  }

  // ── fetchProductBySlug ───────────────────────────────────────────────────
  async function fetchProductBySlug(slug: string): Promise<Product | null> {
    const client = getContentfulClient()
    const entries = await client.getEntries({
      content_type: 'producto',
      'fields.slug': slug,
      include: 2,
      limit: 1,
    })

    if (!entries.items.length) return null
    return mapProduct(entries.items[0] as unknown as { sys: { id: string }; fields: Record<string, unknown> })
  }

  return { fetchCategories, fetchProducts, fetchProductBySlug }
}
