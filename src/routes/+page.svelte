<script lang="ts">
  import * as Home from '$lib/components/home'

import type { PageProps } from './$types'

const { data }: PageProps = $props()
</script>

<svelte:head>
  <title>importARG</title>
</svelte:head>

<Home.Hero title={data.title} description={data.description} image={data.image} />

<Home.FeatureProducts products={data.products} />

<Home.AboutUs />

<Home.Contact />