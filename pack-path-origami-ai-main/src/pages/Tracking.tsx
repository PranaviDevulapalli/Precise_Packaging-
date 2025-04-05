
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BlockchainTracker } from '@/components/tracking/BlockchainTracker';
import { 
  Search, Truck, Package, MapPin, 
  Clock, Thermometer, DropletIcon, ShieldCheck 
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ShipmentTracking = () => {
  const [trackingId, setTrackingId] = useState('');
  const [isTracking, setIsTracking] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) {
      setIsTracking(true);
    }
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shipment Tracking</h1>
            <p className="text-gray-600 mt-1">
              Real-time blockchain-secured tracking and monitoring
            </p>
          </div>
        </div>

        <Card className="mb-6 p-6">
          <form onSubmit={handleTrack}>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="trackingId">Tracking ID</Label>
                <Input 
                  id="trackingId" 
                  placeholder="Enter shipment tracking number" 
                  value={trackingId}
                  onChange={(e) => setTrackingId(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="flex items-end">
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Track Shipment
                </Button>
              </div>
            </div>
          </form>
        </Card>

        {isTracking ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
              <Card className="p-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blockchain-100 flex items-center justify-center mr-4">
                    <Package className="h-5 w-5 text-blockchain-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Shipment Information</h3>
                    <p className="text-sm text-gray-500 mt-1">Premium Electronics Package</p>
                    
                    <div className="mt-4 space-y-3">
                      <div>
                        <p className="text-xs text-gray-500">Tracking ID</p>
                        <p className="text-sm font-medium">TRK-{trackingId || '45692'}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Package Type</p>
                        <p className="text-sm font-medium">Origami Structure (Optimized)</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Shipment Date</p>
                        <p className="text-sm font-medium">April 5, 2025</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Expected Delivery</p>
                        <p className="text-sm font-medium">April 8, 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blockchain-100 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-blockchain-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">Current Status</h3>
                    <div className="flex items-center mt-1">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">In Transit</Badge>
                      <span className="text-xs text-gray-500 ml-2">Updated 10 minutes ago</span>
                    </div>
                    
                    <div className="mt-4 space-y-3">
                      <div>
                        <p className="text-xs text-gray-500">Current Location</p>
                        <p className="text-sm font-medium">Delhi Distribution Center</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Next Stop</p>
                        <p className="text-sm font-medium">Mumbai Central Hub</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Distance Traveled</p>
                        <p className="text-sm font-medium">245 km (28% of journey)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-blockchain-100 flex items-center justify-center mr-4">
                    <Clock className="h-5 w-5 text-blockchain-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Real-Time Conditions</h3>
                    <p className="text-sm text-gray-500 mt-1">IoT Sensor Data</p>
                    
                    <div className="mt-4 space-y-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <Thermometer className="h-4 w-4 text-amber-500 mr-2" />
                          <p className="text-sm">Temperature</p>
                        </div>
                        <p className="text-sm font-medium">24.5°C</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <DropletIcon className="h-4 w-4 text-blue-500 mr-2" />
                          <p className="text-sm">Humidity</p>
                        </div>
                        <p className="text-sm font-medium">45%</p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center">
                          <ShieldCheck className="h-4 w-4 text-green-500 mr-2" />
                          <p className="text-sm">Package Integrity</p>
                        </div>
                        <p className="text-sm font-medium">100%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            <BlockchainTracker />
          </>
        ) : (
          <Card className="p-10 text-center">
            <Truck className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No Tracking Data Yet
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              Enter a tracking ID above to view real-time blockchain-secured shipment status and conditions.
            </p>
          </Card>
        )}
      </div>
    </MainLayout>
  );
};

export default ShipmentTracking;
