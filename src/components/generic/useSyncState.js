import React from "react";

export default function useSyncState(initialVal) {
  const [value, setValue] = React.useState(initialVal);
  const setter = (val) => 
    new Promise((resolve) => {
      setValue(val);
      resolve(val);
    });
    return [value, setter];
  
}
