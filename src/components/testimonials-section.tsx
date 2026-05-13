import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Алексей Громов",
    role: "Senior Frontend Developer, TechCorp",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Поставил скин от Спивак — коллеги сразу спросили, что за тема. Работать стало реально приятнее, глаза не устают.",
  },
  {
    name: "Марина Соколова",
    role: "Full-stack разработчик, Freelance",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Наконец-то нашла тему для VS Code, которая выглядит и профессионально, и красиво. Установка заняла минуту.",
  },
  {
    name: "Дмитрий Орлов",
    role: "Backend Engineer, StartupXYZ",
    avatar: "/professional-woman-scientist.png",
    content:
      "Взял корпоративную лицензию для команды — теперь у всех единый стиль. Клиенты думают, что это наш фирменный стек.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят разработчики</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Тысячи программистов уже обновили свой рабочий стол со Спивак
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
