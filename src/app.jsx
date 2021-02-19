import './app.css';
import Auth from '../src/users/pages/auth';
import Header from '../src/shared/components/Navigation/mainNavigation';
import Footer from './shared/components/Navigation/footer';

import { AuthContext } from '../src/shared/context/auth-context';
import { useAuth } from '../src/shared/hooks/auth-hooks';

const App = () => {
  const { userID, token, login, logout } = useAuth();

  return (
    <AuthContext.Provider
      value={{
        userID: userID,
        token: token,
        login: login,
        logout: logout,
      }}
    >
      <div className="App bg-black">
        <Header />
        <main>
          <Auth />
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
