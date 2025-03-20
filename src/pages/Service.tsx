
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  FileText,
  Clock,
  ChevronRight,
  ArrowLeft,
  Download,
  CheckCircle,
  AlertCircle,
  Wallet,
  Gauge,
  Wrench,
  CreditCard,
  FileCheck,
  Home,
  Building,
  Users
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

// Mock data for service details
const services = [
  {
    id: "1",
    title: "Регистрация права собственности",
    description: "Зарегистрируйте право собственности на недвижимость",
    longDescription: "Услуга позволяет зарегистрировать право собственности на объекты недвижимости, включая квартиры, дома, земельные участки и другое недвижимое имущество. После регистрации вы получите выписку из ЕГРН, подтверждающую ваше право собственности.",
    icon: <Home className="w-6 h-6" />,
    timeEstimate: "5-7 дней",
    documentsCount: 4,
    category: "property",
    documents: [
      "Паспорт заявителя",
      "Документ, подтверждающий основание для регистрации права (договор купли-продажи, дарения, наследства и т.д.)",
      "Технический план объекта недвижимости",
      "Квитанция об оплате государственной пошлины"
    ],
    steps: [
      "Заполните электронную форму заявления",
      "Загрузите необходимые документы в электронном виде",
      "Оплатите государственную пошлину",
      "Отслеживайте статус заявления в личном кабинете",
      "Получите электронную выписку из ЕГРН"
    ],
    faq: [
      {
        question: "Какова стоимость регистрации права собственности?",
        answer: "Государственная пошлина за регистрацию права собственности составляет 2000 рублей для физических лиц и 22000 рублей для юридических лиц."
      },
      {
        question: "Можно ли зарегистрировать право собственности на земельный участок?",
        answer: "Да, данная услуга позволяет зарегистрировать право собственности на земельные участки, а также на другие объекты недвижимости."
      },
      {
        question: "Как долго действительна выписка из ЕГРН?",
        answer: "Выписка из ЕГРН не имеет срока действия, однако для некоторых сделок может потребоваться актуальная выписка, полученная не ранее чем за 30 дней до даты сделки."
      }
    ],
    price: 2000,
    relatedServices: ["2", "3", "4"]
  },
  // Add more service details as needed
];

// Icons for service categories
const CategoryIcon: React.FC<{ category: string }> = ({ category }) => {
  switch (category) {
    case 'property':
      return <Home className="w-5 h-5" />;
    case 'social':
      return <Users className="w-5 h-5" />;
    case 'documents':
      return <FileText className="w-5 h-5" />;
    case 'housing':
      return <Building className="w-5 h-5" />;
    default:
      return <FileText className="w-5 h-5" />;
  }
};

// Status component
const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  switch (status) {
    case 'available':
      return (
        <div className="flex items-center text-green-600 bg-green-50 px-3 py-1 rounded-full text-sm">
          <CheckCircle className="w-4 h-4 mr-1" />
          <span>Доступна онлайн</span>
        </div>
      );
    case 'partial':
      return (
        <div className="flex items-center text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full text-sm">
          <AlertCircle className="w-4 h-4 mr-1" />
          <span>Частично доступна онлайн</span>
        </div>
      );
    default:
      return null;
  }
};

