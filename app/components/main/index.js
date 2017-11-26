/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ChangeOrBuildActivities from 'components/change-build-activities/loadable';
import GraphiQLEditor from 'components/graphiql-editor/loadable';
import NotFoundPage from 'components/not-found-page/loadable';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ChangeOrBuildActivities} />
        <Route exact path="/graphiql" component={GraphiQLEditor} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
