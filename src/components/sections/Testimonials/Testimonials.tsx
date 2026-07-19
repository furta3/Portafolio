import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { testimonials } from '@/data/testimonials'
import { Container } from '@/components/common/Container'
import { Reveal } from '@/components/common/Reveal'
import { TestimonialCard } from '@/components/cards/TestimonialCard'

export function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-bg-alt">
      <Container>
        <Reveal direction="up" className="mb-12 text-center">
          <span className="inline-block rounded-full border border-accent-border bg-accent-bg px-4 py-1 text-sm font-medium text-accent">
            Testimonios
          </span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-fg-strong sm:text-4xl">
            Lo que dicen quienes ya trabajaron conmigo
          </h2>
        </Reveal>

        <Reveal direction="zoom" amount={0.1}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-auto py-2">
                <TestimonialCard testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Reveal>
      </Container>
    </section>
  )
}
