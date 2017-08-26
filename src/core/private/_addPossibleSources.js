const addPossibleSources = ({ targetNode, sourceID }) => {
  const { possibleSources = [] } = targetNode;
  const updatedNode = Object.assign({}, targetNode, {
    possibleSources: [...possibleSources, sourceID]
  });
  return updatedNode;
};

export default addPossibleSources;
