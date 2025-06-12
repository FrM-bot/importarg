<script lang="ts">
  import { cn } from '$lib/utils';
import type { SvelteHTMLElements } from 'svelte/elements'

type Component = 'div' | 'section' | 'article' | 'main' | 'aside' | 'footer'

type ContainerProps = SvelteHTMLElements[Component] & {
  as?: Component
}
const { as = 'div', class: className, children, ...restProps }: ContainerProps = $props()
</script>
  
<svelte:element
    this={as}
    class={cn('container py-16', className)}
    {...restProps}
>
    {@render children?.()}
</svelte:element>
  