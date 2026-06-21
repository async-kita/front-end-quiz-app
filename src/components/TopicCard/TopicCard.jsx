import styles from './TopicCard.module.css';
import SubjectItem from '../SubjectItem/SubjectItem.jsx';

function TopicCard({ title, iconUrl, onClick }) {
  return (
    <button
      className={styles.button}
      type="button"
      aria-label={`Start quiz on ${title}`}
      onClick={onClick}
    >
      <SubjectItem iconUrl={iconUrl} title={title} />
    </button>
  );
}

export default TopicCard;
