import { useEffect } from 'react';
import { useAuth } from './auth';
import { useNavigate } from "react-router-dom";

export function AuthGuard() {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated;
}

