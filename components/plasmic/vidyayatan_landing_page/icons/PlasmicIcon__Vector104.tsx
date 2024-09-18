// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector104IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector104Icon(props: Vector104IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 11 15"}
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
          "M10.49 13s-3.228-2.898-3.162-6.096c.066-3.198 1.68-4.176 1.698-5.004.018-.828-1.62-2.214-3.924-1.836-2.298.378-.846 2.268-1.29 5.568-.444 3.3-1.29 6.144-3.54 7.86-2.25 1.71 10.218-.486 10.218-.486V13z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector104Icon;
/* prettier-ignore-end */
