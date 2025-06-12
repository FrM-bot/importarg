<script lang="ts">
import { type WithElementRef, type WithoutChildren, cn } from '$lib/utils'
import type { HTMLTextareaAttributes } from 'svelte/elements'

let {
  ref = $bindable(null),
  value = $bindable(),
  class: className,
  ...restProps
}: WithoutChildren<WithElementRef<HTMLTextareaAttributes>> = $props()
</script>

<textarea
	bind:this={ref}
	data-slot="textarea"
	class={cn(
		"border-input placeholder:text-muted-foreground aria-invalid:border-destructive dark:bg-input/30 field-sizing-content shadow-xs flex min-h-16 w-full rounded-lg border bg-transparent px-3 py-2 text-base outline-none transition-[color,box-shadow] focus:border-neutral-300 focus:shadow-md focus:shadow-neutral-300/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
		className
	)}
	bind:value
	{...restProps}
></textarea>
