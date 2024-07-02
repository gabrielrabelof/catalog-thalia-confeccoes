import { StaticImageData } from 'next/image'

import * as Product from '@/components/ListProduct/Product'

export function createDefaultProduct(photoPath: StaticImageData, pRef: string) {
  return (
    <Product.Root>
      <Product.Photo path={photoPath} />
      <Product.Info>
        <Product.Ref productRef={`Ref. ${pRef}`} />
      </Product.Info>
    </Product.Root>
  )
}

export function createOnlineProduct(
  photoPath: StaticImageData,
  pRef: string,
  MLLink: string,
  ShopeeLink: string,
) {
  return (
    <Product.Root>
      <Product.Photo path={photoPath} />
      <Product.Info>
        <Product.Ref productRef={`Ref. ${pRef}`} />
        <Product.Links MLLink={MLLink} ShopeeLink={ShopeeLink} />
      </Product.Info>
    </Product.Root>
  )
}
