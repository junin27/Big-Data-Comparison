import { sections } from '@/data/mockData';
import { Card } from '@/components/Common/Card';

export default function MlAiToolsPage() {
  const subsection = sections?.[1]?.subsections?.find(s => s.id === 'ml-ai-tools');
  if (!subsection) return null;
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Card title={subsection.title} isActive>
        <div dangerouslySetInnerHTML={{ __html: subsection.content || '' }} />
      </Card>
    </div>
  );
}
