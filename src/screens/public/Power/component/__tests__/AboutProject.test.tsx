import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutProject from '../AboutProject';

describe('About project', () => {
  it('should render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <AboutProject />
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
