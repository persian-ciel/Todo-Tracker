// App.jsx
import { ThemeProvider } from "./theme/ThemeContext";
import MainContent from "./components/MainContent";

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

function AppContent() {
  return (
    <div>
      <MainContent />
    </div>
  );
}

export default App;
