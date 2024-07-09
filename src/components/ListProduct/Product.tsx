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
      className="h-product-photo w-56 rounded-t-lg shadow-sm"
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
      className="flex flex-col items-center justify-between px-4 py-3 lg:flex-row"
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
    <div className="flex flex-col items-center justify-center gap-2 lg:flex-row">
      <a
        href={MLLink}
        target="_blank"
        className="group relative flex w-full items-center justify-center rounded-lg bg-ml-logo p-1.5 shadow-md transition-all duration-500 lg:hover:rounded-l-none lg:hover:shadow-none"
      >
        <MercadoLivreLogo />
        <span className="bg-ml-logo p-1.5 text-xs font-semibold text-slate-800 lg:absolute lg:right-full lg:top-1/2 lg:-z-50 lg:min-w-max lg:-translate-y-1/2 lg:transform lg:rounded-l-lg lg:p-2.5 lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:z-50 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
          Ver no Mercado Livre
        </span>
      </a>

      <a
        href={ShopeeLink}
        target="_blank"
        className="group relative flex w-full items-center justify-center rounded-lg bg-zinc-800 p-1.5 shadow-md transition-all duration-500 lg:hover:rounded-r-none lg:hover:shadow-none"
      >
        <span className="bg-zinc-800 p-1.5 text-xs font-semibold text-white lg:absolute lg:left-full lg:top-1/2 lg:-z-50 lg:min-w-max lg:-translate-y-1/2 lg:transform lg:rounded-r-lg lg:p-2.5 lg:opacity-0 lg:transition-all lg:duration-500 lg:group-hover:z-50 lg:group-hover:translate-x-0 lg:group-hover:opacity-100">
          Ver na Shopee
        </span>
        <ShopeeLogo />
      </a>
    </div>
  )
}
