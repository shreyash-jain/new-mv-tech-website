// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group48IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group48Icon(props: Group48IconProps) {
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
          "M38.17 6.357a1.443 1.443 0 01-1.44-2.49L41.17.5a2.167 2.167 0 013.258.582 2.161 2.161 0 01-1.122 3.114l-5.136 2.16zM7.99 23.78c.612-.42.81-1.253.426-1.907a1.445 1.445 0 00-1.866-.582l-5.136 2.16a2.161 2.161 0 00-1.122 3.114 2.161 2.161 0 003.258.582l4.44-3.366z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group48Icon;
/* prettier-ignore-end */
