import { AnchorProps, MantineThemeOverride, PaperProps } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light",
  fontFamily: "Open Sans",
  globalStyles: (theme) => ({
    body: {
      backgroundColor: "#f9fafb",
    },
    a: {
      textDecoration: "none",
      color: theme.black,
    },
  }),
  components: {
    Anchor: {
      defaultProps: (theme) =>
        ({
          color: theme.black,
          underline: false,
        } as AnchorProps),
    },
    Paper: {
      defaultProps: {
        shadow: "sm",
        withBorder: true,
      } as PaperProps,
    },
  },
};
