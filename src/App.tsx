import { Box } from "@mui/material";
import "./App.css";
import Question from "./Question";
import { CurrentTime } from "./Time";

function App() {
  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        textAlign: "left",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <Question />
      <footer>
        <p>
          Made with ❤️ by 🤖B - <CurrentTime />
        </p>
      </footer>
    </Box>
  );
}

export default App;
