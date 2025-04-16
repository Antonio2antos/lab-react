import React, { useState } from 'react';

const NumbersTable = ({ limit }) => {
  const [numbers, setNumbers] = useState([]);

  // Generate an array of numbers from 1 to the limit
  React.useEffect(() => {
    const generatedNumbers = [];
    for (let i = 1; i <= limit; i++) {
      generatedNumbers.push(i);
    }
    setNumbers(generatedNumbers);
  }, [limit]);

  const rows = [];
  for (let i = 0; i < numbers.length; i += 5) {
    rows.push(numbers.slice(i, i + 5));
  }

  return (
    <div>
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {row.map((number, index) => (
            <div
              key={index}
              style={{
                width: '50px',
                height: '50px',
                display: 'inline-block',
                textAlign: 'center',
                border: '1px solid black',
                backgroundColor: number % 2 === 0 ? 'red' : 'white', // Números pares em vermelho
                color: number % 2 === 0 ? 'white' : 'black', // Texto branco para números pares
              }}
            >
              {number}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NumbersTable;