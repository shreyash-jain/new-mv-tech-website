// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector12IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector12Icon(props: Vector12IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 73 73"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M48.97 70.785c-9.156 3.33-19.063 2.896-27.894-1.224-8.83-4.12-15.529-11.433-18.86-20.59-3.33-9.157-2.896-19.064 1.225-27.895 4.12-8.83 11.433-15.529 20.59-18.86 9.157-3.33 19.064-2.896 27.895 1.225 8.83 4.12 15.527 11.433 18.859 20.59 3.33 9.157 2.896 19.064-1.224 27.895-4.12 8.83-11.433 15.528-20.59 18.859zM27.107 10.67C12.863 15.85 5.49 31.652 10.67 45.896c5.18 14.243 20.982 21.616 35.226 16.435 14.243-5.18 21.616-20.982 16.435-35.225C57.151 12.863 41.35 5.49 27.106 10.67z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector12Icon;
/* prettier-ignore-end */
