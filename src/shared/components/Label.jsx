import { Label as LabelComponent } from "@/components/ui/label";

export const Label = ({ children, ...props }) => {
  return (
    <LabelComponent className="text-sm font-medium pl-1" {...props}>
      {children}
    </LabelComponent>
  );
};
