const canvasDefaultState = {
  lorum_chunks: []
};

const addLorumChunk = (state, lorumChunks) => {
  let newState = { ...state };

  newState.lorum_chunks = [...newState.lorum_chunks, ...lorumChunks];

  return newState;
};

const resetLorumChunks = () => {
  return canvasDefaultState;
};

export default (state = canvasDefaultState, action) => {
  switch (action.type) {
    case "ADD_LORUM_CHUNK":
      return addLorumChunk(state, action.lorumChunks);
    case "RESET_LORUM_CHUNKS":
      return resetLorumChunks();
    default:
      return state;
  }
};
