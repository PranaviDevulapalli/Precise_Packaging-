
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Truck, Package, Clipboard, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock blockchain transaction data
const transactionData = [
  { 
    hash: '0x7fa9385be102ac3e811044bcb7a1f1' + Math.random().toString(16).slice(2, 10), 
    timestamp: new Date().toISOString(),
    event: 'Package Scanned',
    location: 'Warehouse #378, Delhi',
    status: 'Verified',
    temperature: '24.5°C',
    humidity: '45%'
  },
  { 
    hash: '0x3a7fb81e9dd452c6e67f3012346c9c' + Math.random().toString(16).slice(2, 10),
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    event: 'Package Loaded',
    location: 'Distribution Center, Mumbai',
    status: 'Verified',
    temperature: '25.1°C',
    humidity: '48%'
  },
  { 
    hash: '0x5c2d8f3a1b9e74d6c8a0f12e3b4c5d' + Math.random().toString(16).slice(2, 10),
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    event: 'Quality Check',
    location: 'Production Facility, Chennai',
    status: 'Verified',
    temperature: '23.8°C',
    humidity: '42%'
  },
];

export const BlockchainTracker = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  
  return (
    <Card className="overflow-hidden">
      <div className="p-4 border-b border-gray-200 bg-gray-50 flex justify-between items-center">
        <h3 className="font-medium text-lg flex items-center">
          <Clipboard className="mr-2 h-5 w-5 text-blockchain-600" />
          Blockchain Transaction Log
        </h3>
        <Badge variant="outline" className="bg-blockchain-50 text-blockchain-700 border-blockchain-200">
          Ethereum Network
        </Badge>
      </div>

      <div className="p-4">
        <div className="space-y-4">
          {transactionData.map((tx, index) => (
            <div 
              key={tx.hash} 
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <div 
                className="p-3 bg-gray-50 flex justify-between items-center cursor-pointer"
                onClick={() => setExpanded(expanded === tx.hash ? null : tx.hash)}
              >
                <div className="flex items-center">
                  {tx.event === 'Package Scanned' && <Truck className="h-4 w-4 mr-2 text-blockchain-500" />}
                  {tx.event === 'Package Loaded' && <Package className="h-4 w-4 mr-2 text-blockchain-500" />}
                  {tx.event === 'Quality Check' && <CheckCircle className="h-4 w-4 mr-2 text-blockchain-500" />}
                  <span className="font-medium">{tx.event}</span>
                  <span className="ml-3 text-xs text-gray-500">
                    {new Date(tx.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <Badge className={
                  tx.status === 'Verified' 
                    ? 'bg-green-100 text-green-800 hover:bg-green-100' 
                    : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100'
                }>
                  {tx.status}
                </Badge>
              </div>
              
              {expanded === tx.hash && (
                <div className="p-4 border-t border-gray-200 bg-white">
                  <div className="grid gap-3 text-sm">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-gray-500">Location</p>
                        <p className="font-medium">{tx.location}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Timestamp</p>
                        <p className="font-medium">
                          {new Date(tx.timestamp).toLocaleString()}
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <p className="text-gray-500">Temperature</p>
                        <p className="font-medium">{tx.temperature}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Humidity</p>
                        <p className="font-medium">{tx.humidity}</p>
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-gray-500">Transaction Hash</p>
                      <p className="font-mono text-xs truncate bg-gray-50 p-2 rounded border border-gray-200">
                        {tx.hash}
                      </p>
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-2 text-blockchain-700 border-blockchain-200 hover:bg-blockchain-50"
                    >
                      View on Etherscan
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
};
