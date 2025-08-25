'use client';

import { useState } from 'react';
import { Card } from '@/components/Common/Card';
import { Database, BarChart3, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Dados baseados na tabela anexa sobre comparação de data warehouses
const dataWarehouseRecommendations = [
  {
    category: 'Arquitetura',
    services: [
      {
        name: 'GCP BigQuery',
        description: 'Serverless puro; motor de execução Dremel',
        priority: 1,
        percentage: 40,
        justification: 'Arquitetura 100% serverless elimina completamente a necessidade de gerenciamento de infraestrutura.',
        color: '#4285f4'
      },
      {
        name: 'Azure Synapse Analytics',
        description: 'Híbrida (serverless e dedicated pools)',
        priority: 2,
        percentage: 35,
        justification: 'Flexibilidade entre serverless e pools dedicados oferece controle sobre recursos.',
        color: '#dc2626'
      },
      {
        name: 'AWS Redshift',
        description: 'Híbrida (serverless e provisioned clusters)',
        priority: 3,
        percentage: 25,
        justification: 'Combina clusters provisionados tradicionais com opção serverless.',
        color: '#fbbf24'
      }
    ]
  },
  {
    category: 'Unidade de Capacidade',
    services: [
      {
        name: 'GCP BigQuery',
        description: 'Slots (capacidade fixa)',
        priority: 1,
        percentage: 35,
        justification: 'Sistema de slots oferece previsibilidade de performance para workloads consistentes.',
        color: '#4285f4'
      },
      {
        name: 'Azure Synapse Analytics',
        description: 'DWUs (Data Warehouse Units)',
        priority: 2,
        percentage: 40,
        justification: 'DWUs permitem escalabilidade granular e controle preciso de recursos computacionais.',
        color: '#dc2626'
      },
      {
        name: 'AWS Redshift',
        description: 'RPUs (Redshift Processing Units) ou nós provisionados',
        priority: 3,
        percentage: 25,
        justification: 'Flexibilidade entre RPUs para serverless e nós dedicados para clusters provisionados.',
        color: '#fbbf24'
      }
    ]
  },
  {
    category: 'Modelo de Precificação',
    services: [
      {
        name: 'GCP BigQuery',
        description: 'On-demand (por TB processado) ou flat-rate (por slots)',
        priority: 1,
        percentage: 40,
        justification: 'Modelo pay-per-query ideal para análises esporádicas; flat-rate para uso intensivo.',
        color: '#4285f4'
      },
      {
        name: 'Azure Synapse Analytics',
        description: 'Serverless (por TB processado) ou dedicated (por DWU-hora)',
        priority: 2,
        percentage: 35,
        justification: 'Flexibilidade entre pagamento por uso ou capacidade dedicada conforme padrão de trabalho.',
        color: '#dc2626'
      },
      {
        name: 'AWS Redshift',
        description: 'Serverless (por RPU-hora) ou on-demand (por nó-hora)',
        priority: 3,
        percentage: 25,
        justification: 'Múltiplas opções de precificação para otimização de custos em diferentes cenários.',
        color: '#fbbf24'
      }
    ]
  },
  {
    category: 'Escalabilidade',
    services: [
      {
        name: 'GCP BigQuery',
        description: 'Auto-scaling sem limites de concorrência para cargas de trabalho padrão',
        priority: 1,
        percentage: 45,
        justification: 'Escalabilidade automática ilimitada sem necessidade de configuração manual.',
        color: '#4285f4'
      },
      {
        name: 'Azure Synapse Analytics',
        description: 'Auto-scaling em pools serverless; limites em pools dedicados',
        priority: 2,
        percentage: 35,
        justification: 'Escalabilidade automática no modo serverless com controle granular em pools dedicados.',
        color: '#dc2626'
      },
      {
        name: 'AWS Redshift',
        description: 'Auto-scaling no serverless; escalabilidade manual ou elástica no provisionado',
        priority: 3,
        percentage: 20,
        justification: 'Escalabilidade automática limitada ao modo serverless; manual em clusters provisionados.',
        color: '#fbbf24'
      }
    ]
  },
  {
    category: 'Integração-chave',
    services: [
      {
        name: 'GCP BigQuery',
        description: 'Google Cloud, Google Drive, Bigtable',
        priority: 1,
        percentage: 35,
        justification: 'Integração nativa profunda com todo ecossistema Google Cloud e ferramentas Google.',
        color: '#4285f4'
      },
      {
        name: 'Azure Synapse Analytics',
        description: 'Azure Data Lake, Power BI, Azure Data Factory',
        priority: 2,
        percentage: 40,
        justification: 'Integração otimizada com Azure Data Lake e Power BI para analytics end-to-end.',
        color: '#dc2626'
      },
      {
        name: 'AWS Redshift',
        description: 'Amazon S3, AWS Glue, Amazon Kinesis',
        priority: 3,
        percentage: 25,
        justification: 'Integração robusta com ecossistema AWS, especialmente S3 e serviços de dados.',
        color: '#fbbf24'
      }
    ]
  },
  {
    category: 'Preço por TB processado',
    services: [
      {
        name: 'GCP BigQuery',
        description: '$5 por TB (On-demand)',
        priority: 1,
        percentage: 40,
        justification: 'Preço competitivo com modelo transparente de pagamento por dados processados.',
        color: '#4285f4'
      },
      {
        name: 'Azure Synapse Analytics',
        description: '$5 por TB (Serverless)',
        priority: 2,
        percentage: 35,
        justification: 'Preço equivalente ao BigQuery com flexibilidade de pools dedicados.',
        color: '#dc2626'
      },
      {
        name: 'AWS Redshift',
        description: '$5 por TB (Redshift Spectrum)',
        priority: 3,
        percentage: 25,
        justification: 'Preço competitivo através do Redshift Spectrum para consultas em S3.',
        color: '#fbbf24'
      }
    ]
  }
];

// Dados para gráfico de barras - comparação por categorias
const categoryComparison = [
  { provider: 'GCP', 'Arquitetura': 95, 'Unidade de Capacidade': 85, 'Modelo de Precificação': 90, 'Escalabilidade': 95, 'Integração-chave': 85, 'Preço por TB processado': 90 },
  { provider: 'Azure', 'Arquitetura': 85, 'Unidade de Capacidade': 90, 'Modelo de Precificação': 85, 'Escalabilidade': 85, 'Integração-chave': 95, 'Preço por TB processado': 85 },
  { provider: 'AWS', 'Arquitetura': 80, 'Unidade de Capacidade': 75, 'Modelo de Precificação': 80, 'Escalabilidade': 75, 'Integração-chave': 90, 'Preço por TB processado': 80 }
];

// Dados para gráfico de radar - comparação por categorias
const radarCategoryData = [
  {
    provider: 'GCP',
    'Arquitetura': 95,
    'Unidade de Capacidade': 85,
    'Modelo de Precificação': 90,
    'Escalabilidade': 95,
    'Integração-chave': 85,
    'Preço por TB processado': 90
  },
  {
    provider: 'Azure',
    'Arquitetura': 85,
    'Unidade de Capacidade': 90,
    'Modelo de Precificação': 85,
    'Escalabilidade': 85,
    'Integração-chave': 95,
    'Preço por TB processado': 85
  },
  {
    provider: 'AWS',
    'Arquitetura': 80,
    'Unidade de Capacidade': 75,
    'Modelo de Precificação': 80,
    'Escalabilidade': 75,
    'Integração-chave': 90,
    'Preço por TB processado': 80
  }
];

// Principais vantagens de cada serviço (baseado na tabela anexa)
const serviceAdvantages = {
  'GCP BigQuery': {
    title: 'Arquitetura 100% serverless com motor Dremel',
    advantages: [
    'Slots para capacidade fixa e previsibilidade',
    'Auto-scaling sem limites de concorrência',
    'Integração nativa com Google Cloud e Drive',
    'Modelo on-demand por TB processado ($5/TB)',
    'Escalabilidade automática para cargas padrão'
  ]},
  'Azure Synapse Analytics': {
    title: 'Arquitetura híbrida (serverless + dedicated pools)',
    advantages: [
    'DWUs para controle granular de recursos',
    'Auto-scaling em pools serverless',
    'Integração otimizada com Azure Data Lake e Power BI',
    'Flexibilidade entre serverless ($5/TB) e dedicated',
    'Melhor integração com ferramentas Microsoft'
  ]},
  'AWS Redshift': {
    title: 'Arquitetura híbrida (serverless + provisioned)',
    advantages: [
    'RPUs para serverless e nós para provisionado',
    'Escalabilidade manual/elástica em clusters',
    'Integração robusta com S3, Glue e Kinesis',
    'Redshift Spectrum para consultas em S3 ($5/TB)',
    'Controle granular em clusters provisionados'
  ]}
};

// Tipos para os estados de visibilidade
type CategoryVisibility = {
  'Arquitetura': boolean;
  'Unidade de Capacidade': boolean;
  'Modelo de Precificação': boolean;
  'Escalabilidade': boolean;
  'Integração-chave': boolean;
  'Preço por TB processado': boolean;
};

type CategoryName = 'Arquitetura' | 'Unidade de Capacidade' | 'Modelo de Precificação' | 'Escalabilidade' | 'Integração-chave' | 'Preço por TB processado';

export default function DataWarehouseComparisonPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [visibleCategoriesBar, setVisibleCategoriesBar] = useState<CategoryVisibility>({
    'Arquitetura': true,
    'Unidade de Capacidade': true,
    'Modelo de Precificação': true,
    'Escalabilidade': true,
    'Integração-chave': true,
    'Preço por TB processado': true
  });

  const [visibleCategoriesRadar, setVisibleCategoriesRadar] = useState<CategoryVisibility>({
    'Arquitetura': true,
    'Unidade de Capacidade': true,
    'Modelo de Precificação': true,
    'Escalabilidade': true,
    'Integração-chave': true,
    'Preço por TB processado': true
  });

  const toggleCategoryBar = (categoryName: CategoryName): void => {
    setVisibleCategoriesBar(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const toggleCategoryRadar = (categoryName: CategoryName): void => {
    setVisibleCategoriesRadar(prev => ({
      ...prev,
      [categoryName]: !prev[categoryName]
    }));
  };

  const filteredComparison = selectedCategory === 'all' 
    ? dataWarehouseRecommendations 
    : dataWarehouseRecommendations.filter(comp => comp.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Comparação de Data Warehouses
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Análise comparativa entre GCP BigQuery, Azure Synapse Analytics e AWS Redshift, 
          considerando arquitetura, capacidade, precificação e casos de uso ideais.
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
            {dataWarehouseRecommendations.map((category) => (
              <button
                key={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === category.category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.category}
              </button>
            ))}
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
                  <th className="px-6 py-4 text-left font-bold" style={{border: '4px solid black'}}>Categoria</th>
                  <th className="px-6 py-4 text-left font-bold" style={{border: '4px solid black'}}>Serviço Recomendado</th>
                  <th className="px-6 py-4 text-left font-bold" style={{border: '4px solid black'}}>Justificativa Principal</th>
                  <th className="px-6 py-4 text-center font-bold" style={{border: '4px solid black'}}>Recomendação (%)</th>
                </tr>
              </thead>
              <tbody>
                {filteredComparison.map((recommendation, index) => 
                    recommendation.services.map((service, serviceIndex) => (
                        <tr key={`${index}-${serviceIndex}`} style={{backgroundColor: serviceIndex % 2 === 0 ? '#f9fafb' : '#ffffff'}}>
                          {serviceIndex === 0 && (
                            <td 
                              className="px-6 py-4 font-semibold text-white bg-gray-600" 
                              style={{border: '4px solid black'}}
                              rowSpan={recommendation.services.length}
                            >
                              {recommendation.category}
                            </td>
                          )}
                          <td className="px-6 py-4" style={{border: '4px solid black'}}>
                            <div className="flex items-center">
                              <svg 
                                 width="18" 
                                 height="18" 
                                 viewBox="0 0 24 24" 
                                 fill="none" 
                                 className="mr-3 flex-shrink-0"
                               >
                                 <ellipse cx="12" cy="5" rx="9" ry="3" stroke={service.color} strokeWidth="2" fill={service.color} fillOpacity="0.1"/>
                                 <path d="M3 5V19A9 3 0 0 0 21 19V5" stroke={service.color} strokeWidth="2"/>
                                 <path d="M3 12A9 3 0 0 0 21 12" stroke={service.color} strokeWidth="2"/>
                               </svg>
                               <div>
                                  <span className="font-medium text-base" style={{ color: service.color }}>
                                    {service.name}
                                  </span>
                                  <div className="text-sm text-gray-600">
                                    {service.description}
                                  </div>
                                </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                            {service.justification}
                          </td>
                          <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${
                              service.priority === 1 ? 'bg-green-100 text-green-800' :
                              service.priority === 2 ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {service.percentage}%
                            </span>
                          </td>
                        </tr>
                      ))
                  )}
              </tbody>
            </table>
          </div>
        </div>
      </Card>



      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gráfico de Barras - Comparação de Custos */}
        <Card title="Comparação de Custos por TB ($)" icon={<BarChart3 className="w-5 h-5 text-blue-600" />}>
          <div className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={categoryComparison} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="provider" />
                  <YAxis />
                  <Tooltip 
                    content={({ active, payload, label }: { active?: boolean; payload?: Array<{ dataKey: string; value: number; color: string }>; label?: string | number }) => {
                      if (active && payload && payload.length) {
                        const visiblePayload = payload.filter((entry) => visibleCategoriesBar[entry.dataKey as CategoryName]);
                        const sortedPayload = [...visiblePayload].sort((a, b) => (b.value as number) - (a.value as number));
                        
                        return (
                          <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
                            <p className="font-semibold text-gray-800 mb-2">{label}</p>
                            {sortedPayload.map((entry) => (
                              <p key={entry.dataKey} className="text-sm" style={{ color: entry.color }}>
                                {`${entry.dataKey}: ${entry.value} pontos`}
                              </p>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  {visibleCategoriesBar['Arquitetura'] && <Bar dataKey="Arquitetura" fill="#dc2626" name="Arquitetura" />}
                  {visibleCategoriesBar['Unidade de Capacidade'] && <Bar dataKey="Unidade de Capacidade" fill="#4285f4" name="Unidade de Capacidade" />}
                  {visibleCategoriesBar['Modelo de Precificação'] && <Bar dataKey="Modelo de Precificação" fill="#fbbf24" name="Modelo de Precificação" />}
                  {visibleCategoriesBar['Escalabilidade'] && <Bar dataKey="Escalabilidade" fill="#10b981" name="Escalabilidade" />}
                  {visibleCategoriesBar['Integração-chave'] && <Bar dataKey="Integração-chave" fill="#8b5cf6" name="Integração-chave" />}
                  {visibleCategoriesBar['Preço por TB processado'] && <Bar dataKey="Preço por TB processado" fill="#f59e0b" name="Preço por TB processado" />}
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legenda customizada com funcionalidade de clique */}
             <div className="mt-4 flex flex-wrap justify-center gap-2">
               {([
                 { name: 'Arquitetura' as CategoryName, color: '#dc2626' },
                 { name: 'Unidade de Capacidade' as CategoryName, color: '#4285f4' },
                 { name: 'Modelo de Precificação' as CategoryName, color: '#fbbf24' },
                 { name: 'Escalabilidade' as CategoryName, color: '#10b981' },
                 { name: 'Integração-chave' as CategoryName, color: '#8b5cf6' },
                 { name: 'Preço por TB processado' as CategoryName, color: '#f59e0b' }
               ]).map((category) => (
                 <button
                   key={category.name}
                   onClick={() => toggleCategoryBar(category.name)}
                   className={`flex items-center space-x-1 px-2 py-1 rounded-md text-xs transition-all duration-200 ${
                     visibleCategoriesBar[category.name]
                       ? 'bg-gray-100 hover:bg-gray-200'
                       : 'bg-gray-300 hover:bg-gray-400 opacity-60'
                   }`}
                 >
                   <div
                     className={`w-3 h-3 rounded-full border transition-all duration-200 ${
                       visibleCategoriesBar[category.name] ? 'opacity-100' : 'opacity-40'
                     }`}
                     style={{
                       backgroundColor: visibleCategoriesBar[category.name] ? category.color : 'transparent',
                       borderColor: category.color
                     }}
                   />
                   <span
                     className={`font-medium transition-all duration-200 ${
                       visibleCategoriesBar[category.name] ? 'text-gray-800' : 'text-gray-500'
                     }`}
                   >
                     {category.name}
                   </span>
                 </button>
               ))}
             </div>
            
            <p className="text-sm text-gray-600 mt-4">
              <strong>Interpretação:</strong> Valores menores indicam melhor custo-benefício. Quanto menor o valor, mais econômico é o serviço para aquela categoria de processamento.
            </p>
          </div>
        </Card>

        {/* Gráfico Radar - Características */}
        <Card title="Análise de Características" icon={<TrendingUp className="w-5 h-5 text-blue-600" />}>
          <div className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarCategoryData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="provider" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Tooltip 
                    content={({ active, payload, label }: { active?: boolean; payload?: Array<{ dataKey: string; value: number; color: string }>; label?: string | number }) => {
                      if (active && payload && payload.length) {
                        // Filtrar apenas categorias visíveis e ordenar por pontuação decrescente
                        const visiblePayload = payload.filter((entry) => visibleCategoriesRadar[entry.dataKey as CategoryName]);
                        const sortedPayload = [...visiblePayload].sort((a, b) => (b.value as number) - (a.value as number));
                        
                        return (
                          <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
                            <p className="font-semibold text-gray-800 mb-2">{label}</p>
                            {sortedPayload.map((entry, index: number) => {
                              return (
                                <p key={index} className="text-sm" style={{ color: entry.color }}>
                                  <span className="font-medium">{entry.dataKey}:</span> {entry.value} pontos
                                </p>
                              );
                            })}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  {visibleCategoriesRadar['Arquitetura'] && <Radar name="Arquitetura" dataKey="Arquitetura" stroke="#dc2626" fill="#dc2626" fillOpacity={0.1} strokeWidth={2} />}
                  {visibleCategoriesRadar['Unidade de Capacidade'] && <Radar name="Unidade de Capacidade" dataKey="Unidade de Capacidade" stroke="#4285f4" fill="#4285f4" fillOpacity={0.1} strokeWidth={2} />}
                  {visibleCategoriesRadar['Modelo de Precificação'] && <Radar name="Modelo de Precificação" dataKey="Modelo de Precificação" stroke="#fbbf24" fill="#fbbf24" fillOpacity={0.1} strokeWidth={2} />}
                  {visibleCategoriesRadar['Escalabilidade'] && <Radar name="Escalabilidade" dataKey="Escalabilidade" stroke="#10b981" fill="#10b981" fillOpacity={0.1} strokeWidth={2} />}
                  {visibleCategoriesRadar['Integração-chave'] && <Radar name="Integração-chave" dataKey="Integração-chave" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.1} strokeWidth={2} />}
                  {visibleCategoriesRadar['Preço por TB processado'] && <Radar name="Preço por TB processado" dataKey="Preço por TB processado" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.1} strokeWidth={2} />}
                </RadarChart>
              </ResponsiveContainer>
            </div>
            
            {/* Legenda customizada com funcionalidade de clique */}
             <div className="mt-4 flex flex-wrap justify-center gap-2">
               {([
                 { name: 'Arquitetura' as CategoryName, color: '#dc2626' },
                 { name: 'Unidade de Capacidade' as CategoryName, color: '#4285f4' },
                 { name: 'Modelo de Precificação' as CategoryName, color: '#fbbf24' },
                 { name: 'Escalabilidade' as CategoryName, color: '#10b981' },
                 { name: 'Integração-chave' as CategoryName, color: '#8b5cf6' },
                 { name: 'Preço por TB processado' as CategoryName, color: '#f59e0b' }
               ]).map((category) => (
                 <button
                   key={category.name}
                   onClick={() => toggleCategoryRadar(category.name)}
                   className={`flex items-center space-x-1 px-2 py-1 rounded-md text-xs transition-all duration-200 ${
                     visibleCategoriesRadar[category.name]
                       ? 'bg-gray-100 hover:bg-gray-200'
                       : 'bg-gray-300 hover:bg-gray-400 opacity-60'
                   }`}
                 >
                   <div
                     className={`w-3 h-3 rounded-full border transition-all duration-200 ${
                       visibleCategoriesRadar[category.name] ? 'opacity-100' : 'opacity-40'
                     }`}
                     style={{
                       backgroundColor: visibleCategoriesRadar[category.name] ? category.color : 'transparent',
                       borderColor: category.color
                     }}
                   />
                   <span
                     className={`font-medium transition-all duration-200 ${
                       visibleCategoriesRadar[category.name] ? 'text-gray-800' : 'text-gray-500'
                     }`}
                   >
                     {category.name}
                   </span>
                 </button>
               ))}
             </div>
            
            <p className="text-sm text-gray-600 mt-4">
              <strong>Interpretação:</strong> Valores maiores indicam melhor performance (0 a 100 pontos). Quanto maior a pontuação, melhor o serviço se destaca naquela característica específica.
            </p>
          </div>
        </Card>
      </div>

      {/* Principais Vantagens */}
      <Card title="Principais Vantagens de Cada Serviço" icon={<TrendingUp className="w-5 h-5 text-blue-600" />}>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(serviceAdvantages).map(([service, data]) => (
              <div key={service} className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="font-semibold text-yellow-900 mb-2">{service}</h3>
                <h4 className="text-sm font-medium text-yellow-600 mb-3">{data.title}</h4>
                <ul className="space-y-2">
                  {data.advantages.map((advantage, index) => (
                    <li key={index} className="text-sm text-yellow-800 flex items-start">
                      <span className="text-yellow-600 mr-2 mt-1">•</span>
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}