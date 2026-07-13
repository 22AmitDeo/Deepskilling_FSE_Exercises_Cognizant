import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

import { books, blogs, courses } from "./Components/Data";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (

    <div className="container">

      <div className="box">

        <h1>Course Details</h1>

        {showCourses && (
          <CourseDetails courses={courses} />
        )}

      </div>

      <div className="box">

        <h1>Book Details</h1>

        {showBooks
          ? <BookDetails books={books} />
          : <h3>No Books Available</h3>}

      </div>

      <div className="box">

        <h1>Blog Details</h1>

        {
          showBlogs
            ? <BlogDetails blogs={blogs} />
            : null
        }

      </div>

    </div>

  );
}

export default App;