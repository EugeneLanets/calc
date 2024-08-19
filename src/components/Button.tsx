import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
interface ButtonProps extends MuiButtonProps {
  value: number;
}

function Button(props: ButtonProps) {
  return (
    <Grid2 display="flex" justifyContent="center" alignItems="center" md={1}>
      <MuiButton variant={"contained"} fullWidth>
        {props.value}
      </MuiButton>
    </Grid2>
  );
}

export default Button;
