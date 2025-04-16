function Rating({children}) {
    //Arredonda o valor para o inteiro mais próximo
  const rounded = Math.round(children);

    // Verifica se o valor arredondado é maior que 5, se sim, retorna 5
    const stars = '★'.repeat(rounded) + '☆'.repeat(5 - rounded);
  
    return (
    <div style={{ fontSize: '2rem', color: 'gold' }}>{stars}</div>
  );
}

export default Rating;