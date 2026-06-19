import styles from './SubjectItem.module.css';

function SubjectItem({ iconUrl, title }) {
  return (
    <div className={styles.subject}>
      <img
        className={styles.icon}
        id={title.toLowerCase()}
        src={iconUrl}
        alt=""
        width="40"
        height="40"
        loading="lazy"
      />
      <span className={styles.title}>{title}</span>
    </div>
  );
}

export default SubjectItem;
