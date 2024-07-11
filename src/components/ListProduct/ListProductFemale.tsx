import { createDefaultProduct, createOnlineProduct } from './CreateProducts'

import { Wrapper } from '../Wrapper'

import ref028RosaPink from '@/assets/pijamas/feminino/camisolas/camisola-ref028-rosa-pink.png'
import ref533RosaBebe from '@/assets/pijamas/feminino/camisolas/camisola-ref533-rosa-bebe.png'
import ref535RosaChiclete from '@/assets/pijamas/feminino/camisolas/camisola-ref535-rosa-chiclete.png'

import ref22AzulMarinho from '@/assets/pijamas/feminino/pescador/pescador-ref22-azul-marinho.png'
import ref1015Preto from '@/assets/pijamas/feminino/pescador/pescador-ref1015-preto.png'
import ref1015AzulMarinho from '@/assets/pijamas/feminino/pescador/pescador-ref1015-azul-marinho.png'
import ref1015RosaPink from '@/assets/pijamas/feminino/pescador/pescador-ref1015-rosa-pink.png'
import ref1015TerraCota from '@/assets/pijamas/feminino/pescador/pescador-ref1015-terra-cota.png'

import ref1023 from '@/assets/pijamas/feminino/infantil/infantil-ref1023.png'

import ref1036Vinho from '@/assets/pijamas/feminino/longo/longo-ref1036-vinho.png'

import ref1027AzulMarinho from '@/assets/pijamas/feminino/meia-estacao/meia-estacao-ref1027-azul-marinho.png'
import ref1027Preto from '@/assets/pijamas/feminino/meia-estacao/meia-estacao-ref1027-preto.png'
import ref1027RosaChiclete from '@/assets/pijamas/feminino/meia-estacao/meia-estacao-ref1027-rosa-chiclete.png'
import ref1027RosaPink from '@/assets/pijamas/feminino/meia-estacao/meia-estacao-ref1027-rosa-pink.png'
import ref1027Vermelho from '@/assets/pijamas/feminino/meia-estacao/meia-estacao-ref1027-vermelho.png'
import ref1027Vinho from '@/assets/pijamas/feminino/meia-estacao/meia-estacao-ref1027-vinho.png'
import ref1037AzulBebe from '@/assets/pijamas/feminino/meia-estacao/meia-estacao-ref1037-azul-bebe.png'

import ref202 from '@/assets/pijamas/feminino/baby-doll/baby-doll-ref202.png'
import ref532Preto from '@/assets/pijamas/feminino/baby-doll/baby-doll-ref532-preto.png'
import ref1009AzulMarinho from '@/assets/pijamas/feminino/baby-doll/baby-doll-ref1009-azul-marinho.png'
import ref1009Preto from '@/assets/pijamas/feminino/baby-doll/baby-doll-ref1009-preto.png'
import ref1009RosaChiclete from '@/assets/pijamas/feminino/baby-doll/baby-doll-ref1009-rosa-chiclete.png'
import ref1009Vinho from '@/assets/pijamas/feminino/baby-doll/baby-doll-ref1009-vinho.png'
import ref1013AzulMarinho from '@/assets/pijamas/feminino/baby-doll/baby-doll-ref1013-azul-marinho.png'
import ref1013Preto from '@/assets/pijamas/feminino/baby-doll/baby-doll-ref1013-preto.png'
import ref1013RosaChiclete from '@/assets/pijamas/feminino/baby-doll/baby-doll-ref1013-rosa-chiclete.png'
import ref1013RosaPink from '@/assets/pijamas/feminino/baby-doll/baby-doll-ref1013-rosa-pink.png'
import ref1013Vinho from '@/assets/pijamas/feminino/baby-doll/baby-doll-ref1013-vinho.png'

import ref202f302m from '@/assets/pijamas/feminino/conjunto/conjunto-ref202f-ref302m.png'

