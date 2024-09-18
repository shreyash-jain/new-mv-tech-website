// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group50Icon(props: Group50IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 45 28"}
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
          "M36.729 23.78a1.437 1.437 0 01-.426-1.907 1.445 1.445 0 011.866-.582l5.136 2.16a2.161 2.161 0 011.122 3.114 2.161 2.161 0 01-3.258.582l-4.44-3.366zM6.549 6.357a1.443 1.443 0 001.44-2.49L3.549.5a2.167 2.167 0 00-3.258.582 2.167 2.167 0 001.122 3.114l5.136 2.16z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group50Icon;
/* prettier-ignore-end */
