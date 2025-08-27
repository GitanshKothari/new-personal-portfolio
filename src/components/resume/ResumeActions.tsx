import { Button } from "@/components/ui/button";
import { Download, ExternalLink } from "lucide-react";

type Props = { fileUrl: string };

export function ResumeActions({ fileUrl }: Props) {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <Button asChild>
        <a href={fileUrl} download>
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </a>
      </Button>
      <Button asChild variant="secondary">
        <a href={fileUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="mr-2 h-4 w-4" />
          Open in new tab
        </a>
      </Button>
    </div>
  );
}
