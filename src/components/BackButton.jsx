//after showing all books in table in Home.jsx, then when we click bsinfocircle icon we need to show one book at another page that is need to show ShowBook.jsx
//but before that we need to create the backbutton icon
//we created a icon to the left , so when we click that we can go back to our books list 
//so created BackButton.jsx in the components folder
//and imported Link and an icon here

import { Link } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";

//used a prop here named destination
const BackButton = ({ destination = '/' }) => { //made a default value for prop destination  called /, so if there is not a value passed, it takes /, that is Home page when we click the back button
  return (
    //then created a div with flex style
    <div className="flex">
    <Link
    to={destination}
    className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit" //here p means padding, rounded lg, w means width
    >
            {/*inside div gave an icon left as link and given link to destination the prop we got, then given styles for div, link and icon  */}                            
    <BsArrowLeft className='text-2xl' />
    </Link>
    </div>
  )
}

export default BackButton

//after creating this go to ShowBook.jsx to create that