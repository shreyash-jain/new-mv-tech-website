// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: qg9BUJrNtisePZMs8FM4BQ
// Component: SbeiUKrhPUYq

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
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";

import TextInput from "../../TextInput"; // plasmic-import: dYzrPrrV1Cb-/component
import Button2 from "../../Button2"; // plasmic-import: iFFcBUnvZUl0/component
import NavFooter from "../../NavFooter"; // plasmic-import: s0a682-ToGsq/component
import NavHeader from "../../NavHeader"; // plasmic-import: pZ9Yrp1wEL8X/component

import { useScreenVariants as useScreenVariantsptc9VYm7Ur9B } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: PTC9vYM7UR9b/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_vidyayatan_landing_page_css from "../vidyayatan_landing_page/plasmic.module.css"; // plasmic-import: aqUnUFeSAtbFb77THsmBtm/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import plasmic_apple_css from "../apple/plasmic.module.css"; // plasmic-import: 3eY1qD8fYUzK6iRzHmP8VZ/projectcss
import plasmic_vercel_workflow_css from "../vercel_workflow/plasmic.module.css"; // plasmic-import: 9geyujr9Gmmnu34Qh9ic8E/projectcss
import plasmic_saa_s_website_css from "../saa_s_website/plasmic.module.css"; // plasmic-import: ybfbkvuYhwx2f8pSa8cKG/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: qg9BUJrNtisePZMs8FM4BQ/projectcss
import sty from "./PlasmicContactPage.module.css"; // plasmic-import: SbeiUKrhPUYq/css

import SearchSvgIcon from "./icons/PlasmicIcon__SearchSvg"; // plasmic-import: ODNV5qQvEUuM/icon
import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: tSFoGfIVWAwT/icon
import Frame19Icon from "./icons/PlasmicIcon__Frame19"; // plasmic-import: kMSH29ZIP6Iw/icon
import Frame32Icon from "./icons/PlasmicIcon__Frame32"; // plasmic-import: GeB6A_VjzwBG/icon
import Frame9Icon from "../vidyayatan_landing_page/icons/PlasmicIcon__Frame9"; // plasmic-import: 0BT16QwAhOi8/icon

createPlasmicElementProxy;

export type PlasmicContactPage__VariantMembers = {};
export type PlasmicContactPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicContactPage__VariantsArgs;
export const PlasmicContactPage__VariantProps = new Array<VariantPropType>();

export type PlasmicContactPage__ArgsType = {
  q12?: React.ReactNode;
  q13?: React.ReactNode;
};
type ArgPropType = keyof PlasmicContactPage__ArgsType;
export const PlasmicContactPage__ArgProps = new Array<ArgPropType>(
  "q12",
  "q13"
);

export type PlasmicContactPage__OverridesType = {
  root?: Flex__<"div">;
  frame1000000972?: Flex__<"div">;
  image134Ppz3CKVlTransformed1?: Flex__<"div">;
  textInput2?: Flex__<typeof TextInput>;
  textInput3?: Flex__<typeof TextInput>;
  textInput?: Flex__<typeof TextInput>;
  textInput5?: Flex__<typeof TextInput>;
  textInput4?: Flex__<typeof TextInput>;
  button2?: Flex__<typeof Button2>;
  ourOffice?: Flex__<"section">;
  q14?: Flex__<"div">;
  q1?: Flex__<"div">;
  navFooter?: Flex__<typeof NavFooter>;
  navHeader?: Flex__<typeof NavHeader>;
};

