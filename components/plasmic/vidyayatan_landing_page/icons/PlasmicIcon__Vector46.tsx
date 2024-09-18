// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector46IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector46Icon(props: Vector46IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.542 23.846a.3.3 0 01-.3-.3V6.797C1.65 6.883.023.436.008.371A.3.3 0 01.232.009a.3.3 0 01.362.224C.656.489 2.18 6.399 11.537 6.192l.307-.007v17.36a.3.3 0 01-.3.301h-.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector46Icon;
/* prettier-ignore-end */
