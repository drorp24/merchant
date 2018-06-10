import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import { orange600, cyan600, blueGrey600 } from 'material-ui/styles/colors';

const data = {
  menus: [
    {
      id: 'dashboard',
      text: 'Dashboard',
      icon: <FontIcon className="material-icons">assessment</FontIcon>,
      url: '/',
      index: 0,
    },
    {
      id: 'dashboard',
      text: 'Customers',
      icon: <FontIcon className="material-icons">face</FontIcon>,
      url: '/',
      index: 1,
    },
    {
      id: 'dashboard',
      text: 'Orders',
      icon: <FontIcon className="material-icons">assignment</FontIcon>,
      url: '/',
      index: 2,
    },
    {
      id: 'dashboard',
      text: 'Liquidity',
      icon: <FontIcon className="material-icons">local_atm</FontIcon>,
      url: '/',
      index: 3,
    },
    {
      id: 'dashboard',
      text: 'Settings',
      icon: <FontIcon className="material-icons">settings</FontIcon>,
      url: '/',
      index: 4,
    },

    /*
    { id: 'api-demo-page', text: 'API Demo', icon: <FontIcon className="material-icons">http</FontIcon>, url: '/apiDemo', index: 1 },
    { id: 'grid-system-page', text: 'Grid System', icon: <FontIcon className="material-icons">view_quilt</FontIcon>, url: '/gridSystem', index: 2 },
    { id: 'icons-page', text: 'Icons', icon: <FontIcon className="material-icons">adjust</FontIcon>, url: '/icons', index: 3 },
    { id: 'image-gallery-page', text: 'Image Gallery', icon: <FontIcon className="material-icons">collections</FontIcon>, url: '/imageGallery', index: 4 },
    { id: 'form-elements-page',
      text: 'Form Elements',
      icon: <FontIcon className="material-icons">web</FontIcon>,
      children: [
        { id: 'auto-complete-page', text: 'Auto Complete', url: '/autoComplete', index: 5 },
        { id: 'buttons-page', text: 'Buttons', url: '/buttons', index: 6 },
        { id: 'date-picker-page', text: 'Date Picker', url: '/datePicker', index: 7 },
        { id: 'select-page', text: 'Select', url: '/select', index: 8 },
        { id: 'switches-page', text: 'Switches', url: '/switches', index: 9 },
        { id: 'test-field-page', text: 'Text Field', url: '/textField', index: 10 },
        { id: 'time-picker-page', text: 'Time Picker', url: '/timePicker', index: 11 },
      ],
    },
    { id: 'chart-page',
      text: 'Charts',
      icon: <FontIcon className="material-icons">show_chart</FontIcon>,
      children: [
        { id: 'barchart-page', text: 'BarChart Page', url: '/barChart', index: 12 },
        { id: 'linechart-page', text: 'LineChart Page', url: '/lineChart', index: 13 },
        { id: 'piechart-page', text: 'PieChart Page', url: '/pieChart', index: 14 },
      ],
    },
    { id: 'dialog-page', text: 'Dialog', icon: <FontIcon className="material-icons">call_to_action</FontIcon>, url: '/dialog', index: 15 },
    { id: 'card-page', text: 'Card', icon: <FontIcon className="material-icons">note</FontIcon>, url: '/card', index: 16 },
    { id: 'form-page', text: 'Form Page', icon: <FontIcon className="material-icons">web_asset</FontIcon>, url: '/form', index: 17 },
    { id: 'table-page', text: 'Table Page', icon: <FontIcon className="material-icons">grid_on</FontIcon>, url: '/table', index: 18 },
    { id: 'public-page', text: 'Public Page', icon: <FontIcon className="material-icons">language</FontIcon>, url: '/public-page', index: 19 },
*/
  ],
  tablePage: {
    items: [
      {
        id: 1,
        name: 'Employee 1',
        salary: '$5000.00',
        department: 'Department 1',
      },
      {
        id: 2,
        name: 'Employee 2',
        salary: '$3500.00',
        department: 'Department 2',
      },
      {
        id: 3,
        name: 'Employee 3',
        salary: '$5000.00',
        department: 'Department 3',
      },
      {
        id: 4,
        name: 'Employee 4',
        salary: '$7000.00',
        department: 'Department 4',
      },
      {
        id: 5,
        name: 'Employee 5',
        salary: '$4500.00',
        department: 'Department 5',
      },
      {
        id: 6,
        name: 'Employee 6',
        salary: '$9500.00',
        department: 'Department 6',
      },
      {
        id: 7,
        name: 'Employee 7',
        salary: '$5500.00',
        department: 'Department 7',
      },
      {
        id: 8,
        name: 'Employee 8',
        salary: '$7500.00',
        department: 'Department 8',
      },
    ],
  },
  dashBoardPage: {
    recentProducts: [
      {
        id: 1,
        title: 'Bought 0.75 BTC',
        text: 'Just now',
        avatar: 'https://randomuser.me//api//portraits//women//8.jpg',
      },
      {
        id: 2,
        title: 'Sold 2.7 ETH',
        text: '3 minutes ago',
        avatar: 'https://randomuser.me//api//portraits//men//5.jpg',
      },
      {
        id: 3,
        title: 'Bought 2,000 XRP',
        text: '7 minutes ago',
        avatar: 'https://randomuser.me//api//portraits//women//2.jpg',
      },
      {
        id: 4,
        title: 'Sold 1.7 ETH',
        text: 'Half an hour ago',
        avatar: 'https://randomuser.me//api//portraits//men//8.jpg',
      },
    ],
    monthlySales: [
      { name: 'Jan', uv: 1800 },
      { name: 'Feb', uv: 2000 },
      { name: 'Mar', uv: 2780 },
      { name: 'Apr', uv: 2000 },
      { name: 'May', uv: 3000 },
      { name: 'Jun', uv: 3700 },
    ],
    newOrders: [
      { name: 'Jan', 'New Orders': 3908 },
      { name: 'Feb', 'New Orders': 3490 },
      { name: 'Mar', 'New Orders': 4800 },
      { name: 'Apr', 'New Orders': 2400 },
      { name: 'May', 'New Orders': 4500 },
      { name: 'Jun', 'New Orders': 7890 },
    ],
    browserUsage: [
      {
        name: 'Bitcoin',
        value: 1200,
        color: orange600,
        icon: <FontIcon className="material-icons">chevron_right</FontIcon>,
      },
      {
        name: 'Ethereum',
        value: 700,
        color: blueGrey600,
        icon: <FontIcon className="material-icons">chevron_right</FontIcon>,
      },
      {
        name: 'Litecoin',
        value: 150,
        color: cyan600,
        icon: <FontIcon className="material-icons">chevron_right</FontIcon>,
      },
    ],
  },
};

export default data;
