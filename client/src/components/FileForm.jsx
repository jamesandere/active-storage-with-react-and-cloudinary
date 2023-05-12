import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";

const FileForm = () => {
  const { latestPost, setLatestPost } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("post[title]", e.target.title.value);
    data.append("post[image]", e.target.image.files[0]);
    submitToAPI(data);
  };

  const submitToAPI = (data) => {
    fetch("http://localhost:5000/posts", {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        setLatestPost(data.image_url);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <h1>File Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <br />
        <label htmlFor="image">Image</label>
        <input type="file" name="image" id="image" />
        <br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default FileForm;
