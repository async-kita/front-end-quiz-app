import Header from './layouts/Header/Header.jsx';
import { useTheme } from './hooks/useTheme.js';
import data from './data/data.json';
import { useState } from 'react';
import HomePage from './pages/HomePage/HomePage.jsx';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [selectedTopic, setSelectedTopic] = useState(null);
  const quizzes = data.quizzes;
  return (
    <>
      <Header currentTheme={theme} onClickButtonTheme={toggleTheme}></Header>
      <main>{selectedTopic === null ? <HomePage quizzes={quizzes} /> : <p>Question</p>}</main>
    </>
  );
}

export default App;
