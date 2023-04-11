import '@testing-library/jest-dom';
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../app/store';
import MealDetail from '../features/finance/SingleMealPage';

describe('Test the Detail component', () => {
  it('Should be able to render correctly the Detail view', () => {
    const domTree = render(
      <Provider store={store}>
        <BrowserRouter>
          <MealDetail />
        </BrowserRouter>
      </Provider>,
    );
    expect(domTree).toMatchSnapshot();
  });
});
