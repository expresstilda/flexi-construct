import { Card } from "@/components/ui/card";
import { BarChart3, Clock, Users, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: BarChart3,
      title: "Полный контроль",
      description: "От фактических работ до отчётности инвесторам. Интерфейсы под роли, графики ГПР, КС-2, учёт подрядчиков, интеграции с 1С и BI — всё в одном окне."
    },
    {
      icon: Clock,
      title: "Быстрый запуск",
      description: "MVP за 60–90 дней. Каждые 2–3 недели — реальный результат. Запускаемся на одном объекте, потом масштабируем."
    },
    {
      icon: Users,
      title: "Простота использования",
      description: "Интерфейс простой — даже прорабу не нужно учиться. Подрядчики сдают акты онлайн без лишних звонков."
    },
    {
      icon: Shield,
      title: "Ваша система",
      description: "Код, сервер, архитектура — под вашим контролем. Открытые технологии. Передаём всё с документацией. Никакой SaaS-зависимости."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Что вы получите — без догадок, лишнего и усложнений
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Полный контроль над стройкой без хаоса и ручной работы
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-elevated transition-all duration-300 border-2 hover:border-primary/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
