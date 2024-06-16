import { fireEvent, render, screen } from '@testing-library/react';
import MenuBranch from '../MenuBranch';
import { MenuTreeNode } from '../../types';

const actionMockTest1 = jest.fn();
const actionMockTest2 = jest.fn();
const actionMockTest3 = jest.fn();
const actionMockTest4 = jest.fn();

const dummyData: Record<string, MenuTreeNode> = {
  test1: {
    title: 'test1',
    command: 'command1',
    action: actionMockTest1,
    hasDivider: false,
  },
  test2: {
    title: 'test2',
    command: 'command2',
    action: actionMockTest2,
    hasDivider: true,
  },

  test3: {
    title: 'test2',
    command: 'command2',
    action: actionMockTest3,
    hasDivider: true,
    subSubtree: [
      {
        title: 'subTree Test1',
        command: 'subTreeCommand3',
        action: actionMockTest4,
        hasDivider: true,
      },
    ],
  },
};

describe('MenuBranch', () => {
  beforeEach(() => {
    actionMockTest1.mockClear();
    actionMockTest2.mockClear();
    actionMockTest3.mockClear();
    actionMockTest4.mockClear();
  });

  it('should render with main type', () => {
    const { container } = render(
      <MenuBranch title={'Test'} type={'main'} items={dummyData} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with list open with main type', () => {
    const { container } = render(
      <MenuBranch title={'Test'} type={'main'} items={dummyData} />,
    );

    fireEvent.click(screen.getByLabelText('test-top-bar-button'));

    expect(container).toMatchSnapshot();
  });

  it('should render with normal type', () => {
    const { container } = render(
      <MenuBranch title={'Test'} type={'normal'} items={dummyData} />,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render with list open with normal type', () => {
    const { container } = render(
      <MenuBranch title={'Test'} type={'normal'} items={dummyData} />,
    );

    fireEvent.click(screen.getByLabelText('test-top-bar-button'));

    expect(container).toMatchSnapshot();
  });

  it('should trigger item action on clicking with normal type', () => {
    const { container } = render(
      <MenuBranch title={'Test'} type={'normal'} items={dummyData} />,
    );

    fireEvent.click(screen.getByLabelText('test-1-menu-button'));

    expect(actionMockTest1).toHaveBeenCalledTimes(1);
  });

  it('should trigger item action when inner menu is clicked with normal type', () => {
    const { container } = render(
      <MenuBranch title={'Test'} type={'normal'} items={dummyData} />,
    );

    fireEvent.click(screen.getByLabelText('sub-tree-test-1-sub-menu-item'));

    expect(actionMockTest4).toHaveBeenCalledTimes(1);
  });
});
