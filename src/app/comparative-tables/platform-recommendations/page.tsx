'use client';

import { useState } from 'react';
import { Card } from '@/components/Common/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

// Dados extraídos da tabela fornecida
const platformRecommendations = [
  {
    scenario: 'Data Warehousing para BI',
    platforms: [
      {
        name: 'Azure Synapse Analytics',
        priority: 1,
        percentage: 45,
        justification: 'Unificação de data warehousing e big data com forte integração ao Power BI e menor TCO para cargas de trabalho previsíveis.',
        color: '#dc2626'
      },
      {
        name: 'Google BigQuery',
        priority: 2,
        percentage: 35,
        justification: 'Ideal para simplicidade e escalabilidade instantânea em consultas ad-hoc, com um modelo serverless que reduz a sobrecarga operacional.',
        color: '#4285f4'
      },
      {
        name: 'AWS Redshift',
        priority: 3,
        percentage: 20,
        justification: 'Melhor para análises intensivas que se beneficiam da arquitetura MPP e para organizações já estabelecidas no ecossistema AWS.',
        color: '#fbbf24'
      }
    ]
  },
  {
    scenario: 'Análise de Streaming de IoT',
    platforms: [
      {
        name: 'GCP (Pub/Sub + Dataflow)',
        priority: 1,
        percentage: 50,
        justification: 'A abordagem serverless é altamente eficiente para lidar com o volume e a velocidade de dados de sensores, minimizando o gerenciamento de infraestrutura.',
        color: '#4285f4'
      },
      {
        name: 'AWS (Kinesis)',
        priority: 2,
        percentage: 30,
        justification: 'Oferece uma suíte de serviços para ingestão e processamento de streaming em tempo real com baixa latência e integração profunda com outros serviços AWS.',
        color: '#fbbf24'
      },
      {
        name: 'Azure (Event Hubs + Stream Analytics)',
        priority: 3,
        percentage: 20,
        justification: 'Solução serverless robusta para ingestão e análise em tempo real, particularmente vantajosa para empresas que buscam sinergia com o ecossistema Azure.',
        color: '#dc2626'
      }
    ]
  },
  {
    scenario: 'Projetos de Machine Learning e IA',
    platforms: [
      {
        name: 'GCP Vertex AI',
        priority: 1,
        percentage: 40,
        justification: 'Destaque para a usabilidade, recursos de AutoML e a integração com BigQuery, ideal para cientistas de dados.',
        color: '#4285f4'
      },
      {
        name: 'AWS SageMaker',
        priority: 2,
        percentage: 35,
        justification: 'Oferece o portfólio mais vasto e granular para o ciclo de vida completo do ML, sendo uma excelente opção para engenheiros de ML experientes.',
        color: '#fbbf24'
      },
      {
        name: 'Azure Machine Learning',
        priority: 3,
        percentage: 25,
        justification: 'Forte integração com o ecossistema Microsoft e ferramentas de MLOps robustas, adequadas para empresas que operam com Azure Data Lake e Power BI.',
        color: '#dc2626'
      }
    ]
  }
];

// Dados para gráfico de barras - pontuação das plataformas por cenário (0-100)
const platformDistribution = [
  { scenario: 'Data', Azure: 85, GCP: 75, AWS: 65 },
  { scenario: 'IOT', Azure: 70, GCP: 95, AWS: 80 },
  { scenario: 'ML/IA', Azure: 75, GCP: 90, AWS: 85 }
];

// Dados para gráfico de radar - características das plataformas
const radarData = [
  {
    characteristic: 'Facilidade de Uso',
    Azure: 85,
    GCP: 90,
    AWS: 75
  },
  {
    characteristic: 'Escalabilidade',
    Azure: 88,
    GCP: 95,
    AWS: 92
  },
  {
    characteristic: 'Custo-Benefício',
    Azure: 90,
    GCP: 85,
    AWS: 80
  },
  {
    characteristic: 'Integração',
    Azure: 95,
    GCP: 80,
    AWS: 88
  },
  {
    characteristic: 'Performance',
    Azure: 82,
    GCP: 88,
    AWS: 85
  },
  {
    characteristic: 'Inovação',
    Azure: 80,
    GCP: 95,
    AWS: 85
  }
];

