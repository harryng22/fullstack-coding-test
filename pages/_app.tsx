import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import FirebaseContext from "contexts/firebase";
import { auth, firebaseApp } from "services/firebase";

const MyApp = ({ Component, pageProps }) => {
  return (
    <FirebaseContext.Provider value={{ firebaseApp, auth }}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </FirebaseContext.Provider>
  );
};

export default MyApp;
