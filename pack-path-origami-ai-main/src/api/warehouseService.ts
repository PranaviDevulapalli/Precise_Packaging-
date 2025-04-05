
import apiClient from './apiClient';

export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  location: string;
  packaging: string;
  status: string;
}

export interface WarehouseStats {
  spaceUtilization: string;
  inventoryItems: string;
  turnoverRate: string;
  shippingEfficiency: string;
}

export const getInventoryItems = async (page = 1, limit = 10, search = ''): Promise<{
  items: InventoryItem[];
  total: number;
}> => {
  try {
    const response = await apiClient.get('/warehouse/inventory', {
      params: { page, limit, search }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching inventory items:', error);
    throw error;
  }
};

export const getWarehouseStats = async (): Promise<WarehouseStats> => {
  try {
    const response = await apiClient.get('/warehouse/stats');
    return response.data;
  } catch (error) {
    console.error('Error fetching warehouse stats:', error);
    throw error;
  }
};
