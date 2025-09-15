import { useState } from 'react';
import { ResidentSidebar } from './components/ResidentSidebar';
import { ResidentHeader } from './components/ResidentHeader';
import { DashboardOverview } from './components/DashboardOverview';
import { PaymentsSection } from './components/PaymentsSection';
import { ReservationsSection } from './components/ReservationsSection';
import { ProfileSection } from './components/ProfileSection';
import { CommunicationsSection } from './components/CommunicationsSection';
import { ReportsSection } from './components/ReportsSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'payments':
        return <PaymentsSection />;
      case 'reservations':
        return <ReservationsSection />;
      case 'communications':
        return <CommunicationsSection />;
      case 'reports':
        return <ReportsSection />;
      case 'profile':
        return <ProfileSection />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      <ResidentSidebar activeSection={activeSection} onSectionChange={setActiveSection} />

      <div className="flex-1 overflow-hidden">
        <ResidentHeader />

        <main className="flex-1 overflow-y-auto">{renderContent()}</main>
      </div>
    </div>
  );
}
