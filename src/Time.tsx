import React from "react";

// Add this above your App component or in a separate file
export const CurrentTime: React.FC = () => {
  const [now, setNow] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  return <span>{now.toLocaleTimeString()}</span>;
};