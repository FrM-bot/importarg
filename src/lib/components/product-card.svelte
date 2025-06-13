<script lang="ts">
  import * as Card from '$lib/components/ui/card'
  import type { FeaturedProduct } from '$lib/types/strapi'
  import { Button } from '$lib/components/ui/button'
  import { formatNumber } from '$lib/utils'
  import { routes } from '$lib/routes'

  const { product }: { product: FeaturedProduct } = $props()
</script>

<Card.Root
  class="relative shadow-none rounded-xl bg-neutral-50 hover:bg-white border-transparent hover:border-neutral-300 active:translate-y-[3px] hover:shadow-2xl shadow-neutral-300/90 hover:scale-[103%] gap-2 py-4"
>
  <a
    href={routes.products.details(product.id)}
    class="grid place-content-center cursor-pointer rounded-lg mx-4"
  >
    <img src={product.image} alt={product.name} class="h-full object-contain aspect-square" />
  </a>
  <Card.Content class="px-4 flex flex-col gap-1">
    <a
      href={routes.products.details(product.id)}
      class="py-2 w-full text-sm cursor-pointer border-t font-medium">{product.name}</a
    >
    <span class="py-2 text-xs w-fit font-normal">{formatNumber(product.price)}</span>
  </Card.Content>
  <Card.Footer class="px-4">
    <Button href={routes.products.details(product.id)} class="w-full rounded-md hover:shadow-none"
      >Comprar</Button
    >
  </Card.Footer>
</Card.Root>
