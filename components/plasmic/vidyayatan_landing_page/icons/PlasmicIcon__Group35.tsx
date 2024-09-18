// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Group35IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Group35Icon(props: Group35IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 52 27"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M43.683.912c-1.746.61-9.411 1.99-10.474 5.459-1.071 3.493.475 7.209 2.878 9.945l.045.004c.924.407 2.368.875 4.02.608 1.884-.303 2.236-1.269 4.175-1.899 3.275-1.063 5.533.73 6.046-.377.35-.76-.92-1.86-2.342-2.563-1.46-.72-2.71-.57-2.721-.837-.013-.293 1.277-.28 2.884-.413.745-.061 2.892 1.03 3.524.063.506-.772-1.438-2.466-3.664-2.825-1.574-.254-2.9.55-2.998.277-.074-.205.728-.665 1.537-.858 1.334-.317 3.542.778 4.107-.124.555-.884-1.169-2.333-3.194-2.794-1.707-.388-3.143.581-3.267.24-.088-.238.467-.805 1.925-1.596 1.217-.66 4.006-1.163 3.51-2.536-.416-1.154-3.358-.696-5.993.227l.002-.001z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M6.148 10.32C2.31 11.715-.244 15.444.018 19.503c.173 2.662 1.56 5.37 5.772 6.903 10.257 3.734 32.5-11.426 32.5-11.426l2.26-13.187C27.49 4.532 16.714 6.48 6.148 10.32z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Group35Icon;
/* prettier-ignore-end */
