import { useSelector, useDispatch } from 'react-redux'
import { voteFor } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(({anecdotes, filters}) => 
  anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filters)))
  const dispatch = useDispatch()
  
  const vote = (anecdote) => {
      dispatch(voteFor(anecdote.id, anecdote))
      dispatch(setNotification(`you voted '${anecdote.content}'`, 5))
  }

  return (
    <div>
      {[...anecdotes].sort((a, b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList