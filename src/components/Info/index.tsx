import { Package, ShoppingBag } from 'lucide-react'

import { Wrapper } from '../Wrapper'

export function Info() {
  return (
    <Wrapper>
      <div className="-mt-28 flex flex-col items-center gap-8 rounded-md border border-zinc-300 bg-rose-100 py-12 text-center lg:flex-row lg:justify-evenly lg:py-16">
        <div className="flex flex-col items-center gap-2">
          <Package className="h-14 w-14 text-zinc-800" />
          <span className="font-light text-salmon">Vendemos atacado</span>
        </div>

        <div className="h-0 border-r-0.5 border-rose-950 lg:h-24" />

        <div className="flex flex-col gap-3">
          <span className="text-5xl font-bold text-zinc-800">+10</span>
          <span className="font-light text-salmon">Anos no mercado</span>
        </div>

        <div className="h-0 border-r-0.5 border-rose-950 lg:h-24" />

        <div className="flex flex-col items-center gap-2">
          <ShoppingBag className="h-14 w-14 text-zinc-800" />
          <span className="font-light text-salmon">Vendemos online</span>
        </div>
      </div>
    </Wrapper>
  )
}
