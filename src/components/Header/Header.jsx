import logo from "./../../assets/img/logo2.png"
import styles from "./header.module.css"
import { styled } from "@mui/material/styles"
import { BsGrid } from "react-icons/bs"
import { Grid } from "@mui/material"
export default function Header() {
  return (
    <Grid
      sx={{
        flexDirection: { xs: "column", md: "row" },
      }}
      className={styles.headerParent}
    >
      <div>
        <img src={logo} alt="logo" />
      </div>
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
        <a href="#blog">وبلاگ</a>
      </div>
      <div className={styles.headerItem}>
        <a href="#comments">نظرات مشتری</a>
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
  )
}
