import React, {useState} from 'react';



function LikeButton () {
    const [likes, setLikes] = useState(0);
    const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
    
    const handleClick = () => {
        setLikes(likes + 1);
    };

    

  return (
    <button
      style={{backgroundColor: colors[likes % colors.length]}}
      onClick={handleClick}
    >
      {likes} Likes
    </button>
    
    );
}
export default LikeButton;