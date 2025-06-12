<script lang="ts">
  import { NavLinks } from "./nav";
</script>

<nav>
    <ul class="sm:ml-auto sm:flex gap-2 sm:gap-6 hidden">
        {#each NavLinks as { label, href }}
            <li>
                <a href={href} class="text-sm duration-200 hover:underline hover:underline-offset-4">{label}</a>
            </li>
        {/each}
    </ul>
</nav>