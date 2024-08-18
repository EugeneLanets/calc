import { Container, TextField } from "@mui/material";

function App() {
  return (
    <Container sx={{ backgroundColor: "blue", p: 10, textAlign: "right" }}>
      <TextField
        variant="outlined"
        label="0"
        fullWidth
        InputProps={{
          sx: {
            "& input": {
              textAlign: "right",
            },
          },
        }}
      />
    </Container>
  );
}

export default App;
