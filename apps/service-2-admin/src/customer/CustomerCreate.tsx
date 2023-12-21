import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="First NAme" source="firstNAme" />
        <TextInput label="Last Name" source="lastName" />
      </SimpleForm>
    </Create>
  );
};
