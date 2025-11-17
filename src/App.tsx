import React from "react";
import Home from "./pages/Home";
import TransparentNavbar from "./components/TransparentNavbar";
import "./styles/globals.css";

const App: React.FC = () => {
  return (
    <div 
      className="min-h-screen w-full bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/bg2.jpg')",
      }}
    >
      <Home />
      <TransparentNavbar />

      {/* Optional Footer */}
      <footer className="text-center text-white py-8">
        © {new Date().getFullYear()} Desivers. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
