import { useState } from "react";
import { Toast } from "antd-mobile";
export const Staricons = () => {
  const [Color, setColor] = useState(false);
  const ChangeColor = (ev) => {
    setColor(ev);
   
  };
  return (
    <svg onClick={()=>  Toast.show({ content: "Not add" })}
      onMouseEnter={() => ChangeColor(true)}
      onMouseLeave={() => ChangeColor(false)}
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 15.8308L16.665 19.25L15.1617 12.8058L20.1667 8.47001L13.5759 7.91084L11 1.83334L8.42421 7.91084L1.83337 8.47001L6.83837 12.8058L5.33504 19.25L11 15.8308Z"
        fill={Color ? "gold" : "#848E9C"}
      />
    </svg>
  );
};
