// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector110IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector110Icon(props: Vector110IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 21"}
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
          "M.93 16.788c-.324-.39-.636-.81-.93-1.254L21.252 0c-.366 6.048-2.142 12.048-4.908 15.918-3.828 5.352-11.106 6.06-15.408.87H.93z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector110Icon;
/* prettier-ignore-end */
