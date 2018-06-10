import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import CircularProgress from '@material-ui/core/CircularProgress';
import globalStyles from '../../styles';

class PageBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: this.props.loading,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loading !== this.props.loading) {
      this.setState({
        loading: nextProps.loading,
      });
    }
  }

  render() {
    const { title, navigation, noWrapContent, children, minHeight } = this.props;

    const content = (
      <div style={{ minHeight: minHeight || 500, height: '100%' }}>
        {
          this.state.loading ? (
            <div style={{ position: 'relative' }}>
              <CircularProgress
                size={40}
                variant="indeterminate"
                style={{ marginLeft: '50%' }}
              />
            </div>
          ) :
            <div>
              { children }
            </div>
        }
      </div>
    );

    return (
      <div>
        <span style={globalStyles.navigation}>{navigation}</span>

        { noWrapContent ? (
          <div>
            { content }
          </div>
        ) : (
          <Paper style={globalStyles.paper}>
            <h3 style={globalStyles.title}>{title}</h3>

            <Divider />

            { content }

            <div style={globalStyles.clear} />

          </Paper>
        )}
        <p>Powered by Crymbo</p>
      </div>
    );
  }
}

PageBase.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.string,
  noWrapContent: PropTypes.bool,
  children: PropTypes.any,
  minHeight: PropTypes.number,
  loading: PropTypes.bool,
};

export default PageBase;
