import { createContext, useState } from "react";
import LatestImage from "./components/LatestImage";
import FileForm from "./components/FileForm";
import ImagesList from "./components/ImagesList";

export const AppContext = createContext(null);

function App() {
  const [latestPost, setLatestPost] = useState(AppContext);

  return (
    <AppContext.Provider value={{ latestPost, setLatestPost }}>
      <div className="App">
        <FileForm />
        <LatestImage />
        <ImagesList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
