import { Header } from "./components/Header";
import { Section } from "./components/Section";

import styles from './App.module.css';


export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Section />
    </div>
  )
}
