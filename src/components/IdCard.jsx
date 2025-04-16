function IdCard(props) {
    const { primeiroNome, apelido, genero, altura, idade, foto} = props;
  
    return (
    <div style={{ display: 'flex', border: '1px solid #ccc', padding: '10px', margin: '10px', maxWidth: '500px' , backgroundColor: '#f9f9f9', color: '#333'}}>
        <img src={foto} alt={`${primeiroNome} ${apelido}`} style={{ width: '200px', marginRight: '20px' }} />
        <div>
          <p><strong>primeiro Nome:</strong> {primeiroNome}</p>
          <p><strong>apelido:</strong> {apelido}</p>
          <p><strong>genero:</strong> {genero}</p>
          <p><strong>altura:</strong> {altura}cm</p>
          <p><strong>data de nascimento:</strong> {idade.toDateString()}</p>
        </div>
      </div>
    );
  }
  
  export default IdCard;
  