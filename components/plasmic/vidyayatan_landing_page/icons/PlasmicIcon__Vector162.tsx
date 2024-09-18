// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector162IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector162Icon(props: Vector162IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 44 44"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.585 0c2.268 10.847 10.739 19.336 21.586 21.585-10.847 2.268-19.336 10.739-21.586 21.586C19.318 32.324 10.847 23.835 0 21.585 10.847 19.318 19.336 10.847 21.585 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector162Icon;
/* prettier-ignore-end */
