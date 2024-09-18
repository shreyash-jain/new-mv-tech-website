// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group81IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group81Icon(props: Group81IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 51 29"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M11.252 8.132c1.251-2.975-.146-6.403-3.12-7.673C5.157-.793 1.729.604.459 3.579c-1.252 2.975.145 6.403 3.12 7.673 2.975 1.251 6.403-.146 7.673-3.12zm19.481 8.217c1.251-2.975-.145-6.403-3.12-7.673-2.975-1.252-6.403.145-7.673 3.12-1.252 2.975.145 6.403 3.12 7.672 2.975 1.252 6.403-.145 7.673-3.12zm19.499 8.198c1.252-2.974-.145-6.403-3.12-7.672-2.975-1.252-6.403.145-7.672 3.12-1.252 2.974.145 6.402 3.12 7.672 2.974 1.252 6.402-.145 7.672-3.12z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group81Icon;
/* prettier-ignore-end */
