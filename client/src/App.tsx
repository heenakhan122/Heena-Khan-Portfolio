import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import ModestFilterProject from "@/pages/modestfilter";
import MobileMaristanProject from "@/pages/mobile-maristan";
import KhaistaBoutiqueProject from "@/pages/khaista-boutique";
import AmaniProject from "@/pages/amani";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects/modestfilter" component={ModestFilterProject} />
      <Route path="/projects/mobile-maristan" component={MobileMaristanProject} />
      <Route path="/projects/khaista-boutique" component={KhaistaBoutiqueProject} />
      <Route path="/projects/amani" component={AmaniProject} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WouterRouter base={import.meta.env.BASE_URL}>
          <Router />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

