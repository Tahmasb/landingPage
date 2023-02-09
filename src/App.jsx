import { CacheProvider } from "@emotion/react"
import { ThemeProvider } from "@emotion/react"
import Header from "./components/Header/Header"
import { theme, cacheRTL } from "./theme/theme"
function App() {
  return (
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default App
