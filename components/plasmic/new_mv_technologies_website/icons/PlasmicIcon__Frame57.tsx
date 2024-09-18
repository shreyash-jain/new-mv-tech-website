// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame57IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame57Icon(props: Frame57IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22 21.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM11.5 12a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM28 6v20a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h20a2 2 0 012 2zM8 10.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0zm16 11a3.5 3.5 0 10-7 0 3.5 3.5 0 007 0zm-.293-13.207a1 1 0 00-1.415 0l-14 14a1 1 0 101.415 1.415l14-14a1 1 0 000-1.415z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame57Icon;
/* prettier-ignore-end */
