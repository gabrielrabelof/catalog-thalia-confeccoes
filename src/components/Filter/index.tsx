import { ComponentProps } from 'react'

type Props = ComponentProps<'button'> & {
  model: string
}

export function Filter({ model }: Props) {
  return (
    <button className="rounded-full border border-zinc-400 bg-rose-900 px-8 py-1.5">
      <span className="text-sm font-semibold text-white">{model}</span>
    </button>
  )
}
