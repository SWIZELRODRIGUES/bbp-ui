import './App.css';
import AppGrid from './components/AppGrid';
import AppRouter from './components/AppRouter';
import AppThemeProvider from './components/AppThemeProvider';


function App() {
  return (
    <div className='bbp-container'>
    <AppGrid>
      <AppThemeProvider>
       <AppRouter/>
      </AppThemeProvider>
    </AppGrid>
    </div>
  );
}

export default App;
