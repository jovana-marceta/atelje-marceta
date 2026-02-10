import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center container-narrow">
        <h1 className="font-heading text-6xl text-primary mb-4">404</h1>
        <p className="font-body text-xl text-muted-foreground mb-8">
          Stranica nije pronađena
        </p>
        <a href="/" className="btn-classical inline-block">
          Povratak na početnu
        </a>
      </div>
    </div>
  );
};

export default NotFound;
