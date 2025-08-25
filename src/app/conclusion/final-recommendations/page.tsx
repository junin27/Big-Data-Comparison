'use client';

import { Card } from '@/components/Common/Card';
import { Target, TrendingUp, Award } from 'lucide-react';

export default function FinalRecommendationsPage() {
  return (
    <div className="max-w-6xl mx-auto py-8 space-y-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Conclusão e Recomendações Finais
        </h1>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto">
          Análise comparativa exaustiva das plataformas de Big Data: GCP, Azure e AWS
        </p>
      </div>

      {/* Conclusão Principal */}
      <Card title="Conclusão Principal" icon={<Target className="w-5 h-5 text-blue-600" />}>
        <div className="p-6">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg">
            <p className="text-lg text-gray-800 leading-relaxed">
              A análise comparativa exaustiva das plataformas de Big Data da GCP, Azure e AWS demonstra que 
              <strong className="text-blue-700"> não existe uma &quot;melhor&quot; plataforma universal</strong>. 
              A decisão ideal é uma escolha estratégica que deve ser orientada por uma 
              <strong className="text-blue-700"> avaliação holística e multifacetada</strong>.
            </p>
          </div>
        </div>
      </Card>

      {/* Recomendações por Plataforma */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* GCP */}
        <Card title="Google Cloud Platform" icon={<svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                  <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                  <path d="M3 19c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                </svg>}>
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ideal Para</h3>
              <p className="text-sm text-gray-600 mb-4">
                Empresas que buscam simplicidade operacional, inovação e foco em ciência de dados
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">Abordagem serverless perfeita para startups e equipes ágeis</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">BigQuery e Dataflow definem padrão de mercado</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">Foco no core business em vez de gerenciar infraestrutura</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Azure */}
        <Card title="Microsoft Azure" icon={<svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                  <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                  <path d="M3 19c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                </svg>}>
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ideal Para</h3>
              <p className="text-sm text-gray-600 mb-4">
                Empresas com forte legado Microsoft e dependência de soluções híbridas
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">Plataforma unificada Azure Synapse Analytics</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">TCO mais baixo para cargas previsíveis</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-1 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">Forte candidata em setores regulamentados</span>
              </div>
            </div>
          </div>
        </Card>

        {/* AWS */}
        <Card title="Amazon Web Services" icon={<svg className="w-5 h-5 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"/>
                  <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/>
                  <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                  <path d="M3 19c0 1.66 4.03 3 9 3s9-1.34 9-3"/>
                </svg>}>
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ideal Para</h3>
              <p className="text-sm text-gray-600 mb-4">
                Organizações que exigem máximo de flexibilidade e controle
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">Vasto e granular portfólio de serviços</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">Arquiteturas altamente personalizadas</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-1 flex-shrink-0"></div>
                <span className="text-sm text-gray-700">Indicada para equipes técnicas maduras</span>
              </div>
            </div>
          </div>
        </Card>
      </div>

       {/* Fatores Decisivos */}
       <Card title="Fatores Decisivos para TCO" icon={<TrendingUp className="w-5 h-5 text-blue-600" />}>
         <div className="p-6">
           <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg mb-6">
             <h3 className="text-lg font-semibold text-yellow-800 mb-3">
               A decisão final deve ser baseada em um cálculo de Custo Total de Propriedade (TCO)
             </h3>
             <p className="text-yellow-700">
               Que vá além dos preços visíveis por GB ou por hora
             </p>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-4">
               <h4 className="font-semibold text-gray-900">Fatores Técnicos</h4>
               <div className="space-y-2">
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <span className="text-sm text-gray-700">Curva de aprendizado da equipe</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <span className="text-sm text-gray-700">Custos de transferência de dados (egress)</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <span className="text-sm text-gray-700">Complexidade de MLOps</span>
                 </div>
               </div>
             </div>
             
             <div className="space-y-4">
               <h4 className="font-semibold text-gray-900">Fatores Estratégicos</h4>
               <div className="space-y-2">
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <span className="text-sm text-gray-700">Sinergias com ecossistemas existentes</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <span className="text-sm text-gray-700">Requisitos de conformidade</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                   <span className="text-sm text-gray-700">Estratégia de longo prazo</span>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </Card>

      {/* Análise GigaOm */}
      <Card title="Destaque: Análise GigaOm" icon={<Award className="w-5 h-5 text-blue-600" />}>
        <div className="p-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Award className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-green-800 mb-2">
                  Azure: Mais Econômica em TCO de 3 Anos
                </h3>
                <p className="text-green-700 leading-relaxed">
                  A análise da GigaOm posiciona a <strong>Azure como a mais econômica em termos de TCO de 3 anos</strong>, 
                  considerando não apenas os custos diretos, mas também fatores como produtividade da equipe, 
                  tempo de implementação e custos operacionais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}