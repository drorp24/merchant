/*
  Get more info from:
  http://flexboxgrid.com/
*/

import React from 'react';
import { white, blue500, grey200 } from 'material-ui/styles/colors';
import PageBase from '../../../components/PageBase';

const styles = {
  boxRow: {
    position: 'relative',
    boxSizing: 'border-box',
    marginBottom: '1rem',
    minHeight: '2rem',
    background: blue500,
    border: '1px solid #FFF',
    borderRadius: '2px',
    overflow: 'hidden',
    textAlign: 'center',
    color: white,
  },
  boxLarge: {
    height: '8rem',
  },
  boxContainer: {
    paddingTop: '1rem',
    paddingLeft: '1rem',
    paddingRight: '1rem',
    background: grey200,
  },
};

const GridSystemPage = () => (
  <PageBase
    title="Grid System Page"
    navigation="Application / Grid System Page"
    minHeight={466}
  >
    <section>
      <h3>Responsive</h3>
      <div className="row">
        <div className="col-xs-12 col-sm-3 col-md-2 col-lg-1">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs-6 col-sm-6 col-md-8 col-lg-10">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs-6 col-sm-3 col-md-2 col-lg-1">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-3 col-md-2 col-lg-1">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs-12 col-sm-9 col-md-10 col-lg-11">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-10 col-sm-6 col-md-8 col-lg-10">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs-2 col-sm-6 col-md-4 col-lg-2">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3>Fluid</h3>
      <div className="row">
        <div className="col-xs-12">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-1">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs-11">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs-10">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-3">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs-9">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs-8">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-5">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs-7">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-6">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs-6">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3>Offsets</h3>
      <div className="row">
        <div className="col-xs-offset-11 col-xs-1">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-10 col-xs-2">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-9 col-xs-3">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-8 col-xs-4">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-7 col-xs-5">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-6 col-xs-6">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-5 col-xs-7">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-4 col-xs-8">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-3 col-xs-9">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-10">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-offset-1 col-xs-11">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3>Auto Width</h3>
      <div className="row">
        <div className="col-xs">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xs">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs">
          <div style={styles.boxRow}>
          </div>
        </div>
        <div className="col-xs">
          <div style={styles.boxRow}>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3>Alignment</h3>
      <h4>.start-</h4>
      <div className="row">
        <div className="col-xs-12">
          <div style={styles.boxContainer}>
            <div className="row start-xs">
              <div className="col-xs-6">
                <div style={styles.boxRow}>
                  start
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>.center-</h4>
      <div className="row">
        <div className="col-xs-12">
          <div style={styles.boxContainer}>
            <div className="row center-xs">
              <div className="col-xs-6">
                <div style={styles.boxRow}>
                  center
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>.end-</h4>
      <div className="row">
        <div className="col-xs-12">
          <div style={styles.boxContainer}>
            <div className="row end-xs">
              <div className="col-xs-6">
                <div style={styles.boxRow}>
                  end
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>.top-</h4>
      <div className="row">
        <div className="col-xs-12">
          <div style={styles.boxContainer}>
            <div className="row top-xs">
              <div className="col-xs-6">
                <div style={{ ...styles.boxRow, ...styles.boxLarge }}>
                </div>
              </div>
              <div className="col-xs-6">
                <div style={styles.boxRow}>
                  top
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>.middle-</h4>
      <div className="row">
        <div className="col-xs-12">
          <div style={styles.boxContainer}>
            <div className="row middle-xs">
              <div className="col-xs-6">
                <div style={{ ...styles.boxRow, ...styles.boxLarge }}>
                </div>
              </div>
              <div className="col-xs-6">
                <div style={styles.boxRow}>
                  middle
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>.bottom-</h4>
      <div className="row">
        <div className="col-xs-12">
          <div style={styles.boxContainer}>
            <div className="row bottom-xs">
              <div className="col-xs-6">
                <div style={{ ...styles.boxRow, ...styles.boxLarge }}>
                </div>
              </div>
              <div className="col-xs-6">
                <div style={styles.boxRow}>
                  bottom
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h3>Distribution</h3>
      <h4>around</h4>
      <div className="row">
        <div className="col-xs-12">
          <div style={styles.boxContainer}>
            <div className="row around-xs">
              <div className="col-xs-2">
                <div style={styles.boxRow}>
                </div>
              </div>
              <div className="col-xs-2">
                <div style={styles.boxRow}>
                </div>
              </div>
              <div className="col-xs-2">
                <div style={styles.boxRow}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h4>between</h4>
      <div className="row">
        <div className="col-xs-12">
          <div style={styles.boxContainer}>
            <div className="row between-xs">
              <div className="col-xs-2">
                <div style={styles.boxRow}>
                </div>
              </div>
              <div className="col-xs-2">
                <div style={styles.boxRow}>
                </div>
              </div>
              <div className="col-xs-2">
                <div style={styles.boxRow}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </PageBase>
);

export default GridSystemPage;
