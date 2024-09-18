// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DataSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DataSvgrepoComSvgIcon(props: DataSvgrepoComSvgIconProps) {
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
          "M8.623 5.94c-.87.435-1.123.897-1.123 1.185 0 .288.253.75 1.123 1.185C9.45 8.723 10.641 9 12 9s2.551-.277 3.377-.69c.87-.435 1.123-.897 1.123-1.185 0-.288-.253-.75-1.123-1.185-.826-.413-2.018-.69-3.377-.69s-2.551.277-3.377.69zM16.5 9.398a5.36 5.36 0 01-.452.254c-1.075.537-2.507.848-4.048.848-1.54 0-2.973-.31-4.048-.848a5.37 5.37 0 01-.452-.254v.977c0 .34.278.83 1.136 1.28.822.431 2.01.72 3.364.72s2.542-.289 3.364-.72c.858-.45 1.136-.94 1.136-1.28v-.977zM18 7.125v3.25c0 .042-.001.084-.003.125H18v2.875c0 .042-.001.084-.003.125H18v2.875c0 1.178-.898 2.063-1.94 2.609-1.077.564-2.514.891-4.06.891-1.546 0-2.983-.327-4.06-.891C6.898 18.438 6 17.554 6 16.375V13.5h.003A2.298 2.298 0 016 13.375V10.5h.003A2.298 2.298 0 016 10.375v-3.25c0-1.162.922-2.012 1.952-2.527C9.027 4.061 10.46 3.75 12 3.75s2.973.31 4.048.848C17.078 5.113 18 5.963 18 7.125zM7.5 15.727v.648c0 .34.278.83 1.136 1.28.822.431 2.01.72 3.364.72s2.542-.289 3.364-.72c.858-.45 1.136-.94 1.136-1.28v-.648c-.142.092-.29.178-.44.257-1.077.564-2.514.891-4.06.891-1.546 0-2.983-.327-4.06-.891a5.322 5.322 0 01-.44-.257zm8.56-2.743c.15-.079.298-.165.44-.257v.648c0 .34-.278.83-1.136 1.28-.822.431-2.01.72-3.364.72s-2.542-.289-3.364-.72c-.858-.45-1.136-.94-1.136-1.28v-.648c.142.092.29.178.44.257 1.077.564 2.514.891 4.06.891 1.546 0 2.983-.327 4.06-.891z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default DataSvgrepoComSvgIcon;
/* prettier-ignore-end */
