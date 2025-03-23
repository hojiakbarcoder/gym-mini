import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyA6A4P8b8wCXBPDugFPL_w4hl3bd9qUHSg',
	authDomain: 'gym-mini.firebaseapp.com',
	projectId: 'gym-mini',
	storageBucket: 'gym-mini.firebasestorage.app',
	messagingSenderId: '341253004896',
	appId: '1:341253004896:web:e7d849952ee0f06695ad05',
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
