
import React from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  rating: number;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ 
  content, 
  author, 
  role, 
  rating,
  className
}) => {
  return (
    <div className={cn(
      "glass rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md",
      className
    )}>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"
            )}
          />
        ))}
      </div>
      
      <p className="text-sm text-foreground mb-4 italic">"{content}"</p>
      
      <div>
        <p className="font-semibold text-sm">{author}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Портал очень удобный в использовании. Я смог получить необходимые документы, не выходя из дома, что сэкономило мне массу времени.",
      author: "Александр Иванов",
      role: "Предприниматель",
      rating: 5
    },
    {
      content: "Раньше приходилось тратить целый день на посещение разных кабинетов. Теперь всё можно сделать за несколько минут онлайн!",
      author: "Екатерина Смирнова",
      role: "Пенсионерка",
      rating: 4
    },
    {
      content: "Отличный сервис с понятным интерфейсом. Заявку обработали быстро, документы получил в электронном виде без проблем.",
      author: "Дмитрий Петров",
      role: "Инженер",
      rating: 5
    },
    {
      content: "Функция отслеживания статуса заявки очень полезна, всегда знаешь на каком этапе находится твой запрос.",
      author: "Марина Соколова",
      role: "Учитель",
      rating: 5
    },
    {
      content: "Удобная система оплаты и прозрачные тарифы. Всё четко и без скрытых платежей.",
      author: "Сергей Козлов",
      role: "Юрист",
      rating: 4
    }
  ];
  
  const [activeIndex, setActiveIndex] = React.useState(0);
  
  const showNextTestimonials = () => {
    setActiveIndex((prev) => 
      prev + 1 > testimonials.length - 3 ? 0 : prev + 1
    );
  };
  
  const showPrevTestimonials = () => {
    setActiveIndex((prev) => 
      prev - 1 < 0 ? testimonials.length - 3 : prev - 1
    );
  };

  return (
    <section className="py-20 bg-accent/50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            Отзывы
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Что говорят наши пользователи</h2>
          <p className="text-muted-foreground">
            Тысячи жителей уже оценили удобство нашего портала 
            и получили необходимые услуги быстро и без лишних хлопот
          </p>
        </div>
        
        {/* Desktop view - grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-8 stagger-animation">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        {/* Mobile view - carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <TestimonialCard
                    content={testimonial.content}
                    author={testimonial.author}
                    role={testimonial.role}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={showPrevTestimonials}
              className="rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={showNextTestimonials}
              className="rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
