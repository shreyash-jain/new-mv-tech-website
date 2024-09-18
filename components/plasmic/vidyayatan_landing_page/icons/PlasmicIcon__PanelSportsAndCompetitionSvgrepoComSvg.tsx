// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PanelSportsAndCompetitionSvgrepoComSvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function PanelSportsAndCompetitionSvgrepoComSvgIcon(
  props: PanelSportsAndCompetitionSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 512 512"}
      xmlSpace={"preserve"}
      stroke={"currentColor"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M465.519 36.196L415.432 2.805A16.693 16.693 0 00406.171 0H55.563c-9.22 0-16.696 7.475-16.696 16.696v66.783c0 9.22 7.475 16.696 16.696 16.696h150.261v44.522h100.174v-44.522h100.173c3.297 0 6.519-.976 9.262-2.805l50.087-33.391c9.911-6.616 9.895-21.179-.001-27.783zm29.785 442.413H471.36c-7.756-38.058-41.48-66.783-81.795-66.783a82.63 82.63 0 00-26.109 4.228c-12.663-29.837-37.207-53.218-68.532-64.392-25.021-8.783-52.75-8.804-77.924.022-31.261 11.153-55.794 34.543-68.457 64.37a82.592 82.592 0 00-26.109-4.228c-40.316 0-74.04 28.724-81.795 66.783H16.696C7.479 478.609 0 486.087 0 495.304S7.479 512 16.696 512h478.609c9.217 0 16.696-7.479 16.696-16.696-.001-9.217-7.48-16.695-16.697-16.695zm-39.045-300.522H105.651c-3.297 0-6.519.976-9.262 2.805l-50.087 33.391c-9.912 6.615-9.895 21.178 0 27.783l50.088 33.392a16.696 16.696 0 009.259 2.804h100.174V320.2a150.896 150.896 0 0150.108-8.516c17.131 0 33.934 2.848 49.957 8.467.037.013.072.03.109.043V278.26h150.261c9.22 0 16.696-7.475 16.696-16.696v-66.783c0-9.219-7.475-16.694-16.695-16.694z"
        }
      ></path>
    </svg>
  );
}

export default PanelSportsAndCompetitionSvgrepoComSvgIcon;
/* prettier-ignore-end */
