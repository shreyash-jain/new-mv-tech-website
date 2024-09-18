// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector62IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector62Icon(props: Vector62IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 82 38"}
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
          "M36.271 2.903c22.44-5.538 42.696-2.916 45.246 5.862 2.55 8.771-13.566 20.375-36.006 25.913-22.44 5.539-42.696 2.91-45.246-5.861-2.55-8.773 13.566-20.376 36.006-25.914z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector62Icon;
/* prettier-ignore-end */
