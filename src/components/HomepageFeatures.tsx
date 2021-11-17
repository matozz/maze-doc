/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { ReactNode } from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import MountainSvg from "../assets/mountain.svg";
import TreeSvg from "../assets/tree.svg";
import ReactSvg from "../assets/react.svg";

type FeatureItem = {
  title: string;
  image: (cls: any) => JSX.Element;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    image: (cls: any) => <MountainSvg className={cls} />,
    description: (
      <>
        Maze provides a robust, customizable, and accessible library of
        foundational and advanced components, enabling you to build your own
        design system and develop React applications faster.
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    image: (cls: any) => <TreeSvg className={cls} />,
    description: (
      <>
        Maze components work in isolation. They are self-supporting, and will
        only inject the styles they need to display. They don't rely on any
        global style-sheets.
      </>
    ),
  },
  {
    title: "Powered by React",
    image: (cls: any) => <ReactSvg className={cls} />,
    description: (
      <>
        Customize your website by reusing React. Maze can help your to develop
        your website faster and more efficient.
      </>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        {/* <img className={styles.featureSvg} alt={title} src={image} /> */}
        {image(styles.featureSvg)}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
