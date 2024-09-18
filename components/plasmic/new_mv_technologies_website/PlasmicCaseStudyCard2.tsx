// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qg9BUJrNtisePZMs8FM4BQ
// Component: AFklclmNZQ8D

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

import Tab from "../../Tab"; // plasmic-import: jf_z6wjG7bBo/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_vidyayatan_landing_page_css from "../vidyayatan_landing_page/plasmic.module.css"; // plasmic-import: aqUnUFeSAtbFb77THsmBtm/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_apple_css from "../apple/plasmic.module.css"; // plasmic-import: 3eY1qD8fYUzK6iRzHmP8VZ/projectcss
import plasmic_vercel_workflow_css from "../vercel_workflow/plasmic.module.css"; // plasmic-import: 9geyujr9Gmmnu34Qh9ic8E/projectcss
import plasmic_saa_s_website_css from "../saa_s_website/plasmic.module.css"; // plasmic-import: ybfbkvuYhwx2f8pSa8cKG/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qg9BUJrNtisePZMs8FM4BQ/projectcss
import sty from "./PlasmicCaseStudyCard2.module.css"; // plasmic-import: AFklclmNZQ8D/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: tSFoGfIVWAwT/icon
import Icon38Icon from "./icons/PlasmicIcon__Icon38"; // plasmic-import: FoPRmBUdi-FM/icon

createPlasmicElementProxy;

export type PlasmicCaseStudyCard2__VariantMembers = {};
export type PlasmicCaseStudyCard2__VariantsArgs = {};
type VariantPropType = keyof PlasmicCaseStudyCard2__VariantsArgs;
export const PlasmicCaseStudyCard2__VariantProps = new Array<VariantPropType>();

export type PlasmicCaseStudyCard2__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCaseStudyCard2__ArgsType;
export const PlasmicCaseStudyCard2__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicCaseStudyCard2__OverridesType = {
  root?: Flex__<"div">;
  tab?: Flex__<typeof Tab>;
};

export interface DefaultCaseStudyCard2Props {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCaseStudyCard2__RenderFunc(props: {
  variants: PlasmicCaseStudyCard2__VariantsArgs;
  args: PlasmicCaseStudyCard2__ArgsType;
  overrides: PlasmicCaseStudyCard2__OverridesType;
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

  const currentUser = useCurrentUser?.() || {};

  return (
    <Stack__
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_vidyayatan_landing_page_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        plasmic_apple_css.plasmic_tokens,
        plasmic_vercel_workflow_css.plasmic_tokens,
        plasmic_saa_s_website_css.plasmic_tokens,
        sty.root
      )}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__etrV4)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/new_mv_technologies_website/images/labourLinkLogo1Png2.png",
              fullWidth: 425,
              fullHeight: 80,
              aspectRatio: undefined
            }}
          />
        ),

        value: args.slot
      })}
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__taOvV)}
      >
        <div className={classNames(projectcss.all, sty.freeBox__h5MDb)}>
          {renderPlasmicSlot({
            defaultContents:
              "Vidyayatan Technologies' Labor Link system simplifies managing farm laborers, HR, security, and finance. It offers legal support for compliance and efficiency, automating processes to boost productivity and ensure smooth operations.",
            value: args.children,
            className: classNames(sty.slotTargetChildren)
          })}
        </div>
        <Tab
          data-plasmic-name={"tab"}
          data-plasmic-override={overrides.tab}
          className={classNames("__wab_instance", sty.tab)}
        >
          {"Read more..."}
        </Tab>
      </Stack__>
    </Stack__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "tab"],
  tab: ["tab"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  tab: typeof Tab;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCaseStudyCard2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCaseStudyCard2__VariantsArgs;
    args?: PlasmicCaseStudyCard2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCaseStudyCard2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicCaseStudyCard2__ArgsType,
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
          internalArgPropNames: PlasmicCaseStudyCard2__ArgProps,
          internalVariantPropNames: PlasmicCaseStudyCard2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCaseStudyCard2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCaseStudyCard2";
  } else {
    func.displayName = `PlasmicCaseStudyCard2.${nodeName}`;
  }
  return func;
}

export const PlasmicCaseStudyCard2 = Object.assign(
  // Top-level PlasmicCaseStudyCard2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    tab: makeNodeComponent("tab"),

    // Metadata about props expected for PlasmicCaseStudyCard2
    internalVariantProps: PlasmicCaseStudyCard2__VariantProps,
    internalArgProps: PlasmicCaseStudyCard2__ArgProps
  }
);

export default PlasmicCaseStudyCard2;
/* prettier-ignore-end */
