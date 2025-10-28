import { Card } from "@/components/ui/card";
import { Building2, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import testimonialImage from "@/assets/testimonial-person.jpg";

const CaseStudy = () => {
  const stats = [
    { icon: Building2, value: "4", label: "Жилых комплекса" },
    { icon: Users, value: "180+", label: "Подрядчиков" },
    { icon: TrendingUp, value: "в 5 раз", label: "Быстрее отчётность" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Система уже работает — вот как она изменила работу застройщика
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-8 text-center hover:shadow-card transition-shadow">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground text-lg">{stat.label}</div>
                </Card>
              );
            })}
          </div>
          
          <Card className="p-8 md:p-12 bg-gradient-to-br from-secondary to-background border-2">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <img 
                  src={testimonialImage} 
                  alt="Довольный клиент" 
                  className="rounded-2xl w-full aspect-square object-cover shadow-card"
                />
              </div>
              
              <div className="md:col-span-2 space-y-6">
                <div className="text-3xl font-bold leading-relaxed">
                  «Мы раньше собирали отчёт 2 дня. Сейчас — 10 минут, без ошибок.»
                </div>
                
                <ul className="space-y-3">
                  {[
                    "Подрядчики сдают акты онлайн — без звонков и встреч",
                    "Отставания по срокам выявляются автоматически",
                    "Инвесторы получают актуальные данные в один клик",
                    "ПТО, бухгалтерия и прорабы работают без дублирования"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-accent mt-1" />
                      <span className="text-lg text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="text-muted-foreground">
                  <span className="font-semibold">Директор по строительству</span>
                  <br />
                  Крупный застройщик, Москва
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
