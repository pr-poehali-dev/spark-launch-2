import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Уникальный дизайн",
    description: "Каждый скин создаётся вручную — никаких шаблонов и повторений. Ваш проект будет выглядеть по-настоящему уникально.",
    icon: "🎨",
    badge: "Эксклюзив",
  },
  {
    title: "Быстрая интеграция",
    description: "Подключение за считанные минуты. Подробная документация и поддержка на каждом этапе установки.",
    icon: "⚡",
    badge: "Быстро",
  },
  {
    title: "Любой стек",
    description: "Совместимость с React, Vue, Angular и другими фреймворками. Работает в любом современном проекте.",
    icon: "🔗",
    badge: "Универсально",
  },
  {
    title: "Регулярные обновления",
    description: "Постоянно пополняемая коллекция. Новые скины выходят каждую неделю — всегда есть что-то свежее.",
    icon: "🔄",
    badge: "Актуально",
  },
  {
    title: "Адаптивность",
    description: "Все скины отлично смотрятся на любых устройствах — от мобильного до широкоформатного монитора.",
    icon: "📱",
    badge: "Responsive",
  },
  {
    title: "Поддержка 24/7",
    description: "Команда Спивак всегда на связи. Помогаем с настройкой, кастомизацией и любыми техническими вопросами.",
    icon: "🛡️",
    badge: "Поддержка",
  },
]

export function FeaturesSection() {
  return (
    <section id="catalog" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают Спивак</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Профессиональные скины для разработчиков, которые ценят стиль и качество
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">{feature.icon}</span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
