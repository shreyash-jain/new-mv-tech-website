// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame5IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame5Icon(props: Frame5IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 18 18"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.531 2.25c-.777 0-1.406.63-1.406 1.406v.563c0 .777.63 1.406 1.406 1.406H15.47c.776 0 1.406-.63 1.406-1.406v-.563c0-.777-.63-1.406-1.406-1.406H2.53z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M2.315 6.75l.405 6.882a2.25 2.25 0 002.245 2.118h8.068a2.25 2.25 0 002.246-2.118l.406-6.882H2.315zm4.623 2.813A.563.563 0 017.5 9h3a.563.563 0 110 1.125h-3a.563.563 0 01-.562-.563z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame5Icon;
/* prettier-ignore-end */
