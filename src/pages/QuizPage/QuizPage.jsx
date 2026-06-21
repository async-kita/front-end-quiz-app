import styles from './QuizPage.module.css';
import QuizCard from '../../components/QuizCard/QuizCard.jsx';
import { useState } from 'react';
import SubmitButton from '../../components/SubmitButton/SubmitButton.jsx';

function QuizPage({ options }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
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
            <span className={styles.progress}></span>
          </div>
        </div>
        <div className={styles.actions}>
          <ul className={styles.list}>
            {options.questions[currentIndex].options.map((option, index) => (
              <li key={index}>
                <QuizCard title={option} index={index} />
              </li>
            ))}
          </ul>
          <SubmitButton />
        </div>
      </div>
    </section>
  );
}

export default QuizPage;
