"use client";

import { useTheme } from "next-themes";
import { useMemo } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

import {
  siAmazonec2,
  siAmazons3,
  siCss3,
  siExpress,
  siGit,
  siGithub,
  siGitlab,
  siHtml5,
  siJavascript,
  siMysql,
  siNodedotjs,
  siPostgresql,
  siPrisma,
  siPython,
  siReact,
  siReacthookform,
  siReactquery,
  siTailwindcss,
  siTypescript,
  siZod,
} from "simple-icons";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return renderSimpleIcon({
    icon,
    bgHex,
    fallbackHex,
    minContrastRatio,
    size: 42,
    aProps: {
      href: undefined,
      target: undefined,
      rel: undefined,
      onClick: (e: any) => e.preventDefault(),
    },
  });
};

export type DynamicCloudProps = {
  iconSlugs?: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const { theme } = useTheme();
  const icons = [
    siReact,
    siExpress,
    siNodedotjs,
    siAmazons3,
    siAmazonec2,
    siPostgresql,
    siMysql,
    siJavascript,
    siTypescript,
    siReacthookform,
    siReactquery,
    siZod,
    siPython,
    siHtml5,
    siCss3,
    siTailwindcss,
    siPrisma,
    siGit,
    siGithub,
    siGitlab,
  ];

  const renderedIcons = useMemo(() => {
    return Object.values(icons).map((icon) =>
      renderCustomIcon(icon, theme || "dark")
    );
  }, [theme]);

  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      <>{renderedIcons}</>
    </Cloud>
  );
}
