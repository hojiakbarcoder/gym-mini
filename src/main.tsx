import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app'
import AuthProvider from './components/providers/auth-provider'
import { ThemeProvider } from './components/providers/theme-provider'
import './styles/index.css'
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider defaultTheme='dark'>
				<AuthProvider>
					<App />
				</AuthProvider>
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
)
