// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qg9BUJrNtisePZMs8FM4BQ
// Component: BSnSueyvgk6P

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

import FaqAccordian from "../../FaqAccordian"; // plasmic-import: dZIER5xir4GH/component
import FaqAccordianMobile from "../../FaqAccordianMobile"; // plasmic-import: KwXEJ_Tan7Os/component

import { useScreenVariants as useScreenVariantsptc9VYm7Ur9B } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: PTC9vYM7UR9b/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_vidyayatan_landing_page_css from "../vidyayatan_landing_page/plasmic.module.css"; // plasmic-import: aqUnUFeSAtbFb77THsmBtm/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_apple_css from "../apple/plasmic.module.css"; // plasmic-import: 3eY1qD8fYUzK6iRzHmP8VZ/projectcss
import plasmic_vercel_workflow_css from "../vercel_workflow/plasmic.module.css"; // plasmic-import: 9geyujr9Gmmnu34Qh9ic8E/projectcss
import plasmic_saa_s_website_css from "../saa_s_website/plasmic.module.css"; // plasmic-import: ybfbkvuYhwx2f8pSa8cKG/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qg9BUJrNtisePZMs8FM4BQ/projectcss
import sty from "./PlasmicFaqSection.module.css"; // plasmic-import: BSnSueyvgk6P/css

import Frame17Icon from "./icons/PlasmicIcon__Frame17"; // plasmic-import: qCObakUSkcsr/icon
import Frame14Icon from "./icons/PlasmicIcon__Frame14"; // plasmic-import: xTAdjC1CrvhS/icon
import Frame15Icon from "./icons/PlasmicIcon__Frame15"; // plasmic-import: YQCNU9xil-Ab/icon
import Frame6Icon from "./icons/PlasmicIcon__Frame6"; // plasmic-import: vswdgIK_OGKH/icon
import Frame16Icon from "./icons/PlasmicIcon__Frame16"; // plasmic-import: lTq5ZUD2xa6J/icon
import Frame10Icon from "./icons/PlasmicIcon__Frame10"; // plasmic-import: ByXkQHEplxsY/icon
import Frame7Icon from "./icons/PlasmicIcon__Frame7"; // plasmic-import: JxNsv4LYJBNA/icon

createPlasmicElementProxy;

export type PlasmicFaqSection__VariantMembers = {
  companyTabOptions: "companyTabOptions";
};
export type PlasmicFaqSection__VariantsArgs = {
  companyTabOptions?: SingleBooleanChoiceArg<"companyTabOptions">;
};
type VariantPropType = keyof PlasmicFaqSection__VariantsArgs;
export const PlasmicFaqSection__VariantProps = new Array<VariantPropType>(
  "companyTabOptions"
);

export type PlasmicFaqSection__ArgsType = {};
type ArgPropType = keyof PlasmicFaqSection__ArgsType;
export const PlasmicFaqSection__ArgProps = new Array<ArgPropType>();

export type PlasmicFaqSection__OverridesType = {
  faq?: Flex__<"section">;
};

export interface DefaultFaqSectionProps {
  companyTabOptions?: SingleBooleanChoiceArg<"companyTabOptions">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFaqSection__RenderFunc(props: {
  variants: PlasmicFaqSection__VariantsArgs;
  args: PlasmicFaqSection__ArgsType;
  overrides: PlasmicFaqSection__OverridesType;
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

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "companyTabOptions",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          $props.companyTabOptions
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsptc9VYm7Ur9B()
  });

