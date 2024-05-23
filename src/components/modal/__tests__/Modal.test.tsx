import { render, screen } from '@testing-library/react';
import ModalComponent from '../Modal';
import { ModalID } from '@uiStore';

describe('Modal component', () => {
  const onModalClose = jest.fn();

  describe('search modal', () => {
    beforeEach(() => {
      onModalClose.mockReset();
    });

    it('should render correctly ', () => {
      const { container } = render(
        <ModalComponent
          isOpen={true}
          modalID={ModalID.SEARCH}
          onModalClose={onModalClose}
        />,
      );

      expect(container).toMatchSnapshot();
      expect(screen.getByText('Search')).toBeDefined();
    });

    it('should not render component if isOpen is false', () => {
      const { container } = render(
        <ModalComponent
          isOpen={false}
          modalID={ModalID.SEARCH}
          onModalClose={onModalClose}
        />,
      );

      expect(container).toMatchSnapshot();
      expect(screen.queryByText('Search')).toBeNull();
    });
  });
});
