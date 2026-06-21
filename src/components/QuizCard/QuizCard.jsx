import styles from './QuizCard.module.css';

function QuizCard({ title, index }) {
  return (
    <button className={styles.button} type="button">
      <span className={styles.letter}>{String.fromCharCode(65 + index)}</span>
      <p className={styles.title}>{title}</p>
    </button>
  );
}

export default QuizCard;
