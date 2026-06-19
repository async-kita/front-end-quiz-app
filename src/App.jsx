import Header from './layouts/Header/Header.jsx';
import { useTheme } from './hooks/useTheme.js';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Header currentTheme={theme} onClickButtonTheme={toggleTheme}></Header>
    </>
  );
}

export default App;
