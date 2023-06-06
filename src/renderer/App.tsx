import './App.css';

import { FluentProvider, webLightTheme } from '@fluentui/react-components';
import AppRouter from './Routes';

export default function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <AppRouter />
    </FluentProvider>
  );
}
