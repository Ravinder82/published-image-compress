
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Sign in to compress your images
        </h2>
        <p className="text-gray-600 mb-6">
          Please sign in to access the image compression tool.
        </p>
        <Button 
          onClick={() => navigate('/auth')}
          className="bg-black hover:bg-gray-800 text-white"
        >
          Sign In / Sign Up
        </Button>
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
