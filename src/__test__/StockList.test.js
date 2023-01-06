import '@testing-library/jest-dom';
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../app/store';
import FoodNameList from '../features/finance/FoodList';

afterEach(cleanup);
describe('Test the Stocklist component', () => {
  it('Should be able to render the Stocklist component', () => {
    const domTree = render(
      <Provider store={store}>
        <BrowserRouter>
          <FoodNameList />
        </BrowserRouter>
      </Provider>,
    );
    expect(domTree).toMatchSnapshot();
  });
});
