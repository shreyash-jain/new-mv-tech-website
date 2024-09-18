// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group80IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group80Icon(props: Group80IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 65 19"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M50.711 11.168c.363-3.863 3.81-6.71 7.673-6.348 3.864.363 6.712 3.809 6.349 7.673-.363 3.863-3.81 6.711-7.673 6.348-3.864-.363-6.711-3.809-6.349-7.673zm-25.34-2.394c.363-3.863 3.81-6.711 7.673-6.349 3.864.363 6.711 3.81 6.349 7.673-.363 3.864-3.81 6.712-7.673 6.349-3.864-.363-6.711-3.81-6.349-7.673zM.031 6.38C.394 2.516 3.841-.332 7.704.03c3.864.363 6.711 3.81 6.349 7.673-.363 3.864-3.81 6.711-7.673 6.349C2.516 13.69-.332 10.242.03 6.38z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group80Icon;
/* prettier-ignore-end */
