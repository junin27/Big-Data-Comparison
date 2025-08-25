'use client';

import { ReactNode } from 'react';

interface CardProps {
  title: string;
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  isActive?: boolean;
}

export function Card({ title, children, className = '', icon, isActive = false }: CardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border border-gray-200 ${className}`}>
      <div
        className={
          isActive
            ? 'px-6 py-4 border-l-4 border-l-blue-600 bg-blue-50 rounded-t-md'
            : 'px-6 py-4 border-b border-gray-200 rounded-t-md'
        }
        style={{ borderRight: 'none', borderTop: 'none', borderBottom: 'none' }}
      >
        <div className="flex items-center">
          {icon && <div className="mr-3">{icon}</div>}
          <h3 className={`text-lg font-medium ${isActive ? 'text-blue-600' : 'text-gray-900'}`}>{title}</h3>
        </div>
      </div>
      <div className="p-6">{children}</div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  color?: string;
}

export function StatCard({ title, value, subtitle, color = 'blue' }: StatCardProps) {
  const colorClasses = {
    blue: 'text-blue-600 bg-blue-100',
    green: 'text-green-600 bg-green-100',
    orange: 'text-orange-600 bg-orange-100',
    purple: 'text-purple-600 bg-purple-100',
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center">
        <div className={`rounded-lg p-3 ${colorClasses[color as keyof typeof colorClasses]}`}>
          <div className="text-lg font-semibold">{value}</div>
        </div>
        <div className="ml-4">
          <h3 className="text-sm font-medium text-gray-900">{title}</h3>
          {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
