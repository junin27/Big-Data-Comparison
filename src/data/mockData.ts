import { Platform, Section, ComparisonTable, ChartData } from '@/types';

export const platforms: Platform[] = [
  { id: 'gcp', name: 'Google Cloud Platform', color: '#458af5' },
  { id: 'azure', name: 'Microsoft Azure', color: '#458af5' },
  { id: 'aws', name: 'Amazon Web Services', color: '#458af5' },
];

export const sections: Section[] = [
  {
    id: 'strategic-analysis',
    title: 'Análise Estratégica das Plataformas e Suas Filosofias de Mercado',
    subsections: [
      {
        id: 'gcp-innovation',
        title: 'GCP: A Força da Inovação e do Paradigma Serverless',
        content: `A <strong>Google Cloud Platform</strong> prioriza <strong>simplicidade, automação e desempenho</strong> através de sua abordagem serverless para liberar equipes do gerenciamento de infraestrutura.

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#458af5"/>
      <path d="M12 6v6l4 2" stroke="black" stroke-width="2" stroke-linecap="round"/>
      <circle cx="12" cy="12" r="2" fill="black"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Filosofia Serverless</strong>
  </div>
</blockquote>
<strong>Objetivo</strong>: Foco total na <strong>extração de valor dos dados</strong>, não na infraestrutura

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#458af5"/>
      <path d="M3 17L12 22L21 17" stroke="#458af5" stroke-width="2" fill="none"/>
      <path d="M3 12L12 17L21 12" stroke="#458af5" stroke-width="2" fill="none"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Serviços de Destaque</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">BigQuery</strong> - Data Warehouse Serverless<br>
  • <strong>Origem</strong>: Motor de análise <strong>Dremel</strong> do Google<br>
  • <strong>Capacidade</strong>: Análise de <strong>petabytes</strong> usando SQL padrão<br>
  • <strong>Precificação</strong>: <strong>On-demand</strong> - pague apenas pelos dados processados<br>
  • <strong>Alternativa</strong>: Slots fixos para custos mensais estáveis
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Dataflow</strong> - Processamento Inteligente<br>
  • <strong>Base</strong>: <strong>Apache Beam</strong> (código aberto)<br>
  • <strong>Funcionalidade</strong>: Processamento <strong>batch e streaming</strong><br>
  • <strong>Diferencial</strong>: <strong>Auto-dimensionamento inteligente</strong><br>
  • <strong>Benefício</strong>: Otimização automática de performance e custos
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Dataproc</strong> - Controle para Hadoop/Spark<br>
  • <strong>Ideal para</strong>: Migração de ambientes <strong>on-premise</strong><br>
  • <strong>Compatibilidade</strong>: Alta com <strong>Apache Hadoop e Spark</strong><br>
  • <strong>Velocidade</strong>: Clusters prontos em <strong>90 segundos</strong><br>
  • <strong>Vantagem</strong>: Familiaridade do ecossistema open source
</div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="12" rx="2" fill="#458af5"/>
      <path d="M8 10h8M8 14h6" stroke="black" stroke-width="2" stroke-linecap="round"/>
      <rect x="2" y="18" width="4" height="4" rx="1" fill="#458af5"/>
      <rect x="10" y="18" width="4" height="4" rx="1" fill="#458af5"/>
      <rect x="18" y="18" width="4" height="4" rx="1" fill="#458af5"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Posicionamento Estratégico</strong>
  </div>
</blockquote>
<strong>Menor fatia de mercado</strong>, mas <strong>plataforma otimizada</strong> para o futuro da análise de dados com forte ênfase em <strong>inovação e ciência de dados</strong>.`
      },
      {
        id: 'azure-enterprise',
        title: 'Azure: O Valor para a Empresa e Ecossistemas Híbridos',
        content: `A <strong>Microsoft Azure</strong> destaca-se por sua <strong>integração empresarial</strong> e soluções para <strong>ecossistemas híbridos</strong>, permitindo operações unificadas entre nuvem e on-premise.

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="12" rx="3" fill="#458af5"/>
      <path d="M8 10h8M8 14h6" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Foco em Híbrido e Integração</strong>
  </div>
</blockquote>
<strong>Azure Arc & Stack</strong>: Extensão transparente de ambientes on-premise para a nuvem

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#458af5"/>
      <path d="M12 6v6l4 2" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Serviços de Destaque</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Azure Synapse Analytics</strong> - Plataforma unificada de Big Data<br>
  • <strong>Integra</strong>: Data warehousing, Spark, BI e integração de dados<br>
  • <strong>Modelos</strong>: <strong>Serverless</strong> (pague por TB processado) e <strong>Dedicated</strong> (pague por DWU)<br>
  • <strong>Flexibilidade</strong>: Escolha entre custo sob demanda ou desempenho dedicado
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Azure Data Lake Storage Gen2</strong> - Armazenamento enterprise-grade<br>
  • <strong>Base</strong>: Azure Blob Storage com namespace hierárquico<br>
  • <strong>Desempenho</strong>: Acesso eficiente a dados em grande escala<br>
  • <strong>Custos</strong>: Camadas Hot, Cool, Cold e Archive para otimização
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Azure Stream Analytics</strong> - Streaming serverless<br>
  • <strong>Processamento</strong>: Dados em tempo real com baixa latência<br>
  • <strong>Sintaxe</strong>: SQL para análise rápida de dados dinâmicos<br>
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Azure Data Factory</strong> - Orquestração visual de dados<br>
  • <strong>Interface</strong>: Low-code, visual e intuitiva<br>
  • <strong>Conectores</strong>: Ampla biblioteca para ambientes híbridos e multi-cloud<br>
  • <strong>Precificação</strong>: Custos separados de orquestração e execução
</div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4" fill="#458af5"/>
      <path d="M9 12l2 2 4-4" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Diferencial Competitivo</strong>
  </div>
</blockquote>
<strong>Integração nativa</strong> com produtos Microsoft e <strong>gestão híbrida</strong> como diferencial para empresas.`
      },
      {
        id: 'aws-market-leadership',
        title: 'AWS: A Liderança de Mercado e a Vasta Oferta de Serviços',
        content: `A <strong>AWS</strong>, como líder de mercado e provedora de nuvem mais madura, oferece um <strong>portfólio de serviços de Big Data vasto e modular</strong>. Sua filosofia é fornecer aos clientes os <strong>blocos de construção mais granulares</strong> para que possam arquitetar a solução ideal de acordo com suas necessidades específicas.

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="3" fill="#458af5"/>
      <path d="M8 12h8" stroke="black" stroke-width="2" stroke-linecap="round"/>
      <path d="M12 8v8" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Filosofia Modular</strong>
  </div>
</blockquote>
<strong>Flexibilidade máxima</strong>, mas requer <strong>maior expertise técnica</strong> para orquestração e otimização eficaz

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#458af5"/>
      <rect x="7" y="9" width="10" height="6" rx="2" fill="black"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Serviços de Destaque</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Amazon Redshift</strong> - Data Warehouse MPP<br>
  • <strong>Arquitetura</strong>: Processamento <strong>massivamente paralelo (MPP)</strong> com armazenamento colunar<br>
  • <strong>Modelos</strong>: <strong>Provisionado</strong> (gerenciamento manual) e <strong>Serverless</strong> (auto-dimensionamento)<br>
  • <strong>Redshift Spectrum</strong>: Consultas diretas no S3 por <strong>$5/TB</strong><br>
  • <strong>Performance</strong>: Excepcional para cargas de trabalho analíticas
 </div>
 
 <div style="margin-bottom: 20px;">
   <strong style="font-style: normal; font-size: 18px; color: #458af5;">Amazon EMR</strong> - Clusters Gerenciados<br>
   • <strong>Frameworks</strong>: <strong>Hadoop, Spark, Hive e Presto</strong><br>
   • <strong>Controle</strong>: Maior flexibilidade que serviços serverless<br>
   • <strong>Otimização</strong>: <strong>Reserved Instances</strong> e <strong>Spot Instances</strong> para redução de custos<br>
   • <strong>Ideal para</strong>: Workloads que exigem controle granular
 </div>
 
 <div style="margin-bottom: 20px;">
   <strong style="font-style: normal; font-size: 18px; color: #458af5;">AWS Glue</strong> - ETL Serverless<br>
   • <strong>Integração</strong>: Perfeita com outros serviços AWS<br>
   • <strong>Catálogo</strong>: Catálogo de dados integrado<br>
   • <strong>Precificação</strong>: <strong>DPU-hour</strong> com modelo pay-as-you-go
 </div>
 
 <div style="margin-bottom: 20px;">
   <strong style="font-style: normal; font-size: 18px; color: #458af5;">Amazon Kinesis</strong> - Streaming Completo<br>
   • <strong>Funcionalidade</strong>: Ingestão e processamento de <strong>dados de streaming</strong> em tempo real<br>
   • <strong>Integração</strong>: Forte para casos de uso de <strong>IoT</strong> e análise de dados em movimento<br>
   • <strong>Suíte completa</strong>: Kinesis Data Streams, Analytics e Firehose
 </div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#458af5"/>
      <path d="M3 17L12 22L21 17" stroke="#458af5" stroke-width="2" fill="none"/>
      <path d="M3 12L12 17L21 12" stroke="#458af5" stroke-width="2" fill="none"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Posicionamento Estratégico</strong>
  </div>
</blockquote>
<strong>Líder de mercado</strong> com a <strong>maior maturidade</strong> e ecossistema mais robusto, oferecendo <strong>máxima flexibilidade</strong> para arquiteturas complexas e personalizadas.`
      }
    ]
  },
  {
    id: 'detailed-comparison',
    title: 'Comparativo Detalhado de Funcionalidades e Serviços',
    subsections: [
      {
        id: 'storage-data-lakes',
        title: 'Armazenamento e Data Lakes',
        content: `As três plataformas oferecem soluções de armazenamento de objetos altamente escaláveis, duráveis e com custos escalonados, mas suas implementações e modelos de precificação variam. A escolha da classe de armazenamento correta é crucial, pois um erro pode transformar a opção mais barata na mais cara, especialmente ao se considerar os custos de recuperação de dados.

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#458af5"/>
      <path d="M8 12h8" stroke="black" stroke-width="2" stroke-linecap="round"/>
       <path d="M12 8v8" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">GCP Cloud Storage</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Classes de Armazenamento</strong><br>
  • <strong>Standard</strong>: Dados de acesso frequente<br>
  • <strong>Nearline</strong>: Dados acessados uma vez a cada <strong>30 dias</strong><br>
  • <strong>Coldline</strong>: Dados acessados uma vez a cada <strong>90 dias</strong><br>
  • <strong>Archive</strong>: Armazenamento de longo prazo com período mínimo de <strong>365 dias</strong>
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Recursos Avançados</strong><br>
  • <strong>Data Lake Central</strong>: Integração com BigQuery e Dataproc<br>
  • <strong>Autoclass</strong>: Machine learning para otimização automática de custos<br>
  • <strong>Movimentação Inteligente</strong>: Entre classes de armazenamento baseada em padrões de acesso
</div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="12" rx="2" fill="#458af5"/>
      <path d="M8 10h8M8 14h6" stroke="black" stroke-width="2" stroke-linecap="round"/>
      <rect x="2" y="18" width="4" height="4" rx="1" fill="#458af5"/>
      <rect x="10" y="18" width="4" height="4" rx="1" fill="#458af5"/>
      <rect x="18" y="18" width="4" height="4" rx="1" fill="#458af5"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Azure Data Lake Storage Gen2</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Arquitetura Híbrida</strong><br>
  • <strong>Base</strong>: Azure Blob Storage com <strong>namespace hierárquico</strong><br>
  • <strong>Camadas</strong>: Hot, Cool, Cold e Archive para otimização de custos<br>
  • <strong>Diferencial</strong>: Elimina necessidade de copiar ou transformar dados antes da análise
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Vantagens para Big Data</strong><br>
  • <strong>Namespace Hierárquico</strong>: Otimiza acesso e gerenciamento em grande escala<br>
  • <strong>Integração Nativa</strong>: Com ferramentas de analytics do Azure<br>
  • <strong>Performance</strong>: Acesso eficiente para workloads analíticos
</div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#458af5"/>
      <path d="M3 17L12 22L21 17" stroke="#458af5" stroke-width="2" fill="none"/>
      <path d="M3 12L12 17L21 12" stroke="#458af5" stroke-width="2" fill="none"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">AWS S3 e S3 Glacier</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Ampla Gama de Classes</strong><br>
  • <strong>S3 Standard</strong>: Dados de acesso frequente<br>
  • <strong>S3 Glacier Instant Retrieval</strong>: <strong>68% menor custo</strong> que Standard-Infrequent Access<br>
  • <strong>S3 Glacier Flexible Retrieval</strong>: Recuperação em minutos a horas<br>
  • <strong>S3 Glacier Deep Archive</strong>: Opção mais econômica com recuperação em massa gratuita
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Liderança em Maturidade</strong><br>
  • <strong>Serviço Mais Utilizado</strong>: Maior adoção no mercado<br>
  • <strong>Flexibilidade de Recuperação</strong>: Múltiplas opções de tempo e custo<br>
  • <strong>Ecossistema Robusto</strong>: Integração com vasta gama de serviços AWS
</div>`
      },
      {
        id: 'etl-orchestration',
        title: 'Processamento e Orquestração de Dados (ETL/ELT)',
        content: `A escolha entre os serviços de processamento de dados reflete uma decisão estratégica entre a simplicidade e o gerenciamento de uma plataforma serverless e o controle e a flexibilidade de um serviço gerenciado de clusters.

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#458af5"/>
      <path d="M8 12h8" stroke="black" stroke-width="2" stroke-linecap="round"/>
       <path d="M12 8v8" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">GCP (Dataflow e Dataproc)</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Dataflow - Processamento Serverless</strong><br>
  • <strong>Modelo Serverless</strong>: Auto-dimensionamento em tempo real<br>
  • <strong>Arquitetura Unificada</strong>: Suporte para batch e stream em uma única plataforma<br>
  • <strong>Ideal para</strong>: Pipelines de dados com cargas de trabalho dinâmicas
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Dataproc - Clusters Gerenciados</strong><br>
  • <strong>Hadoop/Spark Gerenciado</strong>: Frameworks de código aberto com infraestrutura GCP<br>
  • <strong>Inicialização Rápida</strong>: Clusters prontos em <strong>menos de 90 segundos</strong><br>
  • <strong>Vantagem</strong>: Agilidade significativa para desenvolvedores
</div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="12" rx="2" fill="#458af5"/>
      <path d="M8 10h8M8 14h6" stroke="black" stroke-width="2" stroke-linecap="round"/>
      <rect x="2" y="18" width="4" height="4" rx="1" fill="#458af5"/>
      <rect x="10" y="18" width="4" height="4" rx="1" fill="#458af5"/>
      <rect x="18" y="18" width="4" height="4" rx="1" fill="#458af5"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Azure (Data Factory e HDInsight)</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Data Factory - Orquestração Visual</strong><br>
  • <strong>Interface Low-Code</strong>: Criação visual simplificada de pipelines<br>
  • <strong>Ambientes Híbridos</strong>: Excelente para integração on-premises e nuvem<br>
  • <strong>Conectores Amplos</strong>: Vasta variedade de integrações disponíveis<br>
  • <strong>Precificação Granular</strong>: Separação entre custos de orquestração e execução
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">HDInsight - Clusters Open Source</strong><br>
  • <strong>Frameworks Suportados</strong>: Hadoop, Spark e Kafka gerenciados<br>
  • <strong>Experiência Open Source</strong>: Com suporte completo da nuvem Azure<br>
  • <strong>Ideal para</strong>: Empresas que preferem soluções de código aberto
</div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#458af5"/>
      <path d="M3 17L12 22L21 17" stroke="#458af5" stroke-width="2" fill="none"/>
      <path d="M3 12L12 17L21 12" stroke="#458af5" stroke-width="2" fill="none"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">AWS (Glue e EMR)</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">AWS Glue - ETL Serverless</strong><br>
  • <strong>Precificação DPU-hour</strong>: Modelo de cobrança baseado em unidades de processamento<br>
  • <strong>Preparação Simplificada</strong>: Facilita a preparação e transformação de dados<br>
  • <strong>Catálogo Integrado</strong>: Descoberta e catalogação automática de dados
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Amazon EMR - Big Data Gerenciado</strong><br>
  • <strong>Hadoop e Spark</strong>: Plataforma completa para processamento de Big Data<br>
  • <strong>Modelo de Precificação</strong>: Adicional sobre custos das instâncias EC2<br>
  • <strong>Flexibilidade vs Simplicidade</strong>: Controle total de infraestrutura com curva de aprendizado mais acentuada<br>
  • <strong>Ideal para</strong>: Equipes experientes que precisam de controle de custos e flexibilidade inigualáveis
</div>`
      },
      {
        id: 'data-warehousing',
        title: 'Análise e Data Warehousing',
        content: `As plataformas de data warehouse em nuvem evoluíram, adotando o desacoplamento de armazenamento e computação para oferecer escalabilidade e otimizar custos. A principal diferenciação está nos modelos de precificação e na flexibilidade para cargas de trabalho previsíveis versus imprevisíveis.

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#458af5"/>
      <path d="M8 12h8" stroke="black" stroke-width="2" stroke-linecap="round"/>
       <path d="M12 8v8" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">GCP BigQuery</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Data Warehouse Totalmente Serverless</strong><br>
  • <strong>Zero Gerenciamento</strong>: Elimina completamente a necessidade de gerenciamento de infraestrutura<br>
  • <strong>Modelo On-Demand</strong>: <strong>$5/TB</strong> de dados processados com <strong>1 TB gratuito</strong> por mês<br>
  • <strong>Ideal para</strong>: Consultas ad-hoc e cargas de trabalho esporádicas
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Modelo de Capacidade Fixa (Slots)</strong><br>
  • <strong>Previsibilidade de Custos</strong>: Para empresas com cargas de trabalho de BI previsíveis<br>
  • <strong>Reserva de Recursos</strong>: Slots dedicados para performance consistente<br>
  • <strong>Otimização</strong>: Melhor custo-benefício para uso intensivo e regular
</div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="12" rx="2" fill="#458af5"/>
      <path d="M8 10h8M8 14h6" stroke="black" stroke-width="2" stroke-linecap="round"/>
      <rect x="2" y="18" width="4" height="4" rx="1" fill="#458af5"/>
      <rect x="10" y="18" width="4" height="4" rx="1" fill="#458af5"/>
      <rect x="18" y="18" width="4" height="4" rx="1" fill="#458af5"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Azure Synapse Analytics</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Abordagem Híbrida Flexível</strong><br>
  • <strong>Pools SQL Serverless</strong>: Pagamento por TB processado para consultas ad-hoc<br>
  • <strong>Pools SQL Dedicados</strong>: Pagamento por DWU-hour para cargas previsíveis<br>
  • <strong>Otimização Unificada</strong>: Custo e desempenho em uma única plataforma
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Vantagem Competitiva Microsoft</strong><br>
  • <strong>Integração Nativa</strong>: Conectividade superior com Power BI<br>
  • <strong>Ecossistema Microsoft</strong>: Sinergia com ferramentas corporativas existentes<br>
  • <strong>Experiência Unificada</strong>: Analytics e BI em ambiente integrado
</div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#458af5"/>
      <path d="M3 17L12 22L21 17" stroke="#458af5" stroke-width="2" fill="none"/>
      <path d="M3 12L12 17L21 12" stroke="#458af5" stroke-width="2" fill="none"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">AWS Redshift</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Arquitetura MPP de Alto Desempenho</strong><br>
  • <strong>Massively Parallel Processing</strong>: Otimizado para análises de alta performance<br>
  • <strong>Redshift Provisioned</strong>: Ideal para cargas de trabalho previsíveis e consistentes<br>
  • <strong>Redshift Serverless</strong>: Dimensionamento automático usando RPUs (Redshift Processing Units)
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Diferencial Redshift Spectrum</strong><br>
  • <strong>Consultas Diretas no S3</strong>: Análise de dados sem necessidade de carregamento<br>
  • <strong>Custo Competitivo</strong>: <strong>$5/TB</strong> para consultas em dados do S3<br>
  • <strong>Flexibilidade</strong>: Combina dados estruturados e semi-estruturados em uma única consulta
</div>`
      },
      {
        id: 'real-time-streaming',
        title: 'Processamento de Streaming em Tempo Real',
        content: `A análise em tempo real é vital para casos de uso como detecção de fraudes, personalização de varejo e monitoramento de IoT. A arquitetura serverless é particularmente adequada para essa categoria, pois lida com a natureza volátil e o alto volume de dados de streaming sem a complexidade do gerenciamento de infraestrutura.

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#458af5"/>
      <path d="M8 12h8" stroke="black" stroke-width="2" stroke-linecap="round"/>
       <path d="M12 8v8" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">GCP (Pub/Sub e Dataflow)</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Pub/Sub - Mensageria Altamente Escalável</strong><br>
  • <strong>Ingestão em Tempo Real</strong>: Serviço de mensageria altamente escalável e confiável<br>
  • <strong>Latência Ultra-Baixa</strong>: Otimizado para processamento de eventos em tempo real<br>
  • <strong>Integração Nativa</strong>: Conectividade perfeita com outros serviços GCP
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Dataflow - Motor de Processamento</strong><br>
  • <strong>Processamento Unificado</strong>: Consome dados do Pub/Sub para análises em tempo real<br>
  • <strong>Apache Beam</strong>: Baseado em framework open-source para portabilidade<br>
  • <strong>Auto-scaling</strong>: Dimensionamento automático baseado na carga de trabalho
</div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="12" rx="2" fill="#458af5"/>
      <path d="M8 10h8M8 14h6" stroke="black" stroke-width="2" stroke-linecap="round"/>
      <rect x="2" y="18" width="4" height="4" rx="1" fill="#458af5"/>
      <rect x="10" y="18" width="4" height="4" rx="1" fill="#458af5"/>
      <rect x="18" y="18" width="4" height="4" rx="1" fill="#458af5"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Azure (Event Hubs e Stream Analytics)</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Event Hubs - Ingestão Serverless de Eventos</strong><br>
  • <strong>Cenários de IoT</strong>: Projetado para coletar grandes volumes de dados de streaming<br>
  • <strong>Arquitetura Serverless</strong>: Elimina a necessidade de gerenciamento de infraestrutura<br>
  • <strong>Escalabilidade Massiva</strong>: Suporte a milhões de eventos por segundo
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Stream Analytics - Processamento SQL Amigável</strong><br>
  • <strong>Sintaxe SQL</strong>: Motor de processamento com linguagem familiar aos analistas<br>
  • <strong>Análise em Movimento</strong>: Processamento de dados em tempo real com baixa latência<br>
  • <strong>Integração Power BI</strong>: Conectividade nativa para visualização em tempo real
</div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#458af5"/>
      <path d="M3 17L12 22L21 17" stroke="#458af5" stroke-width="2" fill="none"/>
      <path d="M3 12L12 17L21 12" stroke="#458af5" stroke-width="2" fill="none"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">AWS (Kinesis)</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Suíte Completa de Streaming</strong><br>
  • <strong>Kinesis Data Streams</strong>: Coleta e processamento de dados em tempo real<br>
  • <strong>Kinesis Data Firehose</strong>: Carregamento automático para destinos como S3 e Redshift<br>
  • <strong>Kinesis Data Analytics</strong>: Análise de dados de streaming com SQL e Apache Flink
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Vantagens do Ecossistema AWS</strong><br>
  • <strong>Integração Nativa</strong>: Conectividade perfeita com todo o ecossistema AWS<br>
  • <strong>Baixa Latência</strong>: Otimizado para processamento de grandes volumes em tempo real<br>
  • <strong>Escalabilidade Automática</strong>: Dimensionamento baseado na demanda de dados
</div>

<div style="margin-top: 30px; padding: 15px; background-color: #f0f9ff; border-left: 4px solid #458af5;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">TCO em Arquiteturas de IoT</strong><br>
  Para o TCO em arquiteturas de IoT, os custos de ingestão e processamento de mensagens são fatores críticos. O modelo serverless, oferecido por todas as três plataformas, é uma solução eficiente para lidar com o volume e a velocidade dos dados de sensores, pois minimiza a sobrecarga de gerenciamento e o desperdício de recursos ociosos.
</div>`
      },
      {
        id: 'ml-ai-tools',
        title: 'Ferramentas de Machine Learning e Inteligência Artificial',
        content: `O desenvolvimento de Machine Learning em nuvem se beneficia de infraestrutura escalável, mas o custo total de um projeto de IA/ML é frequentemente mal calculado. A análise detalhada dos custos revela que, embora o training do modelo seja intensivo em recursos, o custo de inference (uso contínuo do modelo em produção) geralmente se torna o componente dominante do TCO em poucos meses.

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill="#458af5"/>
      <path d="M8 12h8" stroke="black" stroke-width="2" stroke-linecap="round"/>
       <path d="M12 8v8" stroke="black" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">GCP Vertex AI</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Plataforma Unificada para Ciclo de Vida do ML</strong><br>
  • <strong>Interface Intuitiva</strong>: Conhecida por sua experiência de usuário simplificada e amigável<br>
  • <strong>Recursos de AutoML</strong>: Automatização avançada para desenvolvimento de modelos sem expertise profunda<br>
  • <strong>Integração BigQuery</strong>: Conectividade perfeita para análise de dados em larga escala
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Vantagens Competitivas</strong><br>
  • <strong>TensorFlow Nativo</strong>: Suporte otimizado para o framework de ML mais popular<br>
  • <strong>Vertex AI Workbench</strong>: Ambiente de desenvolvimento integrado para cientistas de dados<br>
  • <strong>MLOps Simplificado</strong>: Pipeline automatizado do desenvolvimento à produção
</div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="4" width="18" height="12" rx="2" fill="#458af5"/>
      <path d="M8 10h8M8 14h6" stroke="black" stroke-width="2" stroke-linecap="round"/>
      <rect x="2" y="18" width="4" height="4" rx="1" fill="#458af5"/>
      <rect x="10" y="18" width="4" height="4" rx="1" fill="#458af5"/>
      <rect x="18" y="18" width="4" height="4" rx="1" fill="#458af5"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">Azure Machine Learning</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Plataforma Completa para MLOps</strong><br>
  • <strong>Construção em Escala</strong>: Permite que equipes construam, treinem e implantem modelos massivamente<br>
  • <strong>Integração Microsoft</strong>: Força reside na sinergia com todo o ecossistema Microsoft<br>
  • <strong>Variedade de Ferramentas</strong>: Desde interfaces visuais até suporte avançado para notebooks
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Flexibilidade de Desenvolvimento</strong><br>
  • <strong>Drag-and-Drop</strong>: Interfaces visuais para desenvolvimento sem código<br>
  • <strong>MLflow Integration</strong>: Suporte nativo para gerenciamento de experimentos<br>
  • <strong>Azure Notebooks</strong>: Ambiente colaborativo para cientistas de dados
</div>

<hr style="margin: 20px 0; border: none; border-top: 2px solid #e5e7eb;">

<blockquote style="border-left: 4px solid #458af5; padding-left: 15px; margin: 10px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center;">
    <svg style="width: 28px; height: 28px; margin-right: 12px; font-style: normal;" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L3 7L12 12L21 7L12 2Z" fill="#458af5"/>
      <path d="M3 17L12 22L21 17" stroke="#458af5" stroke-width="2" fill="none"/>
      <path d="M3 12L12 17L21 12" stroke="#458af5" stroke-width="2" fill="none"/>
    </svg>
    <strong style="font-style: normal; font-size: 20px; color: #458af5;">AWS SageMaker</strong>
  </div>
</blockquote>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Plataforma Fully Managed Mais Completa</strong><br>
  • <strong>Maior Variedade</strong>: Mais ferramentas, frameworks e tipos de instâncias disponíveis<br>
  • <strong>Ciclo Completo</strong>: Do treinamento à implantação com recursos avançados de MLOps<br>
  • <strong>Spot Instances</strong>: Descontos significativos para treinamento com instâncias spot
</div>

<div style="margin-bottom: 20px;">
  <strong style="font-style: normal; font-size: 18px; color: #458af5;">Amazon Bedrock - Modelos de Fundação</strong><br>
  • <strong>LLMs de Terceiros</strong>: Acesso a modelos de fundação de empresas líderes<br>
  • <strong>Modelos AWS</strong>: Acesso aos próprios modelos de linguagem da Amazon<br>
  • <strong>Complemento SageMaker</strong>: Integração perfeita para desenvolvimento de IA generativa
</div>

<div style="margin-top: 30px; padding: 15px; background-color: #fff3cd; border-left: 4px solid #ffc107;">
  <strong style="font-style: normal; font-size: 18px; color: #856404;">⚠️ Consideração Crítica de TCO</strong><br>
  <span style="color: #856404;">Embora o training do modelo seja intensivo em recursos, o custo de <strong>inference</strong> (uso contínuo do modelo em produção) geralmente se torna o componente dominante do TCO em poucos meses. Planeje adequadamente os custos de produção.</span>
</div>`
      }
    ]
  },
  {
    id: 'cost-benefit-analysis',
    title: 'Análise de Custo-Benefício e Custo Total de Propriedade (TCO)',
    subsections: [
      {
        id: 'pricing-models',
        title: 'Modelos de Precificação e Custos Ocultos',
        content: `<div style="text-align: left; max-width: 100%;">

<p>A precificação de serviços em nuvem é um fator complexo que vai muito além das taxas por hora ou por gigabyte. Para uma avaliação precisa do custo-benefício, é fundamental considerar o modelo de precificação (visível) e os custos operacionais e de transferência de dados (ocultos).</p>

<div style="display: flex; align-items: center; margin: 30px 0 20px 0;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="margin-right: 10px;">
    <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" fill="#059669"/>
  </svg>
  <h3 style="color: #458af5; margin: 0; font-size: 20px; font-weight: bold;">Precificação (Visível)</h3>
</div>

<div style="border-left: 4px solid #458af5; padding: 15px; margin: 20px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
      <circle cx="12" cy="12" r="10" fill="#458af5"/>
    </svg>
    <h4 style="color: #458af5; margin: 0; font-size: 18px; font-weight: bold;">GCP - Modelo Pay-as-You-Go Inteligente</h4>
  </div>
  <ul style="margin: 10px 0; padding-left: 20px;">
    <li><strong>Sustained Use Discounts</strong>: Descontos por uso contínuo aplicados automaticamente</li>
    <li><strong>Committed Use Discounts (CUDs)</strong>: Até <strong>40% de economia</strong> para cargas previsíveis</li>
    <li><strong>Simplicidade</strong>: Menos complexidade na gestão de precificação</li>
  </ul>
</div>

<div style="border-left: 4px solid #458af5; padding: 15px; margin: 20px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
      <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#458af5"/>
      <path d="M2 17L12 22L22 17" stroke="#458af5" stroke-width="2" fill="none"/>
      <path d="M2 12L12 17L22 12" stroke="#458af5" stroke-width="2" fill="none"/>
    </svg>
    <h4 style="color: #458af5; margin: 0; font-size: 18px; font-weight: bold;">Azure - Modelo Híbrido Flexível</h4>
  </div>
  <ul style="margin: 10px 0; padding-left: 20px;">
    <li><strong>Pay-as-You-Go</strong>: Pagamento conforme o uso sem compromissos</li>
    <li><strong>Reserved Instances e Savings Plans</strong>: Descontos por compromisso de até <strong>65%</strong></li>
    <li><strong>Opção Econômica</strong>: Ideal para cargas de trabalho estáveis e previsíveis</li>
  </ul>
</div>

<div style="border-left: 4px solid #458af5; padding: 15px; margin: 20px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
      <path d="M3.5 18.49L6 15.99C6.33 16.74 6.96 17.37 7.71 17.7L5.21 20.2C4.55 19.54 4.04 18.78 3.69 17.95L3.5 18.49ZM11 22.45C9.84 22.15 8.83 21.54 8.07 20.68L10.57 18.18C10.74 18.18 10.91 18.18 11.08 18.18C11.25 18.18 11.42 18.18 11.59 18.18L14.09 20.68C13.33 21.54 12.32 22.15 11.16 22.45H11ZM18.49 20.2L15.99 17.7C16.74 17.37 17.37 16.74 17.7 15.99L20.2 18.49C19.54 19.15 18.78 19.66 17.95 20.01L18.49 20.2ZM22.45 13C22.15 14.16 21.54 15.17 20.68 15.93L18.18 13.43C18.18 13.26 18.18 13.09 18.18 12.92C18.18 12.75 18.18 12.58 18.18 12.41L20.68 9.91C21.54 10.67 22.15 11.68 22.45 12.84V13ZM13 5.55C14.16 5.85 15.17 6.46 15.93 7.32L13.43 9.82C13.26 9.82 13.09 9.82 12.92 9.82C12.75 9.82 12.58 9.82 12.41 9.82L9.91 7.32C10.67 6.46 11.68 5.85 12.84 5.55H13ZM5.55 11C5.85 9.84 6.46 8.83 7.32 8.07L9.82 10.57C9.82 10.74 9.82 10.91 9.82 11.08C9.82 11.25 9.82 11.42 9.82 11.59L7.32 14.09C6.46 13.33 5.85 12.32 5.55 11.16V11ZM1.55 11C1.85 9.84 2.46 8.83 3.32 8.07L5.82 10.57C5.82 10.74 5.82 10.91 5.82 11.08C5.82 11.25 5.82 11.42 5.82 11.59L3.32 14.09C2.46 13.33 1.85 12.32 1.55 11.16V11Z" fill="#458af5"/>
    </svg>
    <h4 style="color: #458af5; margin: 0; font-size: 18px; font-weight: bold;">AWS - Máxima Flexibilidade de Precificação</h4>
  </div>
  <ul style="margin: 10px 0; padding-left: 20px;">
    <li><strong>On-Demand</strong>: Pagamento por uso sem compromissos</li>
    <li><strong>Reserved Instances</strong>: Economias de até <strong>75%</strong> com compromisso</li>
    <li><strong>Spot Instances</strong>: Até <strong>90% de economia</strong> para cargas tolerantes a interrupções</li>
    <li><strong>Gestão Ativa</strong>: Granularidade exige otimização constante</li>
  </ul>
</div>

<div style="border-top: 2px solid #e5e7eb; margin: 40px 0 30px 0; padding-top: 30px;">
  <div style="display: flex; align-items: center; margin-bottom: 20px;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="margin-right: 10px;">
      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#dc3545"/>
    </svg>
    <h3 style="color: #dc3545; margin: 0; font-size: 20px; font-weight: bold;">Custos Ocultos (A Verdade sobre o TCO)</h3>
  </div>
</div>

<div style="border-left: 4px solid #dc3545; padding: 15px; margin: 20px 0; background-color: #fff5f5;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#dc3545"/>
    </svg>
    <h4 style="color: #dc3545; margin: 0; font-size: 18px; font-weight: bold;">Egress (Transferência de Dados)</h4>
  </div>
  <p style="color: #721c24; margin: 0;">O custo de mover dados para fora da nuvem ou entre regiões é um dos maiores e mais imprevisíveis "custos ocultos". Embora as taxas variem entre os provedores, a melhor prática é sempre manter a arquitetura de dados na mesma região e comprimir os dados para minimizar as transferências.</p>
</div>

<div style="border-left: 4px solid #dc3545; padding: 15px; margin: 20px 0; background-color: #fff5f5;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
      <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5A3.5 3.5 0 0 1 15.5 12A3.5 3.5 0 0 1 12 15.5M19.43 12.98C19.47 12.66 19.5 12.33 19.5 12S19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.96 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.5 2.42C14.46 2.18 14.25 2 14 2H10C9.75 2 9.54 2.18 9.5 2.42L9.13 5.07C8.52 5.32 7.96 5.66 7.44 6.05L4.95 5.05C4.73 4.96 4.46 5.05 4.34 5.27L2.34 8.73C2.22 8.95 2.27 9.22 2.46 9.37L4.57 11.02C4.53 11.34 4.5 11.67 4.5 12S4.53 12.66 4.57 12.98L2.46 14.63C2.27 14.78 2.22 15.05 2.34 15.27L4.34 18.73C4.46 18.95 4.73 19.03 4.95 18.95L7.44 17.94C7.96 18.34 8.52 18.68 9.13 18.93L9.5 21.58C9.54 21.82 9.75 22 10 22H14C14.25 22 14.46 21.82 14.5 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.94L19.05 18.95C19.27 19.03 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98Z" fill="#dc3545"/>
    </svg>
    <h4 style="color: #dc3545; margin: 0; font-size: 18px; font-weight: bold;">Operações, Mão de Obra e Treinamento</h4>
  </div>
  <p style="color: #721c24; margin: 0;">O TCO de uma solução de Big Data não é apenas a fatura da nuvem; ele inclui custos de migração, licenciamento de software, treinamento da equipe e despesas de suporte e manutenção. A complexidade de gerenciar a vasta oferta de serviços da AWS, por exemplo, pode resultar em um TCO mais alto devido à necessidade de uma equipe técnica mais experiente, apesar de ter preços de hardware mais baixos.</p>
</div>

</div>`
      },
      {
        id: 'performance-benchmarks',
        title: 'Benchmarks de Desempenho',
        content: `<div style="text-align: left; max-width: 100%;">

<p>A comparação de desempenho entre plataformas de data warehouse é complexa e os resultados podem ser influenciados pela metodologia dos benchmarks.</p>

<div style="display: flex; align-items: center; margin: 30px 0 20px 0;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="margin-right: 10px;">
    <path d="M3 13H11L12 12L11 11H3V13M3 17H9V15H3V17M3 9H15V7H3V9M18 7V12.5L22 9L18 5.5V11H16V13H18V7Z" fill="#059669"/>
  </svg>
  <h3 style="color: #458af5; margin: 0; font-size: 20px; font-weight: bold;">Complexidade dos Benchmarks</h3>
</div>

<div style="border-left: 4px solid #458af5; padding: 15px; margin: 20px 0; background-color: #f8fafc;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="#458af5"/>
    </svg>
    <h4 style="color: #458af5; margin: 0; font-size: 18px; font-weight: bold;">Estudo Amazon TPC-DS vs. Testes Independentes</h4>
  </div>
  <p style="color: #1e40af; margin: 0;">Um estudo da Amazon usando o TPC-DS apontou o <strong>Redshift como 6 vezes mais rápido</strong> que o BigQuery, mas outros testes independentes mostraram resultados mais equilibrados. Essa variação ressalta que o desempenho não é uma métrica estática, mas sim um reflexo da otimização das consultas, da configuração do cluster e da arquitetura subjacente.</p>
</div>

<div style="border-top: 2px solid #e5e7eb; margin: 40px 0 30px 0; padding-top: 30px;">
  <div style="display: flex; align-items: center; margin-bottom: 20px;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="margin-right: 10px;">
      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#dc3545"/>
    </svg>
    <h3 style="color: #dc3545; margin: 0; font-size: 20px; font-weight: bold;">Métrica Price-Performance</h3>
  </div>
</div>

<div style="border-left: 4px solid #dc3545; padding: 15px; margin: 20px 0; background-color: #fff5f5;">
  <p style="color: #721c24; margin: 0;">A métrica de <strong>desempenho por dólar (price-performance)</strong> é a mais valiosa para tomada de decisão empresarial. Uma análise de TCO de 3 anos realizada pela <strong>GigaOm</strong> para empresas de médio e grande porte, que considerou não apenas os custos de hardware, mas também os de mão de obra e integração de dados, posicionou:</p>
</div>

<div style="border-left: 4px solid #059669; padding: 15px; margin: 20px 0; background-color: #f0fdf4;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
      <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#059669"/>
    </svg>
    <h4 style="color: #059669; margin: 0; font-size: 18px; font-weight: bold;">Análise TCO GigaOm - 3 Anos</h4>
  </div>
  <ul style="margin: 10px 0; padding-left: 20px; color: #065f46;">
    <li><strong>🥇 Azure</strong> - Plataforma de menor custo</li>
    <li><strong>🥈 AWS</strong> - Segunda posição</li>
    <li><strong>🥉 GCP</strong> - Terceira posição</li>
  </ul>
</div>

<div style="border-left: 4px solid #f59e0b; padding: 15px; margin: 20px 0; background-color: #fffbeb;">
  <div style="display: flex; align-items: center; margin-bottom: 10px;">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
      <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#f59e0b"/>
    </svg>
    <h4 style="color: #f59e0b; margin: 0; font-size: 18px; font-weight: bold;">Análise Holística</h4>
  </div>
  <p style="color: #92400e; margin: 0;">Esse resultado destaca a importância de uma <strong>análise holística</strong>, que vá além do preço por GB ou por vCPU, considerando custos operacionais, integração e mão de obra especializada.</p>
</div>

</div>`
      },
      {
        id: 'scenario-cost-evaluation',
        title: 'Avaliação de Custo-Benefício por Cenário',
        content: 'Para startups: GCP oferece créditos generosos e simplicidade. Para empresas Microsoft: Azure proporciona maior ROI devido à integração. Para workloads enterprise complexos: AWS oferece maior flexibilidade e maturidade. Para projetos de ML/AI: GCP apresenta melhor custo-benefício. Para ambientes híbridos: Azure lidera em funcionalidades nativas.'
      }
    ]
  },
  {
    id: 'security-compliance',
    title: 'Segurança, Conformidade e Estratégias Híbridas',
    subsections: [
      {
        id: 'security-encryption',
        title: 'Segurança e Criptografia',
        content: 'Todas as plataformas oferecem criptografia end-to-end: AWS KMS com FIPS 140-2 Level 3, Azure Key Vault com HSM dedicado, e Google Cloud KMS com chaves gerenciadas externamente. Recursos avançados incluem detecção de anomalias, zero-trust networking e compliance automático com padrões de segurança.'
      },
      {
        id: 'compliance-standards',
        title: 'Conformidade (GDPR, HIPAA)',
        content: 'Compliance é um ponto forte de todas as plataformas: AWS oferece 98 certificações de conformidade, Azure destaca-se em GDPR com Data Residency garantido, e GCP lidera em transparência com relatórios públicos de auditoria. Todas suportam HIPAA, SOC 2, ISO 27001 e outras certificações críticas para empresas.'
      },
      {
        id: 'hybrid-solutions',
        title: 'O Papel das Soluções Híbridas',
        content: 'Estratégias híbridas são essenciais: Azure Arc oferece gestão unificada mais avançada, AWS Outposts proporciona experiência nativa on-premises, e Google Anthos facilita modernização de aplicações legacy. Cada solução atende diferentes necessidades de migração e governança de dados.'
      }
    ]
  },
  {
    id: 'databricks',
    title: 'Databricks: Uma Alternativa Multinuvem para a Análise de Dados',
    subsections: [
      {
        id: 'databricks-overview',
        title: 'Visão Geral do Databricks',
        content: `<div style="text-align: left; max-width: 100%;">

<p>O Databricks é uma plataforma de data science e data engineering construída sobre o Apache Spark, com uma proposta de valor central: <strong>unificar o gerenciamento de dados e IA em um ambiente lakehouse consistente</strong>, independentemente do provedor de nuvem subjacente.</p>

<div style="display: flex; align-items: center; margin: 30px 0 20px 0;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="margin-right: 10px;">
    <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#059669"/>
  </svg>
  <h3 style="color: #458af5; margin: 0; font-size: 20px; font-weight: bold;">Comparativo do Databricks por Plataforma</h3>
</div>

<div style="overflow-x: auto; margin: 20px 0;">
  <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
    <thead>
      <tr style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white;">
        <th style="padding: 16px; text-align: left; font-weight: bold; border-bottom: 2px solid #4c63d2;">Plataforma</th>
        <th style="padding: 16px; text-align: left; font-weight: bold; border-bottom: 2px solid #4c63d2;">Infraestrutura</th>
        <th style="padding: 16px; text-align: left; font-weight: bold; border-bottom: 2px solid #4c63d2;">Integrações Principais</th>
        <th style="padding: 16px; text-align: left; font-weight: bold; border-bottom: 2px solid #4c63d2;">Características Especiais</th>
      </tr>
    </thead>
    <tbody>
      <tr style="background-color: #f8fafc; border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 16px; border-right: 1px solid #e5e7eb;">
          <div style="display: flex; align-items: center;">
            <span style="font-size: 20px; margin-right: 8px;">🔵</span>
            <strong style="color: #458af5; font-size: 16px;">Google Cloud Platform</strong>
          </div>
        </td>
        <td style="padding: 16px; border-right: 1px solid #e5e7eb; color: #374151;">
          <strong>Google Kubernetes Engine (GKE)</strong><br/>
          <span style="font-size: 14px; color: #6b7280;">Execução containerizada</span>
        </td>
        <td style="padding: 16px; border-right: 1px solid #e5e7eb; color: #374151;">
          • BigQuery<br/>
          • Cloud Storage<br/>
          • Dataflow
        </td>
        <td style="padding: 16px; color: #374151;">
          Integração nativa com ecossistema Google Analytics
        </td>
      </tr>
      <tr style="background-color: #ffffff; border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 16px; border-right: 1px solid #e5e7eb;">
          <div style="display: flex; align-items: center;">
            <span style="font-size: 20px; margin-right: 8px;">🔷</span>
            <strong style="color: #0078d4; font-size: 16px;">Microsoft Azure</strong>
          </div>
        </td>
        <td style="padding: 16px; border-right: 1px solid #e5e7eb; color: #374151;">
          <strong>Azure Virtual Machines</strong><br/>
          <span style="font-size: 14px; color: #6b7280;">Serviço first-party</span>
        </td>
        <td style="padding: 16px; border-right: 1px solid #e5e7eb; color: #374151;">
          • Azure Synapse<br/>
          • Azure Data Lake<br/>
          • Power BI
        </td>
        <td style="padding: 16px; color: #374151;">
          <strong>Cobrança unificada</strong> e integrações nativas profundas
        </td>
      </tr>
      <tr style="background-color: #f8fafc; border-bottom: 1px solid #e5e7eb;">
        <td style="padding: 16px; border-right: 1px solid #e5e7eb;">
          <div style="display: flex; align-items: center;">
            <span style="font-size: 20px; margin-right: 8px;">🟠</span>
            <strong style="color: #ff9900; font-size: 16px;">Amazon Web Services</strong>
          </div>
        </td>
        <td style="padding: 16px; border-right: 1px solid #e5e7eb; color: #374151;">
          <strong>Amazon EC2</strong><br/>
          <span style="font-size: 14px; color: #6b7280;">Instâncias dedicadas</span>
        </td>
        <td style="padding: 16px; border-right: 1px solid #e5e7eb; color: #374151;">
          • Amazon S3<br/>
          • Amazon Athena<br/>
          • Amazon Redshift
        </td>
        <td style="padding: 16px; color: #374151;">
          Maior variedade de tipos de instância e regiões
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div style="border-top: 2px solid #e5e7eb; margin: 40px 0 30px 0; padding-top: 30px;">
  <div style="display: flex; align-items: center; margin-bottom: 20px;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style="margin-right: 10px;">
      <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H19C20.11 23 21 22.11 21 21V9M19 9H14V4H5V21H19V9Z" fill="#dc3545"/>
    </svg>
    <h3 style="color: #dc3545; margin: 0; font-size: 20px; font-weight: bold;">Análise de Custo e TCO</h3>
  </div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
  <div style="border-left: 4px solid #dc3545; padding: 20px; background-color: #fff5f5; border-radius: 8px;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
        <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" fill="#dc3545"/>
      </svg>
      <h4 style="color: #dc3545; margin: 0; font-size: 18px; font-weight: bold;">Modelo de Precificação</h4>
    </div>
    <p style="color: #721c24; margin: 0; line-height: 1.6;">A precificação do Databricks segue um <strong>modelo de camada dupla</strong>:</p>
    <ul style="color: #721c24; margin: 10px 0 0 20px; line-height: 1.6;">
      <li><strong>Databricks Units (DBUs)</strong></li>
      <li><strong>Infraestrutura subjacente</strong> (VMs, armazenamento, rede)</li>
    </ul>
  </div>

  <div style="border-left: 4px solid #f59e0b; padding: 20px; background-color: #fffbeb; border-radius: 8px;">
    <div style="display: flex; align-items: center; margin-bottom: 15px;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style="margin-right: 8px;">
        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="#f59e0b"/>
      </svg>
      <h4 style="color: #f59e0b; margin: 0; font-size: 18px; font-weight: bold;">TCO vs. Produtividade</h4>
    </div>
    <p style="color: #92400e; margin: 0; line-height: 1.6;">Segundo o <strong>estudo GigaOm de TCO</strong>, o Databricks apresenta custo total mais alto que plataformas nativas. Porém, as <strong>economias em mão de obra e simplicidade operacional</strong> frequentemente compensam os custos adicionais.</p>
  </div>
</div>

</div>`
      }
    ]
  },
  {
    id: 'comparative-tables',
    title: 'Tabelas Comparativas',
    subsections: [
      {
        id: 'platform-recommendations',
        title: 'Recomendações de Plataformas',
        content: 'Baseado em análise abrangente, as recomendações variam por caso de uso: GCP para projetos focados em ML/AI e analytics, Azure para organizações Microsoft-centric, AWS para necessidades enterprise complexas. A escolha deve considerar fatores como expertise interna, requisitos de integração e objetivos de longo prazo.'
      },
      {
        id: 'storage-comparison',
        title: 'Comparativo de Armazenamento de Objetos e Data Lakes (US East)',
        content: 'Comparação detalhada dos custos e performance de armazenamento na região US East, incluindo diferentes classes de armazenamento, custos de transferência e recursos de governança de dados.'
      },
      {
        id: 'data-warehouse-comparison',
        title: 'Comparativo de Data Warehouses em Nuvem',
        content: 'Análise comparativa entre BigQuery, Synapse Analytics e Redshift, focando em performance, escalabilidade, facilidade de uso e custo total de propriedade.'
      },
      {
        id: 'ml-ai-comparison',
        title: 'Comparativo de Plataformas de ML/IA (US East)',
        content: 'Comparação detalhada das ofertas de machine learning e inteligência artificial, incluindo AutoML, notebooks gerenciados, MLOps e custos de treinamento de modelos.'
      }
    ]
  },
  {
    id: 'conclusion',
    title: 'Conclusão e Recomendações Finais',
    subsections: [
      {
        id: 'final-recommendations',
        title: 'Recomendações Finais',
        content: 'A escolha da plataforma ideal deve ser baseada em uma avaliação holística que considere não apenas custos, mas também requisitos técnicos, expertise da equipe, estratégia de longo prazo e objetivos de negócio. Recomenda-se uma abordagem de prova de conceito antes de comprometimentos de longo prazo, além de considerar estratégias multi-cloud para mitigar riscos e otimizar custos.'
      }
    ]
  }
];

