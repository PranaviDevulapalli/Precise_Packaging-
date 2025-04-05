
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  BarChart2, Download, Calendar, Filter,
  TrendingUp, Leaf, Package, Truck
} from 'lucide-react';

const Analytics = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Analytics & Insights</h1>
            <p className="text-gray-600 mt-1">
              Monitor performance metrics and sustainability impact
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Date Range
            </Button>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Button>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Main Analytics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <Card>
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="font-medium text-lg flex items-center">
                <Package className="mr-2 h-5 w-5 text-blockchain-600" />
                Packaging Optimization Impact
              </h3>
            </div>
            
            <div className="p-5">
              <div className="h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BarChart2 className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Packaging optimization metrics chart</p>
                  <p className="text-sm">(Simulated chart would appear here)</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card>
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h3 className="font-medium text-lg flex items-center">
                <Leaf className="mr-2 h-5 w-5 text-eco-600" />
                Carbon Footprint Reduction
              </h3>
            </div>
            
            <div className="p-5">
              <div className="h-64 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <TrendingUp className="h-12 w-12 mx-auto mb-3 opacity-50" />
                  <p>Carbon reduction trends chart</p>
                  <p className="text-sm">(Simulated chart would appear here)</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {analyticsCards.map((card, index) => (
            <Card key={index} className="p-5">
              <div className="flex items-start">
                <div className={`h-10 w-10 rounded-full ${card.iconBg} flex items-center justify-center mr-4`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className="font-medium">{card.title}</h3>
                  <p className="text-2xl font-bold mt-1 text-gray-900">{card.value}</p>
                  
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-sm font-medium text-green-600">
                      +{card.increase}% vs. last month
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Analytics Table */}
        <Card>
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="font-medium text-lg flex items-center">
              <BarChart2 className="mr-2 h-5 w-5 text-blockchain-600" />
              Key Performance Metrics
            </h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="p-3 text-sm font-medium text-gray-600">Metric</th>
                  <th className="p-3 text-sm font-medium text-gray-600">This Month</th>
                  <th className="p-3 text-sm font-medium text-gray-600">Last Month</th>
                  <th className="p-3 text-sm font-medium text-gray-600">Change</th>
                  <th className="p-3 text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {metrics.map((metric, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 text-sm font-medium">{metric.name}</td>
                    <td className="p-3 text-sm">{metric.current}</td>
                    <td className="p-3 text-sm">{metric.previous}</td>
                    <td className="p-3 text-sm">
                      <span className={metric.change > 0 ? 'text-green-600' : 'text-red-600'}>
                        {metric.change > 0 ? '+' : ''}{metric.change}%
                      </span>
                    </td>
                    <td className="p-3 text-sm">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        metric.status === 'Improved' ? 'bg-green-100 text-green-800' : 
                        metric.status === 'Declined' ? 'bg-red-100 text-red-800' : 
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {metric.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

// Mock analytics cards data
const analyticsCards = [
  {
    title: 'Material Efficiency',
    value: '92.5%',
    increase: '18',
    iconBg: 'bg-blockchain-100',
    icon: <Package className="h-5 w-5 text-blockchain-600" />
  },
  {
    title: 'Delivery Success Rate',
    value: '99.2%',
    increase: '2',
    iconBg: 'bg-blockchain-100',
    icon: <Truck className="h-5 w-5 text-blockchain-600" />
  },
  {
    title: 'Carbon Credits Earned',
    value: '126',
    increase: '35',
    iconBg: 'bg-eco-100',
    icon: <Leaf className="h-5 w-5 text-eco-600" />
  },
];

// Mock metrics data
const metrics = [
  {
    name: 'Packaging Material Used (tons)',
    current: '24.5',
    previous: '28.7',
    change: -14.6,
    status: 'Improved'
  },
  {
    name: 'Average Package Size (cubic cm)',
    current: '3,245',
    previous: '3,890',
    change: -16.6,
    status: 'Improved'
  },
  {
    name: 'Shipping Costs (per unit)',
    current: '$2.34',
    previous: '$2.67',
    change: -12.4,
    status: 'Improved'
  },
  {
    name: 'Delivery Time (days)',
    current: '3.2',
    previous: '3.1',
    change: 3.2,
    status: 'Declined'
  },
  {
    name: 'Returns Due To Damage (%)',
    current: '0.8%',
    previous: '1.2%',
    change: -33.3,
    status: 'Improved'
  },
  {
    name: 'Carbon Emissions (kg CO₂e)',
    current: '845',
    previous: '978',
    change: -13.6,
    status: 'Improved'
  },
];

export default Analytics;
