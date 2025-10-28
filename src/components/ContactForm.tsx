import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Спасибо за заявку! Мы свяжемся с вами в течение 24 часов.");
    setFormData({ name: "", company: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact-form" className="py-20 bg-gradient-to-br from-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 text-primary-foreground">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Хотите увидеть, как это будет работать у вас?
            </h2>
            <p className="text-xl opacity-95">
              Оставьте заявку — мы разберёмся в ваших процессах и покажем прототип за 2 недели.
              <br />
              Без обязательств, просто польза.
            </p>
          </div>
          
          <Card className="p-8 md:p-12 shadow-elevated">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Ваше имя *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg"
                />
              </div>
              
              <div>
                <Input
                  type="text"
                  name="company"
                  placeholder="Компания *"
                  value={formData.company}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Телефон *"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="h-12 text-lg"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Расскажите кратко о ваших задачах (необязательно)"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="text-lg resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 h-auto shadow-elevated"
              >
                👉 Получить консультацию
              </Button>
              
              <p className="text-sm text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
