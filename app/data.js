import React from 'react';
import Icon from '@material-ui/core/Icon';
import { orange600, cyan600, purple600 } from '@material-ui/core/colors';

const data = {
  menus: [
    {
      id: 'dashboard',
      text: 'Dashboard',
      icon: <Icon className="material-icons">assessment</Icon>,
      url: '/',
      index: 0,
    },
    {
      id: 'dashboard',
      text: 'Customers',
      icon: <Icon className="material-icons">face</Icon>,
      url: '/',
      index: 1,
    },
    {
      id: 'dashboard',
      text: 'Orders',
      icon: <Icon className="material-icons">assignment</Icon>,
      url: '/',
      index: 2,
    },
    {
      id: 'dashboard',
      text: 'Liquidity',
      icon: <Icon className="material-icons">local_atm</Icon>,
      url: '/',
      index: 3,
    },
    {
      id: 'dashboard',
      text: 'Settings',
      icon: <Icon className="material-icons">settings</Icon>,
      url: '/',
      index: 4,
    },

    /*
    { id: 'api-demo-page', text: 'API Demo', icon: <Icon className="material-icons">http</Icon>, url: '/apiDemo', index: 1 },
    { id: 'grid-system-page', text: 'Grid System', icon: <Icon className="material-icons">view_quilt</Icon>, url: '/gridSystem', index: 2 },
    { id: 'icons-page', text: 'Icons', icon: <Icon className="material-icons">adjust</Icon>, url: '/icons', index: 3 },
    { id: 'image-gallery-page', text: 'Image Gallery', icon: <Icon className="material-icons">collections</Icon>, url: '/imageGallery', index: 4 },
    { id: 'form-elements-page',
      text: 'Form Elements',
      icon: <Icon className="material-icons">web</Icon>,
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
      icon: <Icon className="material-icons">show_chart</Icon>,
      children: [
        { id: 'barchart-page', text: 'BarChart Page', url: '/barChart', index: 12 },
        { id: 'linechart-page', text: 'LineChart Page', url: '/lineChart', index: 13 },
        { id: 'piechart-page', text: 'PieChart Page', url: '/pieChart', index: 14 },
      ],
    },
    { id: 'dialog-page', text: 'Dialog', icon: <Icon className="material-icons">call_to_action</Icon>, url: '/dialog', index: 15 },
    { id: 'card-page', text: 'Card', icon: <Icon className="material-icons">note</Icon>, url: '/card', index: 16 },
    { id: 'form-page', text: 'Form Page', icon: <Icon className="material-icons">web_asset</Icon>, url: '/form', index: 17 },
    { id: 'table-page', text: 'Table Page', icon: <Icon className="material-icons">grid_on</Icon>, url: '/table', index: 18 },
    { id: 'public-page', text: 'Public Page', icon: <Icon className="material-icons">language</Icon>, url: '/public-page', index: 19 },
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
        title: 'Samsung Galaxy S7',
        text:
          'Samsung Galaxy S7 G930F 32GB Factory Unlocked GSM Smartphone International Version (Gold)',
      },
      {
        id: 2,
        title: 'Sony Xperia XZ',
        text:
          'Sony Xperia XZ - Unlocked Smartphone - 32GB - Platinum (US Warranty)',
      },
      {
        id: 3,
        title: 'ACER R240HY 23.8-Inch',
        text:
          'Acer R240HY bidx 23.8-Inch IPS HDMI DVI VGA (1920 x 1080) Widescreen Monitor',
      },
      {
        id: 4,
        title: 'Dell 15.6-Inch Gaming Laptop',
        text:
          'Dell 15.6-Inch Gaming Laptop (6th Gen Intel Quad-Core i5-6300HQ Processor up to 3.2GHz, 8GB DDR3, 256GB SSD, Nvidia GeForce GTX 960M, Windows 10)',
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
        icon: <Icon className="material-icons">chevron_right</Icon>,
      },
      {
        name: 'Ethereum',
        value: 700,
        color: purple600,
        icon: <Icon className="material-icons">chevron_right</Icon>,
      },
      {
        name: 'Litecoin',
        value: 150,
        color: cyan600,
        icon: <Icon className="material-icons">chevron_right</Icon>,
      },
    ],
  },
};

export default data;
