// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TransferSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TransferSvgrepoComSvgIcon(
  props: TransferSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g data-name={"Layer 2"}>
        <path
          fill={"none"}
          d={"M0 0h48v48H0z"}
          data-name={"invisible box"}
        ></path>

        <path
          d={
            "M19 26a2 2 0 00-2 2v12H7V28a2 2 0 00-4 0v14a2 2 0 002 2h14a2 2 0 002-2V28a2 2 0 00-2-2zm24 0a2 2 0 00-2 2v12H31V28a2 2 0 00-4 0v14a2 2 0 002 2h14a2 2 0 002-2V28a2 2 0 00-2-2zm-9-10v1.2l-2.6-2.6a1.9 1.9 0 00-3 .2 2.1 2.1 0 00.2 2.7l6 5.9a1.9 1.9 0 002.8 0l6-5.9a2.1 2.1 0 00.2-2.7 1.9 1.9 0 00-3-.2L38 17.2V16a14 14 0 00-28 0v6a2 2 0 004 0v-6a10 10 0 0120 0z"
          }
          data-name={"icons Q2"}
        ></path>
      </g>
    </svg>
  );
}

export default TransferSvgrepoComSvgIcon;
/* prettier-ignore-end */
