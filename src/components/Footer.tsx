import { Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-bold">МВД России</h3>
            </div>
            <p className="text-sm">
              Официальный информационный ресурс по противодействию экстремизму
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Полезные ссылки</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Законодательство РФ</a></li>
              <li><a href="#" className="hover:underline">Госуслуги</a></li>
              <li><a href="#" className="hover:underline">Правовая информация</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <address className="not-italic text-sm">
              <p>г. Москва, ул. Житная, д. 16</p>
              <p>Телефон: 8 (800) 222-74-47</p>
              <p>Email: mvd@mvd.ru</p>
            </address>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-primary-foreground/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} МВД России. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;