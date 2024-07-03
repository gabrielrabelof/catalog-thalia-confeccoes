import { ComponentProps } from 'react'
import Image, { StaticImageData } from 'next/image'
import { MercadoLivreLogo } from '../svg/MercadoLivreLogo'
import { ShopeeLogo } from '../svg/ShopeeLogo'

type ProductRootProps = ComponentProps<'div'>

export function Root(props: ProductRootProps) {
  return <div className="flex flex-col rounded-lg bg-zinc-50" {...props}></div>
}

type ProductImageProps = {
  path: StaticImageData
}

export function Photo({ path }: ProductImageProps) {
  return (
    <Image
      src={path}
      className="h-80 w-56 rounded-t-lg shadow-sm"
      alt=""
      quality={95}
      loading="lazy"
    />
  )
}

type ProductInfoProps = ComponentProps<'div'>

export function Info(props: ProductInfoProps) {
  return (
    <div
      className="flex items-center justify-between px-4 py-3"
      {...props}
    ></div>
  )
}

type ProductRefProps = {
  productRef: string
}

export function Ref({ productRef }: ProductRefProps) {
  return (
    <span className="text-900 text-md py-1.5 font-medium">{productRef}</span>
  )
}

type ProductLinksProps = {
  MLLink: string
  ShopeeLink: string
}

export function Links({ MLLink, ShopeeLink }: ProductLinksProps) {
  return (
    <div className="flex items-center justify-center gap-2">
      <a
        href={MLLink}
        target="_blank"
        className="group relative flex items-center justify-center rounded-lg bg-ml-logo p-1.5 shadow-md transition-all duration-500 hover:rounded-l-none hover:shadow-none"
      >
        <MercadoLivreLogo />
        <span className="absolute right-full top-1/2 -z-50 min-w-max -translate-y-1/2 transform rounded-l-lg bg-ml-logo p-2.5 text-xs font-semibold text-slate-800 opacity-0 transition-all duration-500 group-hover:z-50 group-hover:translate-x-0 group-hover:opacity-100">
          Ver no Mercado Livre
        </span>
      </a>

      <a
        href={ShopeeLink}
        target="_blank"
        className="group relative flex items-center justify-center rounded-lg bg-zinc-800 p-1.5 shadow-md transition-all duration-500 hover:rounded-r-none hover:shadow-none"
      >
        <span className="absolute left-full top-1/2 -z-50 min-w-max -translate-y-1/2 transform rounded-r-lg bg-zinc-800 p-2.5 text-xs font-semibold text-white opacity-0 transition-all duration-500 group-hover:z-50 group-hover:translate-x-0 group-hover:opacity-100">
          Ver na Shopee
        </span>
        <ShopeeLogo />
      </a>
    </div>
  )
}
