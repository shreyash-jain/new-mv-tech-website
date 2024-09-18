// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector44IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector44Icon(props: Vector44IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 38 29"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M37.537 20.942s-9.309 5.192-28.13 7.388c-20.858 2.433-.52-19.243-.52-19.243s15.08-5.894 22.7-8.89c6.526-2.565 5.95 20.745 5.95 20.745z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector44Icon;
/* prettier-ignore-end */
