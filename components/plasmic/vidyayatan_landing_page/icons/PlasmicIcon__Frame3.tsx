// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame3IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame3Icon(props: Frame3IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
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
          "M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 100 1.5h16.5a.75.75 0 100-1.5h-.75V3.75a.75.75 0 100-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 100-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 110 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 100 1.5h1.5a.75.75 0 100-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 110 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 100 1.5H15A.75.75 0 1015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 110 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame3Icon;
/* prettier-ignore-end */
