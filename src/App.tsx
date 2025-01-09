import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import ServicesPage from "./pages/Services";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import EmergencyPlumbingPage from "./pages/services/EmergencyPlumbing";
import NewConstructionPage from "./pages/services/NewConstruction";
import SumpPumpPage from "./pages/services/SumpPump";
import BathroomKitchenPage from "./pages/services/BathroomKitchen";
import WaterHeaterPage from "./pages/services/WaterHeater";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/emergency-plumbing" element={<EmergencyPlumbingPage />} />
          <Route path="/services/new-construction" element={<NewConstructionPage />} />
          <Route path="/services/sump-pump" element={<SumpPumpPage />} />
          <Route path="/services/bathroom-kitchen" element={<BathroomKitchenPage />} />
          <Route path="/services/water-heater" element={<WaterHeaterPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;