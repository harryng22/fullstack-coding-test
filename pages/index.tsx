import React, { useRef, useLayoutEffect, Component } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "components/DynamicText";
import { Container } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { IDynamicText } from "../interfaces/IDynamicText";

const Home = () => {
  const dynamicText = useRef<IDynamicText>();
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    dynamicText.current.changeValue(e.target.value);
  };

  return (
    <Container>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynamicText ref={dynamicText} />
        <Input onChange={onChange} />
      </main>
    </Container>
  );
};

export default Home;
