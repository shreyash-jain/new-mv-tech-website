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
      viewBox={"0 0 28 28"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M25.375 13.125V14A11.375 11.375 0 0113.96 25.375c-5.907-.02-10.72-4.6-11.28-10.367a.437.437 0 01.609-.437 3.93 3.93 0 004.586-1.163 3.928 3.928 0 005.9.255 4.415 4.415 0 001.407 1.422 5.244 5.244 0 00-2.057 4.165.876.876 0 00.948.875.898.898 0 00.802-.903 3.5 3.5 0 013.5-3.472.873.873 0 00.875-.933.895.895 0 00-.902-.817H17.5a2.625 2.625 0 01-2.625-2.625v-1.75h7a3.5 3.5 0 013.5 3.5zm-20.483 0C6.078 13.081 7 12.072 7 10.885V8.369c0-1.19-.922-2.2-2.108-2.244a2.188 2.188 0 00-2.267 2.188v2.624a2.188 2.188 0 002.267 2.188zm6.125 0c1.186-.043 2.108-1.052 2.108-2.239v-5.14c0-1.187-.922-2.197-2.108-2.24A2.188 2.188 0 008.75 5.689v5.25a2.188 2.188 0 002.267 2.187zm8.233-7.438A2.187 2.187 0 0016.983 3.5c-1.186.044-2.108 1.053-2.108 2.24v2.135h3.938a.438.438 0 00.437-.438v-1.75z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Frame5Icon;
/* prettier-ignore-end */
