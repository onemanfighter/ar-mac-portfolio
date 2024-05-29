import { render } from '@testing-library/react';
import { BluetoothOnIcon } from '../BluetoothOn';

describe('BluetoothOn', () => {
  it('should render correctly', () => {
    const { container } = render(<BluetoothOnIcon />);

    expect(container).toMatchSnapshot();
  });
});
