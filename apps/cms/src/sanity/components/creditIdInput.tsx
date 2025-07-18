/* eslint-disable @typescript-eslint/no-unused-vars */

import { TextInput } from "@sanity/ui";
import { forwardRef, useEffect, useMemo } from "react";
import { PatchEvent, set, StringInputProps, unset, useFormValue } from "sanity";

export function generateId(input: string) {
  const cleanedInput = input.trim();

  const match = cleanedInput.match(/^(MA|CS|HS|EG|PH|DS|EC)-(\d+)$/i);
  if (match && match[1] && match[2]) {
    const prefix = match[1].toLowerCase();
    const number = match[2];
    return `${prefix}${number}`;
  }

  return "";
}

const CreditIdInput = forwardRef<HTMLInputElement, StringInputProps>(
  (props, ref) => {
    const facultyName =
      (useFormValue(["content", "head", "name"]) as string) ?? "";

    const idValue = useMemo(
      () => generateId(facultyName) || "default-id",
      [facultyName]
    );

    const {
      schemaType,
      elementProps,
      changed,
      focused,
      renderDefault,
      ...filteredProps
    } = props;

    const { value, onChange } = props;

    useEffect(() => {
      if (onChange) {
        if (idValue) {
          onChange(PatchEvent.from(set(idValue)));
        } else {
          onChange(PatchEvent.from(unset()));
        }
      }
    }, [idValue, onChange]);

    return <TextInput ref={ref} readOnly value={idValue || "Generating..."} />;
  }
);

CreditIdInput.displayName = "CreditIdInput";

export default CreditIdInput;
