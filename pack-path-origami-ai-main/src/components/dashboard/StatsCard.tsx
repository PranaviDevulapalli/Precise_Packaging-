
import React from 'react';
import { Card } from '@/components/ui/card';
import { Leaf, ArrowUpRight, ArrowDownRight, TrendingUp } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    trend: 'up' | 'down' | 'neutral';
  };
  icon?: React.ReactNode;
  description?: string;
  className?: string;
}

export const StatsCard = ({ 
  title, 
  value, 
  change, 
  icon, 
  description,
  className 
}: StatsCardProps) => {
  return (
    <Card className={`p-5 h-full ${className || ''}`}>
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl font-bold mt-1">{value}</p>
          
          {change && (
            <div className="flex items-center mt-2">
              {change.trend === 'up' && (
                <>
                  <ArrowUpRight className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm font-medium text-green-600">+{change.value}%</span>
                </>
              )}
              {change.trend === 'down' && (
                <>
                  <ArrowDownRight className="h-4 w-4 text-red-500 mr-1" />
                  <span className="text-sm font-medium text-red-600">-{change.value}%</span>
                </>
              )}
              {change.trend === 'neutral' && (
                <>
                  <TrendingUp className="h-4 w-4 text-gray-500 mr-1" />
                  <span className="text-sm font-medium text-gray-600">{change.value}%</span>
                </>
              )}
            </div>
          )}
          {description && <p className="text-xs text-gray-500 mt-2">{description}</p>}
        </div>
        
        <div className="bg-gray-100 rounded-full p-2 h-fit">
          {icon || <Leaf className="h-5 w-5 text-eco-500" />}
        </div>
      </div>
    </Card>
  );
};
