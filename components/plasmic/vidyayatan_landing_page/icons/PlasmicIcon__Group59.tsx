// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group59IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group59Icon(props: Group59IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 19.198S11.164 6.934 20.83 1.192M2.92 8.89s.636 6.324.762 7.26l9.552 1.11"
        }
        stroke={"currentColor"}
        strokeWidth={".852"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>

      <path
        d={
          "M7.33 3.976c.192 1.872.678 6.684.798 7.536l9.042 1.05M12.196 1.738c.222 2.148.498 4.824.582 5.436l6.51.756M16.648 1c.138 1.302.258 2.418.312 2.79l3.42.396"
        }
        stroke={"currentColor"}
        strokeWidth={".852"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group59Icon;
/* prettier-ignore-end */
