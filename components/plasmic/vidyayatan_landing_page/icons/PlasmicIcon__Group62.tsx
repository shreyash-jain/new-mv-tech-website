// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group62IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group62Icon(props: Group62IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 10"}
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
          "M5.574 9.482c-.018-.336-.024-.66-.024-.972 0-.318.024-.624.054-.924.114-1.11.396-2.058.81-2.874A6.529 6.529 0 018.16 2.558a7.453 7.453 0 012.184-1.2A9.99 9.99 0 0113.02.83c.312-.018.624-.024.936-.018a9.8 9.8 0 01.942.06c.036 0 .066.024.084.048.024.024.03.06.03.096-.012.132-.336 2.748-1.638 5.094-1.326 2.376-3.654 4.482-7.704 3.486a.12.12 0 01-.072-.048.177.177 0 01-.03-.078l.006.012z"
        }
        fill={"currentColor"}
      ></path>

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M7.548 2.39a6.45 6.45 0 00-.696-.648 7.499 7.499 0 00-2.178-1.2A9.8 9.8 0 001.998.02a12.18 12.18 0 00-.936-.018C.744.008.432.026.114.062.078.062.048.086.03.11.006.134 0 .17 0 .206v.012c.018.12.336 2.736 1.644 5.088.744 1.338 1.818 2.592 3.33 3.252v-.246c0-.318.024-.624.054-.924.114-1.11.396-2.058.81-2.874a6.531 6.531 0 011.71-2.124z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group62Icon;
/* prettier-ignore-end */
