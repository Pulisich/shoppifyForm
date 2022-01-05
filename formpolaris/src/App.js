import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import './App.css';
import NewForm from './components/form';

function App() {
  return (
    <AppProvider i18n={enTranslations}>
      <div className='form'>
        <h1>Sign in</h1>

        <h3>Please sign it to register</h3>
      <NewForm/>
      </div>
    </AppProvider>
  );
}

export default App;
