'use client';

import { ResumeViewer } from '@/components/resume/ResumeViewer';

type Props = { fileUrl: string };

export function ResumeClient({ fileUrl }: Props) {
  return <ResumeViewer fileUrl={fileUrl} />;
}


