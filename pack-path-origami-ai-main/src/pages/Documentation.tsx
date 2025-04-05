
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/card';
import { 
  FileText, Search, BookOpen, Code,
  Network, Package, Database, Globe
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const Documentation = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Documentation</h1>
            <p className="text-gray-600 mt-1">
              Guides and resources for using the platform
            </p>
          </div>
        </div>

        {/* Search */}
        <Card className="mb-6 p-6">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search documentation..." 
                className="pl-9"
              />
            </div>
          </div>
        </Card>

        {/* Documentation Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {categories.map((category, index) => (
            <Card key={index} className="p-6 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start">
                <div className={`h-10 w-10 rounded-full ${category.iconBg} flex items-center justify-center mr-4`}>
                  {category.icon}
                </div>
                <div>
                  <h3 className="font-medium text-lg">{category.title}</h3>
                  <p className="text-gray-500 mt-1 text-sm">
                    {category.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Recent Guides */}
        <Card className="mb-6">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="font-medium text-lg flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-blockchain-600" />
              Recent Guides
            </h3>
          </div>
          
          <div className="p-5 divide-y divide-gray-100">
            {guides.map((guide, index) => (
              <div key={index} className="py-4 first:pt-0 last:pb-0">
                <h4 className="font-medium mb-1">{guide.title}</h4>
                <p className="text-gray-500 text-sm mb-2">{guide.description}</p>
                <div className="flex items-center text-xs text-gray-400">
                  <span>{guide.date}</span>
                  <span className="mx-2">•</span>
                  <span>{guide.readTime}</span>
                  <span className="mx-2">•</span>
                  <span className="text-blockchain-600">{guide.category}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* API Documentation */}
        <Card>
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="font-medium text-lg flex items-center">
              <Code className="mr-2 h-5 w-5 text-blockchain-600" />
              API Reference
            </h3>
          </div>
          
          <div className="p-5 space-y-4">
            <p className="text-gray-600">
              Access our comprehensive API documentation to integrate with our platform programmatically.
            </p>
            
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono text-sm overflow-x-auto">
              <pre className="text-gray-700">
{`// Example API request for tracking a package
const response = await fetch('https://api.ecopackit.com/v1/tracking', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: JSON.stringify({
    tracking_id: 'TRK-45692',
    include_blockchain_data: true
  })
});

const data = await response.json();
console.log(data);`}
              </pre>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-medium mb-2 text-sm">Authentication</h4>
                <p className="text-xs text-gray-600">
                  Learn how to authenticate API requests using API keys or OAuth tokens.
                </p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <h4 className="font-medium mb-2 text-sm">Rate Limits</h4>
                <p className="text-xs text-gray-600">
                  Understand the API rate limits and best practices for efficient usage.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

// Documentation categories
const categories = [
  {
    title: 'Getting Started',
    description: 'Introduction guides and basic setup instructions',
    iconBg: 'bg-blockchain-100',
    icon: <FileText className="h-5 w-5 text-blockchain-600" />
  },
  {
    title: 'Package Optimization',
    description: 'Learn how to use AI for package optimization',
    iconBg: 'bg-blockchain-100',
    icon: <Package className="h-5 w-5 text-blockchain-600" />
  },
  {
    title: 'Blockchain Integration',
    description: 'Guides for using blockchain tracking',
    iconBg: 'bg-blockchain-100',
    icon: <Network className="h-5 w-5 text-blockchain-600" />
  },
  {
    title: 'Data Management',
    description: 'How to manage and analyze your data',
    iconBg: 'bg-blockchain-100',
    icon: <Database className="h-5 w-5 text-blockchain-600" />
  },
  {
    title: 'Sustainability',
    description: 'Measuring and reporting environmental impact',
    iconBg: 'bg-eco-100',
    icon: <Globe className="h-5 w-5 text-eco-600" />
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation for developers',
    iconBg: 'bg-blockchain-100',
    icon: <Code className="h-5 w-5 text-blockchain-600" />
  }
];

// Recent guides
const guides = [
  {
    title: 'Getting Started with AI-Driven Package Optimization',
    description: 'Learn the basics of using our AI system to optimize your packaging designs.',
    date: 'March 30, 2025',
    readTime: '5 min read',
    category: 'Package Optimization'
  },
  {
    title: 'Blockchain Tracking: A Complete Guide',
    description: 'Everything you need to know about using blockchain to securely track your shipments.',
    date: 'March 25, 2025',
    readTime: '8 min read',
    category: 'Blockchain Integration'
  },
  {
    title: 'Measuring Carbon Footprint Reduction',
    description: 'How to accurately calculate and report your carbon savings from packaging optimization.',
    date: 'March 20, 2025',
    readTime: '6 min read',
    category: 'Sustainability'
  },
  {
    title: 'Warehouse Space Optimization Techniques',
    description: 'Advanced strategies for maximizing warehouse efficiency with optimized packaging.',
    date: 'March 15, 2025',
    readTime: '7 min read',
    category: 'Warehouse Management'
  }
];

export default Documentation;
