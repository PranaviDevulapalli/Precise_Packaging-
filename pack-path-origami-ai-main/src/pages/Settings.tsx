
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings as SettingsIcon, User, Bell, Shield,
  Key, LifeBuoy, Upload, Trash2, Save
} from 'lucide-react';
import { toast } from 'sonner';

const Settings = () => {
  const [isSaving, setIsSaving] = useState(false);
  
  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      toast.success("Settings saved successfully!");
    }, 1000);
  };

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <p className="text-gray-600 mt-1">
              Manage your account and application preferences
            </p>
          </div>
        </div>

        <Tabs defaultValue="account" className="w-full">
          <TabsList className="w-full max-w-md mb-6">
            <TabsTrigger value="account" className="flex-1">
              <User className="h-4 w-4 mr-2" />
              Account
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex-1">
              <Bell className="h-4 w-4 mr-2" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="security" className="flex-1">
              <Shield className="h-4 w-4 mr-2" />
              Security
            </TabsTrigger>
            <TabsTrigger value="api" className="flex-1">
              <Key className="h-4 w-4 mr-2" />
              API Keys
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="account">
            <Card className="mb-6">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-medium text-lg flex items-center">
                  <User className="mr-2 h-5 w-5 text-blockchain-600" />
                  Account Information
                </h3>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" defaultValue="Jane Doe" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" defaultValue="jane.doe@example.com" />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" defaultValue="EcoPack Solutions" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" defaultValue="Supply Chain Manager" />
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+1 (555) 123-4567" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Input id="timezone" defaultValue="UTC-5 (Eastern Time)" />
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between">
                <Button variant="outline" className="text-red-600 hover:text-red-700 border-red-200">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete Account
                </Button>
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? (
                    <>Saving...</>
                  ) : (
                    <>
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
              </div>
            </Card>
            
            <Card>
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-medium text-lg flex items-center">
                  <Upload className="mr-2 h-5 w-5 text-blockchain-600" />
                  Profile Picture
                </h3>
              </div>
              
              <div className="p-6 flex flex-col items-center md:flex-row md:items-start gap-6">
                <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
                  <User className="h-12 w-12 text-gray-400" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <p className="text-gray-600">
                    Upload a new profile picture. Recommended size: 400x400px.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline">Choose File</Button>
                    <Button variant="destructive" className="bg-red-600 hover:bg-red-700">Remove</Button>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications">
            <Card>
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-medium text-lg flex items-center">
                  <Bell className="mr-2 h-5 w-5 text-blockchain-600" />
                  Notification Preferences
                </h3>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Email Notifications</h4>
                  
                  {emailNotifications.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-gray-500 text-xs">{item.description}</p>
                      </div>
                      <Switch defaultChecked={item.enabled} />
                    </div>
                  ))}
                </div>
                
                <div className="pt-6 border-t border-gray-100 space-y-4">
                  <h4 className="font-medium">In-App Notifications</h4>
                  
                  {appNotifications.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm">{item.title}</p>
                        <p className="text-gray-500 text-xs">{item.description}</p>
                      </div>
                      <Switch defaultChecked={item.enabled} />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
                <Button onClick={handleSave} disabled={isSaving}>
                  {isSaving ? 'Saving...' : 'Save Preferences'}
                </Button>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="security">
            <Card className="mb-6">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-medium text-lg flex items-center">
                  <Key className="mr-2 h-5 w-5 text-blockchain-600" />
                  Password
                </h3>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>
              
              <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-end">
                <Button>Update Password</Button>
              </div>
            </Card>
            
            <Card>
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-medium text-lg flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-blockchain-600" />
                  Advanced Security
                </h3>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Two-Factor Authentication</p>
                    <p className="text-gray-500 text-xs">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Button variant="outline">Enable 2FA</Button>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div>
                    <p className="font-medium text-sm">Active Sessions</p>
                    <p className="text-gray-500 text-xs">
                      Manage devices where you're currently logged in
                    </p>
                  </div>
                  <Button variant="outline">View Sessions</Button>
                </div>
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="api">
            <Card>
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <h3 className="font-medium text-lg flex items-center">
                  <Key className="mr-2 h-5 w-5 text-blockchain-600" />
                  API Keys
                </h3>
              </div>
              
              <div className="p-6 space-y-6">
                <p className="text-gray-600">
                  Create and manage API keys for accessing the platform programmatically.
                </p>
                
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Production API Key</p>
                        <p className="text-gray-500 text-sm mt-1">Created on March 15, 2025</p>
                      </div>
                      <Button variant="outline">Regenerate</Button>
                    </div>
                    <div className="mt-3 bg-white p-3 rounded border border-gray-200 font-mono text-sm">
                      ••••••••••••••••4c8d
                    </div>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Development API Key</p>
                        <p className="text-gray-500 text-sm mt-1">Created on March 20, 2025</p>
                      </div>
                      <Button variant="outline">Regenerate</Button>
                    </div>
                    <div className="mt-3 bg-white p-3 rounded border border-gray-200 font-mono text-sm">
                      ••••••••••••••••7f2a
                    </div>
                  </div>
                </div>
                
                <Button>
                  <Key className="h-4 w-4 mr-2" />
                  Create New API Key
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
};

// Email notification settings
const emailNotifications = [
  {
    title: 'Shipment Updates',
    description: 'Receive email notifications when package status changes',
    enabled: true,
  },
  {
    title: 'Optimization Completed',
    description: 'Get notified when AI packaging optimization is complete',
    enabled: true,
  },
  {
    title: 'Sustainability Reports',
    description: 'Weekly and monthly environmental impact reports',
    enabled: true,
  },
  {
    title: 'System Updates',
    description: 'New features, improvements, and maintenance alerts',
    enabled: false,
  },
];

// In-app notification settings
const appNotifications = [
  {
    title: 'Real-time Tracking Alerts',
    description: 'Alerts for significant tracking events and conditions',
    enabled: true,
  },
  {
    title: 'Inventory Warnings',
    description: 'Low stock and inventory management alerts',
    enabled: true,
  },
  {
    title: 'Carbon Credit Milestones',
    description: 'Notifications when you reach sustainability milestones',
    enabled: true,
  },
];

export default Settings;
