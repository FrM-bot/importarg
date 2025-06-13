<script lang="ts">
  import Container from '../ui/container.svelte'
  import Typography from '../ui/typography.svelte'
  import Frm from '$lib/assets/frm.jpg'
  import Sba from '$lib/assets/sba.jpg'
</script>

<section class="bg-neutral-900 text-white">
  <Container>
    <div class="flex items-center w-full flex-col gap-2 max-w-2xl mx-auto">
      <Typography variant="heading" as="h2" class="text-neutral-50">Sobre nosotros</Typography>
      <Typography
        class="text-neutral-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae atque deserunt porro,
        nulla saepe repellat modi hic ducimus cupiditate, officiis eaque expedita id ipsam animi,
        laborum odit ullam. Laborum, dignissimos?
      </Typography>
    </div>
    <div class="flex gap-4 items-center justify-center mt-6">
      <picture class="rounded-xl overflow-hidden shadow-pink-300/30 shadow-2xl">
        <img src={Frm} alt="Franco" class="hover:scale-110 duration-200" width="210px" />
      </picture>
      <picture class="rounded-xl overflow-hidden shadow-gray-300/30 shadow-2xl">
        <img src={Sba} alt="Seba" class="hover:scale-110 duration-200" width="210px" />
      </picture>
    </div>
  </Container>
</section>
