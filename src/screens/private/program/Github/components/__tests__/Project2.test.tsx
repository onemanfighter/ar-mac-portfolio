import { fireEvent, render, screen } from '@testing-library/react';
import ProjectList2 from '../ProjectList2';

describe('ProjectList2', () => {
  it('should return default ProjectList1', () => {
    const { container } = render(<ProjectList2 />);

    expect(container).toMatchSnapshot();
  });

  it('should invoke callback on button press', () => {
    const { container } = render(<ProjectList2 />);

    fireEvent.click(screen.getByText('CryptoAtlas'));

    expect(container).toMatchSnapshot();
  });
});
