import MyButton from '../button/MyButton';
import styles from './MyModal.module.scss';

const MyModal = ({ children, visibleModal, setVisibleModal }) => {
  const classActive = [styles.modal];

  if (visibleModal) {
    classActive.push(styles.modalActive);
  }

  return (
    <div onClick={() => setVisibleModal(false)} className={classActive.join(' ')}>
      <div onClick={(e) => e.stopPropagation()} className={styles.modalContent}>
        <MyButton
          onClick={() => setVisibleModal(false)}
          style={{ position: 'absolute', top: '10px', right: '10px', padding: '15px' }}
        >
          X
        </MyButton>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
