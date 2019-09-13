import React, { FunctionComponent } from "react";

type IconProps = {
    color: string
};

const AirplaneIcon: FunctionComponent<IconProps> = (props) =>{
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 inline"
      viewBox="0 0 512.005 512.005"
      fill={props.color}
    >
      <path d="M16.539 425.626H496.306V476.128H16.539z" />
      <path
        d="M510.7 189.151c-5.429-20.201-26.135-32.195-46.335-26.766l-134.209 35.982L155.924 35.878l-48.734 13.13 104.539 181.175-125.497 33.584-49.618-39.013L0 234.603l45.957 79.667 19.317 33.457 40.528-10.858 134.209-35.983 109.715-29.417 134.209-35.983c20.199-5.429 32.194-26.134 26.765-46.335z"
        className="plane-take-off"
      />
    </svg>
  );
};

export default AirplaneIcon;