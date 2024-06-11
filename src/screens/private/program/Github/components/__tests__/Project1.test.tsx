import { fireEvent, render, screen } from '@testing-library/react';
import ProjectList1 from '../ProjectList1';

describe('ProjectList1', () => {
  it('should return default ProjectList1', () => {
    const { container } = render(<ProjectList1 />);

    expect(container).toMatchSnapshot();
  });

  it('should invoke callback on button press', () => {
    const { container } = render(<ProjectList1 />);

    fireEvent.click(screen.getByText('Ar Mac Portfolio'));

    expect(container).toMatchSnapshot();
  });
});
