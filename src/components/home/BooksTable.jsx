import { Link } from "react-router-dom"; //for links
import { AiOutlineEdit } from "react-icons/ai"; //then diff icons
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
          
          {/*then we give width and other styles , usedthead and tbody just placed the heading and body sep and others are same */}
          <thead>
            <tr>
              <th className="border border-slate-600 rounded-md">No</th>{" "}
              {/*then border slate */}
              <th className="border border-slate-600 rounded-md">Title</th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Author
              </th>{" "}
              {/*here in 2 columns out of 5 we use max-md:hidden which means these 2 columns are hidden for mobile and tablet sizes i mean for smaller sizes */}
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Publish Year
              </th>
              <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
          </thead>
          <tbody>
                               {/*nowinside the tbody we mapped the books and for each content in books array we received 2 , abook and its index */}
                               {/*here i am using () after the map function , like this enclose everything , i mean every jsx using parantheses is needed to get result of map , it needed to show tr inside map*/}
                               {/*if not () this ,can use {return()} instead of (), enclose every jsx in return after curly bracket, Using Curly Braces and Return Statement */}
            {books.map((book, index) => ( 
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                  {/*we use this because the index start from 0 but we need it from 1 so... */}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {/*like we did before given styles for each */}
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {/*in the last td we placed a div with 3 lnks */}
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/details/${book._id}`} >
                      {/*we given the route like this to get dynamic route  */}
                      <BsInfoCircle className="text-2x1 text-green-800" />{" "}
                      {/*used icon as link */}
                    </Link>

                    <Link to={`/books/edit/${book._id}`} >
                      <AiOutlineEdit className="text-2x1 text-yellow-600" />{" "}
                      {/*Edit icon */}
                    </Link>

                    <Link to={`/books/delete/${book._id}`} >
                      <MdOutlineDelete className="text-2x1 text-red-600" />{" "}
                      {/*delete icon */}
                    </Link>
                  </div>
                </td>
              </tr>
            )
            )}
          </tbody>
        </table>
  )
}

export default BooksTable