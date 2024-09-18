// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector50IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector50Icon(props: Vector50IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 1.499S1.008.463 2.471.003c.312-.099.51 2.578.17 2.53C1.146 2.323 0 1.499 0 1.499z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector50Icon;
/* prettier-ignore-end */
