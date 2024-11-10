import React, { useEffect, useState } from "react";
//mui
import { Box, Button, Card, Grid, TextField, Typography } from "@mui/material";
//formik
import { useFormik } from "formik";
//yup
import * as Yup from "yup";
//lottie
import Lottie from "lottie-react";
//assets
import contact from "../assets/Animation/contact.json";
//__api__
import { sendMailRequest } from "../__api__/contact";
//recoil
import { useSetRecoilState } from "recoil";
import alertAtom from "../recoil/atoms/alertAtom";
//iconify
import Iconify from "../Components/Iconify";

//--------------------------------------------------------------------------

function ContactPage() {
  const triggerAlert = useSetRecoilState(alertAtom);

  // State for sliding animation trigger
  const [isFormVisible, setIsFormVisible] = useState(false);

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm }) => {
      sendMailRequest(values)
        .then((response) => {
          resetForm();
          triggerAlert({
            isOpen: true,
            isSuccess: true,
            message: "Mail sent successfully",
          });
        })
        .catch((error) => {
          triggerAlert({
            isOpen: true,
            isSuccess: false,
            message: "Something went wrong",
          });
          console.error("Error sending mail", error.response);
        });
    },
  });

  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    formik;

  useEffect(() => {
    // Trigger the sliding effect after the component mounts
    setIsFormVisible(true);
  }, []);

  return (
    <Grid container spacing={5} sx={{ my: { xs: 5, md: 10 } }}>
      <Grid
        item
        xs={12}
        md={6}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Card
          sx={{
            padding: 3,
            width: { xs: "95%", md: "80%" },
            transform: isFormVisible ? "translateX(0)" : "translateX(-100%)", // Apply left-to-right slide
            opacity: isFormVisible ? 1 : 0, // Control opacity
            transition: "transform 1s ease, opacity 1s ease", // Add smooth transition
          }}
        >
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "primary.main",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "primary.main",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Phone NUMBER"
              name="phone_number"
              type="number"
              value={values.phone_number}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone_number && Boolean(errors.phone_number)}
              helperText={touched.phone_number && errors.phone_number}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "primary.main",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.message && Boolean(errors.message)}
              helperText={touched.message && errors.message}
              margin="normal"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "primary.main",
                  },
                  "&:hover fieldset": {
                    borderColor: "primary.main",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "primary.main",
                  },
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Send
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Lottie animationData={contact} style={{ width: "80%" }} />
        <Box sx={{ display: "flex" }}>
          <Iconify
            icon="logos:whatsapp-icon"
            sx={{ width: 40, height: 40, cursor: "pointer" }}
          />
          <Iconify
            icon="logos:facebook"
            sx={{ width: 40, height: 40, mx: 2, cursor: "pointer" }}
          />
          <Iconify
            icon="skill-icons:instagram"
            sx={{ width: 40, height: 40, cursor: "pointer" }}
          />
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContactPage;
