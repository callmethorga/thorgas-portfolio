import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'What I Built',
    Svg: require('@site/static/img/undraw_animate.svg').default,
    description: (
      <>
        See <code>Tech Projects</code> directory above.
      </>
    ),
  },
  {
    title: 'My Other Skills',
    Svg: require('@site/static/img/undraw_cert.svg').default,
    description: (
      <>
        See <code>Other Works</code> directory above.
      </>
    ),
  },
  {
    title: 'Hit Me Up!',
    Svg: require('@site/static/img/undraw_futuristic_interface.svg').default,
    description: (
      <>
        See <code>Social</code> tab below. 
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
