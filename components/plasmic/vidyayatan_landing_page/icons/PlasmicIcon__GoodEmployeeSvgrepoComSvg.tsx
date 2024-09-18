// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GoodEmployeeSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GoodEmployeeSvgrepoComSvgIcon(
  props: GoodEmployeeSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M369.818 195.01c-24.471 42.493-65.783 75.375-113.802 75.375-48.025 0-89.369-32.882-113.835-75.357-49 23.252-83.014 73.06-83.014 130.945v128.986c0 27.407 22.216 49.619 49.584 49.619h294.49c27.469 0 49.59-22.212 49.59-49.619V325.973c.001-57.894-33.95-107.708-83.013-130.963zm-28.38 122.266L250.02 436.739a20.248 20.248 0 01-16.03 7.902c-4.69 0-9.284-1.646-12.899-4.692l-54.476-45.53c-8.536-7.144-9.675-19.851-2.508-28.394 7.103-8.521 19.84-9.668 28.375-2.526l38.314 32.036 78.65-102.751c6.776-8.829 19.417-10.507 28.244-3.747 8.832 6.76 10.529 19.41 3.748 28.239z"
        }
      ></path>

      <path
        d={
          "M256.017 237.022c57.504 0 104.091-67.962 104.091-125.457 0-57.521-46.587-104.144-104.091-104.144-57.537 0-104.129 46.623-104.129 104.144 0 57.496 46.591 125.457 104.129 125.457z"
        }
      ></path>
    </svg>
  );
}

export default GoodEmployeeSvgrepoComSvgIcon;
/* prettier-ignore-end */
