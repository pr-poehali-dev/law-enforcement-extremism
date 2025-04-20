import { Link } from 'react-router-dom';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Shield className="h-8 w-8 mr-2" />
            <Link to="/" className="text-2xl font-bold">МВД России</Link>
          </div>
          
          <NavigationMenu className="text-primary-foreground">
            <NavigationMenuList>
              <NavigationMenuItem>
                {/* Используем только NavigationMenuLink без Link */}
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  asChild
                >
                  <Link to="/">Главная</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  asChild
                >
                  <Link to="/about">О противодействии</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  asChild
                >
                  <Link to="/structure">Структура</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  className={navigationMenuTriggerStyle()} 
                  asChild
                >
                  <Link to="/contacts">Контакты</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;