<script lang="ts">
type Image = { src: string; alt: string }
const { images }: { images: Image[] } = $props()
let selected = $state(images[0])

function onSelect(image: Image) {
    console.log(image);
    selected = image
}
</script>

<section class="space-y-4">
    <picture class=" flex p-4">
        <img
            src={selected.src}
            alt={selected.alt}
            class="object-contain h-full w-full rounded-xl overflow-hidden aspect-video"
        />
    </picture>
    <div class="grid md:grid-cols-4 grid-cols-3 gap-2">
        {#each images as { src, alt }}
            
        <button
        type="button"
        onclick={() => onSelect({ src, alt })}
            class='cursor-pointer'
        >
            <picture
                class="rounded-lg overflow-hidden flex p-2">
                <img
                    src={src}
                    alt={alt}
                    class="object-center object-contain bg-white aspect-video h-full w-full hover:scale-105 duration-200 rounded-xl"
                    />
                </picture>
            </button>
            {/each}        
    </div>
</section>