  return (
    <section
      data-plasmic-name={"faq"}
      data-plasmic-override={overrides.faq}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
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
        sty.faq
      )}
    >
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__bt3G)}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__uKg54
          )}
        >
          {"Frequently Asked Questions"}
        </div>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___6BIo
          )}
        >
          {
            "Find answers to your most common queries here. Have more question? Feel free to connect with us"
          }
        </div>
      </Stack__>
      <Stack__
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__stmr8)}
      >
        <FaqAccordian
          className={classNames("__wab_instance", sty.faqAccordian___1Kimy)}
          opened={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? undefined
              : undefined
          }
          slot={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__t3Wj
              )}
            >
              {
                "MV Technologies is committed to transforming industries with innovative solutions. With a diverse portfolio and expertise in ERP, SaaS, and custom software development, we empower businesses to excel. Our solutions are tailored to meet specific industry needs, ensuring your success in the digital era."
              }
            </div>
          }
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__aBbZl
            )}
          >
            {"Why should I choose MV Technologies as my tech partner? "}
          </div>
        </FaqAccordian>
        <FaqAccordianMobile
          className={classNames(
            "__wab_instance",
            sty.faqAccordianMobile__xlElN
          )}
          slot={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__bx3D6
              )}
            >
              {
                "MV Technologies is committed to transforming industries with innovative solutions. With a diverse portfolio and expertise in ERP, SaaS, and custom software development, we empower businesses to excel. Our solutions are tailored to meet specific industry needs, ensuring your success in the digital era."
              }
            </div>
          }
        >
          {"Why should I choose MV Technologies as my tech partner? "}
        </FaqAccordianMobile>
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : false) ? (
          <FaqAccordianMobile
            className={classNames(
              "__wab_instance",
              sty.faqAccordianMobile__t3Vt
            )}
            q12={
              <Frame14Icon
                className={classNames(projectcss.all, sty.svg__srD9K)}
                role={"img"}
              />
            }
            slot={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__yhpT8
                )}
              >
                {
                  "MV Technologies focuses on delivering high-impact solutions that streamline operations and enhance productivity. By leveraging the latest technologies and maintaining a client-centric approach, we ensure that your investment translates into measurable business growth and efficiency."
                }
              </div>
            }
          >
            {"How does MV Technologies ensure a return on investment (ROI)?"}
          </FaqAccordianMobile>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : false) ? (
          <FaqAccordianMobile
            className={classNames(
              "__wab_instance",
              sty.faqAccordianMobile__s1YoI
            )}
            q12={
              <Frame15Icon
                className={classNames(projectcss.all, sty.svg__ghOa3)}
                role={"img"}
              />
            }
            slot={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rZ2TC
                )}
              >
                {
                  "MV Technologies offers flexible engagement models to suit your business needs. Whether you require a dedicated team, project-based collaboration, or long-term technological partnership, we adapt to your preferred working style and timeline."
                }
              </div>
            }
          >
            {"How flexible are MV Technologies's engagement models?"}
          </FaqAccordianMobile>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : false) ? (
          <FaqAccordianMobile
            className={classNames(
              "__wab_instance",
              sty.faqAccordianMobile___1Vt1J
            )}
            q12={
              <Frame6Icon
                className={classNames(projectcss.all, sty.svg__qRYu4)}
                role={"img"}
              />
            }
            slot={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5DSfv
                )}
              >
                {
                  "Yes, MV Technologies is equipped to support your business as it grows. Our solutions are designed to scale alongside your operations, ensuring that you have the tools and support necessary to manage increasing demands and complexities."
                }
              </div>
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___6IDv
              )}
            >
              {"Can MV Technologies support my business's scalability needs?"}
            </div>
          </FaqAccordianMobile>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : false) ? (
          <FaqAccordianMobile
            className={classNames(
              "__wab_instance",
              sty.faqAccordianMobile__v7OLa
            )}
            q12={
              <Frame16Icon
                className={classNames(projectcss.all, sty.svg___3VPhK)}
                role={"img"}
              />
            }
            slot={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__jh2Y5
                )}
              >
                {
                  "Absolutely. At MV Technologies, you will have a dedicated Account Manager who will be your primary point of contact, ensuring seamless communication and addressing any queries or concerns promptly."
                }
              </div>
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___8AAvl
              )}
            >
              {"Do I have a dedicated point of contact at MV Technologies?"}
            </div>
          </FaqAccordianMobile>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : false) ? (
          <FaqAccordianMobile
            className={classNames(
              "__wab_instance",
              sty.faqAccordianMobile__mdCRi
            )}
            q12={
              <Frame10Icon
                className={classNames(projectcss.all, sty.svg___80AG)}
                role={"img"}
              />
            }
            slot={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__wYKgs
                )}
              >
                {
                  "The minimum commitment depends on the engagement model you choose. We offer both flexible and fixed-term contracts to meet your needs. For long-term partnerships, we provide significant cost reductions to nurture a productive, ongoing relationship."
                }
              </div>
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__qUynI
              )}
            >
              {"What is the minimum commitment for your services?"}
            </div>
          </FaqAccordianMobile>
        ) : null}
        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : false) ? (
          <FaqAccordianMobile
            className={classNames(
              "__wab_instance",
              sty.faqAccordianMobile__vpUwu
            )}
            q12={
              <Frame7Icon
                className={classNames(projectcss.all, sty.svg___6Ulmz)}
                role={"img"}
              />
            }
            slot={
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___5BbrO
                )}
              >
                {
                  "Security is a top priority at MV Technologies. Our solutions are built with robust security protocols to protect your data and ensure compliance with industry standards, safeguarding your business from external threats."
                }
              </div>
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__d3SGu
              )}
            >
              {
                "How does MV Technologies ensure the security of its software solutions?"
              }
            </div>
          </FaqAccordianMobile>
        ) : null}
        <FaqAccordian
          className={classNames("__wab_instance", sty.faqAccordian__tzp8)}
          opened={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? true
              : undefined
          }
          q12={
            <Frame14Icon
              className={classNames(projectcss.all, sty.svg__c9NH)}
              role={"img"}
            />
          }
          slot={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__b33Tw
              )}
            >
              {
                "MV Technologies focuses on delivering high-impact solutions that streamline operations and enhance productivity. By leveraging the latest technologies and maintaining a client-centric approach, we ensure that your investment translates into measurable business growth and efficiency."
              }
            </div>
          }
        >
          {hasVariant($state, "companyTabOptions", "companyTabOptions")
            ? "How does Vidyayatan ensure a return on investment (ROI)?"
            : "How does MV Technologies ensure a return on investment (ROI)?"}
        </FaqAccordian>
        <FaqAccordian
          className={classNames("__wab_instance", sty.faqAccordian__sxKyN)}
          opened={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? true
              : undefined
          }
          q12={
            <Frame15Icon
              className={classNames(projectcss.all, sty.svg__waKxr)}
              role={"img"}
            />
          }
          slot={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vV8A
              )}
            >
              {
                "MV Technology offers flexible engagement models to suit your business needs. Whether you require a dedicated team, project-based collaboration, or long-term technological partnership, we adapt to your preferred working style and timeline."
              }
            </div>
          }
        >
          {hasVariant($state, "companyTabOptions", "companyTabOptions")
            ? "How does Vidyayatan ensure a return on investment (ROI)?"
            : "How flexible are MV Technologies's engagement models?"}
        </FaqAccordian>
        <FaqAccordian
          className={classNames("__wab_instance", sty.faqAccordian___2L5E)}
          opened={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? true
              : undefined
          }
          q12={
            <Frame6Icon
              className={classNames(projectcss.all, sty.svg___3Lu1Z)}
              role={"img"}
            />
          }
          slot={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__snbN3
              )}
            >
              {
                "Yes, MV Technologies is equipped to support your business as it grows. Our solutions are designed to scale alongside your operations, ensuring that you have the tools and support necessary to manage increasing demands and complexities."
              }
            </div>
          }
        >
          {hasVariant($state, "companyTabOptions", "companyTabOptions")
            ? "How does Vidyayatan ensure a return on investment (ROI)?"
            : "Can MV Technologies support my business's scalability needs?"}
        </FaqAccordian>
        <FaqAccordian
          className={classNames("__wab_instance", sty.faqAccordian__xkbe1)}
          opened={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? true
              : undefined
          }
          q12={
            <Frame16Icon
              className={classNames(projectcss.all, sty.svg__ckB4Z)}
              role={"img"}
            />
          }
          slot={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___86IGu
              )}
            >
              {
                "Absolutely. At MV Technologies, you will have a dedicated Account Manager who will be your primary point of contact, ensuring seamless communication and addressing any queries or concerns promptly."
              }
            </div>
          }
        >
          {hasVariant($state, "companyTabOptions", "companyTabOptions")
            ? "How does Vidyayatan ensure a return on investment (ROI)?"
            : "Do I have a dedicated point of contact at MV Technologies?"}
        </FaqAccordian>
        <FaqAccordian
          className={classNames("__wab_instance", sty.faqAccordian__aorn2)}
          opened={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? true
              : undefined
          }
          q12={
            <Frame10Icon
              className={classNames(projectcss.all, sty.svg__oceJ5)}
              role={"img"}
            />
          }
          slot={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__f7J77
              )}
            >
              {
                "The minimum commitment depends on the engagement model you choose. We offer both flexible and fixed-term contracts to meet your needs. For long-term partnerships, we provide significant cost reductions to nurture a productive, ongoing relationship."
              }
            </div>
          }
        >
          {hasVariant($state, "companyTabOptions", "companyTabOptions")
            ? "How does Vidyayatan ensure a return on investment (ROI)?"
            : "What is the minimum commitment for your services?"}
        </FaqAccordian>
        <FaqAccordian
          className={classNames("__wab_instance", sty.faqAccordian__bMqX4)}
          opened={
            hasVariant(globalVariants, "screen", "mobileOnly")
              ? true
              : undefined
          }
          q12={
            <Frame7Icon
              className={classNames(projectcss.all, sty.svg__zMlZc)}
              role={"img"}
            />
          }
          slot={
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__kn1Lc
              )}
            >
              {
                "Security is a top priority at MV Technologies. Our solutions are built with robust security protocols to protect your data and ensure compliance with industry standards, safeguarding your business from external threats."
              }
            </div>
          }
        >
          {hasVariant($state, "companyTabOptions", "companyTabOptions")
            ? "How does Vidyayatan ensure a return on investment (ROI)?"
            : "How does MV Technologies ensure the security of its software solutions?"}
        </FaqAccordian>
      </Stack__>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  faq: ["faq"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  faq: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFaqSection__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFaqSection__VariantsArgs;
    args?: PlasmicFaqSection__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFaqSection__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFaqSection__ArgsType,
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
          internalArgPropNames: PlasmicFaqSection__ArgProps,
          internalVariantPropNames: PlasmicFaqSection__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFaqSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "faq") {
    func.displayName = "PlasmicFaqSection";
  } else {
    func.displayName = `PlasmicFaqSection.${nodeName}`;
  }
  return func;
}

export const PlasmicFaqSection = Object.assign(
  // Top-level PlasmicFaqSection renders the root element
  makeNodeComponent("faq"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFaqSection
    internalVariantProps: PlasmicFaqSection__VariantProps,
    internalArgProps: PlasmicFaqSection__ArgProps
  }
);

export default PlasmicFaqSection;
/* prettier-ignore-end */
