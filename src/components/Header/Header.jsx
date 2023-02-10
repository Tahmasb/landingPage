import logo from "./../../assets/img/logo2.png"
import styles from "./header.module.css"
import { styled } from "@mui/material/styles"
import { BsGrid } from "react-icons/bs"
import { Grid, useMediaQuery } from "@mui/material"
import React from "react"
export default function Header() {
  const [showMenu, setShowMenu] = React.useState(false)
  let pageSize = useMediaQuery("(min-width:900px)")
  return (
    <Grid
      className={styles.header}
      display="flex"
      justifyContent="space-between"
    >
      <div>
        <img className={styles.headerLogo} src={logo} alt="logo" />
      </div>
      <Grid
        onClick={() => setShowMenu(!showMenu)}
        className={styles.menuGrid}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <BsGrid />
      </Grid>
      {pageSize || showMenu ? (
        <Grid
          sx={{
            flexDirection: { xs: "column", md: "row" },
            bgcolor: { xs: "var(--white)", md: "transparent" },
            mt: { xs: "40px", md: "0px" },
            position: { xs: "absolute", md: "static" },
            width: { xs: "100%", sm: "80%", md: "100%" },
            p: { xs: "10px", md: "0px" },
          }}
          className={styles.headerParent}
        >
          <div className={styles.headerItem}>
            <a href="#top">خانه</a>
          </div>
          <div className={styles.headerItem}>
            <a href="#about">درباره ما</a>
          </div>
          <div className={styles.headerItem}>
            <a href="#services">خدمات ما</a>
          </div>
          <div className={styles.headerItem}>
            <a href="#pricing">تعرفه‌ها</a>
          </div>
          <div className={styles.headerItem}>
            <a href="#comments">نظرات مشتری</a>
          </div>
          <div className={styles.headerItem}>
            <a href="#blog">وبلاگ</a>
          </div>
          <div>
            <a
              href="#contact"
              className={`${styles.headerCall} ${styles.headerItem}`}
            >
              تماس
            </a>
          </div>
        </Grid>
      ) : (
        ""
      )}
    </Grid>
  )
}
