// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector37IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector37Icon(props: Vector37IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 3 2"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M.999 1.362a1.21 1.21 0 01-.93-.447.301.301 0 01.465-.381c.167.205.44.281.663.186.275-.118.324-.446.327-.46a.306.306 0 01.338-.258.3.3 0 01.259.336c-.01.07-.106.686-.687.935a1.1 1.1 0 01-.436.089z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector37Icon;
/* prettier-ignore-end */
