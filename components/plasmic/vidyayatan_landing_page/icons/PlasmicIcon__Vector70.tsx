// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector70IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector70Icon(props: Vector70IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 58 73"}
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
          "M36.27.036l20.472 5.388s-5.85 14.274-1.638 26.682c0 0 1.752 8.658.822 15.33-.558 3.96.168 15.348 1.092 25.194H0c.924-9.846 1.65-21.234 1.092-25.194-.936-6.672.822-15.33.822-15.33C6.126 19.704.276 5.424.276 5.424L20.748 0c0 2.028 3.48 3.672 7.764 3.672 4.284 0 7.71-1.626 7.764-3.636h-.006z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector70Icon;
/* prettier-ignore-end */
