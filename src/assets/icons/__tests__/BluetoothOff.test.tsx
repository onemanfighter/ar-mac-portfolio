import { render } from '@testing-library/react';
import { BluetoothOffIcon } from '../BluetoothOff';

describe('BluetoothOff', () => {
  it('should render correctly', () => {
    const { container } = render(<BluetoothOffIcon />);

    expect(container).toMatchSnapshot();
  });
});
