import './App.css';

import { FluentProvider, webLightTheme } from '@fluentui/react-components';

export default function App() {
  return (
    <FluentProvider theme={webLightTheme}>
      <AppRouter />
    </FluentProvider>
  );
}
