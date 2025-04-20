import { Card, CardContent } from "@/components/ui/card";

const StatSection = () => {
  const stats = [
    {
      value: "87%",
      label: "раскрываемость преступлений экстремистской направленности"
    },
    {
      value: "1200+",
      label: "мероприятий по профилактике экстремизма проведено в 2023 году"
    },
    {
      value: "35%",
      label: "снижение количества преступлений экстремистской направленности"
    }
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Эффективность противодействия экстремизму</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-primary-foreground/10 border-none">
              <CardContent className="flex flex-col items-center justify-center p-6">
                <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-center text-primary-foreground/80">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatSection;