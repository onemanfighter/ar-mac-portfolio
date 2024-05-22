import { render, screen } from '@testing-library/react';
import ModalComponent from '../Modal';
import { ModalIDs } from '@store';
import { on } from 'events';

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
          modalID={ModalIDs.SEARCH}
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
          modalID={ModalIDs.SEARCH}
          onModalClose={onModalClose}
        />,
      );

      expect(container).toMatchSnapshot();
      expect(screen.queryByText('Search')).toBeNull();
    });
  });
});
