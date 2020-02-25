//Custom hooks for handling input field
import { useState } from "react";

export const useInputFields = initialState => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    event => {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
};
