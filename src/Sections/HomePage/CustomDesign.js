import React, { useCallback, useEffect, useRef, useState } from "react";
// MUI components
import { Box, Button, Grid, Typography } from "@mui/material";
// Assets
import customImage from "../../assets/images/HomePage/customImage.jpg";
// React router for navigation
import { useNavigate } from "react-router-dom";
// Paths for routing
import { PATH_AUTH, PATH_SITE } from "../../routes/paths";
// Recoil for state management
import { useSetRecoilState } from "recoil";
import alertAtom from "../../recoil/atoms/alertAtom";

function CustomDesign() {
  // Recoil hook to trigger alert for unauthorized access
  const triggerAlert = useSetRecoilState(alertAtom);

  // Hook for navigation
  const navigate = useNavigate();

  // State to track whether the image is visible in the viewport
  const [isImageVisible, setIsImageVisible] = useState(false);

  // Ref to the image element for IntersectionObserver
  const imageRef = useRef(null);

  // Function to handle navigation to custom design page, checks if user is logged in
  const openCustomDesignPage = useCallback(async () => {
    if (localStorage.getItem("access_token")) {
      // Navigate to custom design page if logged in
      navigate(PATH_SITE.customDesign);
    } else {
      // Show alert and navigate to login if not logged in
      triggerAlert({
        isOpen: true,
        isSuccess: false,
        message: "You should Login",
      });
      navigate(PATH_AUTH.login);
    }
  }, [navigate, triggerAlert]); // Including dependencies to avoid stale closures

  // Using IntersectionObserver to track when the image is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the image is in the viewport, make it visible
          setIsImageVisible(true);
        } else {
          // If the image is out of the viewport, hide it
          setIsImageVisible(false);
        }
      });
    }, { threshold: 0.5 }); // 50% of the image must be visible

    // Start observing the image element
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []); // Empty dependency array to run only once on mount

  return (
    <Box sx={{ my: 5 }}>
      {/* Title of the section */}
      <Typography
        sx={{
          textAlign: "center",
          mb: { xs: 2, md: 3 },
          fontSize: { xs: "3rem", sm: "4rem", md: "6rem" }, // Responsive font sizes
          fontWeight: "bold", // Bold title for emphasis
        }}
      >
        Make Your Custom Design
      </Typography>

      {/* Grid layout for image and description */}
      <Grid container>
        {/* Image section with animation when it becomes visible */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            ref={imageRef} // Link the image to the ref for IntersectionObserver
            component="img"
            src={customImage}
            sx={{
              width: "50%",
              transform: isImageVisible ? "translateX(0)" : "translateX(-100%)", // Smooth transition for sliding in
              opacity: isImageVisible ? 1 : 0, // Fade-in effect when visible
              transition: "transform 1s ease, opacity 1s ease", // Smooth transition for both opacity and movement
            }}
          />
        </Grid>

        {/* Text description section */}
        <Grid item xs={12} md={6} sx={{ px: { xs: 2, md: 5 } }}>
          <Typography variant="h6" sx={{ color: "black" }}>
            You have the freedom to create your own custom box packaging,
            tailored exactly to your needs. Whether it's for branding, gifting,
            or shipping, you can choose the size, material, design, and even add
            your own logo or artwork. Our easy-to-use customization tools allow
            you to bring your vision to life, ensuring your packaging is as
            unique as your product. Start customizing today and make your
            packaging stand out!
          </Typography>

          {/* Button to trigger custom design page */}
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              onClick={openCustomDesignPage}
              variant="contained"
              sx={{ width: 300 }} // Set width for consistency
            >
              Get Started
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CustomDesign;
