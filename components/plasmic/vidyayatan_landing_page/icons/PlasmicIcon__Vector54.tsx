// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector54IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector54Icon(props: Vector54IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M4.622 1.438a.272.272 0 01-.057-.005L.244.597A.3.3 0 01.006.244.302.302 0 01.358.005L4.68.841a.302.302 0 01-.057.597z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector54Icon;
/* prettier-ignore-end */
