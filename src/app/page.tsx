'use client';
import { sections, chartData, platforms } from '@/data/mockData';
import ComparisonChart from '@/components/Charts/ComparisonChart';
import { Card, StatCard } from '@/components/Common/Card';
import { Database } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8">
        <h1 className="text-3xl font-bold mb-4">
          Relatório Comparativo: Plataformas Big Data em Nuvem
        </h1>
        <p className="text-xl text-blue-100 mb-6">
          Análise abrangente de GCP, Azure e AWS para tomada de decisão estratégica
        </p>
        <div className="flex flex-wrap gap-4">
          {platforms.map((platform) => (
            <div key={platform.id} className="flex items-center bg-white/10 rounded-lg px-4 py-2">
              <div
                className="w-3 h-3 rounded mr-3"
                style={{ backgroundColor: platform.color }}
              />
              <span className="font-medium">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Key Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Plataformas Analisadas"
          value="3"
          subtitle="GCP, Azure, AWS"
          color="blue"
        />
        <StatCard
          title="Categorias de Serviços"
          value="15+"
          subtitle="Storage, ML, Analytics"
          color="green"
        />
        <StatCard
          title="Métricas Comparadas"
          value="50+"
          subtitle="Performance, Custos, Recursos"
          color="orange"
        />
        <StatCard
          title="Regiões Analisadas"
          value="US East"
          subtitle="Dados de precificação"
          color="purple"
        />
      </div>

      {/* Quick Overview Chart */}
      <ComparisonChart
        data={chartData}
        type="radar"
        title="Visão Geral Comparativa - Índices de Performance"
      />

      {/* Navigation Quick Access */}
      <Card title="Navegação Rápida" icon={<Database size={20} />}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {sections.slice(0, 6).map((section) => (
            <div
              key={section.id}
              className="text-left p-4 border border-gray-200 rounded-lg bg-white"
            >
              <h4 className="font-medium text-gray-900 mb-2">{section.title}</h4>
              <p className="text-sm text-gray-600">
                {section.subsections?.length || 0} subseções
              </p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