export const comparisonTables: ComparisonTable[] = [
  {
    id: 'storage-costs',
    title: 'Custos de Armazenamento (US East) - por TB/mês',
    headers: ['Plataforma', 'Standard', 'Infrequent Access', 'Archive'],
    rows: [
      { platform: 'AWS S3', data: ['$23.00', '$12.50', '$1.00'] },
      { platform: 'Azure Blob', data: ['$21.00', '$10.00', '$0.99'] },
      { platform: 'GCP Storage', data: ['$20.00', '$10.00', '$1.20'] }
    ]
  },
  {
    id: 'data-warehouse-performance',
    title: 'Performance de Data Warehouse - Queries por Segundo',
    headers: ['Plataforma', 'Queries Simples', 'Queries Complexas', 'Concurrent Users'],
    rows: [
      { platform: 'BigQuery', data: ['15000', '500', '2000'] },
      { platform: 'Synapse', data: ['12000', '400', '1500'] },
      { platform: 'Redshift', data: ['10000', '350', '1200'] }
    ]
  },
  {
    id: 'ml-ai-pricing',
    title: 'Custos de ML/AI - Treinamento por Hora',
    headers: ['Plataforma', 'CPU Instance', 'GPU Instance', 'AutoML'],
    rows: [
      { platform: 'GCP AI Platform', data: ['$0.20', '$2.48', '$19.32'] },
      { platform: 'Azure ML', data: ['$0.24', '$2.76', '$20.00'] },
      { platform: 'AWS SageMaker', data: ['$0.27', '$3.06', '$22.50'] }
    ]
  }
];

export const chartData: ChartData[] = [
  { name: 'Performance', gcp: 85, azure: 78, aws: 82 },
  { name: 'Custo-Benefício', gcp: 90, azure: 85, aws: 75 },
  { name: 'Facilidade de Uso', gcp: 88, azure: 82, aws: 70 },
  { name: 'Suporte', gcp: 75, azure: 85, aws: 90 },
  { name: 'Inovação', gcp: 95, azure: 80, aws: 85 },
  { name: 'Segurança', gcp: 85, azure: 88, aws: 92 }
];
