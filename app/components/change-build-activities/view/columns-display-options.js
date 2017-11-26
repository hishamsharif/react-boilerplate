import progressButton from './progress-button/index';

const columnsOptions = [
  {
    name: 'Changelist / Build',
    accessor: 'code',
    style: 'col-md-2',
    customComponent: undefined,
  },
  {
    name: 'Owner',
    accessor: 'owner',
    style: 'col-md-2',
    customComponent: undefined,
  },
  {
    name: 'Time Started',
    accessor: 'timeStarted',
    style: 'col-md-2',
    customComponent: undefined,
  },
  {
    name: 'State',
    accessor: 'state',
    style: 'col-md-2',
    customComponent: undefined,
  },
  {
    name: 'Metrics',
    accessor: 'metrics',
    style: 'col-md-1',
    customComponent: progressButton,
  },
  {
    name: 'Build',
    accessor: 'build',
    style: 'col-md-1',
    customComponent: progressButton,
  },
  {
    name: 'Unit Test',
    accessor: 'unitTest',
    style: 'col-md-1',
    customComponent: progressButton,
  },
  {
    name: 'Functional Test',
    accessor: 'functionalTest',
    style: 'col-md-1',
    customComponent: progressButton,
  },
];

export default columnsOptions;
