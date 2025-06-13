<script lang="ts" module>
  import { cn } from '$lib/utils'
  import type { SvelteHTMLElements } from 'svelte/elements'
  import { tv } from 'tailwind-variants'
  import type { VariantProps } from 'tailwind-variants'

  const TypographyVariants = tv({
    base: 'text-neutral-700',
    variants: {
      variant: {
        heading: 'text-3xl font-bold tracking-tighter sm:text-5xl',
        title: 'text-2xl font-semibold',
        subtitle: 'text-xl font-semibold',
        body: 'text-md',
        small: 'text-xs font-medium',
        default: 'text-base'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  })

  export type TypographyVariant = VariantProps<typeof TypographyVariants>['variant']

  type Component = 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  export type TypographyProps = SvelteHTMLElements[Component] & {
    variant?: TypographyVariant
    as?: Component
  }
</script>

<script lang="ts">
  const { as = 'p', variant, class: className, children, ...restProps }: TypographyProps = $props()
</script>

<svelte:element this={as} class={cn(TypographyVariants({ variant }), className)} {...restProps}>
  {@render children?.()}
</svelte:element>
