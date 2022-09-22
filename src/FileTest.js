import React, { useEffect, useState } from "react";

const FileTest = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    if (name) {
      const timeOut = setTimeout(() => {
        console.log(name);
      }, 2000);

      return () => {
        clearTimeout(timeOut);
      };
    }
  });

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)}>
        {" "}
      </input>
    </div>
  );
};

export default FileTest;
