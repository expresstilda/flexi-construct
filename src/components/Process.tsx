import { Card } from "@/components/ui/card";
import { Phone, FileSearch, Rocket, TrendingUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Phone,
      number: "01",
      title: "Звонок и краткий бриф",
      description: "Обсуждаем ваши задачи и процессы. Без многостраничных презентаций — только суть."
    },
    {
      icon: FileSearch,
      number: "02",
      title: "Аудит процессов",
      description: "Изучаем как работают ПТО, подрядчики, бухгалтерия. Описываем архитектуру под вас."
    },
    {
      icon: Rocket,
      number: "03",
      title: "MVP за 60 дней",
      description: "Запускаем на одном объекте. Каждые 2–3 недели показываем результат и корректируем."
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Масштабируем",
      description: "Переносим систему на другие ЖК. Обучаем команды, адаптируем под новые задачи."
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Пошаговая работа без риска: от пилота до полной системы
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Прозрачный процесс с результатами на каждом этапе
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index} 
                className="p-8 relative overflow-hidden hover:shadow-elevated transition-all duration-300 border-2 hover:border-accent/20"
              >
                <div className="absolute top-4 right-4 text-7xl font-bold text-primary/5">
                  {step.number}
                </div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
