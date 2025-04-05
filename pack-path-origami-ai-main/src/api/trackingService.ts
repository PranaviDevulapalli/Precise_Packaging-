
import apiClient from './apiClient';

export interface TrackingData {
  trackingId: string;
  packageInfo: {
    productName: string;
    trackingId: string;
    packageType: string;
    shipmentDate: string;
    expectedDelivery: string;
  };
  status: {
    status: string;
    location: string;
    nextStop: string;
    distanceTraveled: string;
    percentComplete: number;
    updatedAt: string;
  };
  conditions: {
    temperature: string;
    humidity: string;
    integrity: string;
  };
}

export const getPackageTracking = async (trackingId: string): Promise<TrackingData> => {
  try {
    const response = await apiClient.get(`/tracking/${trackingId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching tracking data for ${trackingId}:`, error);
    throw error;
  }
};
