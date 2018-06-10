import getMuiTheme from '@material-ui/core/styles/getMuiTheme';

const themeDarkBlue = getMuiTheme({
  palette: {
  },
  appBar: {
    height: 57,
    color: '#2b3643',
  },
  drawer: {
    width: 230,
    color: '#364150',
  },
  raisedButton: {
    primaryColor: '#1E88E5',
  },
  tabs: {
    backgroundColor: '#2b3643',
    textColor: '#ffffff',
    selectedTextColor: '#ffffff',
  },
  inkBar: {
    backgroundColor: '#36c6d3',
  },
});


export default themeDarkBlue;
