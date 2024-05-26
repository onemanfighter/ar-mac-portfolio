import { render } from '@testing-library/react';
import PowerOn from '../Power';
import '@mocks';
import { processStore } from '@processStore';
import { renderHook } from '@testing-library/react-hooks';

describe('PowerOn', () => {
  it('should render correctly to match snapshot', () => {
    const a = renderHook(() => processStore());
    const { container } = render(<PowerOn />);

    expect(container).toMatchSnapshot();
  });
});
