<script lang="ts">
  import type { FeaturedProduct } from '$lib/types/strapi'
  import Container from '$lib/components/ui/container.svelte'
  import ProductCard from '../product-card.svelte'
  import Typography from '../ui/typography.svelte'
  import * as Carousel from '../ui/carousel'

  const { products }: { products: FeaturedProduct[] } = $props()
</script>

<Container>
  <div class="flex justify-center w-full">
    <Typography variant="heading" as="h2">Productos Destacados</Typography>
  </div>
  <Carousel.Root class="w-full">
    <Carousel.Content class="-ml-1 py-14 px-6">
      {#each products as product (product.id)}
        <Carousel.Item class="pl-1 md:basis-1/2 lg:basis-1/4">
          <div class="p-2">
            <ProductCard {product} />
          </div>
        </Carousel.Item>
      {/each}
    </Carousel.Content>
    <Carousel.Previous />
    <Carousel.Next />
  </Carousel.Root>
</Container>