export default function PlatformRecommendationsPage() {
  const [selectedScenario, setSelectedScenario] = useState('all');
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

  const filteredRecommendations = selectedScenario === 'all' 
    ? platformRecommendations 
    : platformRecommendations.filter(rec => rec.scenario.toLowerCase().includes(selectedScenario.toLowerCase()));

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Recomendações de Plataformas por Cenário de Uso
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Análise comparativa baseada em dados estatísticos para orientar a escolha da plataforma ideal 
          conforme diferentes cenários de uso em 💾 Big Data e Analytics.
        </p>
      </div>

      {/* Filtros */}
      <Card title="Filtros por Cenário" icon={
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600">
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      }>
        <div className="p-6">
          {/* Explicação das Porcentagens */}
          <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-r-lg">
            <h4 className="font-semibold text-yellow-900 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-yellow-600">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                <line x1="12" y1="9" x2="12" y2="13"/>
                <line x1="12" y1="17" x2="12.01" y2="17"/>
              </svg>
              Como são calculadas as porcentagens de recomendação?
            </h4>
            <p className="text-yellow-800 text-sm mb-3">
                As porcentagens representam o <strong>peso relativo de recomendação</strong> de cada plataforma para cenários específicos, 
                baseado em uma análise ponderada de múltiplos critérios:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-yellow-900">Critérios Avaliados:</strong>
                <ul className="list-disc list-inside text-yellow-800 mt-1 space-y-1">
                  <li><strong>TCO (30%)</strong> - Custo total de propriedade</li>
                  <li><strong>Performance (25%)</strong> - Velocidade e eficiência</li>
                  <li><strong>Facilidade de Uso (20%)</strong> - Curva de aprendizado</li>
                  <li><strong>Integração (15%)</strong> - Compatibilidade com ecossistemas</li>
                  <li><strong>Escalabilidade (10%)</strong> - Capacidade de crescimento</li>
                </ul>
              </div>
              <div>
                <strong className="text-yellow-900">Exemplo - Data Warehousing:</strong>
                <ul className="list-disc list-inside text-yellow-800 mt-1 space-y-1">
                  <li><strong>Azure Synapse (45%)</strong> - Melhor TCO + integração Power BI</li>
                  <li><strong>BigQuery (35%)</strong> - Excelente performance serverless</li>
                  <li><strong>Redshift (20%)</strong> - Forte para análises complexas MPP</li>
                </ul>
              </div>
            </div>
            <p className="text-yellow-700 text-xs mt-3 italic">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1 text-yellow-600">
                 <circle cx="12" cy="12" r="10"/>
                 <path d="M12 16v-4"/>
                 <path d="M12 8h.01"/>
               </svg><strong>Nota:</strong> As porcentagens somam 100% por cenário e refletem a adequação relativa de cada plataforma 
               para casos de uso específicos, considerando fatores técnicos, econômicos e operacionais.
             </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedScenario('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedScenario === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Todos os Cenários
            </button>
            <button
              onClick={() => setSelectedScenario('warehousing')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedScenario === 'warehousing'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Data Warehousing
            </button>
            <button
              onClick={() => setSelectedScenario('streaming')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedScenario === 'streaming'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              IoT Streaming
            </button>
            <button
              onClick={() => setSelectedScenario('machine')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedScenario === 'machine'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Machine Learning
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
                  <th className="px-6 py-4 text-left font-bold" style={{border: '4px solid black'}}>Cenário de Uso</th>
                  <th className="px-6 py-4 text-left font-bold" style={{border: '4px solid black'}}>Plataforma Recomendada</th>
                  <th className="px-6 py-4 text-left font-bold" style={{border: '4px solid black'}}>Justificativa Principal</th>
                  <th className="px-6 py-4 text-center font-bold" style={{border: '4px solid black'}}>Recomendação (%)</th>
                </tr>
              </thead>
              <tbody>
                {(() => {
                  let globalRowIndex = 0;
                  return filteredRecommendations.map((recommendation, index) => 
                    recommendation.platforms.map((platform, platformIndex) => {
                      const currentRow = globalRowIndex++;
                      return (
                        <tr key={`${index}-${platformIndex}`} style={{backgroundColor: currentRow % 2 === 0 ? '#f9fafb' : '#ffffff'}}>
                      {platformIndex === 0 && (
                        <td 
                          className="px-6 py-4 font-semibold text-white bg-gray-600" 
                          style={{border: '4px solid black'}}
                          rowSpan={recommendation.platforms.length}
                        >
                          {recommendation.scenario}
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
                        <ellipse cx="12" cy="5" rx="9" ry="3" stroke={platform.color} strokeWidth="2" fill={platform.color} fillOpacity="0.1"/>
                        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" stroke={platform.color} strokeWidth="2"/>
                        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" stroke={platform.color} strokeWidth="2"/>
                        <path d="M3 12v7c0 1.66 4 3 9 3s9-1.34 9-3v-7" stroke={platform.color} strokeWidth="2"/>
                      </svg>
                      <span className="font-medium text-base" style={{ color: platform.color }}>
                            {platform.name}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-gray-700 leading-relaxed" style={{border: '4px solid black'}}>
                        {platform.justification}
                      </td>
                      <td className="px-6 py-4 text-center" style={{border: '4px solid black'}}>
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-bold ${
                          platform.priority === 1 ? 'bg-green-100 text-green-800' :
                          platform.priority === 2 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {platform.percentage}%
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

            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={platformDistribution} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="scenario" 
                    tick={{ fontSize: 12 }}
                    interval={0}
                    tickFormatter={(value) => {
                      if (value === 'Data') return 'Data\nWarehousing';
                      if (value === 'IOT') return 'IoT\nStreaming';
                      return value;
                    }}
                  />
                  <YAxis domain={[0, 100]} tickFormatter={(value) => `${value}`} />
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

            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="characteristic" tick={{ fontSize: 12 }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={{ fontSize: 10 }} />
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
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Critérios de Decisão
                </h4>
              <ul className="text-yellow-800 space-y-2 text-sm">
                <li>• <strong>TCO:</strong> Custo total de propriedade</li>
                <li>• <strong>Integração:</strong> Ecossistema existente</li>
                <li>• <strong>Expertise:</strong> Conhecimento da equipe</li>
                <li>• <strong>Escalabilidade:</strong> Crescimento futuro</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  Metodologia
                </h4>
              <ul className="text-yellow-800 space-y-2 text-sm">
                <li>• Análise de casos de uso reais</li>
                <li>• Benchmarks de performance</li>
                <li>• Avaliação de custos operacionais</li>
                <li>• Feedback de implementações</li>
              </ul>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-yellow-900 mb-3 flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                  </svg>
                  Recomendações
                </h4>
              <ul className="text-yellow-800 space-y-2 text-sm">
                <li>• Realize POCs antes de decidir</li>
                <li>• Considere estratégias multi-cloud</li>
                <li>• Avalie custos de migração</li>
                <li>• Planeje capacitação da equipe</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}