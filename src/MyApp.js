import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function MyApp(props) {
  const [count, setCount] = useState(0);
  const [changedBy, setChangedBy] = useState("royal");
  const handleMyButton = () => {
    setCount(count + 1);
    setChangedBy("king");
  };
  const myStoreData = useSelector((state) => state);
  console.log(myStoreData, "=====");

  useEffect(() => {
    if (count > 1) {
      document.title = "my project";
    }
    console.log("this is updated");
  }, [count]);

  return (
    <div>
      <p>
        This IS useState...{props.mydata}..{count} ....{changedBy}{" "}
        {myStoreData && myStoreData.mydata}
      </p>
      <button onClick={handleMyButton}>PRESS</button>
    </div>
  );
}
export default MyApp;
