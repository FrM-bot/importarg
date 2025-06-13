<script lang="ts">
  import * as Home from '$lib/components/home'
  import SEO from '$lib/components/seo.svelte'
  import type { PageProps } from './$types'

  const { data }: PageProps = $props()

  const { head } = data
</script>

<SEO
  title={head.title}
  description={head.description}
  og={{
    title: head.title,
    description: head.description,
    image: {
      url: head.meta.image,
      alt: head.title
    }
  }}
/>

<Home.Hero title={data.title} description={data.description} image={data.image} />

<Home.FeatureProducts products={data.products} />

<Home.AboutUs />

<Home.Contact />
