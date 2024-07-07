import { render } from '@testing-library/react';
import SocialButtons from '../SocialButtons';
import { BrowserRouter } from 'react-router-dom';

describe('SocialButtons', () => {
  it('should render correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <SocialButtons />
      </BrowserRouter>,
    );

    expect(container).toMatchSnapshot();
  });
});
