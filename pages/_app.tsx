import "../styles/globals.css";
import { ChakraProvider, Box } from "@chakra-ui/react";
import FirebaseContext from "contexts/firebase";
import { auth, firebaseApp } from "services/firebase";
import { getFirestore } from "firebase/firestore";
import Header from 'components/header';

const db = getFirestore();
const MyApp = ({ Component, pageProps }) => {
  return (
    <FirebaseContext.Provider value={{ firebaseApp, auth, db }}>
      <ChakraProvider>
        <Header />
        <Box h="7" />
        <Component {...pageProps} />
      </ChakraProvider>
    </FirebaseContext.Provider>
  );
};

export default MyApp;
