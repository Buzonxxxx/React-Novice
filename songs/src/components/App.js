import React from "react";
import SongList from "./SongList";

const App = () => {
  return (
    <div className="ui cintainer grid">
      <div className="i row">
        <div className="column eight wide">
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
