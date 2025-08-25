'use client';
import { sections, chartData, platforms } from '@/data/mockData';
import ComparisonChart from '@/components/Charts/ComparisonChart';
import { Card, StatCard } from '@/components/Common/Card';
import { Database } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleCardClick = (sectionId: string) => {
    router.push(`/${sectionId}`);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-white rounded-lg text-black p-8 border border-gray-200">
        <h1 className="text-3xl font-bold mb-4">
          Relatório Comparativo: Plataformas Big Data em Nuvem
        </h1>
        <p className="text-xl text-gray-800 mb-6">
          Análise abrangente de GCP, Azure e AWS para tomada de decisão estratégica
        </p>
        <div className="flex flex-wrap gap-4">
          {platforms.map((platform) => (
            <div key={platform.id} className="flex items-center bg-gray-100 rounded-lg px-4 py-2">
              <div
                className="w-3 h-3 rounded mr-3"
                style={{ backgroundColor: platform.color }}
              />
              <span className="font-medium text-black">{platform.name}</span>
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


    </div>
  );
}
