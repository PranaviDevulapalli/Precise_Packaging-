
import { MainLayout } from '@/components/layout/MainLayout';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { BlockchainTracker } from '@/components/tracking/BlockchainTracker';
import { CarbonMetrics } from '@/components/sustainability/CarbonMetrics';
import { 
  Package, Truck, Leaf, 
  BarChart2, PackagePlus, 
  Factory, BoxSelect 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getCarbonMetrics } from '@/api/carbonService';
import { getWarehouseStats } from '@/api/warehouseService';

const Dashboard = () => {
  // Fetch carbon metrics data
  const { data: carbonData, isLoading: isLoadingCarbonData } = useQuery({
    queryKey: ['carbonMetrics'],
    queryFn: getCarbonMetrics,
  });

  // Fetch warehouse stats data
  const { data: warehouseStats, isLoading: isLoadingWarehouseStats } = useQuery({
    queryKey: ['warehouseStats'],
    queryFn: getWarehouseStats,
  });

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">
              Overview of your packaging optimization and logistics tracking
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button asChild>
              <Link to="/optimize">
                <PackagePlus className="mr-2 h-4 w-4" />
                Optimize New Package
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {isLoadingWarehouseStats ? (
            // Loading placeholders
            Array(4).fill(0).map((_, index) => (
              <div key={index} className="bg-white rounded-lg p-5 shadow border border-gray-100">
                <div className="animate-pulse space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-8 bg-gray-200 rounded w-1/3"></div>
                </div>
              </div>
            ))
          ) : (
            <>
              <StatsCard
                title="Material Waste Reduced"
                value="45.8%"
                change={{ value: 12, trend: 'up' }}
                icon={<Package className="h-5 w-5 text-blockchain-500" />}
              />
              <StatsCard
                title="Active Shipments"
                value="128"
                change={{ value: 5, trend: 'up' }}
                icon={<Truck className="h-5 w-5 text-blockchain-500" />}
              />
              <StatsCard
                title="Carbon Footprint Reduction"
                value={carbonData ? `${carbonData.totalSavings.toLocaleString()} kg` : "Loading..."}
                change={{ value: 18, trend: 'up' }}
                icon={<Leaf className="h-5 w-5 text-eco-500" />}
              />
              <StatsCard
                title="Warehouse Optimization"
                value="24.7%"
                change={{ value: 8, trend: 'up' }}
                icon={<BoxSelect className="h-5 w-5 text-blockchain-500" />}
              />
            </>
          )}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Blockchain Tracker */}
          <BlockchainTracker />
          
          {/* Carbon Metrics - using API data */}
          <CarbonMetrics />
        </div>

        {/* Recent Activity */}
        <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-medium mb-4 flex items-center">
            <BarChart2 className="mr-2 h-5 w-5 text-gray-500" />
            Recent Activity
          </h3>
          <div className="space-y-4">
            {activityData.map((activity, index) => (
              <div key={index} className="pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="flex items-start">
                  <div className={`
                    p-1.5 rounded-full mr-3 mt-0.5
                    ${activity.category === 'packaging' ? 'bg-blockchain-100' : 
                      activity.category === 'logistics' ? 'bg-amber-100' :
                      'bg-eco-100'}
                  `}>
                    {activity.category === 'packaging' ? (
                      <Package className="h-4 w-4 text-blockchain-500" />
                    ) : activity.category === 'logistics' ? (
                      <Truck className="h-4 w-4 text-amber-500" />
                    ) : (
                      <Factory className="h-4 w-4 text-eco-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{activity.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Button variant="outline" size="sm">View All Activity</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

// Mock activity data
const activityData = [
  { 
    category: 'packaging',
    title: 'New package optimization completed for SKU-8792 "Premium Electronics Shipment"',
    time: '10 minutes ago'
  },
  { 
    category: 'logistics',
    title: 'Shipment TRK-45692 updated with new location data in blockchain',
    time: '25 minutes ago'
  },
  { 
    category: 'warehouse',
    title: 'Warehouse 12 inventory updated with automated inventory count',
    time: '45 minutes ago'
  },
  { 
    category: 'logistics',
    title: 'Carbon report for January 2025 generated and verified',
    time: '1 hour ago'
  },
  { 
    category: 'packaging',
    title: 'AI model updated with new packaging materials database',
    time: '2 hours ago'
  },
];

export default Dashboard;
