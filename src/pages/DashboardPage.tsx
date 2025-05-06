import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import CampaignOverview from '../components/CampaignOverview';
import BudgetTimeline from '../components/BudgetTimeline';
import CampaignProgress from '../components/CampaignProgress';
import SecondaryIndicators from '../components/SecondaryIndicators';
import FinanceStatus from '../components/FinanceStatus';
import TacticalTracking from '../components/TacticalTracking';
import SocialListening from '../components/SocialListening';
import OperationProgress from '../components/OperationProgress';
import OperationMetrics from '../components/OperationMetrics';
import LogoutDialog from '../components/LogoutDialog';

export default function DashboardPage() {
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleLogout = () => {
    setIsLogoutDialogOpen(false);
    navigate('/');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-bl from-[#4a5a64] from-15% via-[#121619] via-45% to-[#121619] p-4 lg:p-6 relative">
      {/* Background overlay for additional depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/10 to-transparent opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-background/20 via-transparent to-transparent"></div>
      
      {/* Logout Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsLogoutDialogOpen(true)}
          className="group flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-md rounded-lg hover:bg-card hover:shadow-neon transition-all duration-300 animate-fade-in"
        >
          <LogOut className="w-5 h-5 text-primary group-hover:animate-pulse-slow" />
          <span className="text-gray-400 group-hover:text-white">Cerrar Sesión</span>
        </button>
      </div>
      
      <div className="max-w-[1920px] mx-auto space-y-6 relative">
        {/* Top Section */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6 grid grid-cols-6 gap-6">
            {/* Left column - top section */}
            <div className="col-span-2">
              <CampaignOverview 
                title="27.36%" 
                subtitle="Cumplimiento General" 
                profileImage="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              />
            </div>
            <div className="col-span-4">
              <BudgetTimeline title="Timeline: Planeado vs Ejercido" />
            </div>
            
            {/* Left column - bottom section */}
            <div className="col-span-6">
              <CampaignProgress />
            </div>
          </div>
          
          {/* Right columns - full height */}
          <div className="col-span-12 lg:col-span-3">
            <SecondaryIndicators />
          </div>
          <div className="col-span-12 lg:col-span-3">
            <FinanceStatus />
          </div>
        </div>
        
        {/* Middle Section */}
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-6">
            <TacticalTracking />
          </div>
          <div className="col-span-12 lg:col-span-6">
            <SocialListening />
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="grid grid-cols-12 gap-6 mt-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="glassmorphic-container p-5 h-[400px] overflow-y-auto animate-scale-in">
              <OperationProgress />
            </div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <div className="glassmorphic-container p-5 h-[400px] overflow-y-auto animate-scale-in">
              <OperationMetrics />
            </div>
          </div>
        </div>
      </div>
      
      <LogoutDialog
        isOpen={isLogoutDialogOpen}
        onClose={() => setIsLogoutDialogOpen(false)}
        onConfirm={handleLogout}
      />
    </div>
  );
}