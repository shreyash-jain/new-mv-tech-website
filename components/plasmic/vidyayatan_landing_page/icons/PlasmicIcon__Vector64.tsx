// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector64IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector64Icon(props: Vector64IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 42 28"}
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
          "M6.108 22.332v2.46c0 1.182-.918 2.508-1.68 2.508v-2.688s-.324-1.98-2.37-1.98A21.088 21.088 0 010 19.104h.174v-3.228C.174 7.146 7.32 0 16.05 0h8.982c8.73 0 15.876 7.146 15.876 15.876v3.228h.39a53.026 53.026 0 01-2.598 3.528c-2.046 0-2.37 1.98-2.37 1.98V27.3c-.762 0-1.68-1.32-1.68-2.508v-2.46s-1.782-3.384-1.782-6.936h-4.26c-.414 0-.81-.528-.9-1.05-.09-.522-.366-3.966-.456-4.782-.09-.822-.318-1.23-.456-1.014-.138.222-.228 3.066-.456 4.896-.222 1.806-1.248 1.95-1.278 1.95H7.17s-.144 4.332-1.062 6.936z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector64Icon;
/* prettier-ignore-end */
