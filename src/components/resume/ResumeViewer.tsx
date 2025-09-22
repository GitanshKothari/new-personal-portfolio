'use client';

import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import pdfjsPkg from 'pdfjs-dist/package.json';

type Props = { fileUrl: string };

export function ResumeViewer({ fileUrl }: Props) {
  const defaultLayout = defaultLayoutPlugin();

  return (
    <div className="h-[80vh] w-full overflow-hidden rounded-lg border border-[hsl(var(--border))] bg-[oklch(var(--card))]">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjsPkg.version}/build/pdf.worker.min.js`}>
        <Viewer fileUrl={fileUrl} plugins={[defaultLayout]} />
      </Worker>
    </div>
  );
}
