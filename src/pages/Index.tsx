import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import StatSection from "@/components/StatSection";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Органы внутренних дел как субъект противодействия экстремизму</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Министерство внутренних дел Российской Федерации осуществляет комплексную работу 
                по противодействию экстремистской деятельности, направленную на защиту основ 
                конституционного строя, прав и свобод человека и гражданина.
              </p>
              <p>
                В структуре МВД России функционируют специализированные подразделения, 
                обеспечивающие системную работу по выявлению, предупреждению, пресечению и 
                раскрытию преступлений экстремистской направленности.
              </p>
              <p>
                Деятельность органов внутренних дел в сфере противодействия экстремизму 
                регламентирована Федеральным законом "О противодействии экстремистской деятельности", 
                а также другими нормативными правовыми актами Российской Федерации.
              </p>
            </div>
          </div>
        </section>
        
        <InfoCards />
        
        <StatSection />
        
        <section className="py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-secondary rounded-lg p-6 shadow-md">
            <h2 className="text-2xl font-bold mb-4">Обращение к гражданам</h2>
            <p className="mb-4">
              Уважаемые граждане! Противодействие экстремизму – наша общая задача. 
              Если вы стали свидетелем проявлений экстремизма или располагаете информацией 
              о готовящихся противоправных действиях, сообщите об этом в органы внутренних дел.
            </p>
            <p className="font-semibold">
              Телефон доверия МВД России: 8 (800) 222-74-47
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;