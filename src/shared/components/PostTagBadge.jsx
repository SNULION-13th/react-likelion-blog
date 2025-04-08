import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
export const PostTagBadge = ({ text, onClick, rightSlot, className }) => {
  return (
    <Badge
      key={text}
      className={cn("m-1 bg-amber-500 font-bold", className)}
      onClick={() => onClick && onClick()}
    >
      #{text}
      {rightSlot && rightSlot}
    </Badge>
  );
};
