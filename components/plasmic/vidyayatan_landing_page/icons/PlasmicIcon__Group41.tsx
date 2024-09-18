// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group41IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group41Icon(props: Group41IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 25 5"}
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
          "M22.104.384a2.298 2.298 0 10-.083 4.596 2.298 2.298 0 00.083-4.596zM2.34.006a2.295 2.295 0 10-.084 4.59A2.298 2.298 0 002.34 0v.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group41Icon;
/* prettier-ignore-end */
