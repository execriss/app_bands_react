import { createTheme } from "@mui/material";
import { blue } from "@mui/material/colors";

/**
 * Custom theme used in this proyect
 */
const theme = createTheme({
    palette: {
        primary: {
            light: blue[400],
            main: blue[500],
            dark: blue[600]
        }
    }
});

export default theme;