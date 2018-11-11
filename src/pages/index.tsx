import React from 'react';
import { Link } from 'gatsby';

import Layout from '../layout';
import Image from '../components/Image';

class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <figure style={{ maxWidth: '450px', marginBottom: '1.45rem' }}>
          <Image />
        </figure>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    );
  }
}

export default IndexPage;
