
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import ServiceSearch from '@/components/ServiceSearch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, FileCheck, Home, CreditCard, Users, Building, Heart, Car, Bus, Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

// Define custom icon components before using them
const Wallet = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
  </svg>
);

const Gauge = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m12 14 4-4"></path>
    <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
  </svg>
);

const Wrench = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
  </svg>
);

// Mock data for services
const mockServices = [
  // Property category
  {
    id: "1",
    title: "Регистрация права собственности",
    description: "Зарегистрируйте право собственности на недвижимость",
    icon: <Home className="w-6 h-6" />,
    timeEstimate: "5-7 дней",
    documentsCount: 4,
    category: "property"
  },
  {
    id: "2",
    title: "Выписка из ЕГРН",
    description: "Получите выписку из Единого государственного реестра недвижимости",
    icon: <FileCheck className="w-6 h-6" />,
    timeEstimate: "3-5 дней",
    documentsCount: 1,
    category: "property"
  },
  {
    id: "3",
    title: "Кадастровый план участка",
    description: "Получение кадастрового плана земельного участка",
    icon: <FileText className="w-6 h-6" />,
    timeEstimate: "5-7 дней",
    documentsCount: 2,
    category: "property"
  },
  {
    id: "4",
    title: "Разрешение на строительство",
    description: "Получение разрешения на строительство или реконструкцию",
    icon: <Building className="w-6 h-6" />,
    timeEstimate: "10-14 дней",
    documentsCount: 6,
    category: "property"
  },
  
  // Social support category
  {
    id: "5",
    title: "Оформление социальных выплат",
    description: "Оформите заявление на получение социальных выплат",
    icon: <Wallet className="w-6 h-6" />,
    timeEstimate: "7-10 дней",
    documentsCount: 3,
    category: "social"
  },
  {
    id: "6",
    title: "Запись на прием в соцзащиту",
    description: "Запишитесь на прием к специалисту социальной защиты",
    icon: <Users className="w-6 h-6" />,
    timeEstimate: "1-3 дня",
    documentsCount: 1,
    category: "social"
  },
  {
    id: "7",
    title: "Льготы для многодетных семей",
    description: "Оформление льгот и пособий для многодетных семей",
    icon: <Wallet className="w-6 h-6" />,
    timeEstimate: "7-14 дней",
    documentsCount: 4,
    category: "social"
  },
  {
    id: "8",
    title: "Запись на получение путевки",
    description: "Запись на получение льготной путевки в санаторий",
    icon: <Wallet className="w-6 h-6" />,
    timeEstimate: "14-30 дней",
    documentsCount: 5,
    category: "social"
  },
  
  // Documents category
  {
    id: "9",
    title: "Получение справки о составе семьи",
    description: "Получите справку о составе семьи без посещения учреждений",
    icon: <FileText className="w-6 h-6" />,
    timeEstimate: "1-2 дня",
    documentsCount: 2,
    category: "documents"
  },
  {
    id: "10",
    title: "Выписка из домовой книги",
    description: "Получение выписки из домовой книги",
    icon: <FileText className="w-6 h-6" />,
    timeEstimate: "1-3 дня",
    documentsCount: 1,
    category: "documents"
  },
  {
    id: "11",
    title: "Архивная справка",
    description: "Получение архивной справки или копии архивного документа",
    icon: <FileText className="w-6 h-6" />,
    timeEstimate: "7-14 дней",
    documentsCount: 2,
    category: "documents"
  },
  {
    id: "12",
    title: "Справка об отсутствии задолженности",
    description: "Получение справки об отсутствии задолженности по платежам",
    icon: <FileCheck className="w-6 h-6" />,
    timeEstimate: "1-3 дня",
    documentsCount: 1,
    category: "documents"
  },
  
  // Housing category
  {
    id: "13",
    title: "Оплата коммунальных услуг",
    description: "Оплатите услуги ЖКХ онлайн с минимальной комиссией",
    icon: <CreditCard className="w-6 h-6" />,
    timeEstimate: "Моментально",
    documentsCount: 1,
    category: "housing"
  },
  {
    id: "14",
    title: "Подача показаний счетчиков",
    description: "Передача показаний счетчиков воды и электроэнергии",
    icon: <Gauge className="w-6 h-6" />,
    timeEstimate: "Моментально",
    documentsCount: 0,
    category: "housing"
  },
  {
    id: "15",
    title: "Заявка на ремонт",
    description: "Подайте заявку на ремонт или обслуживание общедомового имущества",
    icon: <Wrench className="w-6 h-6" />,
    timeEstimate: "1-5 дней",
    documentsCount: 1,
    category: "housing"
  },
  {
    id: "16",
    title: "Получение субсидии на оплату ЖКХ",
    description: "Оформление субсидии на оплату жилищно-коммунальных услуг",
    icon: <CreditCard className="w-6 h-6" />,
    timeEstimate: "10-14 дней",
    documentsCount: 5,
    category: "housing"
  }
];

const Services: React.FC = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const searchQuery = searchParams.get('search') || '';
  
  // Filter services based on category and search query
  const filteredServices = mockServices.filter(service => {
    const matchesCategory = categoryParam === 'all' || service.category === categoryParam;
    const matchesSearch = !searchQuery || 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        <section className="py-10">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h1 className="text-4xl font-bold mb-4 animate-fade-up">Муниципальные услуги</h1>
              <p className="text-muted-foreground max-w-3xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
                Выберите необходимую услугу из каталога или воспользуйтесь поиском для быстрого доступа
              </p>
            </div>
            
            <div className="mb-12 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <ServiceSearch />
            </div>
            
            <Tabs defaultValue={categoryParam === 'all' ? 'all' : categoryParam} className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <TabsList className="mb-8 flex flex-wrap bg-transparent h-auto space-x-2 space-y-0">
                <TabsTrigger value="all" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Все услуги
                </TabsTrigger>
                <TabsTrigger value="property" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Имущество
                </TabsTrigger>
                <TabsTrigger value="social" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Социальная поддержка
                </TabsTrigger>
                <TabsTrigger value="documents" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  Документы
                </TabsTrigger>
                <TabsTrigger value="housing" className="rounded-full data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  ЖКХ
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
                  {filteredServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      timeEstimate={service.timeEstimate}
                      documentsCount={service.documentsCount}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="property" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
                  {filteredServices.filter(s => s.category === "property").map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      timeEstimate={service.timeEstimate}
                      documentsCount={service.documentsCount}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="social" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
                  {filteredServices.filter(s => s.category === "social").map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      timeEstimate={service.timeEstimate}
                      documentsCount={service.documentsCount}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="documents" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
                  {filteredServices.filter(s => s.category === "documents").map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      timeEstimate={service.timeEstimate}
                      documentsCount={service.documentsCount}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="housing" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
                  {filteredServices.filter(s => s.category === "housing").map((service) => (
                    <ServiceCard
                      key={service.id}
                      id={service.id}
                      title={service.title}
                      description={service.description}
                      icon={service.icon}
                      timeEstimate={service.timeEstimate}
                      documentsCount={service.documentsCount}
                    />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Услуги не найдены</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  По вашему запросу не найдено ни одной услуги. Попробуйте изменить параметры поиска.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
