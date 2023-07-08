import { Modal } from '../Modal';
import { GrFormClose } from 'react-icons/gr';

interface ConfirmationModalProps extends React.ComponentPropsWithoutRef<'div'> {
  isShowModal: boolean;
  toggleShowModal: () => void;
  callback?: () => void;
}

export const ConfirmationModal = (props: ConfirmationModalProps) => {
  const { className, isShowModal, toggleShowModal, callback } = props;

  return (
    <Modal className={className}>
      <div className='flex justify-end mb-2'>
        <button onClick={toggleShowModal}>
          <GrFormClose className='w-8 h-8' />
        </button>
      </div>
      <div className='flex flex-col mb-6'>
        <span className='text-2xl mb-2'>
          Are you sure you want to delete your article?
        </span>

        <span className='text-lg text-gray-500'>
          If you delete the article you can't recover it.
        </span>
      </div>

      <div className='flex justify-end'>
        <button
          className='mr-2 py-2 px-4 flex items-center justify-center border-blue-900 text-blue-900 border rounded-lg shadow hover:bg-blue-900 hover:text-blue-100 focus:outline-none focus:border-blue-500'
          onClick={toggleShowModal}>
          Cancel
        </button>
        <button
          className='py-2 px-4 flex items-center justify-center bg-blue-900 border-blue-900 text-blue-100 border rounded-lg shadow hover:bg-blue-800 focus:outline-none focus:border-blue-500'
          onClick={callback}>
          Delete
        </button>
      </div>
    </Modal>
  );
};
