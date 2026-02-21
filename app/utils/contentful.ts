import { createClient } from 'contentful'

let client: ReturnType<typeof createClient> | null = null

export function getContentfulClient() {
  if (client) return client

  // Las credenciales están en `public` para que funcionen
  // tanto en SSR como en navegación client-side
  const config = useRuntimeConfig()

  if (!config.public.contentfulSpaceId || !config.public.contentfulAccessToken) {
    throw new Error(
      'Contentful: Faltan NUXT_CONTENTFUL_SPACE_ID o NUXT_CONTENTFUL_ACCESS_TOKEN en las variables de entorno.'
    )
  }

  client = createClient({
    space: config.public.contentfulSpaceId,
    accessToken: config.public.contentfulAccessToken,
  })

  return client
}
