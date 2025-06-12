<script lang="ts">
import { type WithElementRef, cn } from '$lib/utils'
import type { HTMLAttributes } from 'svelte/elements'

let { ref = $bindable(null), class: className, children, ...restProps }: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props()
</script>

<div
	bind:this={ref}
	data-slot="card"
	class={cn(
		"bg-card text-card-foreground flex flex-col gap-6 rounded-2xl border border-neutral-100 py-6 hover:shadow-lg duration-200",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>
