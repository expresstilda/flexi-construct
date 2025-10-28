import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90 z-0" />
      <div className="absolute inset-0 opacity-20 z-0">
        <img 
          src={heroImage} 
          alt="Construction management system" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-primary-foreground">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Управляйте строительством прозрачно, без хаоса и Excel
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 opacity-95">
            Цифровая система под ваши процессы. Никакой лишней функциональности. 
            Запуск за 60 дней — на базе реального кейса.
          </p>
          
          <ul className="space-y-4 mb-10">
            {[
              "Контроль выполненных работ, сроков и актов — в реальном времени",
              "Минус 80% ручной рутины: без Excel, фото в мессенджерах и беготни",
              "Всё под рукой: ПТО, бухгалтерия, подрядчики — работают в одной системе",
              "Безопасность и гибкость: код, данные и сервер — ваши"
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 text-accent mt-1" />
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>
          
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 h-auto shadow-elevated"
          >
            ✅ Получить консультацию
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
