
import { MainLayout } from '@/components/layout/MainLayout';
import { CarbonMetrics } from '@/components/sustainability/CarbonMetrics';
import { Card } from '@/components/ui/card';
import { 
  Leaf, TreePine, Sprout, Globe, 
  BarChart2, FileCheck, Award, Download 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Sustainability = () => {
  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Sustainability Impact</h1>
            <p className="text-gray-600 mt-1">
              Track your environmental impact and carbon credits
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Report
            </Button>
          </div>
        </div>

        <div className="mb-6">
          <CarbonMetrics 
            totalSavings={1256} 
            goal={2000}
            creditsEarned={126}
          />
        </div>

        {/* Sustainability Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card className="p-5">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-eco-100 flex items-center justify-center mr-4">
                <TreePine className="h-5 w-5 text-eco-600" />
              </div>
              <div>
                <h3 className="font-medium">Material Savings</h3>
                <p className="text-2xl font-bold text-eco-700 mt-1">3,540 kg</p>
                <p className="text-xs text-gray-500 mt-1">
                  Packaging material saved through AI optimization
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-5">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-eco-100 flex items-center justify-center mr-4">
                <Sprout className="h-5 w-5 text-eco-600" />
              </div>
              <div>
                <h3 className="font-medium">Trees Saved</h3>
                <p className="text-2xl font-bold text-eco-700 mt-1">128</p>
                <p className="text-xs text-gray-500 mt-1">
                  Equivalent trees saved through reduced paper usage
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-5">
            <div className="flex items-start">
              <div className="h-10 w-10 rounded-full bg-eco-100 flex items-center justify-center mr-4">
                <Globe className="h-5 w-5 text-eco-600" />
              </div>
              <div>
                <h3 className="font-medium">Carbon Credits</h3>
                <p className="text-2xl font-bold text-eco-700 mt-1">126</p>
                <p className="text-xs text-gray-500 mt-1">
                  Tradable carbon credits earned through sustainable packaging
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Sustainability Reports */}
        <Card className="mb-6">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <h3 className="font-medium text-lg flex items-center">
              <FileCheck className="mr-2 h-5 w-5 text-eco-600" />
              Sustainability Reports
            </h3>
          </div>
          
          <div className="p-5">
            <div className="space-y-4">
              {reports.map((report, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-full mr-3 ${report.iconBg}`}>
                      <BarChart2 className={`h-4 w-4 ${report.iconColor}`} />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{report.title}</p>
                      <p className="text-xs text-gray-500">{report.date}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Download</Button>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Sustainability Certification */}
        <Card>
          <div className="p-6 flex flex-col md:flex-row items-center">
            <div className="mb-4 md:mb-0 md:mr-6">
              <div className="bg-eco-100 rounded-full p-4 h-20 w-20 flex items-center justify-center">
                <Award className="h-10 w-10 text-eco-600" />
              </div>
            </div>
            <div className="text-center md:text-left md:flex-1">
              <h3 className="text-lg font-medium text-gray-900">Sustainability Certification</h3>
              <p className="text-gray-600 mt-1 mb-3">
                Your company has achieved a Silver level sustainability certification with a score of 81/100
              </p>
              <div className="inline-flex gap-2">
                <Button variant="outline" size="sm">View Certificate</Button>
                <Button size="sm">Share Achievement</Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
};

// Mock report data
const reports = [
  {
    title: 'Monthly Carbon Reduction Report - March 2025',
    date: 'Generated on April 1, 2025',
    iconBg: 'bg-eco-100',
    iconColor: 'text-eco-600'
  },
  {
    title: 'Quarterly Sustainability Impact - Q1 2025',
    date: 'Generated on March 31, 2025',
    iconBg: 'bg-eco-100',
    iconColor: 'text-eco-600'
  },
  {
    title: 'Material Efficiency Analysis Report',
    date: 'Generated on March 15, 2025',
    iconBg: 'bg-eco-100',
    iconColor: 'text-eco-600'
  },
  {
    title: 'Annual Environmental Impact Assessment - 2024',
    date: 'Generated on January 10, 2025',
    iconBg: 'bg-eco-100',
    iconColor: 'text-eco-600'
  }
];

export default Sustainability;
