import { Skill, categoryColors } from "./types";

interface ProjectModalProps {
  skill: Skill;
  onClose: () => void;
}

export function ProjectModal({ skill, onClose }: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-background border border-border rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{skill.name}</span>
          </div>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-muted-foreground">Proficiency:</span>
            <div className="flex-1 bg-muted rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all duration-1000"
                style={{
                  width: `${skill.proficiency}%`,
                  backgroundColor: categoryColors[skill.category],
                }}
              />
            </div>
            <span className="text-sm font-medium">{skill.proficiency}%</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-muted-foreground mb-3">
            Projects Used In:
          </h4>
          <div className="space-y-2">
            {skill.projects.map((project, index) => (
              <div
                key={index}
                className="bg-muted/50 rounded-lg p-3 border border-border/50"
              >
                <span className="text-sm text-foreground">{project}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
