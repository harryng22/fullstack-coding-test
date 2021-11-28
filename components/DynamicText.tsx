import { Heading } from "@chakra-ui/layout";
import React, { forwardRef, Ref, useImperativeHandle, useState } from "react";
import { IDynamicText } from "../interfaces/IDynamicText";

const DynamicText = forwardRef((props, ref: Ref<IDynamicText>) => {
  const [value, setValue] = useState("Random Text");
  useImperativeHandle(ref, () => ({
    changeValue(newValue) {
      setValue(newValue);
    }
  }));

  return <Heading w="30rem" textAlign={'center'}>{value}</Heading>;
});

export default DynamicText;
