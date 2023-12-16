"use client";
import { Chip, Select, SelectItem, SelectedItems } from "@nextui-org/react";

type TCMultipleSelectProps<T> = {
  items: SelectedItems<T>;
};

export default function MutlipleSelect<T>({ items }: TCMultipleSelectProps<T>) {
  return (
    <div className="flex">
      <Select
        items={items}
        label="Catégorie"
        selectionMode="multiple"
        placeholder="Sélectionnez une catégorie"
        isMultiline
        fullWidth
        labelPlacement="outside"
        classNames={{
          trigger: "min-h-unit-12 py-2",
        }}
        renderValue={(items) => {
          return (
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <Chip key={item.key}>{item.textValue}</Chip>
              ))}
            </div>
          );
        }}
      >
        {(group) => (
          <SelectItem
            key={group.textValue as string}
            textValue={group.textValue}
          >
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <span className="text-small">{group.textValue}</span>
              </div>
            </div>
          </SelectItem>
        )}
      </Select>
    </div>
  );
}
