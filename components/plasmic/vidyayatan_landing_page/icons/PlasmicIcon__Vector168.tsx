// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector168IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector168Icon(props: Vector168IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 9 6"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M8.588.226s.09.054.109.109c.018.054 0 .09 0 .145l-2.25 5.187s-.054.091-.108.11c-.055.017-.091 0-.146 0l-.526-.218s-.09-.055-.108-.11v-.144L7.808.117s.054-.09.109-.109c.054-.018.09 0 .145 0l.526.218zM6.756.66s.09.055.109.109c.018.054 0 .09 0 .145L5.069 5.069s-.055.09-.109.109c-.054.018-.09 0-.145 0l-.526-.218s-.09-.054-.109-.109c-.018-.054 0-.09 0-.145L5.976.552s.054-.09.109-.109c.054-.018.09 0 .145 0l.526.218zm-1.832.435s.09.055.109.11v.144l-1.36 3.12s-.055.091-.11.11c-.054.017-.09 0-.145 0l-.526-.219s-.09-.054-.109-.108c-.018-.055 0-.091 0-.146L4.126.987s.054-.09.108-.108c.055-.018.091 0 .146 0l.526.217h.018zm-3.683.871s.091.055.11.109c.018.054 0 .09 0 .145L.896 3.255s-.055.09-.109.109c-.054.018-.09 0-.145 0l-.526-.218s-.09-.054-.109-.109c-.018-.054 0-.09 0-.145l.454-1.034s.054-.09.108-.109c.055-.018.091 0 .146 0l.526.218zm1.85-.435s.091.054.11.109c.018.054 0 .09 0 .145l-.907 2.068s-.055.09-.11.108c-.054.018-.09 0-.144 0l-.526-.217s-.091-.055-.11-.11c-.017-.054 0-.09 0-.144l.908-2.068s.054-.09.109-.109c.054-.018.09 0 .145 0l.526.218z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector168Icon;
/* prettier-ignore-end */
