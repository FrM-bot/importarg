<script lang="ts">
import { Button } from '$lib/components/ui/button'
import Container from '$lib/components/ui/container.svelte'
import { routes } from '$lib/routes'
import { ArrowLeftIcon } from '@lucide/svelte'
import * as Product from '$lib/components/product'
  import type { PageProps } from './$types';
  import { formatNumber } from '$lib/utils';
  import Typography from '$lib/components/ui/typography.svelte';
  import { marked } from 'marked';
const { data }: PageProps = $props()

const { product } = data

console.log({product});


</script>

<svelte:head>
  <title>{product.name}</title>
</svelte:head>

<Container>
    <div class="mb-4 mx-auto inline-block">
        <Button href={routes.home}>
          <ArrowLeftIcon />
        </Button>
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <Product.Images images={product.images.map((src, index) => ({ src, alt: `${product.name} ${index + 1}` }))} />

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
            <Typography variant="title" class="border-b mb-2">
              Descripción
            </Typography>
            <!-- <Typography variant="body" class="bg-neutral-50 mt-2 rounded-xl p-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae quis a nam tenetur provident quam, rem blanditiis quasi quas repudiandae, dolorem molestiae reprehenderit natus saepe ipsum dignissimos! Excepturi, quibusdam ut?
            </Typography> -->
            {@html marked(product.description)}
             
          </div>
          <div class="flex space-x-4">
            <Button class="w-full">
                Comprar
            </Button>
          </div>
        </section>
      </div>
</Container>