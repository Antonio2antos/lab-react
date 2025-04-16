import React, { useState } from 'react';


function Product(props) {

    const {
        product: { id, nome, preco, categoria, emStock },
        toggleStock,
        eliminarProduct,
    } = props

    const [precoAtual, setPreco] = useState(preco);

    const handlePriceChange = () => {
        setPrecoAtual(prev => preco + 10); // Aumenta o preço em 10
    }

    const handleEliminar = (e) => {
        e.stopPropagation(); // Impede que o clique no botão também dispare o handleClick
        eliminarProduct(id);
      };

    const handleClick = () => {
        toggleStock(id); // Chama a função para alternar o estoque
        handlePriceChange(); // Chama a função para alterar o preço
    };

    return (
        <div
          onClick={handleClick}
          className={`product ${emStock ? 'in-stock' : 'out-of-stock'}`}
          style={{ cursor: 'pointer', padding: '10px', border: '1px solid #ccc' }}
        >
          <h3 className="nome">{nome}</h3>
          <h3 className="preco">{precoAtual}€</h3>
          <h3 className="categoria">{categoria}</h3>
          <h3 className="em-stock">{emStock ? 'Em stock' : 'Indisponível'}</h3>
          <button onClick={handleEliminar} style={{ marginTop: '10px' }}>
        Eliminar
      </button>
            

        </div>
        
      );
    }
    
    export default Product;
