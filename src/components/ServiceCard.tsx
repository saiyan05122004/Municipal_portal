
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  timeEstimate?: string;
  documentsCount?: number;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  id,
  title,
  description,
  icon,
  timeEstimate,
  documentsCount,
  className
}) => {
  return (
    <Link 
      to={`/service/${id}`}
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:translate-y-[-2px]",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          {icon || (
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <FileText className="w-6 h-6" />
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        
        <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/50">
          <div className="flex items-center gap-4">
            {timeEstimate && (
              <div className="flex items-center text-xs text-muted-foreground">
                <Clock className="w-3 h-3 mr-1" />
                <span>{timeEstimate}</span>
              </div>
            )}
            
            {documentsCount !== undefined && (
              <div className="flex items-center text-xs text-muted-foreground">
                <FileText className="w-3 h-3 mr-1" />
                <span>{documentsCount} документов</span>
              </div>
            )}
          </div>
          
          <div className="text-primary group-hover:translate-x-1 transition-transform duration-300">
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>
      
      {/* Hover effect */}
      <div className="absolute inset-0 border-2 border-primary/0 rounded-xl transition-all duration-300 group-hover:border-primary/20"></div>
    </Link>
  );
};

export default ServiceCard;
