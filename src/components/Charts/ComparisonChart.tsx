'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { ChartData } from '@/types';

interface ComparisonChartProps {
  data: ChartData[];
  type?: 'bar' | 'radar';
  title: string;
}

export default function ComparisonChart({ data, type = 'bar', title }: ComparisonChartProps) {
  interface TooltipPayload {
    color: string;
    dataKey: string;
    value: number;
  }

  interface CustomTooltipProps {
    active?: boolean;
    payload?: TooltipPayload[];
    label?: string;
  }

  const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-medium text-gray-900">{`${label}`}</p>
          {payload.map((entry: TooltipPayload, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm">
              {`${entry.dataKey.toUpperCase()}: ${entry.value}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 100]} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Bar dataKey="gcp" fill="#458af5" name="Google Cloud Platform" />
        <Bar dataKey="azure" fill="#458af5" name="Microsoft Azure" />
        <Bar dataKey="aws" fill="#458af5" name="Amazon Web Services" />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderRadarChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <RadarChart data={data} margin={{ top: 20, right: 80, bottom: 20, left: 80 }}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <PolarRadiusAxis angle={90} domain={[0, 100]} />
        <Radar name="GCP" dataKey="gcp" stroke="#458af5" fill="#458af5" fillOpacity={0.3} />
        <Radar name="Azure" dataKey="azure" stroke="#458af5" fill="#458af5" fillOpacity={0.3} />
        <Radar name="AWS" dataKey="aws" stroke="#458af5" fill="#458af5" fillOpacity={0.3} />
        <Legend />
        <Tooltip content={<CustomTooltip />} />
      </RadarChart>
    </ResponsiveContainer>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-medium text-gray-900 mb-6">{title}</h3>
      {type === 'bar' ? renderBarChart() : renderRadarChart()}
    </div>
  );
}
