// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group51IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group51Icon(props: Group51IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 45"}
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
          "M21.292 38.164a1.443 1.443 0 012.49-1.44l3.366 4.44a2.167 2.167 0 01-.582 3.258 2.161 2.161 0 01-3.114-1.122l-2.16-5.136zM3.868 7.99c.42.612 1.254.81 1.908.426.654-.378.9-1.194.582-1.866l-2.16-5.136A2.161 2.161 0 001.084.292 2.161 2.161 0 00.502 3.55l3.366 4.44z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group51Icon;
/* prettier-ignore-end */
