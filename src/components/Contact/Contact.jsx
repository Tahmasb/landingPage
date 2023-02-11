import { CardMedia, Grid, Typography } from "@mui/material"
import styles from "./contact.module.css"
import { useFormik } from "formik"
import contact from "./../../assets/img/contact.svg"
export default function Contact() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      phone: "",
      email: "",
      message: "",
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values))
      resetForm()
    },
  })
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
        <label htmlFor="firstName">نام</label>
        <input
          id="firstName"
          autoComplete="off"
          {...formik.getFieldProps("firstName")}
          className={styles.contactInput}
          type="text"
        />

        <label htmlFor="phone">شماره تماس</label>
        <input
          id="phone"
          autoComplete="off"
          {...formik.getFieldProps("phone")}
          className={styles.contactInput}
          type="text"
        />
        <label htmlFor="email">ایمیل</label>
        <input
          id="email"
          {...formik.getFieldProps("email")}
          autoComplete="off"
          className={styles.contactInput}
          type="text"
        />
        <label htmlFor="message">پیام</label>
        <textarea
          id="message"
          {...formik.getFieldProps("message")}
          autoComplete="off"
          className={styles.contactInput}
          rows="5"
        ></textarea>
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className={`${styles.formButton} home-button`}
        >
          ارسال
        </button>
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
