import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import { Container } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";

const Home = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Container>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynamicText />
        <Input onChange={onChange} />
      </main>
    </Container>
  );
};

export default Home;
