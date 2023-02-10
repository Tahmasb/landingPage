import { CacheProvider } from "@emotion/react"
import { ThemeProvider } from "@emotion/react"
import Main from "./pages/main/main"
import { theme, cacheRTL } from "./theme/theme"
function App() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
