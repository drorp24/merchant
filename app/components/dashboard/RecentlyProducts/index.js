import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { List, ListItem } from '@material-ui/core/List';
import Subheader from '@material-ui/core/Subheader';
import Divider from '@material-ui/core/Divider';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import IconMenu from '@material-ui/core/IconMenu';
import MenuItem from '@material-ui/core/MenuItem';
import { grey400, cyan600, white } from '@material-ui/core/colors';
import typography from '@material-ui/core/Typography';

const RecentlyProducts = (props) => {
  const styles = {
    subheader: {
      fontSize: 24,
      fontWeight: typography.fontWeightLight,
      backgroundColor: cyan600,
      color: white,
    },
  };

  const iconButtonElement = (
    <IconButton
      touch
      tooltipPosition="bottom-left"
    >
      <FontIcon color={grey400} className="material-icons">more_vert_icon</FontIcon>
    </IconButton>
  );

  const rightIconMenu = (
    <IconMenu iconButtonElement={iconButtonElement}>
      <MenuItem>View</MenuItem>
    </IconMenu>
  );

  return (
    <Paper>
      <List>
        <Subheader style={styles.subheader}>Recent Deals</Subheader>
        {props.data.map((item) =>
          <div key={item.title}>
            <ListItem
              leftAvatar={
                <Avatar
                  icon={
                    <FontIcon className="material-icons">image</FontIcon>
                  }
                />}
              primaryText={item.title}
              secondaryText={item.text}
              rightIconButton={rightIconMenu}
            />
            <Divider inset />
          </div>
        )}
      </List>
    </Paper>
  );
};

RecentlyProducts.propTypes = {
  data: PropTypes.array,
};

export default RecentlyProducts;
