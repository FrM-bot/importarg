<script lang="ts">
import Footer from '$lib/components/footer.svelte'
import Header from '$lib/components/header.svelte'
import '@fontsource-variable/onest';
import '../app.css'

const { children } = $props()
</script>

<Header />
<main class="min-h-[60dvh] overflow-x-hidden">
    {@render children()}
</main>
<Footer />
