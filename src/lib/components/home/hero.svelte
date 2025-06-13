<script lang="ts">
  import { cn } from '$lib/utils'
  import { marked } from 'marked'

  const { title, description, image } = $props()
</script>

<section
  style={`background-image: url(${image})`}
  class={cn('bg-position-[50%_30%] bg-cover sm:h-[100dvh] h-[100dvh]')}
>
  <div
    class="w-full h-full bg-radial-[at_50%_50%] from-transparent via-neutral-800/30 to-neutral-900 to-90%"
  >
    <div class="flex h-[100dvh] items-end justify-start overflow-hidden w-full md:shadow-xl">
      <div class="ms:pb-20 pb-40 container text-neutral-50">
        <p class="lg:text-5xl md:text-3xl text-2xl font-semibold pb-3 max-w-4xl z-10">
          {title}
        </p>
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html marked(description, { sanitize: true })}
      </div>
    </div>
  </div>
</section>
