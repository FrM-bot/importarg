<script lang="ts">
  import { cn } from '$lib/utils';
import type { Separator as SeparatorPrimitive } from 'bits-ui'
  import { Separator } from '.';

let { ref = $bindable(null), class: className, ...restProps }: SeparatorPrimitive.RootProps = $props()
</script>

<Separator
	bind:ref
	data-slot="select-separator"
	class={cn("bg-border pointer-events-none -mx-1 my-1 h-px", className)}
	{...restProps}
/>
