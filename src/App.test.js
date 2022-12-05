import { render, screen, fireEvent } from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

test('renders App', async () => {
  const AppFn = render(<BrowserRouter><App /></BrowserRouter>);
  expect(AppFn.getByText('웹')).toBeInTheDocument();
  expect(AppFn.getByText('Create')).toBeInTheDocument();
  fireEvent.click(AppFn.getByText('Create'));
  AppFn.debug();
  const title = AppFn.getByPlaceholderText('title');
  const body = AppFn.getByPlaceholderText('body');
  expect(title).toBeInTheDocument();
  expect(body).toBeInTheDocument();
  fireEvent.change(title, {target:{value:'React'}});
  fireEvent.change(title, {target:{value:'React is ...'}});
  AppFn.debug();
 });
 