import { Container, TextField } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import Button from "./components/Button.tsx";

function App() {
  return (
    <Container
      sx={{ p: 5, border: "1px solid black", borderRadius: 5 }}
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
        sx={{ marginBottom: 5 }}
      />
      <Grid2 container spacing={3} columns={4}>
        <Button value={7} />
        <Button value={8} />
        <Button value={9} />
        <Button value={0} />
        <Button value={4} />
        <Button value={5} />
        <Button value={6} />
        <Button value={0} />
        <Button value={1} />
        <Button value={2} />
        <Button value={3} />
        <Button value={0} />
        <Button value={0} />
        <Button value={0} />
        <Button value={0} />
        <Button value={0} />
      </Grid2>
    </Container>
  );
}

export default App;
