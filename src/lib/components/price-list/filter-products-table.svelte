<script lang="ts">
import { goto } from '$app/navigation'
import { BRANDS, QUERY } from '$lib/constants'
import { capitalize } from '$lib/utils'
  import Button from '../ui/button/button.svelte';
  import * as Select from '../ui/select';
import { Trash } from '@lucide/svelte'

const data = BRANDS.map((brand) => ({
  value: brand,
  label: capitalize(brand),
}))

let url = $derived(new URL(globalThis?.window?.location.href || 'http://localhost:5173'))

let value = $derived(url.searchParams.get(QUERY.brand) || '')

const triggerContent = $derived(data.find((d) => d.value === value)?.label ?? 'Selecciona una marca')

function onValueChange(value: string) {
  if (!url) return
  url.searchParams.set(QUERY.brand, value)
  url.searchParams.delete(QUERY.cursor)
  goto(url.pathname + url.search, {
    noScroll: true,
  })
}

function clear() {
  if (!url) return
  // url.searchParams.delete(QUERY.brand)
  // url.searchParams.delete(QUERY.cursor)
  goto(url.pathname, {
    noScroll: true,
  })
}
</script>
   <div class="my-2 flex justify-end">

    <div class="flex gap-2">
<Button variant="destructive" onclick={clear}>
    <Trash />
</Button>

        <Select.Root type="single" name="brand" bind:value onValueChange={onValueChange}>
            <Select.Trigger class="">
                {triggerContent}
            </Select.Trigger>
            <Select.Content>
      <Select.Group>
        <Select.Label>Marcas</Select.Label>
        {#each data as brand (brand.value)}
        <Select.Item
            value={brand.value}
            label={brand.label}
            disabled={brand.value === value}
          >
            {brand.label}
          </Select.Item>
          {/each}
        </Select.Group>
    </Select.Content>
</Select.Root>
</div>
    </div>