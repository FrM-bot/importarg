<script lang="ts">
import { goto } from '$app/navigation'
import * as PriceList from '$lib/components/price-list'
import { Button } from '$lib/components/ui/button'
import Container from '$lib/components/ui/container.svelte'
import Typography from '$lib/components/ui/typography.svelte'
import { QUERY } from '$lib/constants'
import type { PageProps } from './$types'

const { data }: PageProps = $props()

function next() {
  const url = new URL(window.location.href)
  url.searchParams.set(QUERY.cursor, data.pagination.next)
  goto(url.pathname + url.search, {
    noScroll: true,
  })
}

function previous() {
  history.back()
}
</script>

<svelte:head>
  <title>Lista de precios</title>
</svelte:head>

<Container class='py-20'>
    <Typography variant="title">
        Lista de precios
    </Typography>
    <PriceList.Filter />
    <PriceList.ProductsTable products={data.products} />
    <div class="flex justify-center gap-2 items-center mt-4">
      <Button onclick={previous} disabled={!data.pagination.current}>
        Anterior
    </Button>
      <Button onclick={next} disabled={!data.pagination.next}>
          Siguiente
      </Button>
    </div>
</Container>