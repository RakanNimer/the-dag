import addNodes from '../core/public/addNodes';
import getStateManipulators from '../core/private/_getStateManipulators';

describe('core.public.addNodes', () => {
  test('exports', () => {
    expect(addNodes).toMatchSnapshot();
  });
  test('Adds Single Node', () => {
    const node = { nodeID: 1, data: { some: 'data' } };
    const stateHandlers = getStateManipulators();
    addNodes([node], stateHandlers);
    expect(stateHandlers.getState()).toMatchSnapshot();
  });

  test('Adds Two Nodes', () => {
    const sourceNode = { nodeID: 1, data: { some: 'data' } };
    const targetNode = { nodeID: 2, data: { some: 'otherData' } };
    const stateHandlers = getStateManipulators();
    addNodes([sourceNode, targetNode], stateHandlers);
    expect(stateHandlers.getState()).toMatchSnapshot();
  });
  test('Fails silently with no arguments', () => {
    const stateHandlers = getStateManipulators();
    addNodes();
    const state = stateHandlers.getState();
    expect(state).toMatchSnapshot();
  });
});
