import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperInstance } from 'swiper/types'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { portfolio } from '@/data/portfolio'
import { Container } from '@/components/common/Container'
import { SectionHeading } from '@/components/common/SectionHeading'
import { Reveal } from '@/components/common/Reveal'
import { PortfolioCard } from '@/components/cards/PortfolioCard'

export function Portfolio() {
  const swiperRef = useRef<SwiperInstance | null>(null)

  return (
    <section id="portfolio" className="section-padding overflow-hidden">
      <SectionHeading
        eyebrow="Portfolio"
        title="Proyectos que hablan por sí solos"
        description="Una selección de trabajos recientes, desde landing pages hasta plataformas completas."
      />

      <Container>
        <Reveal direction="zoom" amount={0.1}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {portfolio.map((item) => (
              <SwiperSlide key={item.id} className="h-auto py-2">
                <PortfolioCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>

        <div className="mt-2 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Anterior"
            className="flex size-11 items-center justify-center rounded-full border border-border text-fg-strong transition-colors hover:border-accent-border hover:text-accent"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Siguiente"
            className="flex size-11 items-center justify-center rounded-full border border-border text-fg-strong transition-colors hover:border-accent-border hover:text-accent"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </Container>
    </section>
  )
}
