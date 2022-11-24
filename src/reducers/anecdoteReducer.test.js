import deepFreeze from 'deep-freeze'
import reducer from './anecdoteReducer'

describe('anecdote reducer', () => {
  const anecdotesAtStart = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
  
  const getId = () => (100000 * Math.random()).toFixed(0)
  
  const asObject = (anecdote) => {
    return {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  }
  
  const initialState = anecdotesAtStart.map(asObject)
  
  test('votes is incremented', () => {
    const state = initialState
    const idToVote = state[0].id
    const action = {
      type: 'anecdotes/voteFor',
      payload: idToVote
    }

    deepFreeze(state)
    const newState = reducer(state, action)
    expect(newState).toContainEqual({...initialState[0], votes: initialState[0].votes + 1})
  })
})