import { render } from '@testing-library/react';
import ProgramButton from '../ProgramButton';
import { ProgramType } from '../types';

describe('Program button', () => {
  it('should render finder correctly to match snapshot', () => {
    const { container } = render(<ProgramButton type={ProgramType.FINDER} />);

    expect(container).toMatchSnapshot();
  });

  it('should render chrome correctly to match snapshot', () => {
    const { container } = render(<ProgramButton type={ProgramType.CHROME} />);

    expect(container).toMatchSnapshot();
  });

  it('should render vscode correctly to match snapshot', () => {
    const { container } = render(<ProgramButton type={ProgramType.VSCODE} />);

    expect(container).toMatchSnapshot();
  });

  it('should render terminal correctly to match snapshot', () => {
    const { container } = render(<ProgramButton type={ProgramType.TERMINAL} />);

    expect(container).toMatchSnapshot();
  });

  it('should render spotify correctly to match snapshot', () => {
    const { container } = render(<ProgramButton type={ProgramType.SPOTIFY} />);

    expect(container).toMatchSnapshot();
  });

  it('should render github correctly to match snapshot', () => {
    const { container } = render(<ProgramButton type={ProgramType.GITHUB} />);

    expect(container).toMatchSnapshot();
  });

  it('should render settings correctly to match snapshot', () => {
    const { container } = render(<ProgramButton type={ProgramType.SETTINGS} />);

    expect(container).toMatchSnapshot();
  });
});
