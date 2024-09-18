// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group46IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group46Icon(props: Group46IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 5 51"}
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
          "M3.606 8.058a1.445 1.445 0 01-2.88 0L.03 2.526A2.169 2.169 0 012.166 0a2.169 2.169 0 012.136 2.526l-.696 5.532zm0 34.848a1.445 1.445 0 00-2.88 0L.03 48.438a2.169 2.169 0 002.136 2.526 2.169 2.169 0 002.136-2.526l-.696-5.532z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group46Icon;
/* prettier-ignore-end */
