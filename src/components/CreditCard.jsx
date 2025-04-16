function CreditCard(props) {
    const {
      type,
      number,
      expirationMonth,
      expirationYear,
      bank,
      owner,
      bgColor,
      color,
    } = props;
  
    const lastFour = number.slice(-4);
    const hiddenNumber = '•••• •••• •••• ' + lastFour;
  
    const formattedMonth = expirationMonth.toString().padStart(2, '0');
    const formattedYear = expirationYear.toString().slice(-2);
  
    const cardLogo =
      type === 'Visa'
        ? 'https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png'
        : 'https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png';
  
    return (
      <div
        style={{
          backgroundColor: bgColor,
          color: color,
          borderRadius: '10px',
          padding: '20px',
          width: '300px',
          margin: '10px auto',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ textAlign: 'right' }}>
          <img src={cardLogo} alt={type} style={{ height: '20px' }} />
        </div>
  
        <div style={{ fontSize: '1.5em', margin: '20px 0', letterSpacing: '2px' }}>
          {hiddenNumber}
        </div>
  
        <div style={{ display: 'flex', fontSize: '0.9em' }}>
          <span style={{ marginRight: '10px' }}>
            Expires {formattedMonth}/{formattedYear}
          </span>
          <span>{bank}</span>
        </div>
  
        <div style={{ marginTop: '10px', fontSize: '0.9em' }}>{owner}</div>
      </div>
    );
  }
  
  export default CreditCard;
  