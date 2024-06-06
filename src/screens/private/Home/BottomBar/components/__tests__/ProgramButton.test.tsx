import { render } from '@testing-library/react';
import ProgramButton from '../ProgramButton';
import { ProgramType } from '../types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

describe('Program button', () => {
  it('should render finder correctly to match snapshot', () => {
    const { container } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId="list" direction="horizontal">
          {() => (
            <ProgramButton
              type={ProgramType.FINDER}
              id={'Finder'}
              index={0}
              isActive={false}
            />
          )}
        </Droppable>
      </DragDropContext>,
    );

    expect(container).toMatchSnapshot();
  });

  it('should render chrome correctly to match snapshot', () => {
    const { container } = render(
      <DragDropContext onDragEnd={jest.fn()}>
        <Droppable droppableId="list" direction="horizontal">
          {() => (
            <ProgramButton
              type={ProgramType.CHROME}
              id={'Chrome'}
              index={0}
              isActive={false}
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
            <ProgramButton
              type={ProgramType.VSCODE}
              id={'VsCode'}
              index={0}
              isActive={false}
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
            <ProgramButton
              type={ProgramType.TERMINAL}
              id={'Terminal'}
              index={0}
              isActive={false}
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
            <ProgramButton
              type={ProgramType.SPOTIFY}
              id={'Spotify'}
              index={0}
              isActive={false}
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
            <ProgramButton
              type={ProgramType.GITHUB}
              id={'Github'}
              index={0}
              isActive={false}
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
            <ProgramButton
              type={ProgramType.SETTINGS}
              id={'Settings'}
              index={0}
              isActive={false}
            />
          )}
        </Droppable>
      </DragDropContext>,
    );

    expect(container).toMatchSnapshot();
  });
});
