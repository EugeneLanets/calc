import { Button, Container, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

function App() {
  return (
    <Container
      sx={{ p: 10, border: "1px solid black", borderRadius: 5 }}
      maxWidth={"sm"}
    >
      <TextField
        variant="outlined"
        fullWidth
        InputProps={{
          sx: {
            "& input": {
              textAlign: "right",
            },
          },
        }}
      />
      <Grid2 container spacing={3} columns={4}>
        <Grid2
          display="flex"
          justifyContent="center"
          alignItems="center"
          md={1}
        >
          <Button variant={"contained"} fullWidth>
            7
          </Button>
        </Grid2>
        <Grid2 md={1}>8</Grid2>
        <Grid2 md={1}>9</Grid2>
        <Grid2 md={1}>+</Grid2>
        <Grid2 md={1}>4</Grid2>
        <Grid2 md={1}>5</Grid2>
        <Grid2 md={1}>6</Grid2>
        <Grid2 md={1}>-</Grid2>
        <Grid2 md={1}>1</Grid2>
        <Grid2 md={1}>2</Grid2>
        <Grid2 md={1}>3</Grid2>
        <Grid2 md={1}>=</Grid2>
      </Grid2>
    </Container>
  );
}

export default App;
