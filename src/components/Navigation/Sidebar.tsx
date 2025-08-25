'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronRight, Home, BarChart, Shield, Database, Cloud, FileText, Target } from 'lucide-react';

import { sections } from '@/data/mockData';

interface SidebarProps {
  isOpen: boolean;
  currentSection: string;
  onSectionChange: (sectionId: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, currentSection, onSectionChange }) => {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev =>
      prev.includes(sectionId)
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const getSectionIcon = (sectionId: string) => {
    switch (sectionId) {
      case 'strategic-analysis':
        return <Target className="h-5 w-5" />;
      case 'detailed-comparison':
        return <BarChart className="h-5 w-5" />;
      case 'cost-benefit-analysis':
        return <FileText className="h-5 w-5" />;
      case 'security-compliance':
        return <Shield className="h-5 w-5" />;
      case 'databricks':
        return <Database className="h-5 w-5" />;
      case 'comparative-tables':
        return <BarChart className="h-5 w-5" />;
      case 'conclusion':
        return <Target className="h-5 w-5" />;
      default:
        return <Cloud className="h-5 w-5" />;
    }
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-600 bg-opacity-75 z-40 lg:hidden"
          onClick={() => onSectionChange(currentSection)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-center h-16 px-6 bg-gray-50 border-b">
            <h2 className="text-lg font-semibold text-gray-900">Navegação</h2>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-6 overflow-y-auto">
            <div className="space-y-3">
              {/* Home */}
              <Link
                href="/"
                className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                  pathname === '/'
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Home className="h-5 w-5 mr-3 flex-shrink-0" />
                <span className="truncate">Página Inicial</span>
              </Link>

              {/* Sections */}
              {sections.map((section) => (
                <div key={section.id} className="space-y-2">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      pathname.startsWith(`/${section.id}`)
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center min-w-0 flex-1">
                      <div className="flex-shrink-0">
                        {getSectionIcon(section.id)}
                      </div>
                      <span className="ml-3 text-left leading-tight">{section.title}</span>
                    </div>
                    {section.subsections && section.subsections.length > 0 && (
                      <div className="ml-2 flex-shrink-0">
                        {expandedSections.includes(section.id) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </div>
                    )}
                  </button>

                  {/* Subsections */}
                  {expandedSections.includes(section.id) && section.subsections && (
                    <div className="pl-8 space-y-1">
                      {section.subsections.map((subsection) => (
                        <Link
                          key={subsection.id}
                          href={`/${section.id}/${subsection.id}`}
                          className={`w-full block px-4 py-2 text-sm rounded-lg transition-colors leading-tight ${
                            pathname === `/${section.id}/${subsection.id}`
                              ? 'bg-blue-50 text-blue-600 border-l-4 border-blue-600'
                              : 'text-gray-600 hover:bg-gray-50'
                          }`}
                        >
                          <span className="block">{subsection.title}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <p>Relatório Comparativo</p>
              <p>💾 Big Data Cloud Platforms</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
