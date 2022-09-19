import { globalStyle, keyframes } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { themeVars } from "styles/theme.css";
import { tokens } from "styles/tokens.css";

const fadeIn = keyframes({
  "0%": { opacity: "0" },
  "100%": { opacity: "1" },
});

const enter = keyframes({
  "0%": { opacity: "0", transform: "scale(.85) translateX(-50%)" },
  "100%": { opacity: "1", transform: "scale(1) translateX(-50%)" },
});

globalStyle("[cmdk-overlay]", {
  position: "fixed",
  inset: 0,
  backgroundColor: themeVars.color.overlay,
  backdropFilter: "blur(8px)",
});

globalStyle("[cmdk-dialog]", {
  transformOrigin: "0 0",
  position: "fixed",
  top: tokens.spacing.xxxxl,
  left: "50%",
  transform: "translateX(-50%)",
  maxWidth: 640,
  width: calc.subtract("100%", calc.multiply(tokens.spacing.md, 2)),
  "@media": {
    "screen and (min-width: 576px)": {
      marginTop: "8rem",
    },
  },
});

globalStyle('[cmdk-overlay][data-state="open"]', {
  animationName: fadeIn,
  animationDuration: "150ms",
});

globalStyle('[cmdk-dialog][data-state="open"]', {
  animationName: enter,
  animationDuration: "200ms",
});

globalStyle("[cmdk-root]", {
  width: "100%",
  backgroundColor: themeVars.color.surface,
  border: `1px solid ${themeVars.color.border}`,
  borderRadius: tokens.radius.md,
});

globalStyle("[cmdk-header]", {
  position: "relative",
});

globalStyle("[cmdk-header-esc]", {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  right: tokens.spacing.md,
  fontSize: tokens.fontSize.sm,
  padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
  color: themeVars.color.foregroundNeutral,
  borderRadius: tokens.radius.md,
  cursor: "pointer",
  border: `1px solid ${themeVars.color.border}`,
});

globalStyle("[cmdk-input]", {
  position: "relative",
  fontFamily: tokens.font.sans,
  fontSize: tokens.fontSize.md,
  width: "100%",
  padding: tokens.spacing.md,
  paddingInlineEnd: calc.add(calc.multiply(tokens.spacing.md, 2), "45px"),
  borderBottom: `1px solid ${themeVars.color.border}`,
});

globalStyle("[cmdk-input]::placeholder", {
  color: themeVars.color.foregroundNeutral,
});

globalStyle("[cmdk-list]", {
  height: "min(300px, calc(var(--cmdk-list-height)) + 32px)",
  maxHeight: 400,
  overflow: "auto",
  overscrollBehavior: "contain",
  transition: "100ms ease",
  transitionProperty: "height",
  paddingBlock: tokens.spacing.md,
  scrollPaddingBlock: tokens.spacing.md,
});

globalStyle("*:not([hidden]) + [cmdk-group]", {
  marginBlockStart: tokens.spacing.md,
});

globalStyle("[cmdk-group-heading]", {
  userSelect: "none",
  fontSize: tokens.fontSize.sm,
  color: themeVars.color.foregroundNeutral,
  paddingInline: tokens.spacing.md,
  marginBlockEnd: tokens.spacing.sm,
});

globalStyle("[cmdk-item]", {
  display: "flex",
  alignItems: "center",
  gap: tokens.spacing.sm,
  contentVisibility: "auto",
  cursor: "pointer",
  height: 48,
  paddingInline: tokens.spacing.md,
});

globalStyle("[cmdk-item]::after", {
  content: "",
  position: "absolute",
  inset: `0 ${tokens.spacing.sm}`,
  backgroundColor: themeVars.color.surfaceHover,
  borderRadius: tokens.radius.md,
  opacity: 0,
  zIndex: -1,
});

globalStyle("[cmdk-item] svg", {
  width: ".9rem",
  color: themeVars.color.foregroundNeutral,
});

globalStyle("[cmdk-item][aria-selected='true']::after", {
  opacity: 1,
});

globalStyle("[cmdk-item][aria-selected='true'] svg", {
  color: themeVars.color.foreground,
});

globalStyle("[cmdk-empty]", {
  textAlign: "center",
  color: themeVars.color.foregroundNeutral,
});