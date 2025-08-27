import Link from 'next/link';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
import { ResumeViewer } from '@/components/resume/ResumeViewer';

export const metadata: Metadata = {
  title: 'Resume — Gitansh Kothari',
  description:
    'View or download the resume of Gitansh Kothari — Machine Learning & Full-Stack Engineer.',
};

const RESUME_PATH = '/resume/Gitansh_Kothari_Resume.pdf';

export default function ResumePage() {
  return (
    <section className="mx-auto max-w-5xl space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Resume</h1>
        <p className="text-sm text-muted-foreground">
          View the PDF in the browser or download a copy.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button asChild>
            <a href={RESUME_PATH} download>
              <Download className="mr-2 h-4 w-4" />
              Download PDF
            </a>
          </Button>
          <Button asChild variant="secondary">
            <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Open in new tab
            </a>
          </Button>
        </div>
      </header>

      <ResumeViewer fileUrl={RESUME_PATH} />

      <footer className="pt-4 text-xs text-muted-foreground">
        Tip: Use the viewer toolbar to search, zoom, or print.
      </footer>
    </section>
  );
}
