import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import App from './App';
import './localization/config';

test('renders learn react link', () => {
  const { container } = render(<App />);

  expect(container).toMatchSnapshot();
  expect(screen.getByText('App made by Amit')).toBeDefined();
});
