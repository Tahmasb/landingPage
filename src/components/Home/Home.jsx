import { CardMedia, Grid, Typography } from "@mui/material"
import banner from "./../../assets/img/banner-2.svg"
import styles from "./home.module.css"
import { AiOutlineSetting } from "react-icons/ai"
import { BsArrowLeftShort } from "react-icons/bs"
export default function Home() {
  return (
    <Grid
      sx={{
        flexDirection: { xs: "column", md: "row" },
        mb: { xs: -2, md: 5 },
      }}
      className={styles.home}
    >
      <Grid
        sx={{ order: { xs: 2, md: -3 } }}
        flex={1}
        className={styles.homeChild1}
      >
        <Typography my={4} className={styles.homeTitle} variant="h3">
          سایت فروش اشتراک فلان محصول
        </Typography>
        <Typography my={3}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک استلورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است
        </Typography>
        <Grid
          sx={{ justifyContent: { xs: "center", md: "start" } }}
          className={styles.homeButtonParent}
        >
          <button className="home-button">
            <AiOutlineSetting style={{ marginLeft: "6px" }} />
            خدمات ما
          </button>
          <button className="home-button">
            <BsArrowLeftShort style={{ marginLeft: "6px" }} />
            تماس با ما
          </button>
        </Grid>
      </Grid>
      <Grid flex={1}>
        <CardMedia src={banner} alt="banneer" component={"img"} />
      </Grid>
    </Grid>
  )
}
