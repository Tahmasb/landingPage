import styles from "./footer.module.css"
import { Grid, Typography } from "@mui/material"
import { FaTelegramPlane, FaInstagram, FaFacebookF } from "react-icons/fa"
import { AiOutlineTwitter } from "react-icons/ai"
export default function Footer() {
  return (
    <Grid container className={styles.footer}>
      <Grid item lg={3} xs={11} sm={6} mb={4} className={styles.footerItem}>
        <Typography variant="h6" fontFamily={"EstedadBold"} mb={2}>
          شرکت فلان
        </Typography>
        <Typography pr={4}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </Typography>
      </Grid>
      <Grid item lg={3} xs={11} sm={6} mb={4} className={styles.footerItem}>
        <Typography variant="h6" fontFamily={"EstedadBold"} mb={2}>
          دسترسی سریع
        </Typography>
        <Grid display={"flex"} flexDirection="column" gap={1}>
          <a href="#">
            <Typography>درباره ما</Typography>
          </a>
          <a href="#">
            <Typography>خدمات ما</Typography>
          </a>
          <a href="#">
            <Typography>قیمت گذاری</Typography>
          </a>
          <a href="#">
            <Typography>وبلاگ</Typography>
          </a>
        </Grid>
      </Grid>
      <Grid item lg={3} xs={11} sm={6} mb={4} className={styles.footerItem}>
        <Typography variant="h6" fontFamily={"EstedadBold"} mb={2}>
          تماس
        </Typography>
        <Typography>تهران خیابان آزادی شرکت فلان</Typography>
        <Typography my={1.5}>۰۹۳۲۱۱۲۹۳۲۱</Typography>
        <Typography>sherkatFolan@gmail.com</Typography>
      </Grid>
      <Grid item lg={3} xs={11} sm={6} mb={4} className={styles.footerItem}>
        <Typography variant="h6" fontFamily={"EstedadBold"} mb={2}>
          شبکه‌های اجتمائی
        </Typography>
        <Grid className={styles.footerIconsParent}>
          <a href="#">
            <FaTelegramPlane className={styles.footerIcon} />
          </a>
          <a href="#">
            <FaInstagram className={styles.footerIcon} />
          </a>
          <a href="#">
            <FaFacebookF className={styles.footerIcon} />
          </a>
          <a href="#">
            <AiOutlineTwitter className={styles.footerIcon} />
          </a>
        </Grid>
      </Grid>
      <span style={{ margin: "auto", whiteSpace: "nowrap" }}>
        تمامی حقوق برای شرکت فلان محفوظ است
      </span>
    </Grid>
  )
}
