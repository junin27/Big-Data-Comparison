"use client";
import { useState } from 'react';
import Header from '@/components/Navigation/Header';
import Sidebar from '@/components/Navigation/Sidebar';

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const handleSectionChange = (sectionId: string) => setCurrentSection(sectionId);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header onToggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      <div className="flex flex-1">
        <Sidebar
          isOpen={isSidebarOpen}
          currentSection={currentSection}
          onSectionChange={handleSectionChange}
        />
        <main className={`flex-1 ${isSidebarOpen ? 'lg:ml-80' : ''}`}>
          <div className="w-full max-w-5xl px-6 sm:px-8 md:px-12 lg:px-16 mx-auto py-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
