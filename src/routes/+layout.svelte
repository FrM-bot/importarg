<script lang="ts">
  import "../app.css"
  import Footer from "$lib/components/footer.svelte"
  import Header from "$lib/components/header.svelte"
  import "@fontsource-variable/onest"
  import type { LayoutProps } from "./$types"

  const { children, data }: LayoutProps = $props()

  const { head } = data
</script>



<Header title={head.title} />

<main class="min-h-[60dvh] overflow-x-hidden">
  {@render children()}
</main>

<Footer title={head.title} />
