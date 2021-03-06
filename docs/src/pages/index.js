import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={siteConfig.title}
      description="Description will go into a meta tag in <head />"
    >
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Form State for React</h1>
          <p className="hero__subtitle">
            @10xjs/form is a form state library engineered
            <br />
            for high-performance and user-delight.
          </p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--lg button--primary',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/installation')}
            >
              Documentation
            </Link>
            <div style={{width: 12}} />
            <Link
              className={clsx(
                'button button--secondary button--outline button--lg',
                styles.getStarted,
              )}
              to="https://github.com/10xjs/form"
            >
              Source Code
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className="margin-vert--lg">
          <div className="container">
            <div className="row">
              <div className="col col--12">
                <div className={styles.codeblock}>
                  <CodeBlock className="jsx" live noInline>
                    {`const Submit = () => {
  const [{submitting}] = useFormStatus();
  return <button disabled={submitting}>submit</button>;
};

const Status = () => {
  const [{
    submitting,
    submitSucceeded,
    submitFailed,
    hasErrors,
    result,
  }] = useFormStatus();

  return (
    <div>
      {submitting
        ? 'Loading'
        : submitSucceeded
        ? result
        : submitFailed && hasErrors
        ? 'Validation failed'
        : null}
    </div>
  );
};

const Example = () => (
  <FormProvider
    values={{name: ''}}
    onSubmit={(values) =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve({ok: true, data: \`Hello \${values.name} !\`});
        }, 2000);
      })
    }
    validate={(values) => (values.name === '' ? {name: 'required'} : {})}
  >
    <Form>
      <label>
        Name <fields.input path="name" />
      </label>
      <Submit />
    </Form>
    <Status />
  </FormProvider>
);

render(<Example />);
`}
                  </CodeBlock>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
