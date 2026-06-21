import styles from './HomePage.module.css';
import TopicCard from '../../components/TopicCard/TopicCard.jsx';

function HomePage({ quizzes, onClickTopic }) {
  return (
    <section className={styles.home}>
      <div className={`${styles.inner} container`}>
        <div className={styles.body}>
          <h1 className={styles.title}>
            Welcome to the
            <br />
            <span>Frontend Quiz!</span>
          </h1>
          <p className={styles.description}>Pick a subject to get started.</p>
        </div>
        <ul className={styles.list}>
          {quizzes.map((quiz, index) => {
            return (
              <li key={index}>
                {
                  <TopicCard
                    title={quiz.title}
                    iconUrl={quiz.icon}
                    onClick={() => onClickTopic(quiz)}
                  />
                }
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default HomePage;
