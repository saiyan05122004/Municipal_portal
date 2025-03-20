
import React from 'react';
import { Search, Clock, FileText, ShieldCheck, CreditCard, BarChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn("glass rounded-xl p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-md", className)}>
      <div className="mb-4 bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center text-primary">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Удобный поиск",
      description: "Находите нужные услуги за считанные секунды с помощью интуитивного поиска"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Экономия времени",
      description: "Получайте услуги онлайн без необходимости посещать офисы лично"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Электронные документы",
      description: "Загружайте и получайте документы в электронном формате с электронной подписью"
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Безопасность",
      description: "Ваши данные надежно защищены современными технологиями шифрования"
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Онлайн оплата",
      description: "Оплачивайте услуги удобным для вас способом прямо на портале"
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Отслеживание статуса",
      description: "Следите за статусом ваших заявок в режиме реального времени"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-primary/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Преимущества
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Почему стоит использовать наш портал</h2>
          <p className="text-muted-foreground">
            Мы создали удобную платформу для получения муниципальных услуг, 
            которая экономит ваше время и делает процесс максимально комфортным
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-animation">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
