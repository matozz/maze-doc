import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";
import useThemeContext from "@theme/hooks/useThemeContext";

import Translate, { translate } from "@docusaurus/Translate";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  // const { isDarkTheme, setLightTheme, setDarkTheme } = useThemeContext();

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <Translate id="home.title">{siteConfig.title}</Translate>
        </h1>
        <p className="hero__subtitle">
          <Translate id="home.tagline">{siteConfig.tagline}</Translate>
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            style={{ fontWeight: 500, color: "#1976d2" }}
            to="/docs/getting-started/Installation"
          >
            <Translate id="home.start">Getting Started</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      // title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
