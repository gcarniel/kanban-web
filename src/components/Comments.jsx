import socketIO from 'socket.io-client';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { config } from '../constants.js';

const socket = socketIO.connect(config.socketURL);

export const Comments = () => {
  const [comment, setComment] = useState('');
  const [commentList, setCommentList] = useState([]);
  const { category, id } = useParams();

  const addComment = (e) => {
    e.preventDefault();

    socket.emit('addComment', {
      comment,
      category,
      id,
      userId: localStorage.getItem('userId'),
    });
    setComment('');
  };

  useEffect(() => {
    socket.on('comments', (data) => setCommentList(data));
  }, []);

  useEffect(() => {
    socket.emit('fetchComments', { category, id });
  }, [category, id]);

  return (
    <div className="comments__container">
      <form className="comment__form" onSubmit={addComment}>
        <label htmlFor="comment">Adicionar um comentário</label>
        <textarea
          placeholder="Deixe um comentário..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={5}
          id="comment"
          name="comment"
          required
        ></textarea>
        <button className="commentBtn">Adicionar Comentário</button>
      </form>

      <div className="comments__section">
        <h2>Comentários</h2>
        {commentList.map((comment) => (
          <div key={comment.id}>
            <p>
              <span style={{ fontWeight: 'bold' }}>{comment.text} </span>by{' '}
              {comment.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
