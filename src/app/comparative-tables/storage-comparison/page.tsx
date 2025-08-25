'use client';

import { useState } from 'react';
import { Card } from '@/components/Common/Card';
import { Database, BarChart3, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Dados extraídos da tabela de storage fornecida - formato tabela
const storageRecommendations = [
  {
    category: 'Armazenamento Padrão',
    services: [
      {
        name: 'Azure Data Lake Storage',
        cost: '$0.0184',
        unit: 'por GB/mês (Hot)',
        justification: 'Melhor custo-benefício para dados acessados frequentemente, com namespace hierárquico nativo ideal para big data e analytics.',
        priority: 1,
        percentage: 45,
        color: '#dc2626'
      },
      {
        name: 'GCP Cloud Storage',
        cost: '$0.02',
        unit: 'por GB/mês',
        justification: 'Simplicidade operacional com Autoclass para otimização automática de custos e excelente integração com BigQuery.',
        priority: 2,
        percentage: 35,
        color: '#4285f4'
      },
      {
        name: 'AWS S3',
        cost: '$0.023',
        unit: 'por GB/mês (S3 Standard)',
        justification: 'Maior variedade de classes de storage e ecossistema mais maduro, ideal para organizações já estabelecidas na AWS.',
        priority: 3,
        percentage: 20,
        color: '#fbbf24'
      }
    ]
  },
  {
    category: 'Armazenamento de Acesso Infrequente',
    services: [
      {
        name: 'GCP Cloud Storage',
        cost: '$0.01',
        unit: 'por GB/mês (Nearline)',
        justification: 'Custo otimizado com modelo de preços simples e transparente, ideal para dados acessados mensalmente.',
        priority: 1,
        percentage: 40,
        color: '#4285f4'
      },
      {
        name: 'Azure Data Lake Storage',
        cost: '$0.01',
        unit: 'por GB/mês (Cool)',
        justification: 'Mesmo custo que GCP com vantagens adicionais de namespace hierárquico para workloads de analytics.',
        priority: 1,
        percentage: 40,
        color: '#dc2626'
      },
      {
        name: 'AWS S3',
        cost: '$0.0125',
        unit: 'por GB/mês (S3 Standard-IA)',
        justification: 'Flexibilidade avançada com múltiplas opções de retrieval e integração profunda com serviços AWS.',
        priority: 2,
        percentage: 20,
        color: '#fbbf24'
      }
    ]
  },
  {
    category: 'Armazenamento de Arquivo',
    services: [
      {
        name: 'AWS S3',
        cost: '$0.00099',
        unit: 'por GB/mês (Glacier Deep Archive)',
        justification: 'Melhor custo para arquivamento de longo prazo com múltiplas opções de retrieval e maior durabilidade.',
        priority: 1,
        percentage: 50,
        color: '#fbbf24'
      },
      {
        name: 'GCP Cloud Storage',
        cost: '$0.0012',
        unit: 'por GB/mês (Archive)',
        justification: 'Custo mais baixo entre as opções principais com simplicidade operacional e modelo de preços transparente.',
        priority: 2,
        percentage: 35,
        color: '#4285f4'
      },
      {
        name: 'Azure Data Lake Storage',
        cost: '$0.002',
        unit: 'por GB/mês (Archive)',
        justification: 'Boa opção intermediária com namespace hierárquico e integração com ecossistema Azure para analytics.',
        priority: 3,
        percentage: 15,
        color: '#dc2626'
      }
    ]
  }
];

// Dados para gráfico de barras - comparação de custos
const costComparison = [
  { category: 'Standard', GCP: 0.02, Azure: 0.0184, AWS: 0.023 },
  { category: 'Infrequent', GCP: 0.01, Azure: 0.01, AWS: 0.0125 },
  { category: 'Archive', GCP: 0.0012, Azure: 0.002, AWS: 0.00099 }
];

// Dados para gráfico radar - características dos serviços
const radarData = [
  {
    characteristic: 'Custo-Benefício',
    GCP: 85,
    Azure: 90,
    AWS: 80
  },
  {
    characteristic: 'Performance',
    GCP: 90,
    Azure: 85,
    AWS: 88
  },
  {
    characteristic: 'Facilidade de Uso',
    GCP: 88,
    Azure: 85,
    AWS: 82
  },
  {
    characteristic: 'Integração',
    GCP: 85,
    Azure: 95,
    AWS: 90
  },
  {
    characteristic: 'Escalabilidade',
    GCP: 95,
    Azure: 90,
    AWS: 92
  },
  {
    characteristic: 'Durabilidade',
    GCP: 99,
    Azure: 99,
    AWS: 99
  }
];

// Principais vantagens de cada serviço
const serviceAdvantages = {
  'GCP Cloud Storage': {
    title: 'Simplicidade e Autoclass',
    advantages: [
      'Modelo de preços simples e transparente',
      'Autoclass para otimização automática de custos',
      'Excelente integração com BigQuery',
      'Performance consistente globalmente'
    ]
  },
  'Azure Data Lake Storage': {
    title: 'Namespace hierárquico e custo otimizado',
    advantages: [
      'Namespace hierárquico nativo para big data',
      'Melhor custo-benefício para dados hot',
      'Integração profunda com ecossistema Azure',
      'Suporte nativo para analytics'
    ]
  },
  'AWS S3': {
    title: 'Vasta variedade de classes e líder de mercado',
    advantages: [
      'Maior variedade de classes de storage',
      'Ecossistema mais maduro e extenso',
      'Opções avançadas de lifecycle management',
      'Melhor para arquivamento de longo prazo'
    ]
  }
};

export default function StorageComparisonPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [visibleServicesBar, setVisibleServicesBar] = useState<Record<string, boolean>>({
    GCP: true,
    Azure: true,
    AWS: true
  });
  const [visibleServicesRadar, setVisibleServicesRadar] = useState<Record<string, boolean>>({
    GCP: true,
    Azure: true,
    AWS: true
  });

  const toggleServiceBar = (service: string) => {
    setVisibleServicesBar(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
  };

  const toggleServiceRadar = (service: string) => {
    setVisibleServicesRadar(prev => ({
      ...prev,
      [service]: !prev[service]
    }));
  };

  const filteredComparison = selectedCategory === 'all' 
    ? storageRecommendations 
    : storageRecommendations.filter(comp => comp.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Comparação de Serviços de Storage em Nuvem
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Análise detalhada dos custos e características dos principais serviços de armazenamento 
          em nuvem: GCP Cloud Storage, Azure Data Lake Storage e AWS S3.
        </p>
      </div>

      {/* Filtros */}
      <Card title="Filtros por Categoria" icon={<Database className="w-5 h-5 text-blue-600" />}>
        <div className="p-6">
          {/* Explicação dos Custos */}
          <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
            <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-yellow-600">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Como interpretar os custos de storage?
            </h4>
            <p className="text-yellow-800 text-sm mb-3">
                Os custos apresentados são baseados em <strong>preços públicos atuais</strong> e podem variar 
                conforme região, volume de dados e contratos empresariais:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-yellow-900">Fatores que Influenciam o Custo:</strong>
                <ul className="list-disc list-inside text-yellow-800 mt-1 space-y-1">
                  <li><strong>Volume de dados</strong> - Descontos por volume</li>
                  <li><strong>Região geográfica</strong> - Variação de preços</li>
                  <li><strong>Padrão de acesso</strong> - Frequência de leitura/escrita</li>
                  <li><strong>Transferência de dados</strong> - Custos de egress</li>
                  <li><strong>Operações</strong> - PUT, GET, DELETE requests</li>
                </ul>
              </div>
              <div>
                <strong className="text-yellow-900">Exemplo - 1TB de dados:</strong>
                <ul className="list-disc list-inside text-yellow-800 mt-1 space-y-1">
                  <li><strong>Azure Hot ($18.84/mês)</strong> - Melhor para acesso frequente</li>
                  <li><strong>GCP Standard ($20.48/mês)</strong> - Simplicidade e autoclass</li>
                  <li><strong>AWS S3 Standard ($23.55/mês)</strong> - Maior variedade de opções</li>
                </ul>
              </div>
            </div>
            <p className="text-yellow-700 text-xs mt-3 italic">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1 text-yellow-600">
                 <circle cx="12" cy="12" r="10"/>
                 <path d="M12 16v-4"/>
                 <path d="M12 8h.01"/>
               </svg><strong>Nota:</strong> Os preços são aproximados e baseados em regiões US. Sempre consulte 
               a calculadora oficial de cada provedor para estimativas precisas do seu caso de uso.
             </p>
          </div>

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
            <button
              onClick={() => setSelectedCategory('padrão')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'padrão'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Armazenamento Padrão
            </button>
            <button
              onClick={() => setSelectedCategory('infrequente')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'infrequente'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Acesso Infrequente
            </button>
            <button
              onClick={() => setSelectedCategory('arquivo')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedCategory === 'arquivo'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Arquivo
            </button>
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
                  <th className="px-6 py-4 text-left font-bold" style={{border: '4px solid black'}}>Categoria de Storage</th>
                  <th className="px-6 py-4 text-left font-bold" style={{border: '4px solid black'}}>Serviço Recomendado</th>
                  <th className="px-6 py-4 text-left font-bold" style={{border: '4px solid black'}}>Justificativa Principal</th>
                  <th className="px-6 py-4 text-center font-bold" style={{border: '4px solid black'}}>Custo Relativo (%)</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  let globalRowIndex = 0;
                  const filteredRecommendations = selectedCategory === 'all' 
                    ? storageRecommendations 
                    : storageRecommendations.filter(rec => rec.category.toLowerCase().includes(selectedCategory.toLowerCase()));
                  
                  return filteredRecommendations.map((recommendation, index) => 
                    recommendation.services.map((service, serviceIndex) => {
                      const currentRow = globalRowIndex++;
                      return (
                        <tr key={`${index}-${serviceIndex}`} style={{backgroundColor: currentRow % 2 === 0 ? '#f9fafb' : '#ffffff'}}>
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
                                    {service.cost} {service.unit}
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
                      );
                    })
                  );
                })()}
              </tbody>
            </table>
          </div>
        </div>
      </Card>

      {/* Gráficos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Gráfico de Barras - Comparação de Custos */}
        <Card title="Comparação de Custos por Categoria" icon={<BarChart3 className="w-5 h-5 text-blue-600" />}>
          <div className="p-6">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costComparison} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="category" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value) => [`$${value}`, 'Custo por GB/mês']}
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        const visiblePayload = payload.filter(entry => visibleServicesBar[entry.dataKey]);
                        const sortedPayload = [...visiblePayload].sort((a, b) => a.value - b.value);
                        
                        return (
                          <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
                            <p className="font-semibold text-gray-800 mb-2">{label}</p>
                            {sortedPayload.map((entry) => (
                              <p key={entry.name} className="text-sm" style={{ color: entry.color }}>
                                {`${entry.name}: $${entry.value} por GB/mês`}
                              </p>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  {visibleServicesBar.Azure && <Bar dataKey="Azure" fill="#dc2626" name="Azure Data Lake" />}
                  {visibleServicesBar.GCP && <Bar dataKey="GCP" fill="#4285f4" name="GCP Cloud Storage" />}
                  {visibleServicesBar.AWS && <Bar dataKey="AWS" fill="#fbbf24" name="AWS S3" />}
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
                   onClick={() => toggleServiceBar(platform.name)}
                   className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                     visibleServicesBar[platform.name]
                       ? 'bg-gray-100 hover:bg-gray-200'
                       : 'bg-gray-300 hover:bg-gray-400 opacity-60'
                   }`}
                 >
                   <div
                     className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                       visibleServicesBar[platform.name] ? 'opacity-100' : 'opacity-40'
                     }`}
                     style={{
                       backgroundColor: visibleServicesBar[platform.name] ? platform.color : 'transparent',
                       borderColor: platform.color
                     }}
                   />
                   <span
                     className={`text-sm font-medium transition-all duration-200 ${
                       visibleServicesBar[platform.name] ? 'text-gray-800' : 'text-gray-500'
                     }`}
                   >
                     {platform.name}
                   </span>
                 </button>
               ))}
             </div>
            
            <p className="text-sm text-gray-600 mt-4">
              <strong>Interpretação:</strong> Valores menores indicam melhor custo-benefício. Quanto menor o valor, mais econômico é o serviço para aquela categoria de armazenamento.
            </p>
          </div>
        </Card>

        {/* Gráfico Radar - Características */}
        <Card title="Análise de Características" icon={<TrendingUp className="w-5 h-5 text-blue-600" />}>
          <div className="p-6">

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="characteristic" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
                  <Tooltip 
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        // Filtrar apenas serviços visíveis e ordenar por pontuação decrescente
                        const visiblePayload = payload.filter(entry => visibleServicesRadar[entry.name as string]);
                        const sortedPayload = [...visiblePayload].sort((a, b) => b.value - a.value);
                        
                        return (
                          <div className="bg-white p-4 border border-gray-300 rounded-lg shadow-lg">
                            <p className="font-semibold text-gray-800 mb-2">{label}</p>
                            {sortedPayload.map((entry, index) => {
                              const fullName = entry.name === 'Azure' ? 'Azure Data Lake Storage' : 
                                             entry.name === 'GCP' ? 'GCP Cloud Storage' : 
                                             entry.name === 'AWS' ? 'AWS S3' : entry.name;
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
                  {visibleServicesRadar.Azure && <Radar name="Azure" dataKey="Azure" stroke="#dc2626" fill="#dc2626" fillOpacity={0.1} strokeWidth={2} />}
                  {visibleServicesRadar.GCP && <Radar name="GCP" dataKey="GCP" stroke="#4285f4" fill="#4285f4" fillOpacity={0.1} strokeWidth={2} />}
                  {visibleServicesRadar.AWS && <Radar name="AWS" dataKey="AWS" stroke="#fbbf24" fill="#fbbf24" fillOpacity={0.1} strokeWidth={2} />}
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
                   onClick={() => toggleServiceRadar(platform.name)}
                   className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                     visibleServicesRadar[platform.name]
                       ? 'bg-gray-100 hover:bg-gray-200'
                       : 'bg-gray-300 hover:bg-gray-400 opacity-60'
                   }`}
                 >
                   <div
                     className={`w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                       visibleServicesRadar[platform.name] ? 'opacity-100' : 'opacity-40'
                     }`}
                     style={{
                       backgroundColor: visibleServicesRadar[platform.name] ? platform.color : 'transparent',
                       borderColor: platform.color
                     }}
                   />
                   <span
                     className={`text-sm font-medium transition-all duration-200 ${
                       visibleServicesRadar[platform.name] ? 'text-gray-800' : 'text-gray-500'
                     }`}
                   >
                     {platform.name}
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