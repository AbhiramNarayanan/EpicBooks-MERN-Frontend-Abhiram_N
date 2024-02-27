//Now let's implement Home page
//so i imported useeffect and usestate

import React, { useEffect, useState } from "react";
import axios from "axios"; //for sending http req
import Spinner from "../components/Spinner"; //to show spinner on loading state
import { Link } from "react-router-dom"; //for links
import { AiOutlineEdit } from "react-icons/ai"; //then diff icons
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable";
import BooksCard from "../components/home/BooksCard";

const Home = () => {
  //then we need to create 2 state
  const [books, setBooks] = useState([]); //books state with default value of empty array //at starting we didnt created any books //thats why empty
  const [loading, setLoading] = useState(false); //loading state with default value of false //since at start we dont need loading right
  const [showType, setShowType] = useState('table');
  //then we need useEffect to call our backend
  //used a useEffect with a empty dependancy array
  useEffect(() => {
    setLoading(true); //then made setLoading to true //when we connect we need loading at 1st that's why
    //then we call axios.get with backend route for books list
    axios
      .get("https://epicbooks-mern-abhiram-n.onrender.com/books")
      .then((response) => {
        //here response.data is the object of our response result and data is our content data (we add data at backend at response.data , so there is something in that now thats why used .data again)
        //we use this data to save in our state //i mean when we create the obj in backend we have count and data inside object so we need the data in that obj so.. (response.data is obj and .data is the data inside obj  data:{})
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        //if we shown any of the result we need to stop loading right whats why it set to false
        setLoading(false);
      });
  }, []);
  return (
    //now lets work on jsx parts //for our main div we given a padding 4
    <div className="p-4">
        <div className="flex justify-center items-center gap-x-4">
          <button
              className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
              onClick={() => setShowType('table')}
          >
            Table
          </button>
          <button
              className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
              onClick={() => setShowType('card')}
          >
            Card
          </button>
        </div>
      <div className="flex justify-between items-center">
        {/* we given flex and justify content space between and items aligned to center */}
        <h1 className="text-3xl my-8">Books List</h1>
        {/*for text 3x large margin y 8 */}{" "}
        {/*we have a main div inside that a div inside that a heading and a link, for this label use an icon up in MdOutlineAddBox  */}
        <Link to="/books/create" >
          <MdOutlineAddBox className="text-sky-800 text-4xl" />{" "}
          {/*for the link we used an icon */}
        </Link>
      </div>
      {/* then we used a condition if loading show spinner else show a table*/}
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;

//after typing all , right click and format document, coding should align crtly ,and then go to our application (to the url we get when we run npm run dev in frontend) to see results
//we can see whenever we click the icons routing properly happens go to the to place
//when click + icon we go to /books/create (to page CreateBook)
//when click bs info circle we go to /books/details/id (i mean show ShowBook)
//when click edit icon go to /books/edit/id (in which produch product we click that id will come here) (i mean show EditBook.jsx)
//when click delete icon we go to /books/delete/id (i mean to DeleteBook.jsx)
//now we need to create BackButton
