import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Box, PackagePlus, Layers } from 'lucide-react';

interface PackagingPreviewProps {
  product: {
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
  };
}

export const PackagingPreview = ({ product }: PackagingPreviewProps) => {
  const [isOptimized, setIsOptimized] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // This is just for visual effect
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => setAnimating(false), 1000);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const originalVolume = 
    product.dimensions.length * 
    product.dimensions.width * 
    product.dimensions.height;
  
  const optimizedVolume = 
    product.optimizedDimensions.length * 
    product.optimizedDimensions.width * 
    product.optimizedDimensions.height;
  
  const volumeReduction = ((originalVolume - optimizedVolume) / originalVolume * 100).toFixed(1);

  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gray-50">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-lg flex items-center">
            <Box className="mr-2 h-5 w-5 text-blockchain-600" />
            Packaging Preview
          </h3>
          <Tabs 
            defaultValue="standard" 
            className="w-[250px]"
            onValueChange={(value) => setIsOptimized(value === "optimized")}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="standard">Standard</TabsTrigger>
              <TabsTrigger value="optimized">Optimized</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="p-6 flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <div className="aspect-square relative">
            {/* 3D Box Representation */}
            <div 
              className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ${
                animating ? 'scale-105 opacity-90' : ''
              } ${isOptimized ? 'scale-90' : 'scale-100'}`}
            >
              <div 
                className={`relative ${
                  isOptimized ? 'bg-eco-100 border-eco-300' : 'bg-gray-100 border-gray-300'
                } border-2 rounded-lg transition-all duration-500`}
                style={{
                  width: `${isOptimized ? 85 : 100}%`,
                  height: `${isOptimized ? 85 : 100}%`,
                  transformStyle: 'preserve-3d',
                  transform: 'rotateX(15deg) rotateY(25deg)',
                }}
              >
                {/* Front face with product name */}
                <div className="absolute inset-0 flex items-center justify-center p-4 text-center">
                  <span className="font-medium text-sm">{product.name}</span>
                </div>
                
                {/* Dimensions labels */}
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-medium">
                    {isOptimized 
                      ? `${product.optimizedDimensions.length} × ${product.optimizedDimensions.width} × ${product.optimizedDimensions.height} cm` 
                      : `${product.dimensions.length} × ${product.dimensions.width} × ${product.dimensions.height} cm`
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1">
          <h4 className="font-medium mb-3">{isOptimized ? 'Optimized Package' : 'Standard Package'}</h4>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Packaging Type</p>
              <div className="flex items-center mt-1">
                <Badge variant="outline" className={isOptimized ? 'text-eco-700 border-eco-200 bg-eco-50' : ''}>
                  {isOptimized ? 'Origami Structure' : 'Standard Box'}
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Volume</p>
                <p className="font-medium">
                  {isOptimized ? optimizedVolume.toFixed(0) : originalVolume.toFixed(0)} cm³
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Material</p>
                <p className="font-medium">
                  {isOptimized ? 'Recycled Cardboard' : 'Standard Cardboard'}
                </p>
              </div>
            </div>
            
            {isOptimized && (
              <div className="pt-2 border-t border-gray-100">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Material saved:</span>
                  <span className="font-medium text-eco-700">{product.materialSavings}%</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600">Volume reduction:</span>
                  <span className="font-medium text-eco-700">{volumeReduction}%</span>
                </div>
                <div className="flex justify-between text-sm mt-1">
                  <span className="text-gray-600">Carbon reduction:</span>
                  <span className="font-medium text-eco-700">{product.carbonReduction} kg CO₂e</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
