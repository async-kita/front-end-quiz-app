import styles from './TopicCard.module.css';
import SubjectItem from '../SubjectItem/SubjectItem.jsx';

function TopicCard({ title, iconUrl }) {
  return (
    <button className={styles.button} type="button">
      <SubjectItem iconUrl={iconUrl} title={title} />
    </button>
  );
}

export default TopicCard;
