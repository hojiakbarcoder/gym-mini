import { auth } from '@/firebase'
import {
	GithubAuthProvider,
	GoogleAuthProvider,
	signInWithPopup,
} from 'firebase/auth'
import { useState } from 'react'
import { FaGithub, FaGoogle } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import FillLoading from '../shared/fill-loading'
import { Button } from '../ui/button'
import { Separator } from '../ui/separator'

const Social = () => {
	const [loading, setLoading] = useState(false)

	const navigate = useNavigate()

	const onGoogle = () => {
		setLoading(true)
		const googleProvider = new GoogleAuthProvider()
		signInWithPopup(auth, googleProvider)
			.then(() => {
				navigate('/')
			})
			.finally(() => setLoading(false))
	}
	const onGithub = () => {
		setLoading(true)
		const githubProvider = new GithubAuthProvider()
		signInWithPopup(auth, githubProvider)
			.then(() => {
				navigate('/')
			})
			.finally(() => setLoading(false))
	}
	return (
		<>
			{loading && <FillLoading />}
			<Separator className='my-1' />
			<div className='grid grid-cols-2 gap-2'>
				<Button
					className='h-12'
					disabled={loading}
					onClick={onGithub}
					variant={'secondary'}
				>
					<FaGithub />
					<span>Sign in with Github</span>
				</Button>
				<Button
					className='h-12'
					variant={'destructive'}
					onClick={onGoogle}
					disabled={loading}
				>
					<FaGoogle />
					<span>Sign in with Google</span>
				</Button>
			</div>
		</>
	)
}

export default Social
