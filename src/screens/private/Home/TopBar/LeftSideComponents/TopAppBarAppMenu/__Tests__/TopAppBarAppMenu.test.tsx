import { ProgramType, processStore } from '@processStore';
import { fireEvent, render, screen } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import TopAppBarAppMenu from '../TopAppBarAppMenu';
import { VS_CODE } from '../menuData';
import _ from 'lodash';

const allClickableItem = Object.values(VS_CODE.menuTree).flatMap((value) => {
  const items = Object.values(value.items).flatMap((innerValue) => {
    return _.kebabCase(innerValue.title);
  });
  return items;
});

const allInnerItem = Object.values(VS_CODE.menuTree).flatMap((value) => {
  const items = Object.values(value.items).flatMap((innerValue) => {
    return (
      innerValue.subSubtree?.flatMap((subInnerValue) => {
        return _.kebabCase(subInnerValue.title);
      }) ?? []
    );
  });
  return items;
});

describe('TopAppBarAppMenu', () => {
  it('should render with VsCode app', () => {
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.VSCODE);
    });

    const { container } = render(<TopAppBarAppMenu />);

    expect(container).toMatchSnapshot();
  });

  it('should test the click events for all menu items', () => {
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.VSCODE);
    });

    const { container } = render(<TopAppBarAppMenu />);

    allClickableItem.forEach((item) => {
      fireEvent.click(
        screen.getByLabelText(`${item.toLowerCase()}-menu-button`),
      );
    });

    expect(container).toMatchSnapshot();
  });

  it('should test the click events for inner menu items', () => {
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.VSCODE);
    });

    const { container } = render(<TopAppBarAppMenu />);

    allInnerItem.forEach((item) => {
      fireEvent.click(
        screen.getByLabelText(`${item.toLowerCase()}-sub-menu-item`),
      );
    });

    expect(container).toMatchSnapshot();
  });
});
