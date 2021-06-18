import { createMuiTheme } from "@material-ui/core/styles";
import color from "./_color.scss";
import fontWeight from "./_fontWeight.scss";
import fontFamily from "./_fontFamily.scss";
import fontSize from "./_fontSize.scss";
import lineHeight from "./_lineHeight.scss";
import letterSpacing from "./_letterSpacing.scss";
import sizing from "./_sizing.scss";
import "./_utilities.scss";

export default createMuiTheme({
  typography: {
    fontSize: 16,
    htmlFontSize: 16,
    fontFamily: [fontFamily.stevie, fontFamily.camp, "sans-serif"].join(","),
    fontWeightRegular: fontWeight.regular,
    fontWeightMedium: fontWeight.medium,
    fontWeightBold: fontWeight.bold,
    h1: {
      color: color.black,
      fontFamily: fontFamily.camp,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.h1,
      lineHeight: lineHeight.h1,
      letterSpacing: letterSpacing.h1,
    },
    h2: {
      color: color.black,
      fontFamily: fontFamily.camp,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.h2,
      lineHeight: lineHeight.h2,
      letterSpacing: letterSpacing.h2,
    },
    h3: {
      color: color.black,
      fontFamily: fontFamily.stevie,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.h3,
      lineHeight: lineHeight.h3,
      letterSpacing: letterSpacing.h3,
    },
    h4: {
      color: color.black,
      fontFamily: fontFamily.stevie,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.h4,
      lineHeight: lineHeight.h4,
      letterSpacing: letterSpacing.h4,
    },
    h5: {
      color: color.black,
      fontFamily: fontFamily.stevie,
      fontWeight: fontWeight.medium,
      fontSize: fontSize.h5,
      lineHeight: lineHeight.h5,
      letterSpacing: letterSpacing.h5,
    },
    h6: {
      color: color.black,
      fontFamily: fontFamily.camp,
      fontWeight: fontWeight.bold,
      fontSize: fontSize.h6,
      lineHeight: lineHeight.h6,
      letterSpacing: letterSpacing.h6,
    },
    body1: {
      color: color.black,
      fontFamily: fontFamily.stevie,
      fontWeight: fontWeight.regular,
      fontSize: fontSize.body1,
      lineHeight: lineHeight.body1,
      letterSpacing: letterSpacing.body1,
    },
    body2: {
      color: color.grey,
      fontFamily: fontFamily.stevie,
      fontWeight: fontWeight.regular,
      fontSize: fontSize.body2,
      lineHeight: lineHeight.body2,
      letterSpacing: letterSpacing.body2,
    },
    subtitle1: {
      color: color.black,
      fontFamily: fontFamily.stevie,
      fontWeight: fontWeight.regular,
      fontSize: fontSize.subtitle1,
      lineHeight: lineHeight.subtitle1,
      letterSpacing: letterSpacing.subtitle1,
    },
    // subtitle2, caption
    button: {
      textTransform: "none",
    },
  },
  shadows: [
    // MUI requires all 25 shadow values be reset, when overriding any one value, starts at 0
    "none",
    `${sizing.none} ${sizing.xs} ${sizing.xs} ${sizing.none} rgba(0, 0, 0, 0.16)`, // [ 1 ] - Bottom, Right
    "7px 9px 20px 0 rgba(0, 0, 0, 0.16)", // [ 2 ] - ?
    "2px 4px 9px 1px rgba(165, 165, 165, 0.05)",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ],
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 0,
    drawer: 1200,
    snackbar: 1400,
    tooltip: 1500,
  },
  shape: {
    borderRadius: sizing.none,
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiButtonBase: {
      disableRipple: true,
      disableTouchRipple: true,
    },
    MuiCheckbox: {
      color: "secondary",
      disableRipple: true,
    },
    MuiRadio: {
      color: "secondary",
      disableRipple: true,
    },
    MuiTab: {
      disableFocusRipple: true,
      disableRipple: true,
    },
    MuiLink: {
      underline: "none",
      fontSize: "inherit",
    },
    MuiWithWidth: {
      initialWidth: "lg",
    },
  },
  overrides: {
    /**
     * Override styles should be added only if they are global, meaning they are
     * consistent across all implementations. We should keep this section as small
     * as possible so that we have a minimal amount of custom overrides in a component's
     * specific implementation. This will take time to develop and refine as we begin
     * utilizing the Material-UI Components in our codebase.
     */
    MuiAlert: {
      root: {
        padding: `${sizing.xs} ${sizing.xl} ${sizing.xs} ${sizing.sm}`,
        borderRadius: sizing.none,
      },
      icon: {
        fontSize: sizing.xl,
        marginRight: sizing.nm,
      },
      message: {
        width: "100%",
      },
      standardError: {
        borderLeft: `${sizing.sm} solid ${color.danger}`,
      },
      standardInfo: {
        borderLeft: `${sizing.sm} solid ${color.info}`,
      },
      standardSuccess: {
        borderLeft: `${sizing.sm} solid ${color.success}`,
      },
      standardWarning: {
        borderLeft: `${sizing.sm} solid ${color.warning}`,
      },
    },
    MuiAutocomplete: {
      root: {
        "&[aria-expanded=\"true\"] .MuiAutocomplete-inputRoot": {
          borderRadius: sizing.none,
        },
      },
      endAdornment: {
        fontSize: fontSize.sm,
        top: "auto",
      },
      listbox: {
        border: `1px solid ${color.grey}`,
        borderRadius: sizing.none,
        margin: sizing.none,
        padding: sizing.none,
        maxHeight: "inherit",
      },
      option: {
        height: "40px",
        "&:hover": {
          backgroundColor: color.silver,
        },
      },
      popper: {
        margin: sizing.none,
        borderRadius: sizing.none,
        marginLeft: "1px",
        marginTop: "-5px",
      },
    },
    MuiAvatar: {
      root: {
        height: "100%",
        width: "100%",
      },
    },
    MuiBadge: {
      badge: {
        height: "auto",
        borderRadius: sizing.none,
        padding: sizing.none,
      },
    },
    MuiButton: {
      root: {
        fontSize: fontSize.buttonNormal,
        lineHeight: lineHeight.buttonNormal,
        letterSpacing: letterSpacing.buttonNormal,
        fontWeight: fontWeight.bold,
      },
      contained: {
        color: color.white,
        padding: `${sizing.xs} ${sizing.lg}`,
      },
      outlined: {
        color: color.secondary,
        borderColor: color.secondary,
        backgroundColor: color.transparent,
        padding: `7px ${sizing.lg}`,
      },
      text: {
        color: color.secondary,
        padding: `${sizing.xs} ${sizing.lg}`,
      },
      sizeSmall: {
        fontSize: fontSize.buttonSmall,
        lineHeight: lineHeight.buttonSmall,
        letterSpacing: letterSpacing.buttonSmall,
      },
      outlinedSizeSmall: {
        // 1px reduction required for alignment to contained style due to border
        padding: `7px ${sizing.lg}`, // @todo: Add calc post sizing for prod
      },
      containedSizeSmall: {
        padding: `${sizing.xs} ${sizing.lg}`,
      },
      textSizeSmall: {
        padding: `${sizing.xs} ${sizing.xs}`,
      },
      sizeLarge: {
        fontSize: fontSize.buttonLarge,
        lineHeight: lineHeight.buttonLarge,
        letterSpacing: letterSpacing.buttonLarge,
      },
      outlinedSizeLarge: {
        // 1px reduction required for alignment to contained style due to border
        padding: "15px 48px",
      },
      containedSizeLarge: {
        padding: `${sizing.nm} 50px`,
      },
      textSizeLarge: {
        padding: `${sizing.nm} ${sizing.lg}`,
      },
    },
    MuiCard: {
      root: {
        height: "100%",
        border: "solid 1px #e5e5e5",
        borderRadius: sizing.none,
      },
    },
    MuiCardMedia: {
      root: {
        height: "100%",
      },
    },
    MuiCardActions: {
      root: {
        padding: sizing.none,
      },
    },
    MuiCardContent: {
      root: {
        padding: `${sizing.sm} ${sizing.lg}`,
        "&:last-child": {
          paddingBottom: sizing.sm,
        },
      },
    },
    MuiCardHeader: {
      root: {
        height: "100%",
        paddingLeft: sizing.lg,
        paddingRight: sizing.lg,
      },
      action: {
        alignSelf: "unset",
        marginTop: sizing.none,
        marginRight: sizing.none,
      },
    },
    MuiCheckbox: {
      root: {
        color: color.secondary,
        // MUI Bug: for hover on checked and color opts
        // https://github.com/mui-org/material-ui/issues/16866
        "&:hover": {
          backgroundColor: color.transparent,
        },
        "&.MuiCheckbox-colorSecondary.Mui-checked:hover": {
          backgroundColor: color.transparent,
        },
        "& .MuiSvgIcon-root": {
          fontSize: 18,
        },
      },
    },
    MuiChip: {
      root: {
        borderRadius: sizing.xs,
        backgroundColor: color.lightBlue,
        margin: sizing.none,
        paddingLeft: sizing.xs,
        paddingRight: sizing.xs,
        paddingTop: sizing.xs,
        paddingBottom: sizing.xs,
        color: color.primary,
        fontWeight: fontWeight.regular,
        fontSize: fontSize.caption,
        border: "none",
        height: sizing.auto,
      },
      label: {
        paddingLeft: sizing.none,
        paddingRight: sizing.none,
        lineHeight: sizing.sm,
      },
    },
    MuiDialog: {
      paperWidthXs: {
        maxWidth: "464px",
      },
      paperWidthSm: {
        maxWidth: "520px",
      },
      paperWidthMd: {
        maxWidth: "704px",
      },
      paperWidthLg: {
        maxWidth: "808px",
      },
      paperWidthXl: {
        maxWidth: "840px",
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: color.black,
        color: color.black,
        marginTop: sizing.none,
        marginBottom: sizing.none,
      },
      light: {
        backgroundColor: color.silver,
      },
      middle: {
        marginLeft: sizing.xs,
        marginRight: sizing.xs,
      },
    },
    MuiDrawer: {
      root: {
        width: "240px",
        flexShrink: sizing.none,
      },
      paper: {
        width: "240px",
      },
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: sizing.none,
        minHeight: "auto",
      },
    },
    MuiExpansionPanelSummary: {
      root: {
        minHeight: "auto",
        padding: sizing.none,
        "&$expanded": {
          margin: sizing.none,
          minHeight: "auto",
        },
      },
      content: {
        margin: sizing.none,
        "&$expanded": {
          margin: sizing.none,
          minHeight: "auto",
        },
      },
    },
    MuiFormControl: {
      root: {
        width: "100%",
      },
    },
    MuiFormControlLabel: {
      labelPlacementStart: {
        justifyContent: "space-between",
        marginLeft: sizing.none,
      },
    },
    MuiFormHelperText: {
      root: {
        fontSize: "11px",
        lineHeight: 1.5,
        letterSpacing: "0.4px",
        fontWeight: 500,
      },
      contained: {
        marginLeft: sizing.none,
        marginRight: sizing.none,
        marginTop: sizing.xs,
      },
    },
    MuiGrid: {
      container: {
        height: "100%",
      },
    },
    MuiIcon: {
      fontSizeSmall: {
        fontSize: sizing.nm,
        color: color.primary,
      },
    },
    MuiIconButton: {
      root: {
        fontSize: "inherit",
        padding: `${sizing.none} ${sizing.xs}`,
        "&:hover": {
          backgroundColor: color.transparent,
        },
      },
      edgeEnd: {
        marginRight: `-${sizing.nm}`,
      },
    },
    MuiLinearProgress: {
      colorPrimary: {
        backgroundColor: color.silver,
      },
    },
    MuiLink: {
      root: {
        "&:hover": {
          borderBottom: `1px solid ${color.grey}`,
          paddingBottom: "1px",
        },
        "&:active": {
          borderBottom: "1px solid",
          paddingBottom: "1px",
        },
        "&.active": {
          borderBottom: "1px solid",
          paddingBottom: "1px",
        },
        "&.active-primary": {
          borderBottom: `1px solid ${color.primary}`,
          paddingBottom: "1px",
        },
      },
    },
    MuiListItem: {
      root: {
        width: "auto",
        paddingTop: sizing.sm,
        paddingBottom: sizing.sm,
      },
      dense: {
        paddingTop: sizing.xs,
        paddingBottom: sizing.xs,
      },
      divider: {
        borderBottom: `solid ${color.silver} 1px`,
      },
    },
    MuiMenuItem: {
      root: {
        paddingLeft: sizing.nm,
        paddingRight: sizing.nm,
        paddingTop: sizing.xs,
        paddingBottom: sizing.xs,
      },
    },
    MuiOutlinedInput: {
      notchedOutline: {
        borderWidth: "1px !important",
      },
    },
    MuiPagination: {
      ul: {
        "& > li:first-of-type .MuiPaginationItem-page:after": {
          content: "'Prev'",
          paddingLeft: sizing.xs,
        },
        "& > li:last-of-type .MuiPaginationItem-page:before": {
          content: "'Next'",
          paddingRight: sizing.xs,
        },
      },
    },
    MuiPaginationItem: {
      outlined: {
        "&$selected": {
          backgroundColor: color.white,
          borderColor: color.primary,
        },
      },
      page: {
        "&$selected": {
          backgroundColor: color.white,
          borderColor: color.primary,
        },
      },
    },
    MuiRadio: {
      root: {
        color: color.secondary,
        "&:hover": {
          backgroundColor: color.transparent,
        },
        // MUI Bug: for hover on checked and color opts
        "&.MuiRadio-colorSecondary.Mui-checked:hover": {
          backgroundColor: color.transparent,
        },
        "& .MuiSvgIcon-root": {
          fontSize: 18,
        },
      },
    },
    MuiInputBase: {
      root: {
        // Targets select component under error in TextField component
        "&$error > select": {
          border: `solid 1px ${color.danger}`,
          "&:hover": {
            borderColor: color.danger,
          },
          "&:focus": {
            borderColor: color.danger,
          },
        },
      },
    },
    MuiSelect: {
      root: {
        "&$disabled": {
          "&:hover": {
            backgroundColor: color.light,
            borderColor: color.light,
          },
        },
        "&:focus": {
          borderColor: color.cyan,
          "&:hover": {
            borderColor: color.cyan,
          },
        },
      },
      select: {
        backgroundColor: color.light,
        border: `1px solid ${color.light}`,
        padding: "11px",
        "&:hover": {
          backgroundColor: color.silver,
          borderColor: color.silver,
        },
      },
      icon: {
        top: "calc(50% - 10px)",
        right: 8,
        fontSize: 20,
      },
    },
    MuiStepConnector: {
      alternativeLabel: {
        top: "22px",
      },
      active: {
        "& $line": {
          backgroundColor: color.primary,
        },
      },
      completed: {
        "& $line": {
          backgroundColor: color.primary,
        },
      },
      line: {
        height: "2px",
        border: sizing.none,
        backgroundColor: color.silver,
        borderRadius: sizing.none,
      },
      lineHorizontal: {
        borderTopWidth: sizing.none,
      },
    },
    MuiStepLabel: {
      iconContainer: {
        cursor: "pointer",
      },
    },
    MuiStepper: {
      root: {
        padding: sizing.none,
      },
    },
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: sizing.nm,
      },
    },
    MuiTab: {
      root: {
        textTransform: "none",
        fontWeight: fontWeight.regular,
        "&$selected": {
          fontWeight: fontWeight.medium,
        },
      },
    },
    MuiTabs: {
      root: {
        borderBottom: `1px solid ${color.silver}`,
      },
    },
    MuiToggleButton: {
      root: {
        border: `1px solid ${color.primary}`,
        "&$selected": {
          backgroundColor: color.primary,
          color: color.white,
        },
        "&:hover": {
          backgroundColor: "inherit",
        },
      },
      sizeSmall: {
        height: "32px",
      },
    },
    MuiTooltip: {
      tooltipPlacementBottom: {
        marginTop: "0.375rem !important",
      },
      tooltipPlacementTop: {
        marginBottom: "0.5rem !important",
      },
      tooltipPlacementRight: {
        marginLeft: "0.5rem !important",
      },
      tooltipPlacementLeft: {
        marginRight: "0.5rem !important",
      },
      tooltip: {
        backgroundColor: color.info,
      },
      arrow: {
        color: color.info,
        fontSize: "10px",
      },
    },
  },
  palette: {
    common: {
      black: color.black,
      grey: color.grey,
      silver: color.silver,
      light: color.light,
      lightBlue: color.lightBlue,
      white: color.white,
      poppy: color.poppy,
      amber: color.amber,
      cyan: color.cyan,
      fuschia: color.fuschia,
      transparent: color.transparent,
    },
    primary: {
      main: color.primary,
    },
    secondary: {
      main: color.secondary,
    },
    success: {
      main: color.success,
    },
    error: {
      main: color.danger,
    },
    info: {
      main: color.info,
    },
    warning: {
      main: color.warning,
    },
    text: {
      primary: color.black,
      secondary: color.grey,
      disabled: color.grey,
    },
    divider: color.grey,
    background: {
      paper: color.white,
      default: color.white,
      semi: color.semi,
      lightBlue: color.lightBlue,
    },
  },
  factor: 1.75,
  breakpoints: {
    keys: ["xs", "sm", "md", "lg", "xl"],
    values: { xs: 0, sm: 600, md: 960, lg: 1280, xl: 1920 },
  },
});
