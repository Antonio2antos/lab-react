import Rating from "./Rating";

function DriverCard({ name, rating, img, car}) {
    return (
        <div
            style={{
                display: 'flex',
                border: '1px solid #ccc',
                padding: '10px',
                margin: '10px',
                maxWidth: '500px',
                backgroundColor: '#f9f9f9',
                color: '#333'
            }}
        >
            <img src={img} alt={name} style={{ width: '100px', height: '100px', borderRadius: '50%', marginRight: '20px' }} />
            <div>
                <h2>{name}</h2>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
              </div>
            </div>
    )}


export default DriverCard;