import { sections } from '@/data/mockData';
import { Card } from '@/components/Common/Card';

export default function AwsMarketLeadershipPage() {
  const subsection = sections?.[0]?.subsections?.find(s => s.id === 'aws-market-leadership');
  if (!subsection) return null;
  return (
    <div className="max-w-4xl mx-auto py-8">
      <Card title={subsection.title} isActive>
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: subsection.content || '' }} />
      </Card>
    </div>
  );
}
