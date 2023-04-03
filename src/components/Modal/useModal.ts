import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const toggleShowModal = useCallback(() => {
    setIsShowModal(!isShowModal);
  }, [isShowModal, setIsShowModal]);

  return { isShowModal, toggleShowModal };
};
