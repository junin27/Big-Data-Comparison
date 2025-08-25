'use client';

import { useState } from 'react';
import { Card } from '@/components/Common/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Dados do Databricks por plataforma
const databricksComparison = [
  {
    platform: 'Databricks on AWS',
    infrastructure: 'EC2 instances',
    storage: 'S3 + Delta Lake',
    networking: 'VPC nativo',
    security: 'IAM + Databricks Unity Catalog',
    advantages: [
      'Maior maturidade e estabilidade',
      'Integração profunda com serviços AWS',
      'Suporte completo para Unity Catalog',
      'Melhor para workloads de produção críticos'
    ],
    disadvantages: [
      'Configuração mais complexa',
      'Custos potencialmente mais altos',
      'Requer expertise em AWS'
    ],
    priority: 1,
    percentage: 45,
    color: '#fbbf24'
  },
  {
    platform: 'Databricks on Azure',
    infrastructure: 'Azure VMs',
    storage: 'Azure Data Lake + Delta Lake',
    networking: 'VNet integrado',
    security: 'Azure AD + Unity Catalog',
    advantages: [
      'Integração nativa com Power BI',
      'Experiência unificada com Azure Synapse',
      'Forte governança de dados',
      'Ideal para organizações Microsoft-centric'
    ],
    disadvantages: [
      'Menor flexibilidade de configuração',
      'Dependência do ecossistema Azure',
      'Performance pode variar por região'
    ],
    priority: 2,
    percentage: 35,
    color: '#dc2626'
  },
  {
    platform: 'Databricks on GCP',
    infrastructure: 'Compute Engine',
    storage: 'Cloud Storage + Delta Lake',
    networking: 'VPC nativo',
    security: 'Cloud IAM + Unity Catalog',
    advantages: [
      'Integração com BigQuery e Vertex AI',
      'Melhor para workloads de ML/AI',
      'Preços competitivos',
      'Simplicidade operacional'
    ],
    disadvantages: [
      'Menor maturidade comparado ao AWS',
      'Limitações em algumas funcionalidades',
      'Ecossistema menos abrangente'
    ],
    priority: 3,
    percentage: 20,
    color: '#4285f4'
  }
];

// Dados para gráfico de barras - comparação por características
const characteristicsComparison = [
  { characteristic: 'Maturidade', AWS: 95, Azure: 85, GCP: 75 },
  { characteristic: 'Performance', AWS: 90, Azure: 85, GCP: 80 },
  { characteristic: 'Integração', AWS: 85, Azure: 95, GCP: 90 },
  { characteristic: 'Custo-Benefício', AWS: 75, Azure: 80, GCP: 90 },
  { characteristic: 'ML/AI', AWS: 85, Azure: 80, GCP: 95 },
  { characteristic: 'Facilidade de Uso', AWS: 75, Azure: 90, GCP: 85 }
];

// Dados para gráfico de radar - características das plataformas
const radarData = [
  {
    characteristic: 'Maturidade',
    AWS: 95,
    Azure: 85,
    GCP: 75
  },
  {
    characteristic: 'Performance',
    AWS: 90,
    Azure: 85,
    GCP: 80
  },
  {
    characteristic: 'Integração',
    AWS: 85,
    Azure: 95,
    GCP: 90
  },
  {
    characteristic: 'Custo-Benefício',
    AWS: 75,
    Azure: 80,
    GCP: 90
  },
  {
    characteristic: 'ML/AI',
    AWS: 85,
    Azure: 80,
    GCP: 95
  },
  {
    characteristic: 'Facilidade de Uso',
    AWS: 75,
    Azure: 90,
    GCP: 85
  }
];

// Dados de precificação
const pricingData = [
  {
    tier: 'Standard',
    aws: '$0.40',
    azure: '$0.35',
    gcp: '$0.30',
    description: 'Para workloads de desenvolvimento e teste'
  },
  {
    tier: 'Premium',
    aws: '$0.55',
    azure: '$0.50',
    gcp: '$0.45',
    description: 'Para workloads de produção com recursos avançados'
  },
  {
    tier: 'Enterprise',
    aws: '$0.99',
    azure: '$0.95',
    gcp: '$0.90',
    description: 'Para organizações com requisitos de compliance'
  }
];

