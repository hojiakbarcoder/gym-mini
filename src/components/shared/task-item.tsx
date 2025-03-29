import { Edit2, Trash } from 'lucide-react'
import { CiPlay1 } from 'react-icons/ci'
import { HiStatusOnline } from 'react-icons/hi'
import { MdOutlineTaskAlt } from 'react-icons/md'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
const TaskItem = () => {
	return (
		<Card className='w-full p-4 shadow-md grid grid-cols-4 items-center relative'>
			<div className='flex gap-1 items-center'>
				<MdOutlineTaskAlt className='text-blue-500' />
				<span className='capitalize'>press</span>
			</div>
			<div className='flex gap-1 items-center'>
				<HiStatusOnline />
				<span className='capitalize text-sm'>Unstarted</span>
			</div>
			<div className='flex gap-1 items-center justify-self-end'>
				<Button className='w-8 h-8' variant={'ghost'} size={'icon'}>
					<CiPlay1 className='w-5 h-5 text-indigo-500' />
				</Button>
				<Button className='w-8 h-8' variant={'secondary'} size={'icon'}>
					<Edit2 className='w-5 h-5' />
				</Button>
				<Button className='w-8 h-8' variant={'destructive'} size={'icon'}>
					<Trash className='w-5 h-5 ' />
				</Button>
			</div>
		</Card>
	)
}

export default TaskItem