const Service: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Find service by ID
  const service = services.find(s => s.id === id);
  
  // If service not found, redirect to services page
  if (!service) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-24">
          <div className="container mx-auto px-4 py-12 text-center">
            <div className="mb-6">
              <AlertCircle className="w-16 h-16 mx-auto text-muted-foreground" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Услуга не найдена</h1>
            <p className="text-muted-foreground mb-8">
              Запрашиваемая услуга не найдена или была удалена.
            </p>
            <Button 
              onClick={() => navigate('/services')}
              className="btn-hover"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Вернуться к списку услуг
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-muted-foreground mb-8 animate-fade-in">
            <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <Link to="/services" className="hover:text-foreground transition-colors">Услуги</Link>
            <ChevronRight className="w-4 h-4 mx-1" />
            <span className="text-foreground">{service.title}</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Service header */}
              <div className="animate-fade-up">
                <div className="flex items-center gap-2 mb-4">
                  <Link to="/services" className="text-primary hover:text-primary/80">
                    <Button variant="ghost" size="sm" className="gap-1">
                      <ArrowLeft className="h-4 w-4" />
                      <span>Назад</span>
                    </Button>
                  </Link>
                  <StatusBadge status="available" />
                </div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {service.icon}
                  </div>
                  
                  <div>
                    <div className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary mb-2">
                      <CategoryIcon category={service.category} />
                      <span className="ml-1">
                        {service.category === 'property' && 'Имущество'}
                        {service.category === 'social' && 'Социальная поддержка'}
                        {service.category === 'documents' && 'Документы'}
                        {service.category === 'housing' && 'ЖКХ'}
                      </span>
                    </div>
                    <h1 className="text-3xl font-bold">{service.title}</h1>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 text-sm mb-6">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Срок: {service.timeEstimate}</span>
                  </div>
                  
                  <div className="flex items-center text-muted-foreground">
                    <FileText className="w-4 h-4 mr-1" />
                    <span>Документов: {service.documentsCount}</span>
                  </div>
                  
                  {service.price && (
                    <div className="flex items-center text-muted-foreground">
                      <Wallet className="w-4 h-4 mr-1" />
                      <span>Госпошлина: {service.price} ₽</span>
                    </div>
                  )}
                </div>
                
                <p className="text-muted-foreground">{service.longDescription}</p>
              </div>
              
              {/* Steps */}
              <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <h2 className="text-2xl font-semibold mb-6">Порядок получения услуги</h2>
                
                <div className="space-y-4">
                  {service.steps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <p>{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Required documents */}
              <div className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <h2 className="text-2xl font-semibold mb-6">Необходимые документы</h2>
                
                <div className="space-y-3">
                  {service.documents.map((doc, index) => (
                    <div key={index} className="flex items-center p-4 border rounded-lg">
                      <FileText className="w-5 h-5 text-muted-foreground mr-3" />
                      <span>{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* FAQ */}
              <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <h2 className="text-2xl font-semibold mb-6">Часто задаваемые вопросы</h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {service.faq.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Application card */}
              <Card className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4">Подать заявление</h3>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-6">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>Срок оказания: {service.timeEstimate}</span>
                  </div>
                  
                  <Button className="w-full mb-4 btn-hover">
                    Начать оформление
                  </Button>
                  
                  <div className="text-center text-sm text-muted-foreground">
                    Для подачи заявления требуется авторизация
                  </div>
                  
                  <Separator className="my-6" />
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Госпошлина:</span>
                      <span className="font-medium">{service.price || 0} ₽</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Срок оказания:</span>
                      <span className="font-medium">{service.timeEstimate}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Документов:</span>
                      <span className="font-medium">{service.documentsCount}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Download regulations */}
              <Card className="animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Документы и регламенты</h3>
                  
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2 group">
                    <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    Регламент предоставления услуги
                  </Button>
                </CardContent>
              </Card>
              
              {/* Related services */}
              <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <h3 className="font-semibold text-lg mb-4">Похожие услуги</h3>
                
                <div className="space-y-3">
                  {service.relatedServices && service.relatedServices.map((relId) => {
                    const relatedService = services.find(s => s.id === relId);
                    if (!relatedService) return null;
                    
                    return (
                      <Link 
                        key={relId} 
                        to={`/service/${relId}`}
                        className="flex items-center p-4 border rounded-lg hover:bg-accent transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                          {relatedService.icon || <FileText className="w-5 h-5" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{relatedService.title}</h4>
                        </div>
                        <ChevronRight className="w-5 h-5 text-muted-foreground" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Service;
