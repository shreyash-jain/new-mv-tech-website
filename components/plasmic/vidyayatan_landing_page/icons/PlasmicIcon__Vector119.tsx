// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector119IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector119Icon(props: Vector119IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 19 23"}
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
          "M9.33 0a9.306 9.306 0 00-6.6 2.736A9.304 9.304 0 000 9.336a9.305 9.305 0 004.206 7.794l.036.024c.6.39.996.804 1.254 1.188.396.594.468 1.104.48 1.32v.93c0 .468.198.9.51 1.212.312.312.738.504 1.212.504h3.282c.474 0 .9-.192 1.212-.504.312-.312.504-.744.504-1.212v-.912c.006-.204.072-.726.48-1.332.258-.384.654-.804 1.254-1.188l.024-.018a9.47 9.47 0 003.084-3.342l.012-.024a9.305 9.305 0 001.122-4.44 9.304 9.304 0 00-2.73-6.6A9.31 9.31 0 009.342 0H9.33z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector119Icon;
/* prettier-ignore-end */
