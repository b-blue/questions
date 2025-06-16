import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import "./App.css";
import Question from "./Question";
import { CurrentTime } from "./Time";
import { useState } from "react";

const neonColors = [
  { value: "pink", label: "Pink", color: "#FF00C8" },
  { value: "green", label: "Green", color: "#39FF14" },
  { value: "blue", label: "Blue", color: "#23DEE8" },
  { value: "yellow", label: "Yellow", color: "#F7FF00" },
  { value: "orange", label: "Orange", color: "#FF9900" },
];

function App() {
  const [color, setColor] = useState("pink");

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
      <Question color={ neonColors.find((c) => c.value == color)?.color ||  "39FF14"}/>
			<ToggleButtonGroup
        value={color}
        exclusive
        onChange={(_, val) => val && setColor(val)}
        sx={{ margin: "20px auto" }}
      >
        {neonColors.map((c) => (
          <ToggleButton
            key={c.value}
            value={c.value}
            sx={{
              color: "#000",
              backgroundColor: c.color,
              border: "2px solid #222",
              fontWeight: "bold",
              fontFamily: "'Silkscreen', sans-serif",
              "&.Mui-selected": {
                boxShadow: `0 0 8px 2px ${c.color}`,
                color: "#fff",
                backgroundColor: c.color,
              },
              "&:hover": {
                backgroundColor: c.color,
                filter: "brightness(1.1)",
              },
              margin: "0 4px",
              minWidth: 40,
            }}
          >
            {c.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <footer>
        <p>
          Made with ❤️ by 🤖B - <CurrentTime />
        </p>
      </footer>
    </Box>
  );
}

export default App;
