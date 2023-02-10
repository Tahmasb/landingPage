import { CardMedia, Grid, Typography } from "@mui/material"
import styles from "./contact.module.css"
import contact from "./../../assets/img/contact.svg"
export default function Contact() {
  return (
    <Grid
      id="contact"
      display="flex"
      py={9}
      bgcolor="var(--lightBlue)"
      sx={{
        flexDirection: { xs: "column", md: "row" },
        px: { xs: 4, md: 8, lg: 15 },
      }}
    >
      <Grid
        flex={1}
        display="flex"
        flexDirection={"column"}
        m={3}
        p={2}
        justifyContent="center"
        className={styles.contactForm}
        sx={{ m: { xs: 0, sm: 9, md: 2, lg: 12 } }}
      >
        <label htmlFor="name">نام</label>
        <input
          autoComplete="off"
          id="name"
          className={styles.contactInput}
          type="text"
        />

        <label htmlFor="phone">شماره تماس</label>
        <input
          autoComplete="off"
          id="phone"
          className={styles.contactInput}
          type="text"
        />
        <label htmlFor="email">ایمیل</label>
        <input
          autoComplete="off"
          id="email"
          className={styles.contactInput}
          type="text"
        />
        <label htmlFor="message">پیام</label>
        <textarea
          autoComplete="off"
          className={styles.contactInput}
          name=""
          id="message"
          rows="5"
        ></textarea>
        <button className={`${styles.formButton} home-button`}>ارسال</button>
      </Grid>
      <Grid m="auto" flex={1}>
        <Typography
          textAlign={"center"}
          variant="h5"
          fontFamily="EstedadBold"
          color="var(--darkBlue)"
          my={3}
        >
          تماس با ما
        </Typography>
        <Typography my={2}>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </Typography>
        <CardMedia src={contact} alt="contact" component="img" />
      </Grid>
    </Grid>
  )
}
