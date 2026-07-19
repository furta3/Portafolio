import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { toast } from 'sonner'
import { Send } from 'lucide-react'
import { Button } from '@/components/buttons/Button'

const contactSchema = z.object({
  name: z.string().min(2, 'Ingresá tu nombre completo'),
  email: z.string().email('Ingresá un email válido'),
  message: z.string().min(10, 'Contame un poco más sobre tu proyecto'),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 900))
    toast.success('¡Mensaje enviado! Te responderé a la brevedad.')
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-fg-strong">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          placeholder="Tu nombre"
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-fg-strong outline-none transition-colors focus:border-accent-border"
          {...register('name')}
        />
        {errors.name && <p className="mt-1 text-sm text-accent-2">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-fg-strong">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="tu@email.com"
          className="w-full rounded-xl border border-border bg-bg px-4 py-3 text-fg-strong outline-none transition-colors focus:border-accent-border"
          {...register('email')}
        />
        {errors.email && <p className="mt-1 text-sm text-accent-2">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-fg-strong">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Contame sobre tu proyecto..."
          className="w-full resize-none rounded-xl border border-border bg-bg px-4 py-3 text-fg-strong outline-none transition-colors focus:border-accent-border"
          {...register('message')}
        />
        {errors.message && <p className="mt-1 text-sm text-accent-2">{errors.message.message}</p>}
      </div>

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-fit">
        {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        <Send size={18} />
      </Button>
    </form>
  )
}
