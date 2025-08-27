'use client';

import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import * as pdfjs from 'pdfjs-dist';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

type Props = { fileUrl: string };

export function ResumeViewer({ fileUrl }: Props) {
  const defaultLayout = defaultLayoutPlugin();

  return (
    <div className="h-[80vh] w-full overflow-hidden rounded-lg border border-[hsl(var(--border))] bg-[oklch(var(--card))]">
      <Viewer fileUrl={fileUrl} plugins={[defaultLayout]} />
    </div>
  );
}
