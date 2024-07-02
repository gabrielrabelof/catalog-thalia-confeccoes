'use client'

import { BookImage, Search, MapPin, Instagram, Moon } from 'lucide-react'

import Image from 'next/image'
import contacting from '../assets/woman-in-cellphone.png'

import { Header } from '@/components/Header'
import { ModelPhoto } from '@/components/svg/ModelPhoto'
import { WhatsAppIcon } from '@/components/svg/WhatsAppIcon'
import { Info } from '@/components/Info'
import { Card } from '@/components/Card'
import { Filter } from '@/components/Filter'
import { ListProduct } from '@/components/ListProduct'
import { BackToTopButton } from '@/components/BackToTopButton'

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-red-50">
      <Header />

      <section
        id="inicio"
        className="w-full items-center bg-rose-950 py-32 pb-56"
      >
        <div className="mx-auto flex w-full max-w-100 justify-between">
          <ModelPhoto />
          <div>
            <h1 className="font-playfair text-8xl text-rose-50">
              O conforto <br />
              para a <br />
              sua noite
            </h1>

            <div className="mt-10 flex justify-between">
              <a
                href="#catalogo"
                className="flex items-center gap-2 rounded-full border bg-salmon px-5 py-3 font-medium uppercase text-white transition duration-300 ease-in-out hover:bg-salmon-hover"
              >
                <BookImage className="h-5 w-5 text-white" />
                <span>Visualizar Catálogo</span>
              </a>
              <a
                href="#contato"
                className="flex items-center gap-2 rounded-full border bg-salmon px-5 py-3 font-medium uppercase text-white transition duration-300 ease-in-out hover:bg-salmon-hover"
              >
                <WhatsAppIcon />
                <span>Fale Conosco</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Info />

      <section id="servicos" className="w-full bg-red-50 py-40">
        <div className="mx-auto w-11/12 max-w-100">
          <div className="mb-16 flex flex-col gap-4 text-center">
            <h4 className="text-sm font-semibold uppercase text-salmon">
              Serviços
            </h4>
            <h1 className="text-4xl font-bold leading-normal text-zinc-900">
              Como trabalhamos com <br />
              os nossos produtos?
            </h1>
          </div>

          <div className="flex flex-wrap gap-10">
            <Card
              title="Modelos Variados"
              description="Os pijamas possuem cores, estampas e tamanhos variados para atender a seu gosto e necessidade."
            />
            <Card
              title="Grade de Tamanhos"
              description="Modelos adulto e infantil dos tamanhos:
              P ao GG contendo também a opção de tamanho Plus Size."
            />
            <Card
              title="Temos Garantia"
              description="Disponibilizamos para os nossos clientes garantia de até 7 dias úteis para possíveis trocas."
            />
            <Card
              title="Produtos de Qualidade"
              description="Pijamas que oferecem muito conforto e elegância, além de não desbotar, não dar bolinha e não perder a estampa."
            />
            <Card
              title="Vendas Online"
              description="Clique nos botões com o ícone do Mercado Livre ou Shopee para mais detalhes dos nossos pijamas."
            />
            <Card
              title="Vendas no Atacado"
              description="Trabalhamos também com vendas no atacado, para mais informações, entre em contato conosco."
            />
          </div>
        </div>
      </section>

      <section id="catalogo" className="w-full bg-rose-100 py-48">
        <div className="mx-auto w-full max-w-100">
          <h3 className="text-center text-2xl font-semibold uppercase text-rose-900">
            Catálogo
          </h3>

          <div className="mb-32 mt-16">
            <div className="mb-32 flex flex-col gap-10 rounded-3xl bg-zinc-50 px-20 py-14">
              <div className="flex justify-between">
                <div className="flex items-center gap-2 rounded-lg border border-zinc-300 bg-white p-2">
                  <div>
                    <Search className="h-5 w-5 text-zinc-500" />
                  </div>

                  <input type="text" placeholder="Pesquisar" />
                </div>

                <div className="flex gap-10">
                  <button className="text-xl font-semibold uppercase text-zinc-500 hover:border-b-2 hover:border-b-rose-900 hover:text-rose-900">
                    Feminino
                  </button>
                  <button className="text-xl font-semibold uppercase text-zinc-500 hover:border-b-2 hover:border-b-sky-900 hover:text-sky-900">
                    Masculino
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Filter model="Camisola" />
                <Filter model="Pescador" />
                <Filter model="Infantil" />
                <Filter model="Longo" />
                <Filter model="Baby Doll" />
                <Filter model="Meia Estação" />
                <Filter model="Conjuntos" />
              </div>
            </div>

            <ListProduct />
          </div>
        </div>
      </section>

      <section id="contato" className="w-full bg-red-50 py-36">
        <div className="mx-auto w-full max-w-100">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-10">
              <h1 className="text-5xl font-bold leading-normal text-zinc-800">
                Entre em contato <br />
                com a gente!
              </h1>

              <div className="flex flex-col gap-4">
                <a
                  href="https://www.google.com/maps/@-21.0991303,-42.182919,3a,75y,273.61h,98.33t/data=!3m6!1e1!3m4!1srhACwZCzanyyj6FPfADQZQ!2e0!7i16384!8i8192?coh=205409&entry=ttu"
                  target="_blank"
                  className="flex gap-2"
                >
                  <MapPin className="h-6 w-6 text-salmon" />
                  <p className="text-base text-zinc-600 transition-all duration-300 hover:text-zinc-500">
                    R. Egídio Porcaro, 150
                  </p>
                </a>

                <a
                  href="https://www.instagram.com/thalia_confeccoes_mg/"
                  target="_blank"
                  className="flex gap-2"
                >
                  <Instagram className="h-6 w-6 text-salmon" />
                  <p className="text-base text-zinc-600 transition-all duration-300 hover:text-zinc-500">
                    @thalia_confeccoes_mg
                  </p>
                </a>
              </div>

              <a
                href="https://wa.me/5532998030079"
                target="_blank"
                className="flex max-w-fit items-center gap-2 rounded-full border-2 border-white bg-salmon px-7 py-4 font-medium uppercase text-white transition duration-300 ease-in-out hover:bg-salmon-hover"
              >
                <WhatsAppIcon />
                <span>Entre em Contato</span>
              </a>
            </div>
            <Image
              src={contacting}
              className="h-contact-photo w-contact-photo rounded-md"
              alt=""
              quality={100}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-rose-950 py-14">
        <div className="mx-auto w-full max-w-100">
          <a
            href="#inicio"
            className="mb-5 flex items-center gap-2 font-playfair text-3xl text-white"
          >
            <Moon className="h-8 w-8 text-white" />
            Thalia Confecções
          </a>
          <p className="text-sm font-medium leading-loose text-zinc-400">
            ©2024 Thalia Confecções. <br />
            Todos os direitos reservados.
          </p>
        </div>
      </section>

      <BackToTopButton />
    </div>
  )
}
