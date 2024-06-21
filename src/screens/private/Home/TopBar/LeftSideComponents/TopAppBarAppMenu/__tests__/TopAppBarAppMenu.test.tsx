import _ from 'lodash';
import { ProgramType, processStore } from '@processStore';
import { fireEvent, render, screen } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import TopAppBarAppMenu from '../TopAppBarAppMenu';
import { NOTES, VS_CODE } from '../menuData';

const allVsCodeClickableItem = Object.values(VS_CODE.menuTree).flatMap(
  (value) => {
    const items = Object.values(value.items).flatMap((innerValue) => {
      return innerValue.title;
    });
    return items;
  },
);

const allVsCodeInnerItem = Object.values(VS_CODE.menuTree).flatMap((value) => {
  const items = Object.values(value.items).flatMap((innerValue) => {
    return (
      innerValue.subSubtree?.flatMap((subInnerValue) => {
        return subInnerValue.title;
      }) ?? []
    );
  });
  return items;
});

const allNotesClickableItem = Object.values(NOTES.menuTree).flatMap((value) => {
  const items = Object.values(value.items).flatMap((innerValue) => {
    return innerValue.title;
  });
  return items;
});

const allNotesInnerItem = Object.values(NOTES.menuTree).flatMap((value) => {
  const items = Object.values(value.items).flatMap((innerValue) => {
    return (
      innerValue.subSubtree?.flatMap((subInnerValue) => {
        return subInnerValue.title;
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

    result.current.ActiveApp.addApp(ProgramType.VSCODE);

    const { container } = render(<TopAppBarAppMenu />);

    allVsCodeClickableItem.forEach((item) => {
      fireEvent.click(
        screen.getByLabelText(`${_.kebabCase(item).toLowerCase()}-menu-button`),
      );
    });

    expect(container).toMatchSnapshot();
  });

  it('should test the click events for all menu items', () => {
    const { result } = renderHook(() => processStore());

    result.current.ActiveApp.addApp(ProgramType.NOTES);

    const { container } = render(<TopAppBarAppMenu />);

    allNotesClickableItem.forEach((item) => {
      fireEvent.click(
        screen.getByLabelText(`${_.kebabCase(item).toLowerCase()}-menu-button`),
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

    allVsCodeInnerItem.forEach((item) => {
      fireEvent.click(
        screen.getByLabelText(
          `${_.kebabCase(item).toLowerCase()}-sub-menu-item`,
        ),
      );
    });

    expect(container).toMatchSnapshot();
  });

  it('should test the click events for inner menu items for ', () => {
    const { result } = renderHook(() => processStore());

    act(() => {
      result.current.ActiveApp.addApp(ProgramType.NOTES);
    });

    const { container } = render(<TopAppBarAppMenu />);

    allNotesInnerItem.forEach((item) => {
      fireEvent.click(
        screen.getByLabelText(
          `${_.kebabCase(item).toLowerCase()}-sub-menu-item`,
        ),
      );
    });

    expect(container).toMatchSnapshot();
  });
});
