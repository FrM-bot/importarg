<script lang="ts">
import { page } from '$app/state'
import { routes } from '$lib/routes'
  import { cn } from '$lib/utils';
  import Nav from './nav.svelte';

let currentPath = $state(page.url.pathname)

$effect(() => {
  currentPath = page.url.pathname
  console.log(currentPath)
})

const isInHome = $derived(currentPath === routes.home)
</script>

<header
  class={cn(
    `h-10 flex items-center justify-center fixed top-0 z-50 w-full`,
    isInHome ? "home-active" : "bg-neutral-50/60 backdrop-blur-[10px] border-b"
  )}
  id="header"
>
    <div class="container flex sm:items-center items-center gap-2 justify-between">
        <a href={routes.home}>
            <span
            class="max-w-[600px] text-md"
            >
            importARG
            </span>
        </a>
        <Nav />
    <!-- 
    <MenuMobile /> -->
    </div>
</header>