import axios from "axios";
import { useEffect, useRef, useState } from "react";

const API_URL = "http://localhost:5000";

const ImagesList = () => {
  const [images, setImages] = useState([]);
  const [imagesList, setImagesList] = useState([]);
  const [message, setMessage] = useState({});

  //   console.log(images.map((image, i) => image[0]));

  useEffect(() => {
    const fetchImages = async () => {
      const res = await axios.get(`${API_URL}/latest-message`);
      setImagesList(res?.data);
    };

    fetchImages();
  }, [imagesList]);

  const handleImages = (e) => {
    const files = Array.from(e.target.files);
    setImages((oldArray) => [...oldArray, files]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("message[content]", "Test Message");
    images.map((image, i) => data.append("message[images][]", image[0]));
    // for (var pair of data.entries()) {
    //   console.log(pair);
    // }

    postData(data);
  };

  const postData = (data) => {
    fetch(`${API_URL}/messages`, {
      method: "POST",
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleImages}
          type="file"
          accept="image/*"
          name="images"
          multiple
        />
        <button type="submit">Submit</button>
      </form>
      <div className="images">
        {imagesList?.images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="uploaded"
            style={{ width: "200px", height: "200px" }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImagesList;
