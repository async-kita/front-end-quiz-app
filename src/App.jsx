import Header from './layouts/Header/Header.jsx';
import { useTheme } from './hooks/useTheme.js';
import data from './data/data.json';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage.jsx';
import QuizPage from './pages/QuizPage/QuizPage.jsx';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const quizzes = data.quizzes;

  const onClickTopic = topic => {
    setSelectedTopic(topic);
  };

  const resetTopic = () => {
    setSelectedTopic(null);
  };

  return (
    <>
      <Header
        currentTheme={theme}
        onClickButtonTheme={toggleTheme}
        selectTopic={selectedTopic}
        reset={resetTopic}
      ></Header>
      <main>
        {selectedTopic === null ? (
          <HomePage quizzes={quizzes} onClickTopic={onClickTopic} />
        ) : (
          <QuizPage options={selectedTopic} reset={resetTopic} />
        )}
      </main>
    </>
  );
}

export default App;
