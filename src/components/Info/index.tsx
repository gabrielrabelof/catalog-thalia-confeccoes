import { Package, ShoppingBag } from 'lucide-react'

export function Info() {
  return (
    <div className="mx-auto w-full max-w-100">
      <div className="-mt-28 flex items-center justify-evenly rounded-md border border-zinc-300 bg-rose-100 py-16 text-center">
        <div className="flex flex-col items-center gap-2">
          <Package className="h-14 w-14 text-zinc-800" />
          <span className="font-light text-salmon">Vendemos atacado</span>
        </div>

        <div className="h-24 border-r-0.5 border-rose-950" />

        <div className="flex flex-col gap-3">
          <span className="text-5xl font-bold text-zinc-800">+10</span>
          <span className="font-light text-salmon">Anos no mercado</span>
        </div>

        <div className="h-24 border-r-0.5 border-rose-950" />

        <div className="flex flex-col items-center gap-2">
          <ShoppingBag className="h-14 w-14 text-zinc-800" />
          <span className="font-light text-salmon">Vendemos online</span>
        </div>
      </div>
    </div>
  )
}
