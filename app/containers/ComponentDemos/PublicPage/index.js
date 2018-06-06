import React from 'react';
import { Link } from 'react-router';
import {
  Card,
  CardHeader,
  CardText,
} from 'material-ui/Card';

const styles = {
  container: {
    display: 'table',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  box: {
    display: 'table-cell',
    verticalAlign: 'middle',
  },
  card: {
    maxWidth: 1024,
    minHeight: 500,
    margin: 'auto',
  },
};

const PublicPage = () => (
  <div style={styles.container}>
    <div className="row" style={styles.box}>
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-md m-b-15">
        <Card style={styles.card}>
          <CardHeader
            title="Public Page"
            subtitle="This page does not need authentication"
            avatar={<img style={{ width: 49, height: 54 }} src="http://adminwebtemplates.com/logo-small.png" alt="Fortress Admin Template" />}
          />
          <CardText>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim error, inventore rerum quae facilis suscipit aut assumenda repellendus necessitatibus ab possimus, minus magni odit repudiandae magnam, asperiores nihil, eos consequatur.</p>
            <Link to="/">Go Back to Dashboard</Link>
          </CardText>
        </Card>
      </div>
    </div>
  </div>
);

export default PublicPage;
