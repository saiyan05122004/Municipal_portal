
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Search, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { SearchInput } from './SearchInput';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: 'Главная', path: '/' },
    { name: 'Услуги', path: '/services' },
    { name: 'О портале', path: '/about' },
    { name: 'Контакты', path: '/contacts' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'glass shadow-sm py-2' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center gap-2 animate-fade-in"
        >
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold">МУ</div>
          <span className="font-bold text-lg">МуниципалСервис</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-1 animate-fade-in">
          {menuItems.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                location.pathname === item.path
                ? 'text-primary bg-primary/10'
                : 'text-foreground/70 hover:text-foreground hover:bg-accent'
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="flex items-center gap-2 animate-fade-in">
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 rounded-full hover:bg-accent transition-colors duration-200"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
          <Link to="/account">
            <Button
              variant="ghost"
              className="p-2 rounded-full hover:bg-accent transition-colors duration-200"
              aria-label="Account"
            >
              <User size={20} />
            </Button>
          </Link>
          
          <Button
            variant="default"
            size="sm"
            className="hidden md:flex btn-hover rounded-full"
          >
            Войти в личный кабинет
          </Button>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-accent transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-1 mx-4 rounded-xl overflow-hidden shadow-md animate-slide-in-right">
          <div className="py-4 px-6 flex flex-col space-y-1">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className={cn(
                  'px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                  location.pathname === item.path
                  ? 'text-primary bg-primary/10'
                  : 'text-foreground/80 hover:text-foreground hover:bg-accent'
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 pb-2">
              <Button
                variant="default"
                className="w-full btn-hover rounded-lg"
                onClick={() => {}}
              >
                Войти в личный кабинет
              </Button>
            </div>
          </div>
        </div>
      )}
      
      {/* Search overlay */}
      {isSearchOpen && (
        <div className="glass mt-1 mx-4 rounded-xl overflow-hidden shadow-md animate-slide-in-right">
          <div className="py-4 px-6">
            <SearchInput 
              onClose={() => setIsSearchOpen(false)}
              placeholder="Поиск услуг..."
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
