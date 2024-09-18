// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame11IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame11Icon(props: Frame11IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M7.013 16.166a.438.438 0 01-.437.459H1.75a.875.875 0 01-.853-.675.914.914 0 01.177-.758 7.414 7.414 0 012.973-2.34 4.375 4.375 0 117.269-3.915.43.43 0 01-.248.457 7.008 7.008 0 00-4.055 6.772zm19.906-.975a7.411 7.411 0 00-2.966-2.338 4.375 4.375 0 10-7.269-3.916.43.43 0 00.248.457A7.008 7.008 0 0121 15.75c0 .14 0 .278-.013.416a.436.436 0 00.437.459h4.826a.875.875 0 00.853-.675.912.912 0 00-.178-.759h-.006zm-9.734 4.723a5.25 5.25 0 10-6.384 0 7.89 7.89 0 00-3.684 3.273.875.875 0 00.758 1.313h12.25a.876.876 0 00.758-1.313 7.892 7.892 0 00-3.69-3.273h-.008z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame11Icon;
/* prettier-ignore-end */
