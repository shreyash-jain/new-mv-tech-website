// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame6IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame6Icon(props: Frame6IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.531 3.375c-.777 0-1.406.63-1.406 1.406v5.344h9V4.781c0-.777-.63-1.406-1.406-1.406H2.53zm7.594 7.875h-9v1.969c0 .776.63 1.406 1.406 1.406h.281a2.25 2.25 0 014.5 0h2.25a.563.563 0 00.563-.563V11.25z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.188 14.625a1.125 1.125 0 10-2.25 0 1.125 1.125 0 002.25 0zm5.625-9.563a.562.562 0 00-.563.563v8.438c0 .065.011.127.031.185a2.25 2.25 0 014.469.349 1.36 1.36 0 001.098-1.413 13.994 13.994 0 00-2.799-7.578 1.377 1.377 0 00-1.102-.543h-1.134z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M14.625 14.625a1.125 1.125 0 10-2.25 0 1.125 1.125 0 002.25 0z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame6Icon;
/* prettier-ignore-end */
