<script lang="ts">
import { Button, type Props } from '$lib/components/ui/button'
import type { WithoutChildren } from 'bits-ui'
import { getEmblaContext } from './context'
  import { ArrowRightIcon } from '@lucide/svelte';
  import { cn } from '$lib/utils';

let {
  ref = $bindable(null),
  class: className,
  variant = 'outline',
  size = 'icon',
  ...restProps
}: WithoutChildren<Props> = $props()

const emblaCtx = getEmblaContext('<Carousel.Next/>')
</script>

<Button
	data-slot="carousel-next"
	{variant}
	{size}
	aria-disabled={!emblaCtx.canScrollNext}
	class={cn(
		"absolute size-8 rounded-full",
		emblaCtx.orientation === "horizontal"
			? "-right-12 top-1/2 -translate-y-1/2"
			: "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
		className
	)}
	onclick={emblaCtx.scrollNext}
	onkeydown={emblaCtx.handleKeyDown}
	bind:ref
	{...restProps}
>
	<ArrowRightIcon class="size-4" />
	<span class="sr-only">Next slide</span>
</Button>
