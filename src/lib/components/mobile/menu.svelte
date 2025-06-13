<script lang="ts">
  import { Drawer } from 'vaul-svelte'
  import { buttonVariants } from '$lib/components/ui/button'
  import { cn } from '$lib/utils'
  import { Menu, X } from '@lucide/svelte'
  import { NavLinks } from '../nav'
  import { goto } from '$app/navigation'

  function handleNavigate(link: { href: string; label: string }) {
    goto(link.href)
  }
</script>

<!-- <div data-vaul-drawer-wrapper class="min-h-[100vh]"> -->
<Drawer.Root direction="right">
  <Drawer.Trigger
    class={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'inline-flex sm:hidden')}
  >
    <Menu />
  </Drawer.Trigger>
  <Drawer.Portal>
    <Drawer.Overlay class="fixed inset-0" />
    <Drawer.Content class="fixed bottom-0 left-0 right-0 mt-24 flex h-full w-full z-50 p-2">
      <div class="bg-neutral-50/80 backdrop-blur-lg h-full w-full rounded-lg p-4 grow">
        <div class="flex justify-end mb-4">
          <Drawer.Close class={cn(buttonVariants({ variant: 'ghost', size: 'icon' }))}>
            <X />
          </Drawer.Close>
        </div>
        <ul class="flex flex-col gap-2">
          {#each NavLinks as link (link.href)}
            <li class="flex items-center gap-2">
              <Drawer.Close
                class={cn(
                  buttonVariants({ variant: 'ghost', size: 'icon' }),
                  'text-neutral-900 border border-neutral-50 w-full px-4 py-2 hover:bg-neutral-50/40'
                )}
                data-vaul-drawer-close
                onclick={() => handleNavigate(link)}
              >
                <!-- class= -->
                {link.label}
              </Drawer.Close>
            </li>
          {/each}
        </ul>
      </div>
    </Drawer.Content>
  </Drawer.Portal>
</Drawer.Root>
<!-- </div> -->
