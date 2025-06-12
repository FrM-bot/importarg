<script lang="ts">
  let { products } = $props()
  import {
    Table,
    TableBody,
    TableHeader,
    TableRow,
    TableHead,
    TableCell,
  } from "$lib/components/ui/table"
  import { capitalize, formatNumber, getWhatsAppUrl } from "$lib/utils"
  import { Button } from "../ui/button"

  const onContact = (text: string) => {
    window.open(
      getWhatsAppUrl({
        text: text,
      }),
      "_blank",
      "noopener noreferrer"
    )
  }
</script>

<div class="border rounded-lg">
  <Table>
    <TableHeader class="bg-neutral-50">
      <TableRow>
        <TableHead>Marca</TableHead>
        <TableHead>Modelo</TableHead>
        <TableHead>Almacenamiento</TableHead>
        <TableHead>RAM</TableHead>
        <TableHead class="text-right">Precio</TableHead>
        <TableHead />
      </TableRow>
    </TableHeader>
    <TableBody>
      {#each products as product}
        <TableRow class="last:border-b">
          <TableCell>{capitalize(product.brand)}</TableCell>
          <TableCell>{capitalize(product.model)}</TableCell>
          <TableCell>{product.storage}</TableCell>
          <TableCell>{product.ram}</TableCell>
          <TableCell class="text-right">{formatNumber(product.price)}</TableCell
          >
          <TableCell class="text-right">
            <Button
              onclick={() =>
                onContact(
                  `Hola, ¡estoy interesado en el ${product.brand} ${product.model} ${product.storage} ${product.ram}! ¿Podrían decirme si cuentan con stock?`
                )}>Consultar</Button
            >
          </TableCell>
        </TableRow>
      {/each}
    </TableBody>
  </Table>
</div>
