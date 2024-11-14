import React from 'react';
import Button from '@mui/material/Button';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';

// Collection of images with their labels and paths
const MyCollection = [
    {
        label: "First Picture",
        imgPath: "https://media.geeksforgeeks.org/wp-content/uploads/20210208000010/1.png",
    },
    {
        label: "Second Picture",
        imgPath: "https://media.geeksforgeeks.org/wp-content/uploads/20210208000009/2.png",
    },
    {
        label: "Third Picture",
        imgPath: "https://media.geeksforgeeks.org/wp-content/uploads/20210208000008/3.png",
    },
];

const App = () => {
    const CollectionSize = MyCollection.length;
    const theme = useTheme();
    const [index, setActiveStep] = React.useState(0);

    // Function to go to the next picture
    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => Math.min(prevActiveStep + 1, CollectionSize - 1));
    };

    // Function to go to the previous picture
    const goToPreviousPicture = () => {
        setActiveStep((prevActiveStep) => Math.max(prevActiveStep - 1, 0));
    };

    return (
        <div style={{ marginLeft: "40%" }}>
            <h2>How to Create Image Slider in ReactJS?</h2>
            <div style={{ maxWidth: 400, flexGrow: 1 }}>
                <Paper
                    square
                    elevation={0}
                    style={{
                        height: 50,
                        display: "flex",
                        paddingLeft: theme.spacing(4),
                        backgroundColor: theme.palette.background.default,
                        alignItems: "center",
                    }}
                >
                    <Typography>{MyCollection[index].label}</Typography>
                </Paper>
                <img
                    src={MyCollection[index].imgPath}
                    style={{
                        height: 255,
                        width: "100%",
                        maxWidth: 400,
                        display: "block",
                        overflow: "hidden",
                    }}
                    alt={MyCollection[index].label}
                />
                <MobileStepper
                    variant="text"
                    position="static"
                    steps={CollectionSize}
                    activeStep={index}
                    nextButton={
                        <Button size="small" onClick={goToNextPicture} disabled={index === CollectionSize - 1}>
                            Next
                            {theme.direction !== "rtl" ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={goToPreviousPicture} disabled={index === 0}>
                            {theme.direction !== "rtl" ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                            Back
                        </Button>
                    }
                />
            </div>
        </div>
    );
};

export default App;
