
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Box, BarChart2, Boxes, Truck, 
  LayoutGrid, RefreshCw, FilterIcon,
  ArrowUpRight, ArrowDownRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { StatsCard } from '@/components/dashboard/StatsCard';

const Warehouse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Warehouse Management</h1>
            <p className="text-gray-600 mt-1">
              Optimize warehouse space and inventory
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button>
              <RefreshCw className="mr-2 h-4 w-4" />
              Update Inventory
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatsCard
            title="Space Utilization"
            value="78.5%"
            change={{ value: 12, trend: 'up' }}
            icon={<LayoutGrid className="h-5 w-5 text-blockchain-500" />}
            description="Optimal warehouse space usage"
          />
          <StatsCard
            title="Inventory Items"
            value="1,426"
            change={{ value: 5, trend: 'up' }}
            icon={<Boxes className="h-5 w-5 text-blockchain-500" />}
          />
          <StatsCard
            title="Turnover Rate"
            value="3.2x"
            change={{ value: 0.5, trend: 'up' }}
            icon={<RefreshCw className="h-5 w-5 text-blockchain-500" />}
            description="Monthly inventory turnover"
          />
          <StatsCard
            title="Shipping Efficiency"
            value="92.3%"
            change={{ value: 2, trend: 'down' }}
            icon={<Truck className="h-5 w-5 text-blockchain-500" />}
          />
        </div>

        {/* Inventory Search */}
        <Card className="mb-6">
          <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
            <h3 className="font-medium text-lg flex items-center">
              <Boxes className="mr-2 h-5 w-5 text-blockchain-600" />
              Warehouse Inventory
            </h3>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <FilterIcon className="h-4 w-4" />
              </Button>
              <Input 
                placeholder="Search inventory..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-[200px]"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3 text-sm font-medium text-gray-600">Product ID</th>
                  <th className="p-3 text-sm font-medium text-gray-600">Name</th>
                  <th className="p-3 text-sm font-medium text-gray-600">Category</th>
                  <th className="p-3 text-sm font-medium text-gray-600">Quantity</th>
                  <th className="p-3 text-sm font-medium text-gray-600">Location</th>
                  <th className="p-3 text-sm font-medium text-gray-600">Packaging</th>
                  <th className="p-3 text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {inventoryItems.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 text-sm">{item.id}</td>
                    <td className="p-3 text-sm font-medium">{item.name}</td>
                    <td className="p-3 text-sm">{item.category}</td>
                    <td className="p-3 text-sm">{item.quantity}</td>
                    <td className="p-3 text-sm">{item.location}</td>
                    <td className="p-3">
                      <Badge variant="outline" className={
                        item.packaging === 'Optimized' 
                          ? 'text-eco-700 border-eco-200 bg-eco-50' 
                          : ''
                      }>
                        {item.packaging}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Badge className={
                        item.status === 'In Stock' 
                          ? 'bg-green-100 text-green-800 hover:bg-green-100'
                          : item.status === 'Low Stock' 
                          ? 'bg-amber-100 text-amber-800 hover:bg-amber-100'
                          : 'bg-red-100 text-red-800 hover:bg-red-100'
                      }>
                        {item.status}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between items-center">
            <span className="text-sm text-gray-500">Showing 5 of 1,426 items</span>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>Previous</Button>
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </Card>

        {/* Warehouse Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="font-medium text-lg flex items-center">
                <BarChart2 className="mr-2 h-5 w-5 text-blockchain-600" />
                Space Allocation
              </h3>
            </div>
            
            <div className="p-5">
              <div className="h-60 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <Box className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Warehouse space allocation visualization</p>
                  <p className="text-sm">(Simulated chart would appear here)</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="font-medium text-lg flex items-center">
                <Truck className="mr-2 h-5 w-5 text-blockchain-600" />
                Logistics Schedule
              </h3>
            </div>
            
            <div className="p-5">
              <div className="space-y-3">
                {[1, 2, 3].map((_, index) => (
                  <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <div className="h-10 w-10 rounded-full bg-blockchain-100 flex items-center justify-center mr-3">
                      <Truck className="h-5 w-5 text-blockchain-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium">Shipment #{Math.floor(Math.random() * 10000)}</p>
                        <Badge variant="outline">
                          {index === 0 ? 'Now' : `In ${index + 1} hours`}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-500">
                        {index === 0 
                          ? 'Loading at Dock 3' 
                          : index === 1 
                          ? 'Scheduled delivery pickup' 
                          : 'Inbound inventory arrival'
                        }
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

// Mock inventory data
const inventoryItems = [
  {
    id: 'SKU-8792',
    name: 'Premium Electronics',
    category: 'Electronics',
    quantity: 24,
    location: 'Zone A, Shelf 3',
    packaging: 'Optimized',
    status: 'In Stock'
  },
  {
    id: 'SKU-5467',
    name: 'Kitchen Appliance',
    category: 'Appliances',
    quantity: 8,
    location: 'Zone B, Shelf 1',
    packaging: 'Optimized',
    status: 'Low Stock'
  },
  {
    id: 'SKU-3219',
    name: 'Office Furniture',
    category: 'Furniture',
    quantity: 15,
    location: 'Zone C, Floor 1',
    packaging: 'Standard',
    status: 'In Stock'
  },
  {
    id: 'SKU-7890',
    name: 'Fragile Glassware',
    category: 'Home Goods',
    quantity: 32,
    location: 'Zone A, Shelf 5',
    packaging: 'Optimized',
    status: 'In Stock'
  },
  {
    id: 'SKU-1234',
    name: 'Fitness Equipment',
    category: 'Sports',
    quantity: 3,
    location: 'Zone D, Floor 2',
    packaging: 'Standard',
    status: 'Low Stock'
  }
];

export default Warehouse;
