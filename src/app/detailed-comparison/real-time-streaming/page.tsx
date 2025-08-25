import { sections } from '@/data/mockData';
import { Card } from '@/components/Common/Card';

export default function RealTimeStreamingPage() {
  const subsection = sections?.[1]?.subsections?.find(s => s.id === 'real-time-streaming');
  if (!subsection) return null;
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Card title={subsection.title} isActive>
        <div dangerouslySetInnerHTML={{ __html: subsection.content || '' }} />
      </Card>
    </div>
  );
}
