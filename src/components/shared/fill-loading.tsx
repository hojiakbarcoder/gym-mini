import { RiLoader5Fill } from 'react-icons/ri'
import { Skeleton } from '../ui/skeleton'
const FillLoading = () => {
	return (
		<Skeleton className='absolute inset-0 flex justify-center items-center w-full h-full opacity-20 z-50'>
			<RiLoader5Fill className='animate-spin h-12 w-12' />
		</Skeleton>
	)
}

export default FillLoading