export default function DatabricksOverviewPage() {
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [visiblePlatformsBar, setVisiblePlatformsBar] = useState<Record<string, boolean>>({
    AWS: true,
    Azure: true,
    GCP: true
  });
  const [visiblePlatformsRadar, setVisiblePlatformsRadar] = useState<Record<string, boolean>>({
    AWS: true,
    Azure: true,
    GCP: true
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

  const filteredComparison = selectedPlatform === 'all' 
    ? databricksComparison 
    : databricksComparison.filter(item => item.platform.toLowerCase().includes(selectedPlatform.toLowerCase()));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Databricks: Comparativo por Plataforma de Nuvem
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Análise comparativa do Databricks nas três principais plataformas de nuvem: 
          AWS, Azure e Google Cloud Platform, incluindo características, vantagens e modelo de precificação.
        </p>
      </div>

      {/* Filtros */}
      <Card title="Filtros por Plataforma" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      }>
        <div className="p-6">
          {/* Explicação do Databricks */}
          <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
            <h4 className="font-semibold text-blue-900 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-blue-600">
                <path d="M9 11H1v3h8v3l3-3.5L9 11z"/>
                <path d="M22 12h-7"/>
              </svg>
              O que é o Databricks?
            </h4>
            <p className="text-blue-800 text-sm mb-3">
              O Databricks é uma <strong>plataforma unificada de analytics</strong> construída sobre Apache Spark, 
              que oferece um ambiente lakehouse para data science, data engineering e business intelligence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-blue-900">Principais Características:</strong>
                <ul className="list-disc list-inside text-blue-800 mt-1 space-y-1">
                  <li><strong>Lakehouse Architecture</strong> - Unifica data lake e data warehouse</li>
                  <li><strong>Collaborative Notebooks</strong> - Ambiente colaborativo para análise</li>
                  <li><strong>Delta Lake</strong> - Camada de armazenamento ACID</li>
                  <li><strong>MLflow</strong> - Gerenciamento do ciclo de vida de ML</li>
                  <li><strong>Unity Catalog</strong> - Governança unificada de dados</li>
                </ul>
              </div>
              <div>
                <strong className="text-blue-900">Modelo de Precificação:</strong>
                <ul className="list-disc list-inside text-blue-800 mt-1 space-y-1">
                  <li><strong>DBU (Databricks Units)</strong> - Unidade de processamento</li>
                  <li><strong>Infraestrutura</strong> - Custos da nuvem subjacente</li>
                  <li><strong>Tiers</strong> - Standard, Premium, Enterprise</li>
                  <li><strong>Pay-per-use</strong> - Cobrança por uso efetivo</li>
                </ul>
              </div>
            </div>
            <p className="text-blue-700 text-xs mt-3 italic">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1 text-blue-600">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg><strong>Nota:</strong> As porcentagens refletem a adequação relativa de cada plataforma 
              para diferentes tipos de workloads e requisitos organizacionais.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedPlatform('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedPlatform === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todas as Plataformas
            </button>
            <button
              onClick={() => setSelectedPlatform('aws')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedPlatform === 'aws'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              AWS
            </button>
            <button
              onClick={() => setSelectedPlatform('azure')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedPlatform === 'azure'
                  ? 'bg-red-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Azure
            </button>
            <button
              onClick={() => setSelectedPlatform('gcp')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedPlatform === 'gcp'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Google Cloud
            </button>
          </div>
        </div>
      </Card>

      {/* Tabela Comparativa */}
      <Card title="Comparativo Detalhado por Plataforma" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-600">
          <path d="M3 3h18v18H3zM9 9h6v6H9z"/>
        </svg>
      }>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Plataforma</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Infraestrutura</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Armazenamento</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Rede</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Segurança</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Recomendação</th>
                </tr>
              </thead>
              <tbody>
                {filteredComparison.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-4 py-3">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="font-medium text-gray-900">{item.platform}</span>
                      </div>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.infrastructure}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.storage}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.networking}</td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.security}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                        {item.percentage}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* Tabela de Precificação */}
      <Card title="Modelo de Precificação por DBU/hora" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-600">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      }>
        <div className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Tier</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">AWS</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">Azure</th>
                  <th className="border border-gray-300 px-4 py-3 text-center font-semibold">GCP</th>
                  <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Descrição</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">{item.tier}</td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className="inline-flex items-center px-2 py-1 rounded text-sm font-medium bg-yellow-100 text-yellow-800">
                        {item.aws}
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className="inline-flex items-center px-2 py-1 rounded text-sm font-medium bg-red-100 text-red-800">
                        {item.azure}
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-center">
                      <span className="inline-flex items-center px-2 py-1 rounded text-sm font-medium bg-blue-100 text-blue-800">
                        {item.gcp}
                      </span>
                    </td>
                    <td className="border border-gray-300 px-4 py-3 text-gray-700">{item.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
            <p className="text-yellow-800 text-sm">
              <strong>Nota:</strong> Os preços são por DBU (Databricks Unit) por hora e não incluem os custos de infraestrutura da nuvem subjacente (VMs, armazenamento, rede).
            </p>
          </div>
        </div>
      </Card>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gráfico de Barras */}
        <Card title="Comparação por Características" icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600">
            <path d="M3 3v18h18"/>
            <path d="M18 17V9"/>
            <path d="M13 17V5"/>
            <path d="M8 17v-3"/>
          </svg>
        }>
          <div className="p-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {Object.keys(visiblePlatformsBar).map((platform) => (
                <button
                  key={platform}
                  onClick={() => togglePlatformBar(platform)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    visiblePlatformsBar[platform]
                      ? platform === 'AWS' ? 'bg-yellow-500 text-white' 
                        : platform === 'Azure' ? 'bg-red-600 text-white'
                        : 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={characteristicsComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="characteristic" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                {visiblePlatformsBar.AWS && <Bar dataKey="AWS" fill="#fbbf24" />}
                {visiblePlatformsBar.Azure && <Bar dataKey="Azure" fill="#dc2626" />}
                {visiblePlatformsBar.GCP && <Bar dataKey="GCP" fill="#4285f4" />}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Gráfico de Radar */}
        <Card title="Análise Multidimensional" icon={
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-purple-600">
            <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"/>
            <line x1="12" y1="8" x2="12" y2="16"/>
            <line x1="8" y1="12" x2="16" y2="12"/>
          </svg>
        }>
          <div className="p-6">
            <div className="mb-4 flex flex-wrap gap-2">
              {Object.keys(visiblePlatformsRadar).map((platform) => (
                <button
                  key={platform}
                  onClick={() => togglePlatformRadar(platform)}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    visiblePlatformsRadar[platform]
                      ? platform === 'AWS' ? 'bg-yellow-500 text-white' 
                        : platform === 'Azure' ? 'bg-red-600 text-white'
                        : 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {platform}
                </button>
              ))}
            </div>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="characteristic" />
                <PolarRadiusAxis angle={90} domain={[0, 100]} />
                {visiblePlatformsRadar.AWS && (
                  <Radar
                    name="AWS"
                    dataKey="AWS"
                    stroke="#fbbf24"
                    fill="#fbbf24"
                    fillOpacity={0.3}
                  />
                )}
                {visiblePlatformsRadar.Azure && (
                  <Radar
                    name="Azure"
                    dataKey="Azure"
                    stroke="#dc2626"
                    fill="#dc2626"
                    fillOpacity={0.3}
                  />
                )}
                {visiblePlatformsRadar.GCP && (
                  <Radar
                    name="GCP"
                    dataKey="GCP"
                    stroke="#4285f4"
                    fill="#4285f4"
                    fillOpacity={0.3}
                  />
                )}
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Vantagens e Desvantagens */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {filteredComparison.map((platform, index) => (
          <Card key={index} title={platform.platform} icon={
            <div 
              className="w-5 h-5 rounded-full" 
              style={{ backgroundColor: platform.color }}
            ></div>
          }>
            <div className="p-6">
              <div className="mb-6">
                <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <path d="M9 12l2 2 4-4"/>
                    <circle cx="12" cy="12" r="10"/>
                  </svg>
                  Vantagens
                </h4>
                <ul className="space-y-2">
                  {platform.advantages.map((advantage, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{advantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="15" y1="9" x2="9" y2="15"/>
                    <line x1="9" y1="9" x2="15" y2="15"/>
                  </svg>
                  Desvantagens
                </h4>
                <ul className="space-y-2">
                  {platform.disadvantages.map((disadvantage, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-700">{disadvantage}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}