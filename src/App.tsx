import Router from 'components/Router';
import { useState }from 'react';
import { Layout } from 'components/Layout';
import { getAuth } from "firebase/auth";
import { app } from "firebaseApp";


function App() {
  const auth = getAuth(app);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!auth?.currentUser
  );

  console.log("auth -----> ", auth);
  console.log("isAuthenticated -----> ", isAuthenticated);


  return (
    <Layout>
      <Router />
    </Layout>
  );
}

export default App;
