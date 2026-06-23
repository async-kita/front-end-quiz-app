import styles from './QuizPage.module.css';
import QuizCard from '../../components/QuizCard/QuizCard.jsx';
import { useState } from 'react';
import SubmitButton from '../../components/SubmitButton/SubmitButton.jsx';
import SubjectItem from '../../components/SubjectItem/SubjectItem.jsx';

function QuizPage({ options, reset }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isCorrected, setIsCorrected] = useState(null);
  const [isError, setIsError] = useState(null);
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);

  const handleSelectAnswer = index => {
    if (isSubmit) return;
    setSelectedAnswer(prev => (prev === index ? null : index));
    setError(false);
  };

  const handleSubmit = () => {
    if (isSubmit) {
      setCurrentIndex(prev => prev + 1);
      setIsCorrected(null);
      setIsError(null);
      setSelectedAnswer(null);
      setIsSubmit(false);
      return;
    }

    if (selectedAnswer === null) {
      setError(true);
      return;
    }

    if (
      options.questions[currentIndex].answer ===
      options.questions[currentIndex].options[selectedAnswer]
    ) {
      setScore(prev => prev + 1);
      setIsCorrected(selectedAnswer);
      setIsSubmit(true);
    } else {
      setIsError(selectedAnswer);
      setIsCorrected(
        options.questions[currentIndex].options.findIndex(
          answer => answer === options.questions[currentIndex].answer
        )
      );
      setIsSubmit(true);
    }
  };

  const handlePlayAgain = () => {
    reset();
  };

  return (
    <>
      {currentIndex !== options.questions.length ? (
        <section className={styles.quiz}>
          <div className={`${styles.inner} container`}>
            <div className={styles.body}>
              <div className={styles.bodyInner}>
                <p className={styles.number}>
                  Question {currentIndex + 1} of {options.questions.length}
                </p>
                <h2 className={styles.title}>{options.questions[currentIndex].question}</h2>
              </div>
              <div className={styles.progressBar}>
                <span
                  className={styles.progress}
                  style={{ width: `${((currentIndex + 1) / options.questions.length) * 100}%` }}
                ></span>
              </div>
            </div>
            <div className={styles.actions}>
              <ul className={styles.list}>
                {options.questions[currentIndex].options.map((option, index) => (
                  <li key={index}>
                    <QuizCard
                      title={option}
                      index={index}
                      selectedAnswer={handleSelectAnswer}
                      selected={index === selectedAnswer}
                      isCorrected={isCorrected}
                      isError={isError}
                      isSubmit={isSubmit}
                    />
                  </li>
                ))}
              </ul>
              <SubmitButton handleSubmit={handleSubmit} error={error} isSubmit={isSubmit} />
              <p className={`${styles.error} ${error ? styles.isError : ''}`}>
                <span className={styles.iconError}></span>
                Please select an answer
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className={styles.result}>
          <div className={`${styles.inner} container`}>
            <div className={styles.body}>
              <div className={styles.bodyInner}>
                <h2 className={styles.resultTitle}>
                  Quiz completed
                  <br />
                  <span className={styles.resultDescription}>You scored...</span>
                </h2>
              </div>
            </div>
            <div className={styles.actions}>
              <div className={styles.cardResult}>
                <SubjectItem title={options.title} iconUrl={options.icon} />
                <div className={styles.score}>
                  <p className={styles.scoreTitle}>{score}</p>
                  <span className={styles.scoreDescription}>out of 10</span>
                </div>
              </div>
              <button
                className={styles.buttonPlayAgain}
                type="submit"
                onClick={() => handlePlayAgain()}
              >
                Play Again
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default QuizPage;
