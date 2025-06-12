<script lang="ts">
  type Props = {
    title: string
    description: string
    favicon?: string
    og?: {
      image?: {
        url: string
        alt: string
      },
      title: string
      description: string
    }
  }
  const { title, description, og, favicon }: Props = $props()
</script>

<svelte:head>
  <link rel="icon" href={favicon ?? "/favicon.png"} />
  <meta property="og:title" content={og?.title} />
  <meta property="og:description" content={og?.description} />
  <meta property="og:url" content={globalThis?.window?.location?.href} />
  <meta property="og:site_name" content={title} />
  <meta property="og:locale" content="es_ES" />
  <meta property="og:image:url" content={og?.image?.url} />
  <meta property="og:image:width" content="800" />
  <meta property="og:image:height" content="600" />
  <meta property="og:image:width" content="1800" />
  <meta property="og:image:height" content="1600" />
  <meta property="og:image:alt" content={og?.image?.alt} />
  <meta property="og:type" content="website" />
  <title>{title}</title>
  <meta name="description" content={description} />
</svelte:head>
