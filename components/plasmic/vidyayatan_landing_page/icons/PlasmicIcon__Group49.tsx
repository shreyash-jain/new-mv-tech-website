// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group49IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group49Icon(props: Group49IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 51 5"}
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
          "M42.906 3.606a1.44 1.44 0 01-1.326-1.44c0-.762.582-1.38 1.326-1.44L48.438.03a2.169 2.169 0 012.526 2.136 2.169 2.169 0 01-2.526 2.136l-5.532-.696zm-34.848 0a1.44 1.44 0 001.326-1.44A1.44 1.44 0 008.058.726L2.526.03A2.169 2.169 0 000 2.166a2.169 2.169 0 002.526 2.136l5.532-.696z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group49Icon;
/* prettier-ignore-end */
