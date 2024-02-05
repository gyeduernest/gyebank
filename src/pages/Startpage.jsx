import { Link } from 'react-router-dom'
import { LoadButton } from '../Components/ButtonLoad'




export function Startpage() {
  return (
    <div className='flex justify-center py-80'>

      <Link to="/dashboard">
        <LoadButton text="Click here to begin"/>
      </Link>

    </div>
  )
}
