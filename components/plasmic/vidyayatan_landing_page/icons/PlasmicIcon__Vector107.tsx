// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector107IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector107Icon(props: Vector107IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 41"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M20.976 2.31c.282-.24.846-.649 1.752-1.039 13.116-5.628 20.64 8.472 19.002 21.822-1.5 12.186-9.096 20.43-20.754 16.302C9.318 43.523 1.716 35.28.222 23.093-1.416 9.743 6.108-4.357 19.224 1.271c.912.39 1.47.798 1.752 1.038z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector107Icon;
/* prettier-ignore-end */
