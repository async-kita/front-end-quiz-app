import styles from './SubmitButton.module.css';

function SubmitButton({ error, handleSubmit, isSubmit }) {
  return (
    <button className={styles.button} type="submit" disabled={error} onClick={() => handleSubmit()}>
      {isSubmit ? 'Next Question' : 'Submit Answer'}
    </button>
  );
}

export default SubmitButton;
