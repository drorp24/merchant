import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { createStructuredSelector } from 'reselect';
import Icon from '@material-ui/core/Icon';
import * as appActions from '../../containers/App/actions';
import { makeSelectGlobal } from '../../containers/App/selectors';
import Theme from '../../config/theme';
import Styles from './styles';
import TabNav from './TabsNav';

const theme = new Theme();

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTheme: theme.get(props.appStore.currentTheme),
    };

    this.signOut = this.signOut.bind(this);
    this.openSettingsDrawer = this.openSettingsDrawer.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.appStore.currentTheme !== this.props.appStore.currentTheme) {
      this.setState({
        currentTheme: theme.get(newProps.appStore.currentTheme),
      });
    }
  }

  signOut() {
    this.props.actions.signOut();
  }

  openSettingsDrawer() {
    if (this.props.appStore.openSettingDrawer) {
      this.props.actions.closeSettingsDrawer();
    } else {
      this.props.actions.openSettingsDrawer();
    }
  }

  render() {
    const { styles, handleChangeRequestNavDrawer, appStore } = this.props;
    const style = Styles(appStore.isBoxedLayout, this.state.currentTheme);

    return (
      <div>
        <AppBar
          style={{ ...styles, ...style.appBar }}
          title={
            <div>
              {this.props.appStore.showTabs ? <TabNav style={style} /> : null}
            </div>
          }
          iconElementLeft={
            <IconButton
              iconStyle={style.iconButton}
              style={style.menuButton}
              onClick={handleChangeRequestNavDrawer}
            >
              <Icon
                color={this.state.currentTheme.appBarMenuButtonColor}
                className="material-icons"
              >
                menu
              </Icon>
            </IconButton>
          }
          iconElementRight={
            <div style={style.iconsRightContainer}>
              <IconButton
                iconStyle={style.iconButton}
                onClick={this.openSettingsDrawer}
              >
                <Icon
                  color={this.state.currentTheme.appBarMenuButtonColor}
                  className="material-icons"
                >
                  settings
                </Icon>
              </IconButton>
              <Menu
                className="header-apps"
                color={this.state.currentTheme.appBarMenuButtonColor}
                iconButtonElement={
                  <IconButton>
                    <Icon
                      color={this.state.currentTheme.appBarMenuButtonColor}
                      className="material-icons"
                    >
                      view_module
                    </Icon>
                  </IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem key={1} primaryText="Application 1" />
                <MenuItem key={2} primaryText="Application 2" />
                <MenuItem key={3} primaryText="Application 3" />
              </Menu>
              <Menu
                color={this.state.currentTheme.appBarMenuButtonColor}
                iconButtonElement={
                  <IconButton>
                    <Icon
                      color={this.state.currentTheme.appBarMenuButtonColor}
                      className="material-icons"
                    >
                      more_vert_icon
                    </Icon>
                  </IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem primaryText="Sign out" onClick={this.signOut} />
              </Menu>
            </div>
          }
        />
      </div>
    );
  }
}

Header.propTypes = {
  styles: PropTypes.object,
  handleChangeRequestNavDrawer: PropTypes.func,
  actions: PropTypes.any,
  appStore: PropTypes.any,
};

const mapStateToProps = createStructuredSelector({
  appStore: makeSelectGlobal(),
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
