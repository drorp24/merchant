import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { ListItem } from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';

const styles = {
  colorPrimary: {
    background: '#000',
  },
};

const BadgedListItem = (props) => (
  <div>
    <ListItem {...props} />
    <Badge
      badgeContent={4}
      color="primary"
      style={{
        position: 'relative',
        left: '75%',
        bottom: '35px',
      }}
    />
  </div>
);

export default withStyles(styles)(BadgedListItem);
