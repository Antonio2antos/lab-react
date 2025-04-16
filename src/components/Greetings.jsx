function Greeting(props) {
    const { lang, children } = props;
  
    return (
      <div>
        {lang === 'de' && "Hallo"}
        {lang === 'fr' && "Bonjour"}
        {lang === 'es' && "Hola"}
        {lang === 'en' && "Hello"}
        {lang === 'pt' && "Olá"}
  
        , {children}
      </div>
    );
  }
  
  export default Greeting;
  