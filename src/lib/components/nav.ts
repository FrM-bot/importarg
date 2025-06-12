import { routes } from '$lib/routes'

export const NavLinks = [
  {
    label: 'Lista de precios',
    href: `${routes.priceList}`,
  },
  {
    label: 'Sobre nosotros',
    href: `${routes.home}#about`,
  },
  {
    label: 'Contáctenos',
    href: `${routes.home}#contact`,
  },
]
