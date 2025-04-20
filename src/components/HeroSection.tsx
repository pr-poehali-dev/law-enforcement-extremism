import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-primary/5 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Органы внутренних дел на страже безопасности общества
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700">
            Комплексный подход МВД России к противодействию экстремистской деятельности 
            и обеспечению безопасности граждан Российской Федерации
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90">
                Подробнее <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contacts">
              <Button variant="outline">
                Сообщить о противоправной деятельности
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;