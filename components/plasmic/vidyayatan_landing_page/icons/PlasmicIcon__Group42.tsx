// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group42IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group42Icon(props: Group42IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 23 2"}
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
          "M.86 1.688A.595.595 0 01.326.626C1.862-.166 3.914-.256 5.42.644a.595.595 0 01-.612 1.02C3.596.938 2.084 1.1.86 1.682v.006zm20.742.006c-1.224-.588-2.742-.75-3.948-.024a.595.595 0 01-.816-.204.6.6 0 01.204-.816c1.506-.9 3.558-.81 5.094-.024a.59.59 0 01.264.798.592.592 0 01-.798.264v.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group42Icon;
/* prettier-ignore-end */
