// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame8IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame8Icon(props: Frame8IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 16"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M14 3H2a.5.5 0 00-.5.5V12a1 1 0 001 1h11a1 1 0 001-1V3.5A.5.5 0 0014 3zM8 8.322L3.286 4h9.428L8 8.322zM6.17 8L2.5 11.363V4.637L6.17 8zm.74.678l.75.69a.5.5 0 00.676 0l.75-.69L12.71 12H3.286l3.623-3.322zM9.83 8l3.67-3.364v6.728L9.83 8z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame8Icon;
/* prettier-ignore-end */
