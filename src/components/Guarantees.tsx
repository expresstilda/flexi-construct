import { Card } from "@/components/ui/card";
import { Shield, Users, FileCheck, HeadphonesIcon } from "lucide-react";

const Guarantees = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Договор с гарантиями",
      description: "Работаем официально. Честные сроки и фиксация этапов."
    },
    {
      icon: Users,
      title: "Обучение персонала",
      description: "Готовим вашу команду к работе с системой. Без сложностей."
    },
    {
      icon: FileCheck,
      title: "Полная документация",
      description: "Передаём код, архитектуру и инструкции. Система остаётся у вас."
    },
    {
      icon: HeadphonesIcon,
      title: "Сопровождение",
      description: "Поддерживаем на этапе внедрения и после запуска."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Безопасно, прозрачно, с поддержкой на каждом этапе
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы обучаем персонал, сопровождаем внедрение, адаптируем систему под задачи
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {guarantees.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-card transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Guarantees;
