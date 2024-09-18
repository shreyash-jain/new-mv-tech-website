// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DesignSvgrepoCom2SvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DesignSvgrepoCom2SvgIcon(props: DesignSvgrepoCom2SvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.1"}
      viewBox={"0 0 32 32"}
      xmlSpace={"preserve"}
      fill={"#000"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15 10h2v2h-2v-2zm-8.5 0a.5.5 0 100 1 .5.5 0 000-1zm15 19H20v-2h-8v2h-1.5a.5.5 0 000 1h11a.5.5 0 000-1zM32 7v16a3 3 0 01-3 3H3a3 3 0 01-3-3V7a3 3 0 013-3h26a3 3 0 013 3zm-5.034 3.174A1.495 1.495 0 0024.093 10H18V9h-4v1H7.908a1.496 1.496 0 00-2.873.174A1.501 1.501 0 006.5 12c.652 0 1.202-.419 1.408-1H14v.224c-4.388.897-7.745 4.658-7.986 9.246a.503.503 0 00.501.53.495.495 0 00.497-.467c.209-4.065 3.134-7.41 6.988-8.289V13h4v-.757c3.854.88 6.779 4.225 6.988 8.289a.496.496 0 00.497.468.503.503 0 00.501-.53c-.241-4.588-3.598-8.349-7.986-9.246V11h6.092c.207.581.756 1 1.408 1 .935 0 1.67-.855 1.466-1.826zM25.5 10a.5.5 0 100 1 .5.5 0 000-1z"
        }
        fill={"#fff"}
      ></path>
    </svg>
  );
}

export default DesignSvgrepoCom2SvgIcon;
/* prettier-ignore-end */
