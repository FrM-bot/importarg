<script lang="ts">
const socialLinks = {
  social: [
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/import_arg.oficial',
    },
  ],
}
</script>

<footer class="bg-neutral-50 border-t">
    <div class="container mx-auto py-6 ">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Sobre nosotros
          </h3>
          <p class="text-gray-600 dark:text-gray-300 text-sm">
            Somos una empresa dedicada a la importación de productos
            tecnológicos, comprometidos en ofrecer artículos de calidad a
            precios accesibles, garantizando la satisfacción de nuestros
            clientes con las últimas tendencias en tecnología.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">
            Redes sociales
          </h3>
          <ul>  
            {#each socialLinks.social as link}
              <li>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="flex items-center gap-2 text-gray-600 dark:text-gray-300 text-sm"
                >
                  {link.label}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-gray-200 dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} ImportARG.
      </div>
    </div>
  </footer>