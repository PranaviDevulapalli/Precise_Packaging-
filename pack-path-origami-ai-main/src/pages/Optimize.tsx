
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileUpload } from '@/components/shared/FileUpload';
import { PackagingPreview } from '@/components/optimize/PackagingPreview';
import { 
  PackagePlus, FileSpreadsheet, Upload, 
  Package, Loader2, AlertTriangle,
  CheckCircle2
} from 'lucide-react';
import { toast } from 'sonner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';

const PackageOptimize = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isOptimized, setIsOptimized] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (file: File) => {
    setFile(file);
  };

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setProgress(0);
    
    // Simulate analysis progress
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 10;
        if (newProgress >= 100) {
          clearInterval(interval);
          setIsAnalyzing(false);
          setIsOptimized(true);
          toast.success("Package optimization completed successfully!");
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  // Sample product data (in a real app, this would come from the analysis)
  const product = {
    id: 'SKU-8792',
    name: 'Premium Electronics Shipment',
    dimensions: {
      length: 45,
      width: 30,
      height: 20
    },
    optimizedDimensions: {
      length: 42,
      width: 28,
      height: 18
    },
    materialSavings: 18,
    packagingType: 'Origami Structure',
    carbonReduction: 5.8
  };

  return (
    <MainLayout>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Package Optimization</h1>
            <p className="text-gray-600 mt-1">
              Use AI to create optimized packaging solutions
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-medium text-lg flex items-center">
                  <PackagePlus className="mr-2 h-5 w-5 text-blockchain-600" />
                  Package Data
                </h3>
              </div>
              
              <div className="p-6">
                <Tabs defaultValue="upload" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4">
                    <TabsTrigger value="upload">
                      <FileSpreadsheet className="h-4 w-4 mr-2" />
                      Upload CSV
                    </TabsTrigger>
                    <TabsTrigger value="manual">
                      <Package className="h-4 w-4 mr-2" />
                      Manual Entry
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="upload" className="space-y-4">
                    <FileUpload onFileUpload={handleFileUpload} />
                    
                    {file && (
                      <div className="mt-4">
                        <Button 
                          onClick={handleAnalyze} 
                          disabled={isAnalyzing}
                          className="w-full"
                        >
                          {isAnalyzing ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Analyzing...
                            </>
                          ) : (
                            <>
                              <Upload className="mr-2 h-4 w-4" />
                              Analyze & Optimize
                            </>
                          )}
                        </Button>
                      </div>
                    )}
                  </TabsContent>
                  
                  <TabsContent value="manual">
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="productName">Product Name</Label>
                        <Input id="productName" placeholder="Enter product name" />
                      </div>
                      
                      <div>
                        <Label htmlFor="productID">Product ID/SKU</Label>
                        <Input id="productID" placeholder="Enter product ID or SKU" />
                      </div>
                      
                      <div className="grid grid-cols-3 gap-2">
                        <div>
                          <Label htmlFor="length">Length (cm)</Label>
                          <Input id="length" type="number" placeholder="0" />
                        </div>
                        <div>
                          <Label htmlFor="width">Width (cm)</Label>
                          <Input id="width" type="number" placeholder="0" />
                        </div>
                        <div>
                          <Label htmlFor="height">Height (cm)</Label>
                          <Input id="height" type="number" placeholder="0" />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="weight">Weight (kg)</Label>
                        <Input id="weight" type="number" placeholder="0.00" />
                      </div>
                      
                      <div>
                        <Label htmlFor="fragility">Fragility Level (1-10)</Label>
                        <Input id="fragility" type="number" min="1" max="10" placeholder="5" />
                      </div>
                      
                      <Button 
                        onClick={handleAnalyze} 
                        disabled={isAnalyzing}
                        className="w-full"
                      >
                        {isAnalyzing ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Analyzing...
                          </>
                        ) : (
                          <>
                            <Package className="mr-2 h-4 w-4" />
                            Generate Optimization
                          </>
                        )}
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
                
                {isAnalyzing && (
                  <div className="mt-5 space-y-2">
                    <div className="flex justify-between text-xs text-gray-600">
                      <span>Analyzing product dimensions...</span>
                      <span>{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                    <p className="text-xs text-gray-500 italic">
                      Our AI model is analyzing your product specifications to create an optimized packaging solution.
                    </p>
                  </div>
                )}
                
                {isOptimized && (
                  <div className="mt-6 p-4 border border-eco-200 rounded-lg bg-eco-50">
                    <div className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-eco-600 mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium text-eco-800">Optimization Complete</p>
                        <p className="text-sm text-eco-700 mt-1">
                          Material usage reduced by 18% using Origami structure
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
            
            {isOptimized && (
              <Card className="mt-6 p-5">
                <h4 className="font-medium mb-3 flex items-center">
                  <AlertTriangle className="h-4 w-4 text-amber-500 mr-2" />
                  Special Handling Notes
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 mr-2"></span>
                    <span>This package requires temperature control between 15-25°C</span>
                  </li>
                  <li className="flex">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 mr-2"></span>
                    <span>Fragility level: Medium - handle with appropriate care</span>
                  </li>
                  <li className="flex">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 mr-2"></span>
                    <span>Optimal stack height: Maximum 5 units</span>
                  </li>
                </ul>
              </Card>
            )}
          </div>
          
          <div className="lg:col-span-2">
            {isOptimized ? (
              <PackagingPreview product={product} />
            ) : (
              <Card className="h-full flex flex-col items-center justify-center p-10 text-center">
                <Package className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">
                  No Package Data Yet
                </h3>
                <p className="text-gray-500 max-w-md">
                  Upload a CSV file or enter product details manually to generate an optimized packaging solution using our AI model.
                </p>
              </Card>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PackageOptimize;
