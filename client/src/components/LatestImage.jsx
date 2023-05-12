import { useContext, useEffect } from "react";
import { AppContext } from "../App";

const LatestImage = () => {
  const { latestPost, setLatestPost } = useContext(AppContext);

  useEffect(() => {
    fetch("http://localhost:5000/latest")
      .then((response) => response.json())
      .then((data) => {
        setLatestPost(data);
      })
      .catch((error) => console.error(error));
  }, [latestPost?.image_url]);

  return (
    <div>
      <h3>{latestPost.data?.title}</h3>
      <img
        src={latestPost?.image_url}
        alt="latest-post"
        className="latest-image"
      />
    </div>
  );
};

export default LatestImage;
