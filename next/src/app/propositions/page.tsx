"use client";

import { Spacer } from "@/src/frontend/components/elements/Spacer";
import MultipleSelect from "@/src/frontend/components/elements/select/MultipleSelect";
import { HeadPage } from "@/src/frontend/components/general/HeadPage";
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import tagsQuery from "@/graphql/tag/tagQueries.graphql";
import { GetTagsQuery } from "@/src/frontend/graphql/graphql-types";

export default function Page() {
  const { data } = useSuspenseQuery<GetTagsQuery>(tagsQuery);
  console.log(data.tags);

  return (
    <>
      <HeadPage
        title="Propositions de la paroisse"
        subtitle="Rejoignez le groupe qui vous correspond !"
      />
      <Spacer size="h-3" />
      <div className="w-full px-2">
        <MultipleSelect
          items={data.tags.map((tag) => ({ textValue: tag.name }))}
        />
      </div>
    </>
  );
}
