// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group31IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group31Icon(props: Group31IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 12 5"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M3.927 4.972c-1.198 0-2.272-.452-3.196-1.347a.302.302 0 01.42-.433c.863.837 1.871 1.23 3.004 1.17C7.509 4.185 10.902.15 10.936.11a.3.3 0 01.424-.04.3.3 0 01.038.424C11.253.669 7.8 4.77 4.186 4.964a5.54 5.54 0 01-.26.007z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={"M.072 2.808a.873.873 0 111.604.692.873.873 0 01-1.604-.692z"}
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group31Icon;
/* prettier-ignore-end */
