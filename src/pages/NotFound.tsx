
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4 animate-fade-up">
        <div className="mb-8">
          <div className="relative inline-block">
            <div className="text-9xl font-bold text-primary/10">404</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl font-bold text-primary">404</div>
            </div>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mb-4">Страница не найдена</h1>
        
        <p className="text-muted-foreground mb-8">
          Запрашиваемая страница не существует или была перемещена.
          Пожалуйста, вернитесь на главную страницу.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Вернуться назад
          </Button>
          
          <Link to="/">
            <Button className="w-full sm:w-auto btn-hover">
              <Home className="mr-2 h-4 w-4" />
              На главную
            </Button>
          </Link>
        </div>
        
        <div className="glass rounded-xl p-6 mt-12 backdrop-blur-md">
          <h2 className="text-lg font-semibold mb-4">Возможно, вас заинтересует:</h2>
          <div className="flex flex-col gap-2">
            <Link to="/services" className="text-primary hover:underline">
              Каталог услуг
            </Link>
            <Link to="/account" className="text-primary hover:underline">
              Личный кабинет
            </Link>
            <Link to="/contacts" className="text-primary hover:underline">
              Контактная информация
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
