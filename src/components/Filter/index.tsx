import { ComponentProps } from 'react'

type Props = ComponentProps<'button'> & {
  model: string
  targetId: string
}

export function Filter({ model, targetId }: Props) {
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
      className="rounded-full border border-zinc-400 bg-rose-900 px-4 py-1 transition duration-300 ease-in-out lg:px-8 lg:py-1.5 lg:hover:bg-rose-800"
    >
      <span className="text-xs font-semibold text-white lg:text-sm">
        {model}
      </span>
    </button>
  )
}
