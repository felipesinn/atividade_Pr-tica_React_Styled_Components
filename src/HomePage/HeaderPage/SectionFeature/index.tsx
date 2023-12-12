import { CheckCircle2, Layers3, MonitorIcon } from "lucide-react";
import { FeatureItem } from "./FeatureItem";
import { WrapperSection } from "./styles";

export function SectionFeature() {
  return (
    <WrapperSection>
      <FeatureItem
        icon={MonitorIcon}
        title="Somente para dektop"
        subtitle="Vamos aprender, como utilizar um framework"
      />

      <FeatureItem
        icon={Layers3}
        title="Criando com components"
        subtitle="Utilizando o Styled Components"
      />

      <FeatureItem
        icon={CheckCircle2}
        title="Fácil aproveitamento"
        subtitle="Estamos no caminho."
      />
    </WrapperSection>
  );
}
