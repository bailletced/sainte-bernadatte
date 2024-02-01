import clsx from "clsx";

import { TSizeProps } from "@/src/frontend/types/style/sizes";

export const Spacer: TFC<TSizeProps> = ({ size }) => (
  <div
    className={clsx(
      size?.toString()?.includes("w") && "float-left",
      size,
      "flex-grow bg-[#f7f9fc]"
    )}
  />
);
