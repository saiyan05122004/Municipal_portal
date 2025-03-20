
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-accent/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">МУ</div>
              <span className="font-bold text-lg">МуниципалСервис</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Интерактивный портал для муниципальных услуг. Доступно, быстро, удобно.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Услуги</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services?category=property" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Имущество и земля
                </Link>
              </li>
              <li>
                <Link to="/services?category=social" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Социальная поддержка
                </Link>
              </li>
              <li>
                <Link to="/services?category=documents" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Документы и справки
                </Link>
              </li>
              <li>
                <Link to="/services?category=housing" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  ЖКХ
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Все услуги
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Информация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  О портале
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Часто задаваемые вопросы
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Условия использования
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Политика конфиденциальности
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone size={18} className="mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">8 (800) 123-45-67</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">info@municipalservice.ru</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">г. Москва, ул. Примерная, д. 123</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} МуниципалСервис. Все права защищены Джамалом.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
