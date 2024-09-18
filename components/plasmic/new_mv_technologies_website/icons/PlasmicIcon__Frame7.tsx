// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame7IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame7Icon(props: Frame7IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.75 4.375H5.25a1.75 1.75 0 00-1.75 1.75v6.125c0 5.766 2.791 9.26 5.133 11.177 2.522 2.063 5.031 2.763 5.14 2.792.151.041.31.041.46 0 .11-.03 2.615-.73 5.14-2.792 2.336-1.916 5.127-5.41 5.127-11.177V6.125a1.75 1.75 0 00-1.75-1.75zm-3.754 7.62l-6.125 6.124a.876.876 0 01-1.238 0l-2.625-2.625a.876.876 0 011.238-1.238l2.004 2.007 5.506-5.507a.875.875 0 011.238 1.238h.002z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame7Icon;
/* prettier-ignore-end */
