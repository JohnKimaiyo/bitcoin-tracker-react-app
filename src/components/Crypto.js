import React, { useState, useEffect } from "react";

export default function Crypto(props) {
  const [value, setValue] = useState(props.asset);

  useEffect(() => {
    document.title = value;
  }, []);
  console.log(props);
  console.log(props.asset);
  return (
    <div>
      <h1>{value}</h1>

      <imput
        type="text"
        value={value}
        onCHange={(e) => setValue(e.target.value)}
      ></imput>
    </div>
  );
}
