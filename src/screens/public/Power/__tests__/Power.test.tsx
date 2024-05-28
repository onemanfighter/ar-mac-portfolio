import { render, screen } from '@testing-library/react';
import PowerOn from '../Power';
import { processStore } from '@processStore';
import { renderHook } from '@testing-library/react-hooks';
import userEvent from '@testing-library/user-event';

jest.mock('@processStore', () => ({
  ...jest.requireActual('@processStore'),
  processStore: jest.fn().mockImplementation(() => ({
    Power: {
      poweringOn: jest.fn(),
    },
  })),
}));

const spy = jest.spyOn(processStore().Power, 'poweringOn');

describe('PowerOn', () => {
  it('should render correctly to match snapshot', () => {
    const { container } = render(<PowerOn />);

    expect(container).toMatchSnapshot();
  });

  it.skip('should invoke xyz on power click', () => {
    render(<PowerOn />);

    userEvent.click(screen.getByLabelText('power-button'));

    expect(spy).toHaveBeenCalled();
  });
});
