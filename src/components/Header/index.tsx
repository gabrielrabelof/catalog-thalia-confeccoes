import { useEffect, useState } from 'react'
import { Moon } from 'lucide-react'

import clsx from 'clsx'

import { Wrapper } from '../Wrapper'

export function Header() {
  const [menuState, setMenuState] = useState(false)

  function handleMenu() {
    setMenuState(!menuState)
  }

  useEffect(() => {
    if (menuState) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }

    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [menuState])

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
    <header className="fixed left-0 right-0 top-0 z-50 bg-rose-950 py-6 shadow-xl transition-all duration-500 ease-in-out">
      <Wrapper id="wrapper-header">
        <div
          className={clsx('flex flex-col justify-between lg:flex-row', {
            'gap-16': menuState,
          })}
        >
          <div className="flex w-full items-center justify-between lg:w-fit">
            <a
              onClick={menuState ? handleMenu : () => null}
              href="#inicio"
              className="flex items-center gap-2 font-playfair text-lg text-white lg:text-2xl"
            >
              <Moon className="h-4 w-4 text-white lg:h-6 lg:w-6" />
              Thalia Confecções
            </a>

            <button
              onClick={handleMenu}
              className="flex flex-col gap-1 lg:hidden"
            >
              <div
                className={clsx(
                  'h-0.5 w-5 border bg-white transition-all duration-300 ease-in-out',
                  {
                    'translate-y-1 rotate-45': menuState,
                  },
                )}
              />
              <div
                className={clsx(
                  'h-0.5 w-5 border bg-white transition-all duration-300 ease-in-out',
                  {
                    'opacity-0': menuState,
                  },
                )}
              />
              <div
                className={clsx(
                  'h-0.5 w-5 border bg-white transition-all duration-300 ease-in-out',
                  {
                    '-translate-y-2 -rotate-45': menuState,
                  },
                )}
              />
            </button>
          </div>

          <nav
            className={clsx(
              'flex flex-col gap-16 text-center transition-all duration-500 ease-in-out lg:h-min lg:flex-row lg:items-center lg:justify-between lg:gap-32',
              {
                'h-screen translate-y-0': menuState,
                'translate-y-full lg:translate-y-0': !menuState,
              },
            )}
          >
            <ul
              className={clsx(
                'mt-8 flex-col gap-12 lg:mt-0 lg:flex lg:flex-row',
                {
                  flex: menuState,
                  hidden: !menuState,
                },
              )}
            >
              <li>
                <a
                  onClick={menuState ? handleMenu : () => null}
                  href="#inicio"
                  className="relative pb-2 text-xl font-medium text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out hover:text-white hover:after:scale-x-100 lg:text-base lg:font-normal lg:text-zinc-400"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  onClick={menuState ? handleMenu : () => null}
                  href="#catalogo"
                  className="relative pb-2 text-xl font-medium text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out hover:text-white hover:after:scale-x-100 lg:text-base lg:font-normal lg:text-zinc-400"
                >
                  Catálogo
                </a>
              </li>
              <li>
                <a
                  onClick={menuState ? handleMenu : () => null}
                  href="#servicos"
                  className="relative pb-2 text-xl font-medium text-white after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:scale-x-0 after:bg-white after:transition-transform after:duration-300 after:ease-in-out hover:text-white hover:after:scale-x-100 lg:text-base lg:font-normal lg:text-zinc-400"
                >
                  Serviços
                </a>
              </li>
            </ul>
            <a
              onClick={menuState ? handleMenu : () => null}
              href="#contato"
              className={clsx(
                'w-fit self-center rounded-full border bg-white px-6 py-2.5 text-sm font-semibold uppercase text-rose-950 transition duration-300 ease-in-out lg:block lg:bg-rose-950 lg:text-white lg:hover:border-black lg:hover:bg-rose-50 lg:hover:text-rose-950',
                {
                  block: menuState,
                  hidden: !menuState,
                },
              )}
            >
              Entrar em contato
            </a>
          </nav>
        </div>
      </Wrapper>
    </header>
  )
}
