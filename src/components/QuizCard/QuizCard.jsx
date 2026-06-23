import styles from './QuizCard.module.css';

function QuizCard({ title, index, selectedAnswer, selected, isCorrected, isError, isSubmit }) {
  return (
    <button
      className={`${styles.button} ${selected ? styles.selected : ''} ${isCorrected === index ? styles.isCorrected : ''} ${isError === index ? styles.isError : ''}`}
      type="button"
      onClick={() => selectedAnswer(index)}
      disabled={isSubmit}
    >
      <span className={styles.letter}>{String.fromCharCode(65 + index)}</span>
      <p className={styles.title}>{title}</p>
      <span className={styles.icon}>
        <span className={styles.iconCheck}></span>
        <span className={styles.iconError}></span>
      </span>
    </button>
  );
}

export default QuizCard;
