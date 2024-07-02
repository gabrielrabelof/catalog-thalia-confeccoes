import { createDefaultProduct, createOnlineProduct } from './CreateProducts'

import ref001 from '@/assets/pijamas/camisolas/camisola-ref001.png'
import ref002 from '@/assets/pijamas/camisolas/camisola-ref002.png'
import ref003 from '@/assets/pijamas/camisolas/camisola-ref003.png'

import ref004 from '@/assets/pijamas/pescador/pescador-ref004.png'
import ref005 from '@/assets/pijamas/pescador/pescador-ref005.png'
import ref006 from '@/assets/pijamas/pescador/pescador-ref006.png'
import ref007 from '@/assets/pijamas/pescador/pescador-ref007.png'
import ref008 from '@/assets/pijamas/pescador/pescador-ref008.png'

import ref009 from '@/assets/pijamas/longo/longo-ref009.png'
import ref010 from '@/assets/pijamas/longo/longo-ref010.png'
import ref011 from '@/assets/pijamas/longo/longo-ref011.png'
import ref012 from '@/assets/pijamas/longo/longo-ref012.png'
import ref013 from '@/assets/pijamas/longo/longo-ref013.png'
import ref014 from '@/assets/pijamas/longo/longo-ref014.png'
import ref015 from '@/assets/pijamas/longo/longo-ref015.png'
import ref016 from '@/assets/pijamas/longo/longo-ref016.png'

export function ListProduct() {
  return (
    <div>
      <div id="camisola" className="mb-36">
        <h4 className="font-playfair text-6xl font-semibold text-rose-900">
          Camisola
        </h4>

        <div className="mt-8 flex flex-wrap gap-6">
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

      <div id="pescador" className="mb-36">
        <h4 className="font-playfair text-6xl font-semibold text-rose-900">
          Pescador
        </h4>

        <div className="mt-8 flex flex-wrap gap-6">
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

      <div id="infantil" className="mb-36">
        <h4 className="font-playfair text-6xl font-semibold text-rose-900">
          Infantil
        </h4>

        <div className="mt-8 flex flex-wrap gap-6"></div>
      </div>

      <div id="longo" className="mb-36">
        <h4 className="font-playfair text-6xl font-semibold text-rose-900">
          Longo
        </h4>

        <div className="mt-8 flex flex-wrap gap-6">
          {createDefaultProduct(ref009, '009')}
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
            '0015',
            'https://www.mercadolivre.com.br',
            'https://www.shopee.com.br',
          )}
          {createOnlineProduct(
            ref016,
            '0016',
            'https://www.mercadolivre.com.br',
            'https://www.shopee.com.br',
          )}
        </div>
      </div>

      <div id="baby-doll" className="mb-36">
        <h4 className="font-playfair text-6xl font-semibold text-rose-900">
          Baby Doll
        </h4>

        <div className="mt-8 flex flex-wrap gap-6"></div>
      </div>

      <div id="meia-estacao" className="mb-36">
        <h4 className="font-playfair text-6xl font-semibold text-rose-900">
          Meia Estação
        </h4>

        <div className="mt-8 flex flex-wrap gap-6"></div>
      </div>

      <div id="conjuntos" className="mb-36">
        <h4 className="font-playfair text-6xl font-semibold text-rose-900">
          Conjuntos
        </h4>

        <div className="mt-8 flex flex-wrap gap-6"></div>
      </div>
    </div>
  )
}
