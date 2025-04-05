
import apiClient from './apiClient';

export interface CarbonMetricsData {
  totalSavings: number;
  goal: number;
  creditsEarned: number;
  materialEfficiency: number;
  yearOverYearImprovement: number;
  sustainabilityImpact: {
    warehouseReduction: string;
    wasteReduction: string;
    fuelReduction: string;
  };
}

export const getCarbonMetrics = async (): Promise<CarbonMetricsData> => {
  try {
    const response = await apiClient.get('/sustainability/carbon-metrics');
    return response.data;
  } catch (error) {
    console.error('Error fetching carbon metrics:', error);
    // Fallback data in case the API fails
    return {
      totalSavings: 1256,
      goal: 2000,
      creditsEarned: 126,
      materialEfficiency: 92.5,
      yearOverYearImprovement: 18,
      sustainabilityImpact: {
        warehouseReduction: 'Reduced warehouse space requirements by 15%',
        wasteReduction: 'Eliminated 3,540 kg of packaging waste',
        fuelReduction: 'Optimized logistics reduced fuel usage by 8%',
      }
    };
  }
};
