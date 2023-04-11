import '@testing-library/jest-dom';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../app/store';
import MealDetail from '../features/finance/SingleMealPage';

afterEach(cleanup);
describe('Test the MealDetail component', () => {
  it('Should be able to render the MealDetail component', () => {
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
