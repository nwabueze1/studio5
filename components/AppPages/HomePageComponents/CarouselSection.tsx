import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { autoPlay } from "react-swipeable-views-utils";
import Printing from "../../../public/assets/Images/printer.webp";
import VideoCamera from "../../../public/assets/Images/video camera.webp";
import Camera from "../../../public/assets/Images/istockphoto-153470034-612x612.webp";
import Banner from "../../../public/assets/Images/banner printer.webp";
import AppImage from "../../AppImage/AppImage";
import { NAVIGATIONLINKS } from "../../navigation/NavigationLinks";
import Stack from "@mui/material/Stack";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath: Printing,
    tag: "High Quality Printing",
    href: NAVIGATIONLINKS.PRINT,
  },
  {
    imgPath: Banner,
    tag: "Printing of Flex",
    href: NAVIGATIONLINKS.PRINT,
  },
  {
    imgPath: Camera,
    tag: "Digital Studio",
    href: NAVIGATIONLINKS.COVERAGE,
  },
  {
    imgPath: VideoCamera,
    tag: "Video Coverage",
    href: NAVIGATIONLINKS.VIDEOBOOKING,
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: React.SetStateAction<number>) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 700, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: "flex",

          bgcolor: "background.default",
        }}
      >
        <Stack direction={"row"} spacing={5}>
          <Typography variant="h5" component={"span"}>
            {images[activeStep].tag}
          </Typography>
          <Button endIcon={<ChevronRight fontSize="large"></ChevronRight>}>
            See More
          </Button>
        </Stack>
        {/* <Typography>{images[activeStep].label}</Typography> */}
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 ? (
              <>
                <AppImage
                  Url={step.imgPath}
                  Height="255"
                  Width="400"
                  Alt="imges"
                  key={index}
                ></AppImage>
              </>
            ) : //   <Box
            //     component="img"
            //     sx={{
            //       height: 255,
            //       display: "block",
            //       maxWidth: 400,
            //       overflow: "hidden",
            //       width: "100%",
            //     }}
            //     src={step.imgPath}
            //     alt={step.label}
            //   />
            null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}

export default SwipeableTextMobileStepper;
