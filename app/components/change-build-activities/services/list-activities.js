import gql from 'graphql-tag';
import activitiesFixture from '../tests/activities-fixture';

const activitiesListQuery = gql`
  query ActivitiesListQuery {
    activities {
      id
      code
      type
      owner
      timeStarted
      state
      metrics
      build
      unitTest
      functionalTest
      expandable
    }
  }
`;

const activitiesListResultsToProps = {
  props: ({ data }) => {
    if (data.loading) {
      return {
        loading: data.loading,
      };
    }

    return {
      loading: false,
      error: data.error,
      allActivitiesData: data.activities,
    };
  },
};

const listAllActivities = () => activitiesFixture;

const listActivityDetailById = (id) => {
  // eslint-disable-next-line no-console
  console.log(`id >> ${id}`);
};

export {
  listAllActivities,
  listActivityDetailById,
  activitiesListQuery,
  activitiesListResultsToProps,
};
