import { Control} from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "../ui/input";



import { RegisterFieldsValue } from "@/schemas";



interface FormFieldProps {
    control: Control<RegisterFieldsValue>;
    name: keyof RegisterFieldsValue;
    label: string;
    placeholder: string;
    type?: string;
  }

const CustomFormField = ({ control, name, label, placeholder, type = "text" } : FormFieldProps) => (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} placeholder={placeholder} type={type} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  export default CustomFormField