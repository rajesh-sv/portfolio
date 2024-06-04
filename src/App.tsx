import { ThemeProvider } from "@/components/theme-provider";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex min-h-dvh flex-col antialiased">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
