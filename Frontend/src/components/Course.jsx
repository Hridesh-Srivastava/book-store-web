import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:3000/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-purple-500"> Here! </span>
          </h1>
          <p className="mt-12">
            Offering educational courses through your online web bookstore can
            significantly enhance customer engagement and loyalty by providing
            value beyond just book sales. You could offer a variety of courses
            that cater to the diverse interests of your audience. For instance,
            a course on book collecting could teach enthusiasts how to identify
            rare and valuable books, properly care for their collections, and
            navigate the world of online book markets. This would appeal to both
            novice and experienced collectors. Another popular course could
            focus on writing and self-publishing, guiding aspiring authors
            through the process of planning, writing, editing, and publishing
            their books.
          </p>
          <Link to="/">
            <button className="mt-6 bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
