// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3eY1qD8fYUzK6iRzHmP8VZ
// Component: 48l1Tq_XMUeO

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 3eY1qD8fYUzK6iRzHmP8VZ/projectcss
import sty from "./PlasmicNavItemDetails.module.css"; // plasmic-import: 48l1Tq_XMUeO/css

createPlasmicElementProxy;

export type PlasmicNavItemDetails__VariantMembers = {};
export type PlasmicNavItemDetails__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavItemDetails__VariantsArgs;
export const PlasmicNavItemDetails__VariantProps = new Array<VariantPropType>();

export type PlasmicNavItemDetails__ArgsType = {};
type ArgPropType = keyof PlasmicNavItemDetails__ArgsType;
export const PlasmicNavItemDetails__ArgProps = new Array<ArgPropType>();

export type PlasmicNavItemDetails__OverridesType = {
  root?: Flex__<"div">;
};

export interface DefaultNavItemDetailsProps {
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNavItemDetails__RenderFunc(props: {
  variants: PlasmicNavItemDetails__VariantsArgs;
  args: PlasmicNavItemDetails__ArgsType;
  overrides: PlasmicNavItemDetails__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___3752X
        )}
      >
        {"Enter some text"}
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__zln5M
        )}
      >
        {"Enter some text"}
      </div>
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text___8Kgx9
        )}
      >
        {"Enter some text"}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavItemDetails__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavItemDetails__VariantsArgs;
    args?: PlasmicNavItemDetails__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavItemDetails__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavItemDetails__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicNavItemDetails__ArgProps,
          internalVariantPropNames: PlasmicNavItemDetails__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavItemDetails__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavItemDetails";
  } else {
    func.displayName = `PlasmicNavItemDetails.${nodeName}`;
  }
  return func;
}

export const PlasmicNavItemDetails = Object.assign(
  // Top-level PlasmicNavItemDetails renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicNavItemDetails
    internalVariantProps: PlasmicNavItemDetails__VariantProps,
    internalArgProps: PlasmicNavItemDetails__ArgProps
  }
);

export default PlasmicNavItemDetails;
/* prettier-ignore-end */
