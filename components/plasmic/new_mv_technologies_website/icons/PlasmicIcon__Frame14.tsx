// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Frame14IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Frame14Icon(props: Frame14IconProps) {
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
          "M14.01 6.276a3.938 3.938 0 016.034-3.043.438.438 0 01-.061.766 5.694 5.694 0 00-3.345 5.57.437.437 0 01-.656.411 3.937 3.937 0 01-1.972-3.704zm12.24 11.29a2.675 2.675 0 01-1.488 2.407l-.048.022-4.247 1.809a.763.763 0 01-.13.044l-7 1.75a.868.868 0 01-.212.027H1.75A1.75 1.75 0 010 21.875V17.5a1.75 1.75 0 011.75-1.75h3.138l2.474-2.475a3.481 3.481 0 012.475-1.025h5.476a3.06 3.06 0 012.98 3.768l4.576-1.052a2.692 2.692 0 013.381 2.6zm-1.75 0a.94.94 0 00-1.189-.907l-.034.009-7.328 1.685a.909.909 0 01-.196.022H12.25a.875.875 0 110-1.75h3.063a1.313 1.313 0 000-2.625H9.837a1.735 1.735 0 00-1.237.513l-2.475 2.474v4.888h6.89l6.829-1.707L24 18.398a.936.936 0 00.5-.831zm-6.125-8.378a3.938 3.938 0 107.875 0 3.938 3.938 0 00-7.875 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame14Icon;
/* prettier-ignore-end */
