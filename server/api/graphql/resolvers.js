const activities = [
  {
    id: '1',
    code: 'Tenrox-R1_1235',
    type: 'BUILD',
    owner: '',
    timeStarted: '',
    state: 'Pending',
    metrics: -1,
    build: -1,
    unitTest: -1,
    functionalTest: -1,
    detail: {
      text: 'detail:Tenrox-R1_1235',
    },
  },
  {
    id: '2',
    code: '432462',
    type: 'CHANGE',
    owner: 'jtuck',
    timeStarted: '4/18/2014 12:12pm',
    state: 'Running',
    metrics: 60,
    build: -1,
    unitTest: -1,
    functionalTest: -1,
    detail: {
      text: 'detail:432462',
    },
  },
  {
    id: '3',
    code: '432461',
    type: 'CHANGE',
    owner: 'samy',
    timeStarted: '4/18/2014 10:53am',
    state: 'Rejected',
    metrics: 0,
    build: 100,
    unitTest: 100,
    functionalTest: 100,
    detail: {
      text: 'detail:432461',
    },
  },
  {
    id: '4',
    code: 'Tenrox-R1_1234',
    type: 'BUILD',
    owner: '',
    timeStarted: '4/17/2014 9:42am',
    state: 'Complete',
    metrics: 100,
    build: 100,
    unitTest: 100,
    functionalTest: 100,
    detail: {
      text: 'detail:Tenrox-R1_1234',
    },
  },
  {
    id: '5',
    code: '432460',
    type: 'CHANGE',
    owner: 'samy',
    timeStarted: '4/17/2014 7:51am',
    state: 'Rejected',
    metrics: 0,
    build: -1,
    unitTest: -1,
    functionalTest: -1,
    detail: {
      text: 'detail:432460',
    },
  },
  {
    id: '6',
    code: '432459',
    type: 'CHANGE',
    owner: 'samy',
    timeStarted: '4/16/2014 6:43am',
    state: 'Accepted',
    metrics: 100,
    build: 100,
    unitTest: 100,
    functionalTest: 100,
    detail: {
      text: 'detail:432459',
    },
  },
];

const resolvers = {
  Query: {
    activities: () => activities,
    activityDetail: (root, { id }) =>
      activities.find((activity) => activity.id === id),
  },
};

module.exports = { resolvers };
