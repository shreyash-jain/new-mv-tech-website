// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector58IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector58Icon(props: Vector58IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 19"}
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
          "M15.846 18.88a8201.03 8201.03 0 00-3.558-11.327c-.582-1.848-1.254-3.468-2.118-4.722C9.216 1.445 8.034.509 6.51.185 5.31-.067 3.948-.007 2.652.053c-.468.018-.93.042-1.458.042C.534.095 0 .629 0 1.295c0 .666.534 1.2 1.194 1.2.42 0 .984-.024 1.56-.054 1.146-.048 2.352-.102 3.264.09.864.18 1.572.774 2.184 1.662.708 1.026 1.284 2.43 1.8 4.074a7208.67 7208.67 0 013.336 10.614h2.508z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector58Icon;
/* prettier-ignore-end */
