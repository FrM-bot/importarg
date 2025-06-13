<script lang="ts">
  import { Button } from '$lib/components/ui/button'
  import Container from '$lib/components/ui/container.svelte'
  import { routes } from '$lib/routes'
  import { ArrowLeftIcon } from '@lucide/svelte'
  import * as Product from '$lib/components/product'
  import type { PageProps } from './$types'
  import { formatNumber } from '$lib/utils'
  import Typography from '$lib/components/ui/typography.svelte'
  import { marked } from 'marked'
  import { getWhatsAppUrl } from '$lib/utils'
  import SEO from '$lib/components/seo.svelte'

  const { data }: PageProps = $props()

  const { product } = data

  const onContact = () => {
    const wappUrl = getWhatsAppUrl({
      text: `Hola ImportARG, ¡estoy interesado en el ${product.name}! ¿Podrían darme más detalles?`
    })
    window.open(wappUrl, '_blank', 'noopener noreferrer')
  }
</script>

<SEO
  title={product.name}
  description={product.description}
  og={{
    title: product.name,
    description: product.description,
    image: {
      url: product.images[0],
      alt: product.name
    }
  }}
/>
<Container>
  <div class="mb-4 mx-auto inline-block">
    <Button href={routes.home}>
      <ArrowLeftIcon />
    </Button>
  </div>
  <div class="grid md:grid-cols-2 gap-4">
    <Product.Images
      images={product.images.map((src, index) => ({ src, alt: `${product.name} ${index + 1}` }))}
    />

    <section class="space-y-3">
      <div>
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white">
          {product.name}
        </h1>
        <p class="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
          {formatNumber(product.price)}
        </p>
      </div>
      <div>
        <Typography variant="title" class="border-b mb-2">Descripción</Typography>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html marked(product.description, { sanitize: true })}
      </div>
      <div class="flex space-x-4">
        <Button class="w-full" onclick={onContact}>Comprar</Button>
      </div>
    </section>
  </div>
</Container>
