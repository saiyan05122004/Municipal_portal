
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import Testimonials from '@/components/Testimonials';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { FileText, FileCheck, Home, CreditCard, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const popularServices = [
  {
    id: "1",
    title: "Получение справки о составе семьи",
    description: "Получите справку о составе семьи без посещения учреждений",
    icon: <FileText className="w-6 h-6" />,
    timeEstimate: "1-2 дня",
    documentsCount: 2
  },
  {
    id: "2",
    title: "Оплата коммунальных услуг",
    description: "Оплатите услуги ЖКХ онлайн с минимальной комиссией",
    icon: <CreditCard className="w-6 h-6" />,
    timeEstimate: "Моментально",
    documentsCount: 1
  },
  {
    id: "3",
    title: "Регистрация права собственности",
    description: "Зарегистрируйте право собственности на недвижимость",
    icon: <Home className="w-6 h-6" />,
    timeEstimate: "5-7 дней",
    documentsCount: 4
  },
  {
    id: "4",
    title: "Выписка из ЕГРН",
    description: "Получите выписку из Единого государственного реестра недвижимости",
    icon: <FileCheck className="w-6 h-6" />,
    timeEstimate: "3-5 дней",
    documentsCount: 1
  }
];

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Popular Services Section */}
        <section className="py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Популярные услуги
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Наиболее востребованные услуги
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Быстрый доступ к часто используемым услугам, которые помогут вам 
                решить повседневные задачи без лишних сложностей
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
              {popularServices.map((service, index) => (
                <ServiceCard
                  key={index}
                  id={service.id}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  timeEstimate={service.timeEstimate}
                  documentsCount={service.documentsCount}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Link to="/services">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group animate-fade-up"
                >
                  Все услуги
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <FeatureSection />
        
        {/* How It Works Section */}
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
                Как это работает
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Получение услуги за 4 простых шага
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Мы сделали процесс получения муниципальных услуг максимально простым 
                и понятным для всех пользователей
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
              {[
                {
                  number: "01",
                  title: "Регистрация",
                  description: "Создайте личный кабинет или войдите в существующий аккаунт"
                },
                {
                  number: "02",
                  title: "Выбор услуги",
                  description: "Найдите нужную услугу через поиск или каталог"
                },
                {
                  number: "03",
                  title: "Заполнение заявки",
                  description: "Заполните необходимые данные и прикрепите документы"
                },
                {
                  number: "04",
                  title: "Получение результата",
                  description: "Отслеживайте статус и получите результат онлайн"
                }
              ].map((step, index) => (
                <div key={index} className="glass rounded-xl p-6 text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mt-4 mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="glass rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-60 h-60 bg-primary/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
              </div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы начать использовать портал?</h2>
                  <p className="text-muted-foreground max-w-2xl mb-0">
                    Создайте личный кабинет и получите доступ ко всем муниципальным 
                    услугам в несколько кликов
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-hover">
                    <Users className="mr-2 h-4 w-4" />
                    Создать аккаунт
                  </Button>
                  
                  <Button variant="outline" size="lg">
                    Узнать больше
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
