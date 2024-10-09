import { createContext, useState } from "react";

export const LikedContext = createContext({
  ids: [],
  addLike: (id) => {},
  removeLike: (id) => {},
});

import { View, Text } from "react-native";
import React from "react";

function LikedContextProvider({ children }) {
  const [likeEventIds, setLikeEventIds] = useState([]);

  function addLike(id) {
    setLikeEventIds((currentLikeIds) => {
      [...currentLikeIds, id];
    });
  }

  function removeLike() {
    setLikeEventIds((currentLikeIds) => {
      currentLikeIds.filter(eventId !== id);
    });
  }

  const value = {
    ids: likeEventIds,
    addLike: addLike,
    removeLike: removeLike,
  };

  return (
    <LikedContext.Provider value={value}>
        {children}
    </LikedContext.Provider>
  );
}

export default LikedContextProvider;
