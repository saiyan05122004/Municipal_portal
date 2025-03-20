
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[600px] md:min-h-[700px] flex items-center overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background/80"
        style={{
          backgroundImage: 'radial-gradient(circle at 30% 20%, rgba(59, 130, 246, 0.1) 0%, transparent 70%)'
        }}
      />
      
      {/* Abstract shapes */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-primary/5 animate-[pulse_15s_ease-in-out_infinite]" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-primary/5 animate-[pulse_20s_ease-in-out_infinite_1s]" />
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary animate-fade-in">
              Все услуги в одном месте
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-fade-up">
              Муниципальные услуги <span className="text-primary">онлайн</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Получайте муниципальные услуги быстро и удобно, не выходя из дома.
              Экономьте время и упростите взаимодействие с органами власти.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <Button 
                size="lg" 
                className="btn-hover"
                onClick={() => navigate('/services')}
              >
                <Search className="mr-2 h-4 w-4" />
                Найти услуги
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group"
                onClick={() => navigate('/account')}
              >
                Личный кабинет
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            
            <div className="pt-6 flex flex-wrap justify-center lg:justify-start gap-8 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Услуг</p>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-muted-foreground">Доступность</p>
              </div>
              
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">10K+</p>
                <p className="text-sm text-muted-foreground">Пользователей</p>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block">
            <div className="relative animate-blur-in">
              {/* Abstract illustration */}
              <div className="relative transform -rotate-1 glass rounded-2xl p-6 shadow-lg">
                <div className="relative w-full h-[450px] rounded-xl bg-gradient-to-br from-primary/10 to-background overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-10 left-10 w-20 h-20 rounded-lg bg-primary/20"></div>
                  <div className="absolute bottom-20 right-10 w-24 h-24 rounded-lg bg-primary/10"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-primary/5 blur-xl"></div>
                  
                  {/* App interface mockup */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[70%] glass rounded-xl shadow-lg p-4">
                    <div className="h-2 w-20 bg-primary/20 rounded-full mb-4"></div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="h-16 bg-white/80 rounded-lg shadow-sm"></div>
                      <div className="h-16 bg-white/80 rounded-lg shadow-sm"></div>
                      <div className="h-16 bg-white/80 rounded-lg shadow-sm"></div>
                      <div className="h-16 bg-white/80 rounded-lg shadow-sm"></div>
                    </div>
                    <div className="h-24 bg-white/80 rounded-lg shadow-sm mt-3"></div>
                    <div className="mt-4 flex justify-end">
                      <div className="h-8 w-24 bg-primary/20 rounded-md"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Small floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 glass rounded-xl shadow-lg transform rotate-12 animate-[pulse_15s_ease-in-out_infinite]"></div>
              <div className="absolute -bottom-8 -left-8 w-20 h-20 glass rounded-xl shadow-lg transform -rotate-12 animate-[pulse_20s_ease-in-out_infinite_1s]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
