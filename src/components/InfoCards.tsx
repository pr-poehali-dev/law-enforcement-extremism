import { 
  Shield, 
  BookOpen, 
  Scale, 
  Users, 
  AlertTriangle, 
  FileText 
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const InfoCards = () => {
  const cards = [
    {
      title: "Нормативная база",
      description: "Законодательные акты, регламентирующие деятельность органов внутренних дел в сфере противодействия экстремизму",
      icon: <Scale className="h-6 w-6 text-primary" />
    },
    {
      title: "Направления работы",
      description: "Основные направления деятельности МВД России в сфере противодействия экстремистской деятельности",
      icon: <FileText className="h-6 w-6 text-primary" />
    },
    {
      title: "Профилактика",
      description: "Меры по предупреждению экстремистской деятельности и воспитанию толерантности в обществе",
      icon: <Users className="h-6 w-6 text-primary" />
    },
    {
      title: "Правовое просвещение",
      description: "Информационно-просветительская работа с населением по вопросам противодействия экстремизму",
      icon: <BookOpen className="h-6 w-6 text-primary" />
    },
    {
      title: "Признаки экстремизма",
      description: "Как распознать экстремистские материалы и противоправную деятельность",
      icon: <AlertTriangle className="h-6 w-6 text-primary" />
    },
    {
      title: "Защита граждан",
      description: "Комплекс мер, направленных на обеспечение безопасности граждан от экстремистских угроз",
      icon: <Shield className="h-6 w-6 text-primary" />
    }
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Ключевые направления деятельности</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center gap-4">
                {card.icon}
                <CardTitle>{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground/80">{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoCards;