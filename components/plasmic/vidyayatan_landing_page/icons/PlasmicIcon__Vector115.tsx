// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector115IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector115Icon(props: Vector115IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 32 30"}
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
          "M31.358 28.756c.066-1.11.09-2.184.072-3.228a35.421 35.421 0 00-.18-3.06c-.378-3.678-1.314-6.84-2.688-9.534a21.68 21.68 0 00-5.808-7.152c-2.16-1.734-4.62-3.048-7.248-3.978C12.686.808 9.68.244 6.626.064a38.974 38.974 0 00-6.24.144.418.418 0 00-.288.156.415.415 0 00-.096.312v.03c.054.402 1.11 9.09 5.454 16.884C9.854 25.48 17.6 32.464 31.034 29.158a.442.442 0 00.234-.15.416.416 0 00.09-.252z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector115Icon;
/* prettier-ignore-end */
