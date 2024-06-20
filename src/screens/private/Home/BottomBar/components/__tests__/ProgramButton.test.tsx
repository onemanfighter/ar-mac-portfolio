import { fireEvent, render, screen } from '@testing-library/react';
import ProgramButtonDraggable from '../ProgramButton';
import { BottomBarProgramType } from '../types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

describe('Program button', () => {
  const onClickHandler = jest.fn();

  beforeEach(() => {
    onClickHandler.mockReset();
  });

  it('should render finder correctly to match snapshot', () => {
    const { container } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId="list" direction="horizontal">
          {() => (
            <ProgramButtonDraggable
              type={BottomBarProgramType.FINDER}
              id={'Finder'}
              index={0}
              isActive={false}
              onClickHandler={onClickHandler}
            />
          )}
        </Droppable>
      </DragDropContext>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should invoke click handler on program button press', () => {
    const { container } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId="list" direction="horizontal">
          {() => (
            <ProgramButtonDraggable
              type={BottomBarProgramType.FINDER}
              id={'Finder'}
              index={0}
              isActive={false}
              onClickHandler={onClickHandler}
            />
          )}
        </Droppable>
      </DragDropContext>,
    );

    fireEvent.click(screen.getByLabelText('program-button-finder'));

    expect(onClickHandler).toHaveBeenCalledWith(BottomBarProgramType.FINDER);
  });

  it('should render chrome correctly to match snapshot', () => {
    const { container } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId="list" direction="horizontal">
          {() => (
            <ProgramButtonDraggable
              type={BottomBarProgramType.CHROME}
              id={'Chrome'}
              index={0}
              isActive={false}
              onClickHandler={onClickHandler}
            />
          )}
        </Droppable>
      </DragDropContext>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render vscode correctly to match snapshot', () => {
    const { container } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId="list" direction="horizontal">
          {() => (
            <ProgramButtonDraggable
              type={BottomBarProgramType.VSCODE}
              id={'VsCode'}
              index={0}
              isActive={false}
              onClickHandler={onClickHandler}
            />
          )}
        </Droppable>
      </DragDropContext>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render terminal correctly to match snapshot', () => {
    const { container } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId="list" direction="horizontal">
          {() => (
            <ProgramButtonDraggable
              type={BottomBarProgramType.TERMINAL}
              id={'Terminal'}
              index={0}
              isActive={false}
              onClickHandler={onClickHandler}
            />
          )}
        </Droppable>
      </DragDropContext>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render spotify correctly to match snapshot', () => {
    const { container } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId="list" direction="horizontal">
          {() => (
            <ProgramButtonDraggable
              type={BottomBarProgramType.SPOTIFY}
              id={'Spotify'}
              index={0}
              isActive={false}
              onClickHandler={onClickHandler}
            />
          )}
        </Droppable>
      </DragDropContext>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render github correctly to match snapshot', () => {
    const { container } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId="list" direction="horizontal">
          {() => (
            <ProgramButtonDraggable
              type={BottomBarProgramType.GITHUB}
              id={'Github'}
              index={0}
              isActive={false}
              onClickHandler={onClickHandler}
            />
          )}
        </Droppable>
      </DragDropContext>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render settings correctly to match snapshot', () => {
    const { container } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId="list" direction="horizontal">
          {() => (
            <ProgramButtonDraggable
              type={BottomBarProgramType.SETTINGS}
              id={'Settings'}
              index={0}
              isActive={false}
              onClickHandler={onClickHandler}
            />
          )}
        </Droppable>
      </DragDropContext>,
    );

    expect(container).toMatchSnapshot();
  });
});
