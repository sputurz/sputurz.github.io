import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalStyle } from './styles/global';

const queryClient = new QueryClient();

export function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <AppRouter></AppRouter>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
