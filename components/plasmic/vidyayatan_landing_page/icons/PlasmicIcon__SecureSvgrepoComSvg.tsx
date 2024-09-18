// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SecureSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function SecureSvgrepoComSvgIcon(props: SecureSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
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
          "M12.447 1.106a1 1 0 00-.894 0l-8 4A1 1 0 003 6v6c0 2.662.86 4.891 2.403 6.716 1.526 1.806 3.682 3.172 6.218 4.21a1 1 0 00.758 0c2.536-1.038 4.692-2.404 6.218-4.21C20.14 16.891 21 14.662 21 12V6a1 1 0 00-.553-.894l-8-4zM5 12V6.618l7-3.5 7 3.5V12c0 2.193-.695 3.963-1.93 5.425-1.184 1.4-2.898 2.555-5.07 3.49-2.172-.935-3.886-2.09-5.07-3.49C5.695 15.963 5 14.193 5 12zm11.757-2.347a1 1 0 00-1.514-1.306l-4.48 5.193L8.7 11.517a1 1 0 00-1.4 1.428l2.823 2.769a1 1 0 001.458-.06l5.176-6z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default SecureSvgrepoComSvgIcon;
/* prettier-ignore-end */
