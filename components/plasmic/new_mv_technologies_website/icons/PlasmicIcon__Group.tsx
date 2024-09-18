// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GroupIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GroupIcon(props: GroupIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 25"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.487 12.122c.058-1.17 1.148-2.514.716-3.752-.395-1.285-2.033-1.722-2.786-2.615-.225-.31-.353-.783-.486-1.294-.434-2.047-1.437-2.798-3.538-2.58-1.114.118-1.67-.047-2.501-.8-1.572-1.437-2.901-1.446-4.48 0-.83.755-1.388.916-2.5.8-2.092-.214-3.105.521-3.54 2.58-.134.51-.26.983-.485 1.294C2.135 6.652.497 7.074.101 8.37c-.43 1.238.657 2.582.716 3.752C.759 13.29-.331 14.635.1 15.873c.395 1.285 2.033 1.723 2.786 2.616.225.309.353.783.486 1.293.43 2.041 1.44 2.807 3.538 2.58 1.114-.112 1.67.044 2.501.8 1.572 1.437 2.901 1.446 4.48 0 .83-.755 1.388-.915 2.5-.8 2.087.222 3.109-.528 3.54-2.58.134-.51.26-.983.485-1.293.752-.898 2.39-1.32 2.786-2.616.43-1.237-.657-2.582-.716-3.751zm-1.73 0c0 5.02-4.085 9.104-9.104 9.104-12.078-.5-12.075-17.709 0-18.209 5.02 0 9.105 4.085 9.105 9.105z"
        }
        fill={"currentColor"}
      ></path>

      <path
        d={
          "M11.653 4.23c-4.352 0-7.89 3.54-7.89 7.892.431 10.468 15.35 10.465 15.78 0 0-4.353-3.539-7.891-7.891-7.891h.001zm4.85 5.234l-6.178 6.178a.609.609 0 01-.844.013l-2.665-2.483c-.573-.55.246-1.428.832-.887l2.234 2.082 5.766-5.766c.562-.558 1.414.298.855.862z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default GroupIcon;
/* prettier-ignore-end */
