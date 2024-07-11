import { StaticImageData } from 'next/image'

import * as Product from '@/components/ListProduct/Product'

export function createDefaultProduct(
  photoPath: StaticImageData,
  pRef: string,
  pColor: string,
) {
  return (
    <Product.Root id={pRef}>
      <Product.Photo path={photoPath} />
      <Product.Info>
        <Product.Ref productRef={`Ref. ${pRef}`} productColor={pColor} />
      </Product.Info>
    </Product.Root>
  )
}

export function createOnlineProduct(
  photoPath: StaticImageData,
  pRef: string,
  pColor: string,
  MLLink?: string,
  ShopeeLink?: string,
) {
  return (
    <Product.Root id={pRef}>
      <Product.Photo path={photoPath} />
      <Product.Info>
        <Product.Ref productRef={`Ref. ${pRef}`} productColor={pColor} />
        <Product.Links MLLink={MLLink} ShopeeLink={ShopeeLink} />
      </Product.Info>
    </Product.Root>
  )
}
