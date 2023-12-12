import { Subtitle, Title, WrapperFeatureItem } from "../styles";
import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  title: string;
  subtitle: string;
  icon: LucideIcon;

}

export function FeatureItem({ title, subtitle, icon: Icon }: FeatureItemProps) {
  return (
    <WrapperFeatureItem>
        <Icon size={48} color="#2567d4"/>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </WrapperFeatureItem>
  );
}
