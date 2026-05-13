import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как установить скин после покупки?",
      answer:
        "После оплаты вы получаете архив с файлами и пошаговой инструкцией для вашего редактора или терминала. Установка занимает 1–3 минуты. Если возникнут сложности — поможем в чате поддержки.",
    },
    {
      question: "С какими редакторами совместимы скины?",
      answer:
        "Скины доступны для VS Code, всех продуктов JetBrains (IntelliJ, WebStorm, PyCharm и др.), Neovim, Vim, а также для терминалов iTerm2, Windows Terminal, Warp и Hyper.",
    },
    {
      question: "Можно ли попробовать скин перед покупкой?",
      answer:
        "Да! На странице каждого скина есть интерактивный превью с примерами кода. Вы видите, как будет выглядеть тема в реальных условиях, прежде чем покупать.",
    },
    {
      question: "Что входит в корпоративную лицензию?",
      answer:
        "Корпоративная лицензия включает использование на неограниченном числе машин в вашей команде, приоритетную поддержку и право на кастомизацию скина под ваш брендинг.",
    },
    {
      question: "Есть ли обновления после покупки?",
      answer:
        "Да, все обновления для купленного скина — бесплатно и навсегда. При выходе новых версий вы получаете уведомление на почту.",
    },
    {
      question: "Как связаться с поддержкой?",
      answer:
        "Пишите на почту или в Telegram — отвечаем в течение нескольких часов. Для корпоративных клиентов доступен приоритетный канал связи.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о скинах Спивак, установке и лицензиях.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
