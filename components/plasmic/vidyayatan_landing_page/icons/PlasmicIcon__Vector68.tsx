// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector68IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector68Icon(props: Vector68IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 37 71"}
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
          "M7.972.006c4.212 1.872 5.268 3.042 11.352 15.912 6.084 12.87 10.53 24.108 10.53 24.108s3.102 1.344 3.684 2.808c.588 1.464.12 4.68.12 4.68s3.864 4.68 2.694 10.182c-1.17 5.502-6.03 11.934-7.488 12.696-1.464.762-5.382 0-5.382 0s-16.44-9.186-20.184-19.02C-.446 41.544-3.254 7.14 7.978 0l-.006.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector68Icon;
/* prettier-ignore-end */
