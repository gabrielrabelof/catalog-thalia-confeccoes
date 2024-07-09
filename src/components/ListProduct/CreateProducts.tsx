import { StaticImageData } from 'next/image'

import { RevealWrapper } from 'next-reveal'

import * as Product from '@/components/ListProduct/Product'

export function createDefaultProduct(photoPath: StaticImageData, pRef: string) {
  return (
    <RevealWrapper delay={0} origin="top" duration={500} distance="30px">
      <Product.Root id={pRef}>
        <Product.Photo path={photoPath} />
        <Product.Info>
          <Product.Ref productRef={`Ref. ${pRef}`} />
        </Product.Info>
      </Product.Root>
    </RevealWrapper>
  )
}

export function createOnlineProduct(
  photoPath: StaticImageData,
  pRef: string,
  MLLink: string,
  ShopeeLink: string,
) {
  return (
    <RevealWrapper delay={0} origin="top" duration={500} distance="30px">
      <Product.Root id={pRef}>
        <Product.Photo path={photoPath} />
        <Product.Info>
          <Product.Ref productRef={`Ref. ${pRef}`} />
          <Product.Links MLLink={MLLink} ShopeeLink={ShopeeLink} />
        </Product.Info>
      </Product.Root>
    </RevealWrapper>
  )
}
