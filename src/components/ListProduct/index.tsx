import { createDefaultProduct, createOnlineProduct } from './CreateProducts'

import { Wrapper } from '../Wrapper'

import ref001 from '@/assets/pijamas/camisolas/camisola-ref001.png'
import ref002 from '@/assets/pijamas/camisolas/camisola-ref002.png'
import ref003 from '@/assets/pijamas/camisolas/camisola-ref003.png'

import ref004 from '@/assets/pijamas/pescador/pescador-ref004.png'
import ref005 from '@/assets/pijamas/pescador/pescador-ref005.png'
import ref006 from '@/assets/pijamas/pescador/pescador-ref006.png'
import ref007 from '@/assets/pijamas/pescador/pescador-ref007.png'
import ref008 from '@/assets/pijamas/pescador/pescador-ref008.png'

import ref039 from '@/assets/pijamas/infantil/infantil-ref039.png'

import ref009 from '@/assets/pijamas/longo/longo-ref009.png'

import ref010 from '@/assets/pijamas/meia-estacao/meia-estacao-ref010.png'
import ref011 from '@/assets/pijamas/meia-estacao/meia-estacao-ref011.png'
import ref012 from '@/assets/pijamas/meia-estacao/meia-estacao-ref012.png'
import ref013 from '@/assets/pijamas/meia-estacao/meia-estacao-ref013.png'
import ref014 from '@/assets/pijamas/meia-estacao/meia-estacao-ref014.png'
import ref015 from '@/assets/pijamas/meia-estacao/meia-estacao-ref015.png'
import ref016 from '@/assets/pijamas/meia-estacao/meia-estacao-ref016.png'

import ref020 from '@/assets/pijamas/baby-doll/baby-doll-ref020.png'

import ref019 from '@/assets/pijamas/conjunto/conjunto-ref019.png'

export function ListProduct() {
  return (
    <div className="flex flex-col gap-32 divide-y divide-zinc-300">
      <Wrapper>
        <div id="camisola">
          <h4 className="font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Camisola
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createDefaultProduct(ref001, '001')}
            {createOnlineProduct(
              ref002,
              '002',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
            {createOnlineProduct(
              ref003,
              '003',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
          </div>
        </div>

        <div id="pescador">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Pescador
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createDefaultProduct(ref004, '004')}
            {createOnlineProduct(
              ref005,
              '005',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
            {createOnlineProduct(
              ref006,
              '006',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
            {createOnlineProduct(
              ref007,
              '007',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
            {createOnlineProduct(
              ref008,
              '008',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
          </div>
        </div>

        <div id="infantil">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Infantil
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createDefaultProduct(ref039, '039')}
          </div>
        </div>

        <div id="longo">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Longo
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createDefaultProduct(ref009, '009')}
          </div>
        </div>

        <div id="baby-doll">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Baby Doll
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createOnlineProduct(
              ref020,
              '020',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
          </div>
        </div>

        <div id="meia-estacao">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Meia Estação
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createOnlineProduct(
              ref010,
              '010',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
            {createOnlineProduct(
              ref011,
              '011',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
            {createOnlineProduct(
              ref012,
              '012',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
            {createOnlineProduct(
              ref013,
              '013',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
            {createDefaultProduct(ref014, '014')}
            {createOnlineProduct(
              ref015,
              '015',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
            {createOnlineProduct(
              ref016,
              '016',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
          </div>
        </div>

        <div id="conjuntos">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Conjuntos
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createOnlineProduct(
              ref019,
              '019',
              'https://www.mercadolivre.com.br',
              'https://www.shopee.com.br',
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
