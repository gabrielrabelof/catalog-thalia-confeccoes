import { Check } from 'lucide-react'

type Props = {
  title: string
  description: string
}

export function Card({ title, description }: Props) {
  return (
    <div className="w-full grow rounded-md border border-zinc-300 bg-white p-6 lg:w-3/12">
      <Check className="h-6 w-6 rounded-full bg-emerald-100 p-1.5 text-emerald-700 lg:h-7 lg:w-7" />
      <h4 className="my-4 text-xl font-bold text-zinc-800 lg:text-2xl">
        {title}
      </h4>
      <p className="text-sm text-zinc-500 lg:text-base">{description}</p>
    </div>
  )
}
