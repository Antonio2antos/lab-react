import React, { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {  // Desestruturação correta de 'props'
    const [isClicked, setClicked] = useState(false);  // Controla o estado de "clicado"

    const handleClick = () => {
        setClicked(!isClicked);  // Alterna o estado de "clicado"
    };

    return (
        <div>
            <img
                src={isClicked ? imgClicked : img}  // Mostra a imagem clicada ou original
                alt="clickable"
                onClick={handleClick}  // Função chamada ao clicar na imagem
                style={{ width: '200px', height: '200px', cursor: 'pointer' }}
            />
        </div>
    );
}

export default ClickablePicture;
