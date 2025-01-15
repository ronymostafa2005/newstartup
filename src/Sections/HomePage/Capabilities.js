// MUI
import { Box, Container, Grid, Typography } from "@mui/material";
import CapabilitiesCard from "../../Components/__homepage/CapabilitiesCard";
// __font__
import "@fontsource/poppins";
import "@fontsource/akaya-kanadaka";

// -------------------------------------------------------

function Capabilities() {
  return (
    <Box
      sx={{
        bgcolor: "#F1F1F1",
        py: 5,
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Akaya Kanadaka', sans-serif",
          color: "#fd0ff",
          textAlign: "center",
          mb: { xs: 2, md: 3 },
          fontSize: { xs: "2.5rem", sm: "4rem", md: "6rem" },
          fontWeight: "bold",
        }}
      >
        Capabilities
      </Typography>
      <Container sx={{ px: { xs: 2, md: 2, lg: 0 } }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={6} lg={4}>
            <CapabilitiesCard
              icon="grommet-icons:technology"
              title="Technology"
              content="Day by day we invest in our people and the technology we use in order to meet the ever-growing demands of today’s marketplace."
              sx={{
                title: { fontSize: "1.25rem" },
                content: { fontSize: "0.875rem" },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CapabilitiesCard
              icon="ph:certificate"
              title="Quality Control"
              content="At Startup Packing we strive for excellence and in our pursuit to do that we tend to support the requirements of our customers to meet their evolving demands."
            
              sx={{
                title: { fontSize: "1.25rem" },
                content: { fontSize: "0.875rem" },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CapabilitiesCard
              icon="ant-design:safety-outlined"
              title="Safety/ Health"
              content="At Startup Packing we are very keen of developing the best working environment for our colleagues, suppliers, and visitors as we don’t cut corners when it comes to safety."
              
              sx={{
                title: { fontSize: "1.25rem" },
                content: { fontSize: "0.875rem" },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CapabilitiesCard
              icon="ion:earth"
              title="Environment"
              content="We believe in sustainability, we go green with every step we take hence our cardboard box is 100% recyclable, biodegradable, and renewable!"
              
              sx={{
                title: { fontSize: "1.25rem" },
                content: { fontSize: "0.875rem" },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <CapabilitiesCard
              icon="carbon:delivery"
              title="Supply Chain"
              content="We believe in tomorrow hence we implemented a smarter supply chain that gives us unmatched visibility and insights so we can make informed decisions and deliver better business results as well."
              
              sx={{
                title: { fontSize: "1.25rem" },
                content: { fontSize: "0.875rem" },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Capabilities;

