
import apiClient from './apiClient';

export interface ProductData {
  id: string;
  name: string;
  dimensions: {
    length: number;
    width: number;
    height: number;
  };
  optimizedDimensions: {
    length: number;
    width: number;
    height: number;
  };
  materialSavings: number;
  packagingType: string;
  carbonReduction: number;
}

export interface OptimizationResult {
  product: ProductData;
  specialHandling: string[];
}

export const analyzeProduct = async (
  fileData: FormData | null, 
  manualData?: any
): Promise<OptimizationResult> => {
  try {
    let response;
    
    if (fileData) {
      response = await apiClient.post('/optimize/analyze-csv', fileData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
    } else if (manualData) {
      response = await apiClient.post('/optimize/analyze-manual', manualData);
    } else {
      throw new Error('Either file data or manual data must be provided');
    }
    
    return response.data;
  } catch (error) {
    console.error('Error analyzing product:', error);
    throw error;
  }
};
