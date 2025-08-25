import { sections } from '@/data/mockData';
import { Card } from '@/components/Common/Card';
import { notFound } from 'next/navigation';

export default async function DynamicSubsectionPage({ params }: { params: Promise<{ section: string; subsection: string }> }) {
  const { section: sectionId, subsection: subsectionId } = await params;
  const section = sections.find(sec => sec.id === sectionId);
  const subsection = section?.subsections?.find(sub => sub.id === subsectionId);
  if (!section || !subsection) return notFound();
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-5xl space-y-8 px-4 py-8">
        <Card title={subsection.title} isActive>
          <div className="prose max-w-none mx-auto text-center flex justify-center items-center !text-black" style={{color: 'black'}} dangerouslySetInnerHTML={{ __html: subsection.content || '' }} />
        </Card>
      </div>
    </div>
  );
}
