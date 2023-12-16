import { ChangeEvent, useCallback } from "react";

export type TUseSelectOptionsParams<Option> = {
  options: readonly Option[];
  getLabel: (option: Option) => string;
};

export type TUseSelectParams<Option> = {
  selectedOption: Option;
  options: readonly Option[];
  onChange: (option: Option) => void;
};
export function useSelect<Option>({
  selectedOption,
  options,
  onChange,
}: TUseSelectParams<Option>) {
  const onChangeCallback = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      const selectedOption = options[event.currentTarget.selectedIndex];

      if (selectedOption !== undefined) {
        onChange(selectedOption);
      }
    },
    [options, onChange],
  );

  return {
    value: options.indexOf(selectedOption),
    onChange: onChangeCallback,
  };
}
