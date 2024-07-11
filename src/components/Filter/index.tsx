import { ComponentProps } from 'react'

import clsx from 'clsx'

import { CatalogGenreStyleProps } from '@/app/page'

type Props = ComponentProps<'button'> & {
  model: string
  targetId: string
  gender: CatalogGenreStyleProps
}

export function Filter({ model, targetId, gender }: Props) {
  function handleClick() {
    const element = document.getElementById(targetId)

    if (element) {
      let yOffset = -120

      if (window.screen.width <= 1024) {
        yOffset = -20
      }

      const yPosition =
        element.getBoundingClientRect().top + window.scrollY + yOffset
      window.scrollTo({ top: yPosition, behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={handleClick}
      className={clsx(
        'rounded-full border border-zinc-400 px-4 py-1 transition duration-300 ease-in-out lg:px-8 lg:py-1.5',
        {
          'bg-rose-900 lg:hover:bg-rose-800': gender === 'FEMALE',
          'bg-sky-900 lg:hover:bg-sky-800': gender === 'MALE',
        },
      )}
    >
      <span className="text-xs font-semibold text-white lg:text-sm">
        {model}
      </span>
    </button>
  )
}
