'use client';

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { Card } from '@/components/Common/Card';
import { Database } from 'lucide-react';

// Dados extraídos da tabela fornecida - estruturados como cenários de uso
// mlAiRecommendations array removed as it was not being used

// Dados para gráfico de barras - pontuação das plataformas por cenário (0-100)
const platformDistribution = [
  { scenario: 'Treinamento', Azure: 90, GCP: 82, AWS: 85 },
  { scenario: 'Inference', Azure: 85, GCP: 75, AWS: 95 },
  { scenario: 'Principal Vantagem', Azure: 95, GCP: 90, AWS: 85 },
  { scenario: 'Foco de Custo', Azure: 85, GCP: 70, AWS: 90 }
];

// Dados para gráfico de radar - características das plataformas
const radarData = [
  {
    characteristic: 'Treinamento',
    Azure: 90,
    GCP: 82,
    AWS: 85
  },
  {
    characteristic: 'Inference',
    Azure: 85,
    GCP: 75,
    AWS: 95
  },
  {
    characteristic: 'Principal Vantagem',
    Azure: 95,
    GCP: 90,
    AWS: 85
  },
  {
    characteristic: 'Foco de Custo',
    Azure: 85,
    GCP: 70,
    AWS: 90
  }
];

export default function MLAIComparisonPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  // const [visiblePlatforms, setVisiblePlatforms] = useState<string[]>(['GCP Vertex AI', 'Azure ML', 'AWS SageMaker']);
  const [visiblePlatformsBar, setVisiblePlatformsBar] = useState<Record<string, boolean>>({
    Azure: true,
    GCP: true,
    AWS: true
  });
  const [visiblePlatformsRadar, setVisiblePlatformsRadar] = useState<Record<string, boolean>>({
    Azure: true,
    GCP: true,
    AWS: true
  });

  const togglePlatformBar = (platform: string) => {
    setVisiblePlatformsBar(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  const togglePlatformRadar = (platform: string) => {
    setVisiblePlatformsRadar(prev => ({
      ...prev,
      [platform]: !prev[platform]
    }));
  };

  const mlAiCategories = ['Treinamento', 'Inference', 'Principal Vantagem', 'Foco de Custo'];
  
  // const filteredData = selectedCategory === 'all' 
  //   ? mlAiCategories 
  //   : mlAiCategories.filter(cat => cat.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Comparação de Plataformas ML/AI
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Análise comparativa detalhada entre GCP Vertex AI, Azure Machine Learning e AWS SageMaker 
          para projetos de Machine Learning e Inteligência Artificial.
        </p>
      </div>

      {/* Filtros */}
      <Card title="Filtros por Categoria" icon={<Database className="w-5 h-5 text-blue-600" />}>
        <div className="p-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todas as Categorias
            </button>
            {mlAiCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Explicação sobre Cálculo das Porcentagens */}
          <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-gray-500 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-1">
                  Como são calculadas as porcentagens de recomendação?
                </h4>
                <p className="text-sm text-gray-600">
                  As porcentagens representam a <strong>distribuição relativa de recomendação</strong> entre as três plataformas para cada categoria. 
                  Para cada característica, as três porcentagens sempre somam <strong>100%</strong>, indicando qual plataforma é mais recomendada 
                  em relação às outras naquela categoria específica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Tabela Comparativa */}
      <Card 
        title="Tabela Comparativa de Recomendações"
        icon={
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
            <path d="M18 17V9"></path>
            <path d="M13 17V5"></path>
            <path d="M8 17v-3"></path>
          </svg>
        }
      >
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse" style={{border: '4px solid black', borderRadius: '8px'}}>
              <thead>
                <tr className="bg-gray-600 text-white">
                  <th className="px-6 py-4 text-left font-bold" style={{border: '4px solid black'}}>Característica</th>
                  <th className="px-6 py-4 text-left font-bold" style={{border: '4px solid black'}}>Serviço Recomendado</th>
                  <th className="px-6 py-4 text-left font-bold" style={{border: '4px solid black'}}>Justificativa Principal</th>
                  <th className="px-6 py-4 text-center font-bold" style={{border: '4px solid black'}}>Recomendação (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{backgroundColor: '#f9fafb'}}>
                  <td 
                    className="px-6 py-4 font-semibold text-white bg-gray-600" 
                    style={{border: '4px solid black'}}
                    rowSpan={3}
                  >
                    Treinamento
                  </td>
                  <td className="px-6 py-4" style={{border: '4px solid black'}}>
                    <div className="flex items-center">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mr-3 flex-shrink-0"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#4285f4" strokeWidth="2" fill="#4285f4" fillOpacity="0.1"/>
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#4285f4" strokeWidth="2" fill="none"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#4285f4" strokeWidth="2" fill="none"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: '#4285f4' }}>
                        GCP Vertex AI
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                    Custo estimado: $4.82 por hora para N1 Standard-8 + Tesla T4 GPU
                  </td>
                  <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-800">
                      32%
                    </span>
                  </td>
                </tr>
                <tr style={{backgroundColor: '#ffffff'}}>
                  <td className="px-6 py-4" style={{border: '4px solid black'}}>
                    <div className="flex items-center">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mr-3 flex-shrink-0"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#dc2626" strokeWidth="2" fill="#dc2626" fillOpacity="0.1"/>
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#dc2626" strokeWidth="2" fill="none"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#dc2626" strokeWidth="2" fill="none"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: '#dc2626' }}>
                        Azure Machine Learning
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                    Custo estimado: $0.90 por hora para NC6 GPU
                  </td>
                  <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-red-100 text-red-800">
                      35%
                    </span>
                  </td>
                </tr>
                <tr style={{backgroundColor: '#f9fafb'}}>
                  <td className="px-6 py-4" style={{border: '4px solid black'}}>
                    <div className="flex items-center">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mr-3 flex-shrink-0"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" fillOpacity="0.1"/>
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#fbbf24" strokeWidth="2" fill="none"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#fbbf24" strokeWidth="2" fill="none"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: '#fbbf24' }}>
                        AWS SageMaker
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                    Custo estimado: $3.06 por hora para p3.2xlarge GPU
                  </td>
                  <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-yellow-100 text-yellow-800">
                      33%
                    </span>
                  </td>
                </tr>
                
                <tr style={{backgroundColor: '#ffffff'}}>
                  <td 
                    className="px-6 py-4 font-semibold text-white bg-gray-600" 
                    style={{border: '4px solid black'}}
                    rowSpan={3}
                  >
                    Inference
                  </td>
                  <td className="px-6 py-4" style={{border: '4px solid black'}}>
                    <div className="flex items-center">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mr-3 flex-shrink-0"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#4285f4" strokeWidth="2" fill="#4285f4" fillOpacity="0.1"/>
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#4285f4" strokeWidth="2" fill="none"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#4285f4" strokeWidth="2" fill="none"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: '#4285f4' }}>
                        GCP Vertex AI
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                    Custo estimado: $0.1851 por hora para F2-standard-4
                  </td>
                  <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-800">
                      25%
                    </span>
                  </td>
                </tr>
                <tr style={{backgroundColor: '#f9fafb'}}>
                  <td className="px-6 py-4" style={{border: '4px solid black'}}>
                    <div className="flex items-center">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mr-3 flex-shrink-0"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#dc2626" strokeWidth="2" fill="#dc2626" fillOpacity="0.1"/>
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#dc2626" strokeWidth="2" fill="none"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#dc2626" strokeWidth="2" fill="none"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: '#dc2626' }}>
                        Azure Machine Learning
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                    Custo estimado: $0.145 por hora para Standard_DS3_v2
                  </td>
                  <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-red-100 text-red-800">
                      30%
                    </span>
                  </td>
                </tr>
                <tr style={{backgroundColor: '#ffffff'}}>
                  <td className="px-6 py-4" style={{border: '4px solid black'}}>
                    <div className="flex items-center">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mr-3 flex-shrink-0"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" fillOpacity="0.1"/>
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#fbbf24" strokeWidth="2" fill="none"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#fbbf24" strokeWidth="2" fill="none"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: '#fbbf24' }}>
                        AWS SageMaker
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                    Custo estimado: $0.1345 por hora para ml.m5.large
                  </td>
                  <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-yellow-100 text-yellow-800">
                      45%
                    </span>
                  </td>
                </tr>
                
                <tr style={{backgroundColor: '#f9fafb'}}>
                  <td 
                    className="px-6 py-4 font-semibold text-white bg-gray-600" 
                    style={{border: '4px solid black'}}
                    rowSpan={3}
                  >
                    Principal Vantagem
                  </td>
                  <td className="px-6 py-4" style={{border: '4px solid black'}}>
                    <div className="flex items-center">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mr-3 flex-shrink-0"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#4285f4" strokeWidth="2" fill="#4285f4" fillOpacity="0.1"/>
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#4285f4" strokeWidth="2" fill="none"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#4285f4" strokeWidth="2" fill="none"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: '#4285f4' }}>
                        GCP Vertex AI
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                    Usabilidade, AutoML e forte integração com BigQuery
                  </td>
                  <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-800">
                      35%
                    </span>
                  </td>
                </tr>
                <tr style={{backgroundColor: '#ffffff'}}>
                  <td className="px-6 py-4" style={{border: '4px solid black'}}>
                    <div className="flex items-center">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mr-3 flex-shrink-0"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#dc2626" strokeWidth="2" fill="#dc2626" fillOpacity="0.1"/>
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#dc2626" strokeWidth="2" fill="none"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#dc2626" strokeWidth="2" fill="none"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: '#dc2626' }}>
                        Azure Machine Learning
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                    Ferramentas visuais e integração com o ecossistema Microsoft
                  </td>
                  <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-red-100 text-red-800">
                      40%
                    </span>
                  </td>
                </tr>
                <tr style={{backgroundColor: '#f9fafb'}}>
                  <td className="px-6 py-4" style={{border: '4px solid black'}}>
                    <div className="flex items-center">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mr-3 flex-shrink-0"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" fillOpacity="0.1"/>
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#fbbf24" strokeWidth="2" fill="none"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#fbbf24" strokeWidth="2" fill="none"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: '#fbbf24' }}>
                        AWS SageMaker
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                    Ampla variedade de instâncias e ecossistema maduro
                  </td>
                  <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-yellow-100 text-yellow-800">
                      25%
                    </span>
                  </td>
                </tr>
                
                <tr style={{backgroundColor: '#ffffff'}}>
                  <td 
                    className="px-6 py-4 font-semibold text-white bg-gray-600" 
                    style={{border: '4px solid black'}}
                    rowSpan={3}
                  >
                    Foco de Custo
                  </td>
                  <td className="px-6 py-4" style={{border: '4px solid black'}}>
                    <div className="flex items-center">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mr-3 flex-shrink-0"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#4285f4" strokeWidth="2" fill="#4285f4" fillOpacity="0.1"/>
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#4285f4" strokeWidth="2" fill="none"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#4285f4" strokeWidth="2" fill="none"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: '#4285f4' }}>
                        GCP Vertex AI
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                    A inference é o custo dominante, e não o training
                  </td>
                  <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-blue-100 text-blue-800">
                      25%
                    </span>
                  </td>
                </tr>
                <tr style={{backgroundColor: '#f9fafb'}}>
                  <td className="px-6 py-4" style={{border: '4px solid black'}}>
                    <div className="flex items-center">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mr-3 flex-shrink-0"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#dc2626" strokeWidth="2" fill="#dc2626" fillOpacity="0.1"/>
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#dc2626" strokeWidth="2" fill="none"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#dc2626" strokeWidth="2" fill="none"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: '#dc2626' }}>
                        Azure Machine Learning
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                    A inference é o custo dominante, e não o training
                  </td>
                  <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-red-100 text-red-800">
                      30%
                    </span>
                  </td>
                </tr>
                <tr style={{backgroundColor: '#ffffff'}}>
                  <td className="px-6 py-4" style={{border: '4px solid black'}}>
                    <div className="flex items-center">
                      <svg 
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        className="mr-3 flex-shrink-0"
                      >
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#fbbf24" strokeWidth="2" fill="#fbbf24" fillOpacity="0.1"/>
                        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#fbbf24" strokeWidth="2" fill="none"/>
                        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" stroke="#fbbf24" strokeWidth="2" fill="none"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: '#fbbf24' }}>
                        AWS SageMaker
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                    A inference é o custo dominante, e não o training
                  </td>
                  <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold bg-yellow-100 text-yellow-800">
                      45%
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* Explicação sobre Porcentagem de Recomendação */}
      <Card title="Como Funciona a Porcentagem de Recomendação" icon={
        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9,12l2,2 4,-4"></path>
        </svg>
      }>
        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-800">
                  Metodologia de Avaliação
                </h3>
                <div className="mt-2 text-sm text-blue-700">
                  <p className="mb-3">
                    As porcentagens de recomendação são baseadas em uma análise abrangente que considera:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Custo-benefício:</strong> Relação entre preço e performance oferecida</li>
                    <li><strong>Facilidade de uso:</strong> Curva de aprendizado e interface intuitiva</li>
                    <li><strong>Integração:</strong> Compatibilidade com outros serviços e ferramentas</li>
                    <li><strong>Escalabilidade:</strong> Capacidade de crescer conforme a demanda</li>
                    <li><strong>Suporte e documentação:</strong> Qualidade do suporte técnico e recursos disponíveis</li>
                  </ul>
                  <p className="mt-3">
                    <strong>Interpretação:</strong> Quanto maior a porcentagem, mais recomendada é a plataforma para aquela categoria específica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Gráficos */}
      <div className="space-y-8">
        {/* Gráfico de Barras */}
        <Card title="Distribuição de Prioridades por Cenário" icon={
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
            <path d="M18 17V9"></path>
            <path d="M13 17V5"></path>
            <path d="M8 17v-3"></path>
          </svg>
        }>
          <div className="p-6">
            <div className="h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={platformDistribution} margin={{ top: 30, right: 50, left: 30, bottom: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="scenario" 
                    tick={{ fontSize: 14 }}
                    interval={0}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    tickFormatter={(value) => {
                      if (value === 'Treinamento') return 'Treinamento de Modelos';
                      if (value === 'Inference') return 'Inference de Modelos';
                      return value;
                    }}
                  />
                  <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}`} tick={{ fontSize: 12 }} />
                  <Tooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const sortedData = payload
                          .map(entry => ({ name: entry.name, value: entry.value, color: entry.color }))
                          .sort((a, b) => (b.value as number) - (a.value as number));
                        
                        return (
                          <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
                            <p className="font-semibold mb-2">{`Cenário: ${label}`}</p>
                            {sortedData.map((entry) => (
                              <p key={entry.name} className="text-sm" style={{ color: entry.color }}>
                                {`${entry.name}: ${entry.value} pontos`}
                              </p>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  {visiblePlatformsBar.Azure && <Bar dataKey="Azure" fill="#dc2626" name="Microsoft Azure" />}
                  {visiblePlatformsBar.GCP && <Bar dataKey="GCP" fill="#4285f4" name="Google Cloud Platform" />}
                  {visiblePlatformsBar.AWS && <Bar dataKey="AWS" fill="#fbbf24" name="Amazon Web Services" />}
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legenda customizada com funcionalidade de clique */}
             <div className="mt-4 flex justify-center space-x-6">
               {[
                 { name: 'Azure', color: '#dc2626' },
                 { name: 'GCP', color: '#4285f4' },
                 { name: 'AWS', color: '#fbbf24' }
               ].map((platform) => (
                 <button
                   key={platform.name}
                   onClick={() => togglePlatformBar(platform.name)}
                   className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                     visiblePlatformsBar[platform.name]
                       ? 'bg-gray-100 hover:bg-gray-200'
                       : 'bg-gray-300 hover:bg-gray-400 opacity-60'
                   }`}
                 >
                   <div
                     className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                       visiblePlatformsBar[platform.name] ? 'opacity-100' : 'opacity-40'
                     }`}
                     style={{
                       backgroundColor: visiblePlatformsBar[platform.name] ? platform.color : 'transparent',
                       borderColor: platform.color
                     }}
                   />
                   <span
                     className={`text-sm font-medium transition-all duration-200 ${
                       visiblePlatformsBar[platform.name] ? 'text-gray-800' : 'text-gray-500'
                     }`}
                   >
                     {platform.name}
                   </span>
                 </button>
               ))}
             </div>
            
            <p className="text-sm text-gray-600 mt-4">
              <strong>Interpretação:</strong> Valores maiores indicam melhor pontuação (0 a 100 pontos). Quanto maior a pontuação, melhor a plataforma se adequa ao cenário específico. A plataforma com maior pontuação é considerada a mais recomendada para aquele contexto.
            </p>
          </div>
        </Card>

        {/* Gráfico de Radar */}
        <Card title="Comparativo de Características" icon={
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            <path d="M16 7h6v6"></path>
            <path d="m22 7-8.5 8.5-5-5L2 17"></path>
          </svg>
        }>
          <div className="p-6">
            <div className="h-[500px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} margin={{ top: 40, right: 80, left: 80, bottom: 40 }}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="characteristic" tick={{ fontSize: 13 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
                  <Tooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        // Filtrar apenas plataformas visíveis e ordenar por pontuação decrescente
                        const visiblePayload = payload.filter(entry => visiblePlatformsRadar[entry.name as string]);
                        const sortedPayload = [...visiblePayload].sort((a, b) => b.value - a.value);
                        
                        return (
                          <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
                            <p className="font-semibold text-gray-800 mb-2">{label}</p>
                            {sortedPayload.map((entry, index) => {
                              const fullName = entry.name === 'Azure' ? 'Microsoft Azure' : 
                                             entry.name === 'GCP' ? 'Google Cloud Platform' : 
                                             entry.name === 'AWS' ? 'Amazon Web Services' : entry.name;
                              return (
                                <p key={index} className="text-sm" style={{ color: entry.color }}>
                                  <span className="font-medium">{fullName}:</span> {entry.value} pontos
                                </p>
                              );
                            })}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  {visiblePlatformsRadar.Azure && <Radar name="Azure" dataKey="Azure" stroke="#dc2626" fill="#dc2626" fillOpacity={0.1} strokeWidth={2} />}
                  {visiblePlatformsRadar.GCP && <Radar name="GCP" dataKey="GCP" stroke="#4285f4" fill="#4285f4" fillOpacity={0.1} strokeWidth={2} />}
                  {visiblePlatformsRadar.AWS && <Radar name="AWS" dataKey="AWS" stroke="#fbbf24" fill="#fbbf24" fillOpacity={0.1} strokeWidth={2} />}
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legenda customizada com funcionalidade de clique */}
             <div className="mt-4 flex justify-center space-x-6">
               {[
                 { name: 'Azure', color: '#dc2626' },
                 { name: 'GCP', color: '#4285f4' },
                 { name: 'AWS', color: '#fbbf24' }
               ].map((platform) => (
                 <button
                   key={platform.name}
                   onClick={() => togglePlatformRadar(platform.name)}
                   className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                     visiblePlatformsRadar[platform.name]
                       ? 'bg-gray-100 hover:bg-gray-200'
                       : 'bg-gray-300 hover:bg-gray-400 opacity-60'
                   }`}
                 >
                   <div
                     className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                       visiblePlatformsRadar[platform.name] ? 'opacity-100' : 'opacity-40'
                     }`}
                     style={{
                       backgroundColor: visiblePlatformsRadar[platform.name] ? platform.color : 'transparent',
                       borderColor: platform.color
                     }}
                   />
                   <span
                     className={`text-sm font-medium transition-all duration-200 ${
                       visiblePlatformsRadar[platform.name] ? 'text-gray-800' : 'text-gray-500'
                     }`}
                   >
                     {platform.name}
                   </span>
                 </button>
               ))}
             </div>
            
            <p className="text-sm text-gray-600 mt-4">
              <strong>Interpretação:</strong> Valores maiores indicam melhor performance (0 a 100 pontos). Quanto maior a pontuação, melhor a plataforma se destaca naquela característica específica. A plataforma com maior pontuação é considerada superior naquele aspecto.
            </p>
          </div>
        </Card>
      </div>

      {/* Insights Educacionais */}
      <Card title="Análise Comparativa ML/AI" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600">
          <path d="M9 11H5a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h4l3 3h7a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-7l-3 3z"></path>
        </svg>
      }>
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                GCP Vertex AI
              </h4>
              <ul className="text-blue-800 text-sm space-y-2">
                <li><strong>Melhor para:</strong> AutoML e usabilidade</li>
                <li><strong>Treinamento:</strong> $4.82/h (mais caro)</li>
                <li><strong>Inference:</strong> $0.1851/h (intermediário)</li>
                <li><strong>Destaque:</strong> Integração com BigQuery</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Azure Machine Learning
              </h4>
              <ul className="text-red-800 text-sm space-y-2">
                <li><strong>Melhor para:</strong> Custo de treinamento</li>
                <li><strong>Treinamento:</strong> $0.90/h (mais barato)</li>
                <li><strong>Inference:</strong> $0.145/h (intermediário)</li>
                <li><strong>Destaque:</strong> Ecossistema Microsoft</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                AWS SageMaker
              </h4>
              <ul className="text-yellow-800 text-sm space-y-2">
                <li><strong>Melhor para:</strong> Custo de inference</li>
                <li><strong>Treinamento:</strong> $3.06/h (intermediário)</li>
                <li><strong>Inference:</strong> $0.1345/h (mais barato)</li>
                <li><strong>Destaque:</strong> Variedade de instâncias</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-500">
            <h4 className="font-semibold text-gray-900 mb-2">🎯 Conclusões Principais</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-gray-900">Foco de Custo:</strong>
                <p className="text-gray-700 mt-1">Todas as plataformas concordam que <strong>inference é o custo dominante</strong>, não o treinamento. Isso significa que otimizar para inference é mais importante para o TCO total.</p>
              </div>
              <div>
                <strong className="text-gray-900">Escolha da Plataforma:</strong>
                <p className="text-gray-700 mt-1">
                  <strong>Azure ML</strong> para projetos com muito treinamento, 
                  <strong>AWS SageMaker</strong> para alta demanda de inference, 
                  <strong>GCP Vertex AI</strong> para facilidade de uso.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Insights Educacionais */}
      <Card title="Insights e Considerações Estratégicas" icon={
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" strokeWidth="2" />
          <circle cx="12" cy="12" r="6" strokeWidth="2" />
          <circle cx="12" cy="12" r="2" strokeWidth="2" />
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeWidth="1" />
        </svg>
      }>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  Recomendações ML/AI
                </h4>
              <ul className="text-yellow-800 space-y-2 text-sm">
                <li>• Priorize inference sobre treinamento</li>
                <li>• Considere AutoML para agilidade</li>
                <li>• Avalie custos de GPU vs CPU</li>
                <li>• Planeje MLOps desde o início</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  Critérios de Decisão ML/AI
                </h4>
              <ul className="text-yellow-800 space-y-2 text-sm">
                <li>• <strong>Custo:</strong> Treinamento vs Inference</li>
                <li>• <strong>AutoML:</strong> Facilidade para cientistas</li>
                <li>• <strong>Integração:</strong> Ecossistema existente</li>
                <li>• <strong>Expertise:</strong> Conhecimento da equipe</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  Metodologia
                </h4>
              <ul className="text-yellow-800 space-y-2 text-sm">
                <li>• Análise de custos reais por hora</li>
                <li>• Benchmarks de usabilidade</li>
                <li>• Avaliação de recursos AutoML</li>
                <li>• Feedback de implementações</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
