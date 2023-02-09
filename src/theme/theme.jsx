import { createTheme } from "@mui/material"
import rtlPlugin from "stylis-plugin-rtl"

import createCache from "@emotion/cache"
import { prefixer } from "stylis"
export const theme = createTheme({
  direction: "rtl",
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
})
export const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
})
