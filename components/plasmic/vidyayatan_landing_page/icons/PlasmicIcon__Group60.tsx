// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group60IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group60Icon(props: Group60IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 33 31"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M32.26 29.686S16.234 10.354 1 1.288m28.236 12.15S28.234 23.41 28.03 24.88l-15.06 1.752"
        }
        stroke={"currentColor"}
        strokeWidth={".852"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M22.276 5.686c-.3 2.958-1.074 10.536-1.254 11.88L6.76 19.222m7.848-17.058c-.348 3.384-.786 7.602-.918 8.574L3.418 11.932M7.588 1a262.149 262.149 0 01-.486 4.404l-5.388.624"
        }
        stroke={"currentColor"}
        strokeWidth={".852"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group60Icon;
/* prettier-ignore-end */