export function ListProductFemale() {
  return (
    <div className="flex flex-col gap-32 divide-y divide-zinc-300">
      <Wrapper>
        <div id="camisola">
          <h4 className="font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Camisola
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createOnlineProduct(
              ref028RosaPink,
              '028',
              'Rosa Pink',
              'https://produto.mercadolivre.com.br/MLB-4652200214-camisola-de-amamentaco-com-robe-robie-hobby-floral-_JM#position%3D22%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Da1810187-1470-444e-91c1-5a468bc8787e',
              '',
            )}
            {createOnlineProduct(
              ref533RosaBebe,
              '533',
              'Rosa Bebê',
              'https://produto.mercadolivre.com.br/MLB-4714097188-kit-1-camisola-1-baby-doll-amamentaco-maternidade-gestante-_JM#position%3D8%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Dadfb0793-49be-41e1-97c6-3cf50861ec5b',
              'https://shopee.com.br/kit-2-Camisolas-de-Amamenta%C3%A7%C3%A3o-Com-Renda-e-bot%C3%A3o-Pr%C3%A1tico-P%C3%B3s-Parto-de-Dormir-Gestante-Maternidade-i.1257089005.23293132846?sp_atk=90deb254-3e76-4269-87e8-1e8e3aef52c5&xptdk=90deb254-3e76-4269-87e8-1e8e3aef52c5',
            )}
            {createOnlineProduct(
              ref535RosaChiclete,
              '535',
              'Rosa Chiclete',
              'https://produto.mercadolivre.com.br/MLB-3702043573-kit-3-camisolas-amamentaco-gestante-maternidade-senhoras-_JM#position%3D24%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Dadfb0793-49be-41e1-97c6-3cf50861ec5b',
              'https://shopee.com.br/Camisola-Amamenta%C3%A7%C3%A3o-Gestante-Bot%C3%A3o-AR-Confort%C3%A1vel-Abertura-nos-Seios-senhora-i.1257089005.20399256253?sp_atk=449c7a42-a066-4076-9ba9-1e13a526cab0',
            )}
          </div>
        </div>

        <div id="pescador">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Pescador
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createOnlineProduct(
              ref22AzulMarinho,
              '22',
              'Azul Marinho',
              'https://produto.mercadolivre.com.br/MLB-4678113696-kit-2-pijamas-pescador-floral-amamentaco-pos-cirurgico-_JM#position%3D37%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Da1810187-1470-444e-91c1-5a468bc8787e',
              'https://shopee.com.br/Pijama-Feminino-Pescador-Bermuda-de-Manga-Aberto-Bot%C3%B5es-Maternidade-Amamentar-P%C3%B3s-Cir%C3%BArgico-Senhora-i.1257089005.22593052790?sp_atk=9af92571-7d5d-4c79-9b03-c29dd5c6ea8c&xptdk=9af92571-7d5d-4c79-9b03-c29dd5c6ea8c',
            )}
            {createOnlineProduct(
              ref1015AzulMarinho,
              '1015',
              'Azul Marinho',
              'https://produto.mercadolivre.com.br/MLB-4677672632-kit-2-pijama-pescador-estampadoshort-meia-canela-estampado-_JM#position%3D4%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Da1810187-1470-444e-91c1-5a468bc8787e',
              'https://shopee.com.br/Pijama-Pescador-Estampado-Manga-Baby-Look-Short-Cores-Variadas-ver%C3%A3o-i.1257089005.22593011236?sp_atk=b41d731d-98a7-4d1e-aa3f-6f2c973a0938',
            )}
            {createOnlineProduct(
              ref1015Preto,
              '1015',
              'Preto',
              'https://produto.mercadolivre.com.br/MLB-4677672632-kit-2-pijama-pescador-estampadoshort-meia-canela-estampado-_JM#position%3D4%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Da1810187-1470-444e-91c1-5a468bc8787e',
              '',
            )}
            {createOnlineProduct(
              ref1015RosaPink,
              '1015',
              'Rosa Pink',
              'https://produto.mercadolivre.com.br/MLB-4677672632-kit-2-pijama-pescador-estampadoshort-meia-canela-estampado-_JM#position%3D4%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Pijama-Pescador-Estampado-Manga-Baby-Look-Short-Cores-Variadas-ver%C3%A3o-i.1257089005.22593011236?sp_atk=f69d4826-6697-4c4e-ac95-af3951ecdaec&xptdk=f69d4826-6697-4c4e-ac95-af3951ecdaec',
            )}
            {createOnlineProduct(
              ref1015TerraCota,
              '1015',
              'Terra Cota',
              'https://produto.mercadolivre.com.br/MLB-4677672632-kit-2-pijama-pescador-estampadoshort-meia-canela-estampado-_JM#position%3D4%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Pijama-Pescador-Estampado-Manga-Baby-Look-Short-Cores-Variadas-ver%C3%A3o-i.1257089005.22593011236?sp_atk=f69d4826-6697-4c4e-ac95-af3951ecdaec&xptdk=f69d4826-6697-4c4e-ac95-af3951ecdaec',
            )}
          </div>
        </div>

        <div id="infantil">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Infantil
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createDefaultProduct(ref1023, '1023', 'Azul Marinho')}
          </div>
        </div>

        <div id="longo">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Longo
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createOnlineProduct(
              ref1036Vinho,
              '1036',
              'Vinho',
              'https://produto.mercadolivre.com.br/MLB-4678066798-kit-2-pijamas-americano-longo-de-amamentaco-gestante-botoes-_JM#position%3D30%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Pijama-Americano-Longo-Feminino-com-Abertura-no-Peito-e-Detalhe-Camisaria-Amamenta%C3%A7%C3%A3o-Inverno-i.1257089005.22497513139?sp_atk=e602d355-afa5-4a03-bdeb-f6fe361a4903&xptdk=e602d355-afa5-4a03-bdeb-f6fe361a4903',
            )}
          </div>
        </div>

        <div id="baby-doll">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Baby Doll
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createOnlineProduct(
              ref202,
              '202',
              'Marinheiro',
              'https://produto.mercadolivre.com.br/MLB-3678739063-baby-doll-feminino-marinheira-ancora-short-listrado-_JM#position%3D32%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              '',
            )}
            {createOnlineProduct(
              ref532Preto,
              '532',
              'Preto',
              'https://produto.mercadolivre.com.br/MLB-3682077253-baby-doll-amamentaco-short-e-camiseta-gestante-maternidade-_JM#position%3D16%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Baby-Doll-Amamenta%C3%A7%C3%A3o-Gravida-Com-Abertura-Em-Bot%C3%B5es-No-Ombro-e-La%C3%A7o-no-Peito-Amamentar-Ver%C3%A3o-i.1257089005.22993006677?sp_atk=9caaacee-3606-4e9e-9d18-9498397298e8&xptdk=9caaacee-3606-4e9e-9d18-9498397298e8',
            )}
            {createOnlineProduct(
              ref1009AzulMarinho,
              '1009',
              'Azul Marinho',
              'https://produto.mercadolivre.com.br/MLB-3681859105-baby-doll-de-alca-short-com-laco-cores-variadas-_JM?attributes=COLOR_SECONDARY_COLOR%3AUm9zYS1jaGljbGV0ZQ%3D%3D&quantity=1',
              'https://shopee.com.br/Baby-Doll-De-Al%C3%A7a-Short-Com-La%C3%A7o-Cores-e-Estampas-Variadas-i.1257089005.19297684914?sp_atk=3b4c23ca-4aea-4732-af90-77bb33dff8d2&xptdk=3b4c23ca-4aea-4732-af90-77bb33dff8d2',
            )}
            {createOnlineProduct(
              ref1009Preto,
              '1009',
              'Preto',
              'https://produto.mercadolivre.com.br/MLB-3681859105-baby-doll-de-alca-short-com-laco-cores-variadas-_JM?attributes=COLOR_SECONDARY_COLOR%3AUm9zYS1jaGljbGV0ZQ%3D%3D&quantity=1',
              'https://shopee.com.br/Baby-Doll-De-Al%C3%A7a-Short-Com-La%C3%A7o-Cores-e-Estampas-Variadas-i.1257089005.19297684914?sp_atk=3b4c23ca-4aea-4732-af90-77bb33dff8d2&xptdk=3b4c23ca-4aea-4732-af90-77bb33dff8d2',
            )}
            {createOnlineProduct(
              ref1009RosaChiclete,
              '1009',
              'Rosa Chiclete',
              'https://produto.mercadolivre.com.br/MLB-3681859105-baby-doll-de-alca-short-com-laco-cores-variadas-_JM?attributes=COLOR_SECONDARY_COLOR%3AUm9zYS1jaGljbGV0ZQ%3D%3D&quantity=1',
              'https://shopee.com.br/Baby-Doll-De-Al%C3%A7a-Short-Com-La%C3%A7o-Cores-e-Estampas-Variadas-i.1257089005.19297684914?sp_atk=3b4c23ca-4aea-4732-af90-77bb33dff8d2&xptdk=3b4c23ca-4aea-4732-af90-77bb33dff8d2',
            )}
            {createOnlineProduct(
              ref1009Vinho,
              '1009',
              'Vinho',
              'https://produto.mercadolivre.com.br/MLB-3681859105-baby-doll-de-alca-short-com-laco-cores-variadas-_JM?attributes=COLOR_SECONDARY_COLOR%3AUm9zYS1jaGljbGV0ZQ%3D%3D&quantity=1',
              'https://shopee.com.br/Baby-Doll-De-Al%C3%A7a-Short-Com-La%C3%A7o-Cores-e-Estampas-Variadas-i.1257089005.19297684914?sp_atk=3b4c23ca-4aea-4732-af90-77bb33dff8d2&xptdk=3b4c23ca-4aea-4732-af90-77bb33dff8d2',
            )}
            {createOnlineProduct(
              ref1013AzulMarinho,
              '1013',
              'Azul Marinho',
              'https://produto.mercadolivre.com.br/MLB-4659748524-baby-dool-alca-estampado-cores-variadas-elegante-_JM?attributes=COLOR_SECONDARY_COLOR%3AQXp1bC1tYXJpbmhv&quantity=1',
              'https://shopee.com.br/Baby-Dool-Al%C3%A7a-Estampado-Cores-Variadas-Elegante-Short-de-C%C3%B3s-i.1257089005.23193042218?sp_atk=8957a476-ea0a-4e42-b584-da470d60982f&xptdk=8957a476-ea0a-4e42-b584-da470d60982f',
            )}
            {createOnlineProduct(
              ref1013Preto,
              '1013',
              'Preto',
              'https://produto.mercadolivre.com.br/MLB-4659748524-baby-dool-alca-estampado-cores-variadas-elegante-_JM?attributes=COLOR_SECONDARY_COLOR%3AQXp1bC1tYXJpbmhv&quantity=1',
              'https://shopee.com.br/Baby-Dool-Al%C3%A7a-Estampado-Cores-Variadas-Elegante-Short-de-C%C3%B3s-i.1257089005.23193042218?sp_atk=8957a476-ea0a-4e42-b584-da470d60982f&xptdk=8957a476-ea0a-4e42-b584-da470d60982f',
            )}
            {createOnlineProduct(
              ref1013RosaChiclete,
              '1013',
              'Rosa Chiclete',
              'https://produto.mercadolivre.com.br/MLB-4659748524-baby-dool-alca-estampado-cores-variadas-elegante-_JM?attributes=COLOR_SECONDARY_COLOR%3AQXp1bC1tYXJpbmhv&quantity=1',
              'https://shopee.com.br/Baby-Dool-Al%C3%A7a-Estampado-Cores-Variadas-Elegante-Short-de-C%C3%B3s-i.1257089005.23193042218?sp_atk=8957a476-ea0a-4e42-b584-da470d60982f&xptdk=8957a476-ea0a-4e42-b584-da470d60982f',
            )}
            {createOnlineProduct(
              ref1013RosaPink,
              '1013',
              'Rosa Pink',
              'https://produto.mercadolivre.com.br/MLB-4659748524-baby-dool-alca-estampado-cores-variadas-elegante-_JM?attributes=COLOR_SECONDARY_COLOR%3AQXp1bC1tYXJpbmhv&quantity=1',
              'https://shopee.com.br/Baby-Dool-Al%C3%A7a-Estampado-Cores-Variadas-Elegante-Short-de-C%C3%B3s-i.1257089005.23193042218?sp_atk=8957a476-ea0a-4e42-b584-da470d60982f&xptdk=8957a476-ea0a-4e42-b584-da470d60982f',
            )}
            {createOnlineProduct(
              ref1013Vinho,
              '1013',
              'Vinho',
              'https://produto.mercadolivre.com.br/MLB-4659748524-baby-dool-alca-estampado-cores-variadas-elegante-_JM?attributes=COLOR_SECONDARY_COLOR%3AQXp1bC1tYXJpbmhv&quantity=1',
              'https://shopee.com.br/Baby-Dool-Al%C3%A7a-Estampado-Cores-Variadas-Elegante-Short-de-C%C3%B3s-i.1257089005.23193042218?sp_atk=8957a476-ea0a-4e42-b584-da470d60982f&xptdk=8957a476-ea0a-4e42-b584-da470d60982f',
            )}
          </div>
        </div>

        <div id="meia-estacao">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Meia Estação
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
            {createOnlineProduct(
              ref1027AzulMarinho,
              '1027',
              'Azul Marinho',
              'https://produto.mercadolivre.com.br/MLB-4659768498-pijama-feminino-meia-estaco-baby-look-poa-_JM#position%3D19%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Pijama-Feminino-Inverno-Manga-Baby-Look-e-Cal%C3%A7a-i.1257089005.23397508131?sp_atk=f6ec8f3d-1926-44ad-b5fa-5fa66448177f&xptdk=f6ec8f3d-1926-44ad-b5fa-5fa66448177f',
            )}
            {createOnlineProduct(
              ref1027Preto,
              '1027',
              'Preto',
              'https://produto.mercadolivre.com.br/MLB-4659768498-pijama-feminino-meia-estaco-baby-look-poa-_JM#position%3D19%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Pijama-Feminino-Inverno-Manga-Baby-Look-e-Cal%C3%A7a-i.1257089005.23397508131?sp_atk=f6ec8f3d-1926-44ad-b5fa-5fa66448177f&xptdk=f6ec8f3d-1926-44ad-b5fa-5fa66448177f',
            )}
            {createOnlineProduct(
              ref1027RosaChiclete,
              '1027',
              'Rosa Chiclete',
              'https://produto.mercadolivre.com.br/MLB-4659768498-pijama-feminino-meia-estaco-baby-look-poa-_JM#position%3D19%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Pijama-Feminino-Inverno-Manga-Baby-Look-e-Cal%C3%A7a-i.1257089005.23397508131?sp_atk=f6ec8f3d-1926-44ad-b5fa-5fa66448177f&xptdk=f6ec8f3d-1926-44ad-b5fa-5fa66448177f',
            )}
            {createOnlineProduct(
              ref1027RosaPink,
              '1027',
              'Rosa Pink',
              'https://produto.mercadolivre.com.br/MLB-4659768498-pijama-feminino-meia-estaco-baby-look-poa-_JM#position%3D19%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Pijama-Feminino-Inverno-Manga-Baby-Look-e-Cal%C3%A7a-i.1257089005.23397508131?sp_atk=f6ec8f3d-1926-44ad-b5fa-5fa66448177f&xptdk=f6ec8f3d-1926-44ad-b5fa-5fa66448177f',
            )}
            {createOnlineProduct(
              ref1027Vermelho,
              '1027',
              'Vermelho',
              'https://produto.mercadolivre.com.br/MLB-4659768498-pijama-feminino-meia-estaco-baby-look-poa-_JM#position%3D19%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Pijama-Feminino-Inverno-Manga-Baby-Look-e-Cal%C3%A7a-i.1257089005.23397508131?sp_atk=f6ec8f3d-1926-44ad-b5fa-5fa66448177f&xptdk=f6ec8f3d-1926-44ad-b5fa-5fa66448177f',
            )}
            {createOnlineProduct(
              ref1027Vinho,
              '1027',
              'Vinho',
              'https://produto.mercadolivre.com.br/MLB-4659768498-pijama-feminino-meia-estaco-baby-look-poa-_JM#position%3D19%26search_layout%3Dgrid%26type%3Ditem%26tracking_id%3Db4c467ef-b3ed-45b0-b7aa-4e4c826ed444',
              'https://shopee.com.br/Pijama-Feminino-Inverno-Manga-Baby-Look-e-Cal%C3%A7a-i.1257089005.23397508131?sp_atk=f6ec8f3d-1926-44ad-b5fa-5fa66448177f&xptdk=f6ec8f3d-1926-44ad-b5fa-5fa66448177f',
            )}
            {createOnlineProduct(
              ref1037AzulBebe,
              '1037',
              'Azul Bebê',
              'https://produto.mercadolivre.com.br/MLB-3671361935-pijama-meia-estaco-boto-manga-curta-calca-comprida-frio-_JM?attributes=FABRIC_DESIGN%3ATGlzYQ%3D%3D%2CCOLOR_SECONDARY_COLOR%3AQXp1bC1jZWxlc3Rl&quantity=1',
              'https://shopee.com.br/Pijama-Blogueira-Americano-Meia-Esta%C3%A7%C3%A3o-Bot%C3%A3o-Manga-Curta-Cal%C3%A7a-Comprida-i.1257089005.23797507732?sp_atk=29d18f95-0fc4-425c-bbf6-bd756f329fbe&xptdk=29d18f95-0fc4-425c-bbf6-bd756f329fbe',
            )}
          </div>
        </div>

        <div id="conjuntos">
          <h4 className="mt-28 font-playfair text-5xl font-semibold text-rose-900 lg:text-6xl">
            Conjuntos
          </h4>

          <div className="mt-8 flex flex-wrap gap-5">
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
