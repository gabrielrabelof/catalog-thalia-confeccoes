'use client'

import { useState } from 'react'

import { BookImage, Search, MapPin, Instagram, Moon } from 'lucide-react'
import clsx from 'clsx'

import Image from 'next/image'
import contacting from '../assets/woman-in-cellphone.png'

import { Header } from '@/components/Header'
import { Wrapper } from '@/components/Wrapper'
import { ModelPhoto } from '@/components/svg/ModelPhoto'
import { WhatsAppIcon } from '@/components/svg/WhatsAppIcon'
import { Info } from '@/components/Info'
import { Card } from '@/components/Card'
import { Filter } from '@/components/Filter'
import { ListProduct } from '@/components/ListProduct'
import { BackToCatalogButton } from '@/components/BackToTopButton/BackToCatalogButton'
import { BackToTopButton } from '@/components/BackToTopButton'

export default function Home() {
  const [searchValue, setSearchValue] = useState('')
  const [catalog, setCatalog] = useState(true)

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value

    if (/^\d*$/.test(value)) {
      setSearchValue(value)
    }
  }

  function handleSearch() {
    if (searchValue) {
      const element = document.getElementById(searchValue)
      if (element) {
        const yOffset = -200
        const yPosition =
          element.getBoundingClientRect().top + window.pageYOffset + yOffset
        window.scrollTo({ top: yPosition, behavior: 'smooth' })
      } else {
        alert('Ref. não encontrada!')
      }
    }

    setSearchValue('')
  }

  function handleCatalogFemale() {
    setCatalog(true)
  }

  function handleCatalogMale() {
    setCatalog(false)
  }

  return (
    <div className="min-h-screen w-full bg-red-50">
      <Header />

      <section
        id="inicio"
        className="w-full items-center bg-rose-950 pb-56 pt-32"
      >
        <Wrapper>
          <div className="flex justify-between">
            <ModelPhoto />
            <div>
              <h1 className="font-playfair text-7.5xl text-rose-50">
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
                  <span>Ver Catálogo</span>
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
        </Wrapper>
      </section>
      <Info />

      <section id="servicos" className="w-full bg-red-50 py-40">
        <Wrapper>
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
              description="Os nossos pijamas possuem cores, estampas e tamanhos variados."
            />
            <Card
              title="Grade de Tamanhos"
              description="Modelos adulto e infantil dos tamanhos:
              P ao GG e a opção de tamanho Plus Size."
            />
            <Card
              title="Temos Garantia"
              description="Disponibilizamos para os nossos clientes garantia de até 7 dias úteis para possíveis trocas."
            />
            <Card
              title="Tecido de Qualidade"
              description="Nossos pijamas não desbotam, não dão bolinha e não perdem a estampa na lavagem."
            />
            <Card
              title="Vendas Online"
              description="Clique nos botões com o ícone do Mercado Livre ou Shopee para mais detalhes."
            />
            <Card
              title="Vendas no Atacado"
              description="Trabalhamos com vendas no atacado, para mais informações, entre em contato conosco."
            />
          </div>
        </Wrapper>
      </section>

      <section id="catalogo" className="w-full bg-rose-100 pb-12 pt-48">
        <Wrapper>
          <h3 className="text-center text-2xl font-semibold uppercase text-rose-900">
            Catálogo
          </h3>

          <div className="mb-32 mt-16">
            <div className="mb-32 flex flex-col gap-10 rounded-3xl bg-zinc-50 px-20 py-14">
              <div>
                <h4 className="text-md font-semibold text-zinc-700">
                  Pesquisar Ref.
                </h4>
                <div className="mt-3 flex justify-between">
                  <div className="flex items-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2 focus-within:border-rose-200 focus-within:ring-2 focus-within:ring-rose-100">
                    <input
                      className="outline-none"
                      type="text"
                      placeholder="Ex: 020"
                      value={searchValue}
                      onChange={handleInputChange}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />

                    <button
                      onClick={handleSearch}
                      className="border-l border-zinc-300 pl-2"
                    >
                      <Search className="h-5 w-5 text-zinc-500" />
                    </button>
                  </div>

                  <div className="flex gap-10">
                    <button onClick={handleCatalogFemale}>
                      <span
                        className={clsx(
                          'border-b-2 pb-2 text-lg font-semibold uppercase transition duration-300 ease-in-out',
                          {
                            'text-zinc-500': !catalog,
                            'text-rose-900': catalog,
                            'border-b-rose-900': catalog,
                          },
                        )}
                      >
                        Feminino
                      </span>
                    </button>

                    <button onClick={handleCatalogMale}>
                      <span
                        className={clsx(
                          'border-b-2 pb-2 text-lg font-semibold uppercase transition duration-300 ease-in-out',
                          {
                            'text-zinc-500': catalog,
                            'text-sky-900': !catalog,
                            'border-b-sky-900': !catalog,
                          },
                        )}
                      >
                        Masculino
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Filter model="Camisola" targetId="camisola" />
                <Filter model="Pescador" targetId="pescador" />
                <Filter model="Infantil" targetId="infantil" />
                <Filter model="Longo" targetId="longo" />
                <Filter model="Baby Doll" targetId="baby-doll" />
                <Filter model="Meia Estação" targetId="meia-estacao" />
                <Filter model="Conjuntos" targetId="conjuntos" />
              </div>
            </div>

            <ListProduct />
          </div>
        </Wrapper>
      </section>

      <section id="contato" className="w-full bg-red-50 py-36">
        <Wrapper>
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
        </Wrapper>
      </section>

      <section className="w-full bg-rose-950 py-14">
        <Wrapper>
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
        </Wrapper>
      </section>

      <BackToCatalogButton />
      <BackToTopButton />
    </div>
  )
}
