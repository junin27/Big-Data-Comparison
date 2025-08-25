import { sections } from '@/data/mockData';
import { Card } from '@/components/Common/Card';

export default function DataWarehousingPage() {
  const subsection = sections?.[1]?.subsections?.find(s => s.id === 'data-warehousing');
  if (!subsection) return null;
  return (
    <div className="w-full max-w-4xl px-4 py-8">
      <Card title={subsection.title} isActive>
        <div dangerouslySetInnerHTML={{ __html: subsection.content || '' }} />
      </Card>
    </div>
  );
}
