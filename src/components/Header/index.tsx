import { useEffect } from 'react'

import { Moon } from 'lucide-react'

export function Header() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]')

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault()

        const href = (event.currentTarget as HTMLAnchorElement).getAttribute(
          'href',
        )
        if (!href) return

        const target = document.querySelector(href)

        history.pushState(null, '', href)

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', () => {})
      })
    }
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-rose-950 py-6 shadow-xl">
      <div className="mx-auto w-full max-w-100">
        <nav className="flex items-center justify-between text-stone-400">
          <a
            href="#inicio"
            className="flex items-center gap-2 font-playfair text-2xl text-white"
          >
            <Moon className="h-6 w-6 text-white" />
            Thalia Confecções
          </a>

          <ul className="flex gap-12">
            <li>
              <a
                href="#inicio"
                className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out hover:text-white hover:after:scale-x-100"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#catalogo"
                className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out hover:text-white hover:after:scale-x-100"
              >
                Catálogo
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className="relative pb-2 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out hover:text-white hover:after:scale-x-100"
              >
                Serviços
              </a>
            </li>
          </ul>

          <a
            href="#contato"
            className="rounded-full border px-6 py-2.5 text-sm font-semibold uppercase text-white transition duration-300 ease-in-out hover:border-black hover:bg-rose-50 hover:text-rose-950"
          >
            Entrar em contato
          </a>
        </nav>
      </div>
    </header>
  )
}
