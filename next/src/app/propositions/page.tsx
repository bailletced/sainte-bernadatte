import { VHeadPage } from "@/src/frontend/components/general/VHeadPage";
import { Spacer } from "@/src/frontend/elements/Spacer";
import MultipleSelect from "@/src/frontend/elements/select/MultipleSelect";
import { SelectedItems } from "@nextui-org/react";

type TGroups = {
  value: string;
};

const groups: SelectedItems<TGroups> = [
  {
    textValue: "Chorale",
  },
  {
    textValue: "Prière",
  },
  {
    textValue: "Étudiants",
  },
  {
    textValue: "Jeunes Pros",
  },
];

export default function Page() {
  return (
    <>
      <VHeadPage
        title="Propositions de la paroisse"
        subtitle="Rejoignez le groupe qui vous correspond !"
      />
      <Spacer size="h-3" />
      <div className="w-full px-2">
        <MultipleSelect items={groups} />
      </div>
    </>
  );
}
