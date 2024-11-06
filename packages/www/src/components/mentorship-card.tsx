import { LucideIcon } from "lucide-react";

interface MentorshipCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export function MentorshipCard({
  icon: Icon,
  title,
  description,
  iconColor,
}: MentorshipCardProps) {
  return (
    <div className="bg-white/5 p-6 rounded-lg">
      <Icon className={`h-8 w-8 ${iconColor} mb-4`} />
      <h3 className="text-white font-medium mb-2">{title}</h3>
      <p className="text-neutral-300 text-sm">{description}</p>
    </div>
  );
}
