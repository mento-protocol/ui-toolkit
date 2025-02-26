import { ChangeEvent, FocusEvent, LegacyRef } from "react";

export default interface BaseInputProps {
  id: string;
  form: FormProps;
  label?: string;
  placeholder?: string;
  error?: string;
  value?: string | number | readonly string[] | undefined;
  disabled?: boolean;
}

interface FormProps {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (event: FocusEvent<HTMLInputElement, Element>) => void;
  name: string;
  ref: LegacyRef<HTMLInputElement> | undefined;
}
