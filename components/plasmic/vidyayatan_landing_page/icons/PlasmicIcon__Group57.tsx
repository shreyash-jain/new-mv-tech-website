// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group57IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group57Icon(props: Group57IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 29 20"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1 11.02s1.65 1.548 2.67 6.528m9.39 1.824s-.516-4.89-2.808-9.756M15.148 1s2.616 4.146 4.326 10.656m8.952 3.906s-.21-7.632-2.49-12.15"
        }
        stroke={"currentColor"}
        strokeWidth={".852"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default Group57Icon;
/* prettier-ignore-end */
