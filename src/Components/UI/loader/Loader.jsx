import styles from './Loader.module.scss';

const Loader = ({ children, title }) => {
  return <div className={styles.loader}>{title}</div>;
};

export default Loader;
