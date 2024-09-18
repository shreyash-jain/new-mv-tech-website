// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group28IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group28Icon(props: Group28IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 7 8"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M1.005 1.387a.3.3 0 01-.225-.1L.077.502A.3.3 0 11.525.1l.704.786a.3.3 0 01-.224.501zm1.781 1.995a.3.3 0 01-.224-.1l-.704-.786a.3.3 0 11.448-.402l.704.785a.3.3 0 01-.224.501v.002zm1.791 2.051a.3.3 0 01-.224-.1l-.703-.785a.3.3 0 11.448-.401l.703.785a.3.3 0 01-.224.501zM6.24 7.26a.3.3 0 01-.224-.1l-.704-.785a.3.3 0 11.448-.402l.704.786a.3.3 0 01-.224.501z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group28Icon;
/* prettier-ignore-end */
