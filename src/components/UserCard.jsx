import React from 'react';

function UserCard(props) {
  const { user } = props;
  const { username, age, club } = user;

  const colorDict = {
    benfica: 'red',
    sporting: 'green',
    porto: 'blue',
  };

  // Define a cor com base no clube
  const userColor = colorDict[club?.toLowerCase()] || 'gray'; // caso não exista, usa cinza

  return (
    <div
      className="user-card"
      style={{
        border: `2px solid ${userColor}`,
        padding: '10px',
        borderRadius: '10px',
        margin: '10px',
        color: userColor,
      }}
    >
      <div>Nome do utilizador: {username}</div>
      <div>Idade: {age}</div>
      <div>Clube: {club}</div>
    </div>
  );
}

export default UserCard;