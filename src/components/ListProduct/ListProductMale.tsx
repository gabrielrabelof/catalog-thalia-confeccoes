import { createOnlineProduct } from './CreateProducts'

import { Wrapper } from '../Wrapper'

import ref2002AzulMarinho from '@/assets/pijamas/masculino/curto/curto-ref2002-azul-marinho.png'
import ref2002Preto from '@/assets/pijamas/masculino/curto/curto-ref2002-preto.png'
import ref2002Vermelho from '@/assets/pijamas/masculino/curto/curto-ref2002-vermelho.png'
import ref302Marinheiro from '@/assets/pijamas/masculino/curto/curto-ref302-marinheiro.png'

import ref300Marinheiro from '@/assets/pijamas/masculino/meia-estacao/meia-estacao-ref300-marinheiro.png'

import ref200f300m from '@/assets/pijamas/masculino/conjuntos/conjunto-ref200f-ref300m.png'
import ref202f302m from '@/assets/pijamas/masculino/conjuntos/conjunto-ref202f-ref302m.png'

export function ListProductMale() {
  return (
    <div className="flex flex-col gap-32 divide-y divide-zinc-300">
      <Wrapper>
        <div id="curto">
          <h4 className="font-playfair text-5xl font-semibold text-sky-900 lg:text-6xl">
            Curto
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createOnlineProduct(
              ref2002AzulMarinho,
              '2002',
              'Azul Marinho',
              'https://produto.mercadolivre.com.br/MLB-3688968423-pijama-masculino-short-curto-meia-manga-liso-elegante-_JM#position%3D14%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Pijama-Masculino-Adulto-Manga-Curta-Short-Liso-Elegante-Ver%C3%A3o-i.1257089005.22493016310?sp_atk=50a261ab-00d9-462e-990a-32792b58f887&xptdk=50a261ab-00d9-462e-990a-32792b58f887',
            )}
            {createOnlineProduct(
              ref2002Preto,
              '2002',
              'Preto',
              'https://produto.mercadolivre.com.br/MLB-3688968423-pijama-masculino-short-curto-meia-manga-liso-elegante-_JM#position%3D14%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Pijama-Masculino-Adulto-Manga-Curta-Short-Liso-Elegante-Ver%C3%A3o-i.1257089005.22493016310?sp_atk=50a261ab-00d9-462e-990a-32792b58f887&xptdk=50a261ab-00d9-462e-990a-32792b58f887',
            )}
            {createOnlineProduct(
              ref2002Vermelho,
              '2002',
              'Vermelho',
              'https://produto.mercadolivre.com.br/MLB-3688968423-pijama-masculino-short-curto-meia-manga-liso-elegante-_JM#position%3D14%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Pijama-Masculino-Adulto-Manga-Curta-Short-Liso-Elegante-Ver%C3%A3o-i.1257089005.22493016310?sp_atk=50a261ab-00d9-462e-990a-32792b58f887&xptdk=50a261ab-00d9-462e-990a-32792b58f887',
            )}
            {createOnlineProduct(
              ref302Marinheiro,
              '2002',
              'Marinheiro',
              'https://produto.mercadolivre.com.br/MLB-4651932284-pijama-masculino-vero-manga-curta-e-short-marinheiro-_JM#position%3D13%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
            )}
          </div>
        </div>

        <div id="longo">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-sky-900 lg:text-6xl">
            Longo
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            <span className="text-sm text-zinc-500">
              Não temos fotos dos modelos de <br />
              Pijama Longo Masculino no momento.
            </span>
          </div>
        </div>

        <div id="infantil">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-sky-900 lg:text-6xl">
            Infantil
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            <span className="text-sm text-zinc-500">
              Não temos fotos dos modelos de <br />
              Pijama Infantil Masculino no momento.
            </span>
          </div>
        </div>

        <div id="meia-estacao">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-sky-900 lg:text-6xl">
            Meia Estação
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createOnlineProduct(
              ref300Marinheiro,
              '300',
              'Marinheiro',
              'https://produto.mercadolivre.com.br/MLB-3678743653-pijama-masculino-manga-curta-e-calca-frio-inverno-_JM#position%3D42%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              '',
            )}
          </div>
        </div>

        <div id="conjuntos">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-sky-900 lg:text-6xl">
            Conjuntos
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createOnlineProduct(
              ref200f300m,
              '200/300',
              'Marinheiro',
              'https://produto.mercadolivre.com.br/MLB-4709493454-pijama-longo-casal-inverno-malha-adulto-_JM#position%3D23%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Kit-Pijamas-Conjunto-Casal-Longo-Frio-Inverno-i.1257089005.20997691024',
            )}
            {createOnlineProduct(
              ref202f302m,
              '202/302',
              'Marinheiro',
              'https://produto.mercadolivre.com.br/MLB-4709362896-kit-pijamas-para-casal-feminino-baby-doll-e-masculino-curto-_JM#position%3D3%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Kit-Pijama-Casal-Combinado-Curto-Ver%C3%A3o-Malha-Manga-Curta-e-Short-i.1257089005.22597602252?sp_atk=4f967065-03fb-4c57-9f05-458ca4d4505c&xptdk=4f967065-03fb-4c57-9f05-458ca4d4505c',
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}