export interface DefaultContactPageProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicContactPage__RenderFunc(props: {
  variants: PlasmicContactPage__VariantsArgs;
  args: PlasmicContactPage__ArgsType;
  overrides: PlasmicContactPage__OverridesType;
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
        path: "textInput2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput3.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput5.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      },
      {
        path: "textInput4.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
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
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_vidyayatan_landing_page_css.plasmic_tokens,
            plasmic_plasmic_rich_components_css.plasmic_tokens,
            plasmic_apple_css.plasmic_tokens,
            plasmic_vercel_workflow_css.plasmic_tokens,
            plasmic_saa_s_website_css.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.columns__tByaU)}
          >
            <div className={classNames(projectcss.all, sty.column__ytYqE)}>
              <div
                data-plasmic-name={"frame1000000972"}
                data-plasmic-override={overrides.frame1000000972}
                className={classNames(projectcss.all, sty.frame1000000972)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__dgXb3)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__lvuKz)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"240px"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/new_mv_technologies_website/images/image79.png",
                      fullWidth: 3532,
                      fullHeight: 720,
                      aspectRatio: undefined
                    }}
                  />

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__iaFkm
                    )}
                  >
                    {"Follow us on "}
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ehVDz)}
                  >
                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img__tNsBw)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"24px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/new_mv_technologies_website/images/image20.svg",
                        fullWidth: 256,
                        fullHeight: 256,
                        aspectRatio: 1
                      }}
                    />

                    <PlasmicImg__
                      alt={""}
                      className={classNames(sty.img___2Wpmt)}
                      displayHeight={"auto"}
                      displayMaxHeight={"none"}
                      displayMaxWidth={"100%"}
                      displayMinHeight={"0"}
                      displayMinWidth={"0"}
                      displayWidth={"24px"}
                      loading={"lazy"}
                      src={{
                        src: "/plasmic/new_mv_technologies_website/images/image36.png",
                        fullWidth: 1659,
                        fullHeight: 2500,
                        aspectRatio: undefined
                      }}
                    />
                  </Stack__>
                </Stack__>
                <div
                  data-plasmic-name={"image134Ppz3CKVlTransformed1"}
                  data-plasmic-override={overrides.image134Ppz3CKVlTransformed1}
                  className={classNames(
                    projectcss.all,
                    sty.image134Ppz3CkVlTransformed1
                  )}
                />
              </div>
            </div>
            <div className={classNames(projectcss.all, sty.column__r4YFc)}>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox___2Ojq)}
              >
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__zFb61)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tE8Ki
                    )}
                  >
                    {"Get In Touch"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__dZlu
                    )}
                  >
                    {
                      "Connect with us to explore how our solutions can transform your business. Whether you have a project in mind or just want to learn more, we\u2019re eager to hear from you and start a conversation about achieving your goals together."
                    }
                  </div>
                </Stack__>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__rijNh)}
                >
                  <div
                    className={classNames(projectcss.all, sty.columns__tnTZ)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__owoWr)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ddv3E
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text___5HFpU
                          )}
                        >
                          {"Full Name"}
                        </div>
                        <TextInput
                          data-plasmic-name={"textInput2"}
                          data-plasmic-override={overrides.textInput2}
                          className={classNames(
                            "__wab_instance",
                            sty.textInput2
                          )}
                          onChange={(...eventArgs) => {
                            generateStateOnChangeProp($state, [
                              "textInput2",
                              "value"
                            ])((e => e.target?.value).apply(null, eventArgs));
                          }}
                          placeholder={"Enter Name\u2026"}
                          value={
                            generateStateValueProp($state, [
                              "textInput2",
                              "value"
                            ]) ?? ""
                          }
                        />
                      </Stack__>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__ba5E)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__iTqu
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__uIQdB
                          )}
                        >
                          {"Company Name"}
                        </div>
                        <TextInput
                          data-plasmic-name={"textInput3"}
                          data-plasmic-override={overrides.textInput3}
                          className={classNames(
                            "__wab_instance",
                            sty.textInput3
                          )}
                          onChange={(...eventArgs) => {
                            generateStateOnChangeProp($state, [
                              "textInput3",
                              "value"
                            ])((e => e.target?.value).apply(null, eventArgs));
                          }}
                          placeholder={"Enter Name\u2026"}
                          value={
                            generateStateValueProp($state, [
                              "textInput3",
                              "value"
                            ]) ?? ""
                          }
                        />
                      </Stack__>
                    </div>
                  </div>
                  <div
                    className={classNames(projectcss.all, sty.columns__kfo1S)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__hVaKi)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__dWxlf
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__kasap
                          )}
                        >
                          {"Email ID"}
                        </div>
                        <TextInput
                          data-plasmic-name={"textInput"}
                          data-plasmic-override={overrides.textInput}
                          className={classNames(
                            "__wab_instance",
                            sty.textInput
                          )}
                          onChange={(...eventArgs) => {
                            generateStateOnChangeProp($state, [
                              "textInput",
                              "value"
                            ])((e => e.target?.value).apply(null, eventArgs));
                          }}
                          placeholder={"email@example.com"}
                          startIcon={
                            <SearchSvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__apsUg
                              )}
                              role={"img"}
                            />
                          }
                          value={
                            generateStateValueProp($state, [
                              "textInput",
                              "value"
                            ]) ?? ""
                          }
                        />
                      </Stack__>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column___6GiTj)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__sXxI
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__sFwEm
                          )}
                        >
                          {"Whatsapp Number"}
                        </div>
                        <TextInput
                          data-plasmic-name={"textInput5"}
                          data-plasmic-override={overrides.textInput5}
                          className={classNames(
                            "__wab_instance",
                            sty.textInput5
                          )}
                          onChange={(...eventArgs) => {
                            generateStateOnChangeProp($state, [
                              "textInput5",
                              "value"
                            ])((e => e.target?.value).apply(null, eventArgs));
                          }}
                          placeholder={``}
                          startIcon={
                            <SearchSvgIcon
                              className={classNames(
                                projectcss.all,
                                sty.svg__dkviA
                              )}
                              role={"img"}
                            />
                          }
                          value={
                            generateStateValueProp($state, [
                              "textInput5",
                              "value"
                            ]) ?? ""
                          }
                        />
                      </Stack__>
                    </div>
                  </div>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___98Z0)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__qdyQr
                      )}
                    >
                      {"Message"}
                    </div>
                    <TextInput
                      data-plasmic-name={"textInput4"}
                      data-plasmic-override={overrides.textInput4}
                      className={classNames("__wab_instance", sty.textInput4)}
                      onChange={(...eventArgs) => {
                        generateStateOnChangeProp($state, [
                          "textInput4",
                          "value"
                        ])((e => e.target?.value).apply(null, eventArgs));
                      }}
                      placeholder={"Leave us a message..."}
                      startIcon={
                        <SearchSvgIcon
                          className={classNames(projectcss.all, sty.svg__k2Vl6)}
                          role={"img"}
                        />
                      }
                      value={
                        generateStateValueProp($state, [
                          "textInput4",
                          "value"
                        ]) ?? ""
                      }
                    />
                  </Stack__>
                  <Button2
                    data-plasmic-name={"button2"}
                    data-plasmic-override={overrides.button2}
                    className={classNames("__wab_instance", sty.button2)}
                    endIcon={
                      <Frame19Icon
                        className={classNames(projectcss.all, sty.svg__gp6Kn)}
                        role={"img"}
                      />
                    }
                    shape={"rounded"}
                    showEndIcon={true}
                  >
                    {"Send Message"}
                  </Button2>
                </Stack__>
              </Stack__>
            </div>
          </Stack__>
          <section
            data-plasmic-name={"ourOffice"}
            data-plasmic-override={overrides.ourOffice}
            className={classNames(projectcss.all, sty.ourOffice)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__bFacP)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___7J0Jq
                )}
              >
                {"Our Office"}
              </div>
            </div>
            <PlasmicImg__
              alt={""}
              className={classNames(sty.img__wvH3)}
              displayHeight={"auto"}
              displayMaxHeight={"none"}
              displayMaxWidth={"800px"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"auto"}
              loading={"lazy"}
              src={{
                src: "/plasmic/new_mv_technologies_website/images/image33.png",
                fullWidth: 2070,
                fullHeight: 1380,
                aspectRatio: undefined
              }}
            />

            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.columns__kyRbf)}
            >
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__zC3G3)}
              >
                <Stack__
                  as={"div"}
                  data-plasmic-name={"q14"}
                  data-plasmic-override={overrides.q14}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.q14)}
                >
                  {renderPlasmicSlot({
                    defaultContents: (
                      <Frame32Icon
                        className={classNames(projectcss.all, sty.svg__ymV8I)}
                        role={"img"}
                      />
                    ),

                    value: args.q13
                  })}
                </Stack__>
                <div className={classNames(projectcss.all, sty.freeBox__xvRx7)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__l79Rn
                    )}
                  >
                    {"Limpopo, South Africa"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__gqGr5
                    )}
                  >
                    {"River Farm MS 141, Musina, Limpopo, 0900"}
                  </div>
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__u05Hn)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__ia585)}
                  >
                    <Frame9Icon
                      className={classNames(projectcss.all, sty.svg__rdI7T)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__evIJi
                      )}
                    >
                      {"+27  82 930 2211"}
                    </div>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__vMjwF)}
                  >
                    <Frame19Icon
                      className={classNames(projectcss.all, sty.svg__s3J6T)}
                      role={"img"}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__kLwl)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__sCnj
                        )}
                      >
                        {"info@mvtechnologies.co.za"}
                      </div>
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.column__yaloW)}
              >
                <Stack__
                  as={"div"}
                  data-plasmic-name={"q1"}
                  data-plasmic-override={overrides.q1}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.q1)}
                >
                  {renderPlasmicSlot({
                    defaultContents: (
                      <Frame32Icon
                        className={classNames(projectcss.all, sty.svg__icr42)}
                        role={"img"}
                      />
                    ),

                    value: args.q12
                  })}
                </Stack__>
                <div className={classNames(projectcss.all, sty.freeBox__tYdww)}>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__llLtj
                    )}
                  >
                    {"Bhopal, India"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__u72F1
                    )}
                  >
                    {"A-15, Pragati Parisar, Depot Square, Bhopal"}
                  </div>
                </div>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__lZtYd)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___2ZNp2)}
                  >
                    <Frame9Icon
                      className={classNames(projectcss.all, sty.svg__oDZf4)}
                      role={"img"}
                    />

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__tdbiW
                      )}
                    >
                      {"+91  9425677707"}
                    </div>
                  </Stack__>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__awCo9)}
                  >
                    <Frame19Icon
                      className={classNames(projectcss.all, sty.svg__dwHlc)}
                      role={"img"}
                    />

                    <div
                      className={classNames(projectcss.all, sty.freeBox__qNcL8)}
                    >
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__lvc9
                        )}
                      >
                        {"info@mvtechnologies.co.za"}
                      </div>
                    </div>
                  </Stack__>
                </Stack__>
              </Stack__>
            </Stack__>
          </section>
          <NavFooter
            data-plasmic-name={"navFooter"}
            data-plasmic-override={overrides.navFooter}
            className={classNames("__wab_instance", sty.navFooter)}
          />

          <NavHeader
            data-plasmic-name={"navHeader"}
            data-plasmic-override={overrides.navHeader}
            className={classNames("__wab_instance", sty.navHeader)}
            scrolledVariant={(() => {
              try {
                return $ctx.isScrolled;
              } catch (e) {
                if (
                  e instanceof TypeError ||
                  e?.plasmicType === "PlasmicUndefinedDataError"
                ) {
                  return [];
                }
                throw e;
              }
            })()}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "frame1000000972",
    "image134Ppz3CKVlTransformed1",
    "textInput2",
    "textInput3",
    "textInput",
    "textInput5",
    "textInput4",
    "button2",
    "ourOffice",
    "q14",
    "q1",
    "navFooter",
    "navHeader"
  ],
  frame1000000972: ["frame1000000972", "image134Ppz3CKVlTransformed1"],
  image134Ppz3CKVlTransformed1: ["image134Ppz3CKVlTransformed1"],
  textInput2: ["textInput2"],
  textInput3: ["textInput3"],
  textInput: ["textInput"],
  textInput5: ["textInput5"],
  textInput4: ["textInput4"],
  button2: ["button2"],
  ourOffice: ["ourOffice", "q14", "q1"],
  q14: ["q14"],
  q1: ["q1"],
  navFooter: ["navFooter"],
  navHeader: ["navHeader"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  frame1000000972: "div";
  image134Ppz3CKVlTransformed1: "div";
  textInput2: typeof TextInput;
  textInput3: typeof TextInput;
  textInput: typeof TextInput;
  textInput5: typeof TextInput;
  textInput4: typeof TextInput;
  button2: typeof Button2;
  ourOffice: "section";
  q14: "div";
  q1: "div";
  navFooter: typeof NavFooter;
  navHeader: typeof NavHeader;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContactPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContactPage__VariantsArgs;
    args?: PlasmicContactPage__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContactPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContactPage__ArgsType,
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
          internalArgPropNames: PlasmicContactPage__ArgProps,
          internalVariantPropNames: PlasmicContactPage__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicContactPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContactPage";
  } else {
    func.displayName = `PlasmicContactPage.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "qg9BUJrNtisePZMs8FM4BQ"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicContactPage = Object.assign(
  // Top-level PlasmicContactPage renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    frame1000000972: makeNodeComponent("frame1000000972"),
    image134Ppz3CKVlTransformed1: makeNodeComponent(
      "image134Ppz3CKVlTransformed1"
    ),
    textInput2: makeNodeComponent("textInput2"),
    textInput3: makeNodeComponent("textInput3"),
    textInput: makeNodeComponent("textInput"),
    textInput5: makeNodeComponent("textInput5"),
    textInput4: makeNodeComponent("textInput4"),
    button2: makeNodeComponent("button2"),
    ourOffice: makeNodeComponent("ourOffice"),
    q14: makeNodeComponent("q14"),
    q1: makeNodeComponent("q1"),
    navFooter: makeNodeComponent("navFooter"),
    navHeader: makeNodeComponent("navHeader"),

    // Metadata about props expected for PlasmicContactPage
    internalVariantProps: PlasmicContactPage__VariantProps,
    internalArgProps: PlasmicContactPage__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContactPage;
/* prettier-ignore-end */
