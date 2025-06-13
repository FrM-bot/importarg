<script lang="ts">
  import { getWhatsAppUrl } from '$lib/utils'
  import { Button } from '../ui/button'
  import Container from '../ui/container.svelte'
  import { Textarea } from '../ui/textarea'
  import Typography from '../ui/typography.svelte'

  function onContact(
    event: SubmitEvent & {
      currentTarget: EventTarget & HTMLFormElement
    }
  ) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData) as {
      message: string
    }
    window.open(getWhatsAppUrl({ text: data.message }), '_blank')
  }
</script>

<section class="w-full py-12 text-neutral-800" id="contact">
  <Container>
    <div class="flex flex-col items-center justify-center space-y-4 text-center">
      <div class="space-y-2">
        <Typography variant="heading" as="h2">Contáctenos</Typography>
        <Typography>Contáctenos por algún o duda que tengas.</Typography>
      </div>
      <div class="w-full max-w-2xl space-y-2">
        <form onsubmit={onContact} class="flex flex-col gap-2">
          <Textarea name="message" class="max-h-48" placeholder="Tu mensaje" />
          <div class="flex justify-end">
            <Button class="px-14" type="submit">Enviar</Button>
          </div>
        </form>
      </div>
    </div>
  </Container>
</section>
