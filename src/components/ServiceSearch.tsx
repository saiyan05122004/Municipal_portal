
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

interface ServiceSearchProps {
  className?: string;
}

const ServiceSearch: React.FC<ServiceSearchProps> = ({ className }) => {
  const [searchParams] = useSearchParams();
  const initialSearchTerm = searchParams.get('search') || '';
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  const [category, setCategory] = useState('all');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/services?search=${encodeURIComponent(searchTerm)}&category=${category}`);
  };

  const categories = [
    { id: 'all', name: 'Все категории' },
    { id: 'property', name: 'Имущество' },
    { id: 'social', name: 'Социальная поддержка' },
    { id: 'documents', name: 'Документы' },
    { id: 'housing', name: 'ЖКХ' },
  ];

  const clearSearch = () => {
    setSearchTerm('');
    navigate('/services');
  };

  return (
    <div className={className}>
      <form onSubmit={handleSearch} className="glass w-full rounded-2xl p-6 shadow-sm">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Поиск услуг..."
                className="pl-10 w-full rounded-lg"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X size={18} />
                </button>
              )}
            </div>
            <Button type="submit" className="btn-hover">
              <Search className="mr-2 h-4 w-4" />
              Найти
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                type="button"
                variant={category === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(cat.id)}
                className="rounded-full text-xs"
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </div>
      </form>
    </div>
  );
};

export default ServiceSearch;
