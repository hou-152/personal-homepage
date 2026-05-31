declare module "lucide-react/dist/esm/icons/*" {
  import type { ComponentType, SVGProps } from "react";

  type IconProps = SVGProps<SVGSVGElement> & {
    size?: string | number;
    strokeWidth?: string | number;
    absoluteStrokeWidth?: boolean;
  };

  const icon: ComponentType<IconProps>;
  export default icon;
}
