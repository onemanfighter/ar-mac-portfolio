import { ModalID, uiStore } from '@uiStore';
import { act, renderHook } from '@testing-library/react-hooks';

describe('Modal slice', () => {
  const onModalCloseMock = jest.fn();

  it('should return modal selector state and actions', () => {
    const modal = renderHook(() => uiStore()).result.current;

    expect(modal).toMatchSnapshot();
  });

  it('should return modal state with initial value', () => {
    const { result } = renderHook(() => uiStore());

    expect(result.current.Modal).toMatchSnapshot();
  });

  it('should return modal state on modal data set using openModal', () => {
    const { result } = renderHook(() => uiStore());

    act(() => {
      result.current.Modal.openModal(ModalID.SEARCH, onModalCloseMock);
      jest.runAllTimers();
    });

    expect(result.current.Modal).toMatchSnapshot();
  });

  it('should reset and close modal state on modal data set using closeModal', () => {
    const { result } = renderHook(() => uiStore());

    result.current.Modal.openModal(ModalID.SEARCH, onModalCloseMock);

    expect(result.current.Modal.modalID).toEqual(ModalID.SEARCH);
    expect(result.current.Modal.modalData?.onModalClose).not.toBeUndefined();

    result.current.Modal.resetModalState();
    jest.runAllTimers();

    expect(result.current.Modal.modalID).toEqual(ModalID.NONE);
    expect(result.current.Modal.modalData?.onModalClose).toBeUndefined();
  });
});
