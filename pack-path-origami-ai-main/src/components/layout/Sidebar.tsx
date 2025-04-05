
import { Box, Package, Truck, BarChart2, Settings, FileText, Home, Leaf } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { 
      name: 'Dashboard', 
      icon: <Home className="h-5 w-5" />, 
      path: '/' 
    },
    { 
      name: 'Package Optimization', 
      icon: <Package className="h-5 w-5" />, 
      path: '/optimize' 
    },
    { 
      name: 'Shipment Tracking', 
      icon: <Truck className="h-5 w-5" />, 
      path: '/tracking' 
    },
    { 
      name: 'Warehouse Management', 
      icon: <Box className="h-5 w-5" />, 
      path: '/warehouse' 
    },
    { 
      name: 'Sustainability', 
      icon: <Leaf className="h-5 w-5" />, 
      path: '/sustainability'
    },
    { 
      name: 'Analytics', 
      icon: <BarChart2 className="h-5 w-5" />, 
      path: '/analytics' 
    },
    { 
      name: 'Documentation', 
      icon: <FileText className="h-5 w-5" />, 
      path: '/documentation' 
    },
    { 
      name: 'Settings', 
      icon: <Settings className="h-5 w-5" />, 
      path: '/settings' 
    }
  ];

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200 shadow-sm">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 border-b border-gray-200">
        <h1 className="text-xl font-bold text-blockchain-700 flex items-center">
          <Package className="h-6 w-6 mr-2 text-eco-600" />
          <span>EcoPackIT</span>
        </h1>
      </div>
      
      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1 px-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.path)}
                className={`flex items-center w-full px-3 py-2 rounded-md hover:bg-gray-100 transition-colors ${
                  location.pathname === item.path
                    ? 'bg-eco-50 text-eco-700 font-medium'
                    : 'text-gray-700'
                }`}
              >
                <span className={`${location.pathname === item.path ? 'text-eco-600' : 'text-gray-500'} mr-3`}>
                  {item.icon}
                </span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <div className="bg-eco-50 rounded-md p-3 text-sm">
          <p className="text-eco-800 font-medium mb-1">Carbon Savings</p>
          <p className="text-eco-600 font-bold">1,245 kg CO₂e this month</p>
        </div>
      </div>
    </div>
  );
};
