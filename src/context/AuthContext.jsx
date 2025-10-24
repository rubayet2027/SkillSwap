import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const signup = async (email, password) => {
    // placeholder: integrate with backend
    const u = { id: '1', email };
    setUser(u);
    return u;
  };

  const login = async (email, password) => {
    // placeholder
    const u = { id: '1', email };
    setUser(u);
    return u;
  };

  const logout = () => setUser(null);

  const value = { user, signup, login, logout };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
