
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Leaf, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { getCarbonMetrics, CarbonMetricsData } from '@/api/carbonService';

interface CarbonMetricsProps {
  totalSavings?: number;
  goal?: number;
  creditsEarned?: number;
}

export const CarbonMetrics = ({ 
  totalSavings: initialTotalSavings, 
  goal: initialGoal,
  creditsEarned: initialCreditsEarned 
}: CarbonMetricsProps) => {
  const [progress, setProgress] = useState(0);
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['carbonMetrics'],
    queryFn: getCarbonMetrics,
  });
  
  const metrics: CarbonMetricsData = data || {
    totalSavings: initialTotalSavings || 0,
    goal: initialGoal || 1,
    creditsEarned: initialCreditsEarned || 0,
    materialEfficiency: 92.5,
    yearOverYearImprovement: 18,
    sustainabilityImpact: {
      warehouseReduction: 'Reduced warehouse space requirements by 15%',
      wasteReduction: 'Eliminated 3,540 kg of packaging waste',
      fuelReduction: 'Optimized logistics reduced fuel usage by 8%',
    }
  };
  
  const progressPercentage = Math.min((metrics.totalSavings / metrics.goal) * 100, 100);
  
  useEffect(() => {
    // Animate progress bar
    const timer = setTimeout(() => {
      setProgress(progressPercentage);
    }, 500);
    return () => clearTimeout(timer);
  }, [progressPercentage]);

  if (error) {
    return (
      <Card className="p-6">
        <div className="text-center text-red-500">
          Error loading carbon metrics data. Please try again later.
        </div>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
        <h3 className="font-medium text-lg flex items-center">
          <Leaf className="mr-2 h-5 w-5 text-eco-600" />
          Carbon Credits & Impact
        </h3>
        {isLoading ? (
          <div className="animate-pulse h-6 w-32 bg-gray-200 rounded"></div>
        ) : (
          <Badge className="bg-eco-100 text-eco-800 hover:bg-eco-100">
            Carbon Positive
          </Badge>
        )}
      </div>

      <div className="p-5 space-y-6">
        {isLoading ? (
          <div className="space-y-4">
            <div className="animate-pulse h-4 w-full bg-gray-200 rounded"></div>
            <div className="animate-pulse h-2 w-full bg-gray-200 rounded"></div>
            <div className="grid grid-cols-2 gap-4">
              <div className="animate-pulse h-24 bg-gray-200 rounded"></div>
              <div className="animate-pulse h-24 bg-gray-200 rounded"></div>
            </div>
          </div>
        ) : (
          <>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Carbon Reduction Progress</span>
                <span className="text-sm text-eco-700 font-bold">{metrics.totalSavings.toLocaleString()} kg CO₂e</span>
              </div>
              <Progress value={progress} className="h-2 bg-gray-100" />
              <div className="flex justify-between mt-2">
                <span className="text-xs text-gray-500">{Math.round(progressPercentage)}% of goal</span>
                <span className="text-xs text-gray-500">{metrics.goal.toLocaleString()} kg CO₂e goal</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Carbon Credits Earned</span>
                  <TrendingUp className="h-4 w-4 text-eco-500" />
                </div>
                <p className="text-2xl font-bold text-eco-700">{metrics.creditsEarned.toLocaleString()}</p>
                <p className="text-xs text-gray-500 mt-1">
                  Equivalent to planting {Math.round(metrics.creditsEarned * 10)} trees
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Material Efficiency</span>
                  <Badge className="bg-eco-100 text-eco-700 hover:bg-eco-100">+{metrics.yearOverYearImprovement}% YoY</Badge>
                </div>
                <p className="text-2xl font-bold text-eco-700">{metrics.materialEfficiency}%</p>
                <p className="text-xs text-gray-500 mt-1">
                  Material usage optimized with AI
                </p>
              </div>
            </div>
            
            <div className="bg-eco-50 rounded-lg p-4 border border-eco-100">
              <h4 className="font-medium text-eco-800 mb-2">Sustainability Impact</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-eco-500 mr-2"></div>
                  <span>{metrics.sustainabilityImpact.warehouseReduction}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-eco-500 mr-2"></div>
                  <span>{metrics.sustainabilityImpact.wasteReduction}</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-eco-500 mr-2"></div>
                  <span>{metrics.sustainabilityImpact.fuelReduction}</span>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </Card>
  );
};
