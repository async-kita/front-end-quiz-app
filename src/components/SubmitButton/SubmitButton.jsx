import styles from './SubmitButton.module.css';

function SubmitButton() {
  return (
    <button className={styles.button} type="submit">
      Submit Answer
    </button>
  );
}

export default SubmitButton;
