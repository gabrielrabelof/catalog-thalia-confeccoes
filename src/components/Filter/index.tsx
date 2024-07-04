import { ComponentProps } from 'react'

type Props = ComponentProps<'button'> & {
  model: string
  targetId: string
}

export function Filter({ model, targetId }: Props) {
  function handleClick() {
    const element = document.getElementById(targetId)

    if (element) {
      const yOffset = -100
      const yPosition =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: yPosition, behavior: 'smooth' })
    }
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-full border border-zinc-400 bg-rose-900 px-8 py-1.5 transition duration-300 ease-in-out hover:bg-rose-800"
    >
      <span className="text-sm font-semibold text-white">{model}</span>
    </button>
  )
}
