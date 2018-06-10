import React from 'react';
import { withStyles } from 'material-ui/styles';
import { ListItem } from 'material-ui/List';
import Badge from 'material-ui/Badge';

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
