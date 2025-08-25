import { sections } from '@/data/mockData';
import { Card } from '@/components/Common/Card';

export default function EtlOrchestrationPage() {
  const subsection = sections?.[1]?.subsections?.find(s => s.id === 'etl-orchestration');
  if (!subsection) return null;
  return (
    <div className="w-full max-w-4xl px-4 py-8">
      <Card title={subsection.title} isActive>
        <div dangerouslySetInnerHTML={{ __html: subsection.content || '' }} />
      </Card>
    </div>
  );
}
