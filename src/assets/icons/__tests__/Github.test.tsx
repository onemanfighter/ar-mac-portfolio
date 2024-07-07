import { render } from '@testing-library/react';
import { GithubIcon } from '../Github';

describe('Github', () => {
  it('should render correctly', () => {
    const { container } = render(<GithubIcon />);

    expect(container).toMatchSnapshot();
  });
});
