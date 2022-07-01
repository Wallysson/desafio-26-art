import { Header } from "./components/Header";
import { Section } from "./components/Section";

import styles from './App.module.css';
import { Gallery } from "./components/Gallery";
import { Artists } from "./components/Artists";
import { Footer } from "./components/Footer";


export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Section />
      {/* <Gallery />
      <Artists />
      <Footer /> */}
    </div>
  )
}
