// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type OnlineGamblingSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function OnlineGamblingSvgrepoComSvgIcon(
  props: OnlineGamblingSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 -7.5 46 46"}
      version={"1.1"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M43.064 26C44.685 26 46 27.12 46 28.5S44.685 31 43.064 31H2.936C1.315 31 0 29.88 0 28.5S1.315 26 2.936 26h40.128zM39.149 0c2.162 0 3.915 1.722 3.915 3.846v19.23c0 1.063-.877 1.924-1.958 1.924H4.894c-1.081 0-1.958-.861-1.958-1.923V3.847C2.936 1.721 4.69 0 6.851 0H39.15zM23.032 5a8.116 8.116 0 00-3.005.573c-.965.473-.45.212-.872.434-.434.228-.114.05-.777.455-6.368 4.213-3.124 14.69 4.655 14.536 10.623-.188 10.622-15.811 0-15.998zm-2.505 11.551a4.38 4.38 0 001.62.693v1.941a6.32 6.32 0 01-3.002-1.266l1.382-1.368zm5.01 0l1.383 1.368a6.32 6.32 0 01-3.003 1.266v-1.94a4.381 4.381 0 001.62-.694zm3.768-2.841a6.175 6.175 0 01-1.157 2.947l-1.393-1.378c.296-.47.502-1.001.597-1.57h1.953zm-10.593 0c.095.568.302 1.098.598 1.569l-1.393 1.378a6.175 6.175 0 01-1.158-2.947h1.953zm4.32-3.293c3.43.06 3.43 5.104 0 5.164-3.43-.06-3.429-5.104 0-5.164zM18.06 9.153l1.383 1.368a4.284 4.284 0 00-.662 1.437h-1.975a6.19 6.19 0 011.254-2.805zm9.944 0a6.19 6.19 0 011.254 2.805h-1.974a4.292 4.292 0 00-.662-1.437l1.382-1.368zm-5.857-2.34v1.941c-.51.105-.99.298-1.419.562l-1.392-1.378a6.318 6.318 0 012.811-1.125zm1.77 0a6.317 6.317 0 012.812 1.125l-1.393 1.378a4.378 4.378 0 00-1.419-.562v-1.94z"
        }
        fill={"#fff"}
        fillRule={"nonzero"}
      ></path>
    </svg>
  );
}

export default OnlineGamblingSvgrepoComSvgIcon;
/* prettier-ignore-end */
