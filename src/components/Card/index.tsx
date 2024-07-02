import { Check } from 'lucide-react'

type Props = {
  title: string
  description: string
}

export function Card({ title, description }: Props) {
  return (
    <div className="w-3/12 grow rounded-md border border-zinc-300 bg-white p-6">
      <Check className="h-7 w-7 rounded-full bg-emerald-100 p-1.5 text-emerald-700" />
      <h4 className="my-4 text-2xl font-bold text-zinc-800">{title}</h4>
      <p className="text-base text-zinc-500">{description}</p>
    </div>
  )
}
