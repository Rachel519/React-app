import './hero.css';
import Typography from '@mui/material/Typography';

function Hero() {
    return (
        <>
            {/* <Card
                name="Arahí Herrera"
                title="Dev JavaScript"
                email="herreraarahi@gmail.com"
                about="Fracasando en el desarrollo y la vida"
            /> */}
            <Typography variant="h1">
                Welcome
            </Typography>
        </>
    )
};
{/* <Typography variant="h1" gutterBottom> */}

// function Card(props) {
//     return (
//         <div className = 'card'>
//             <h2>{props.name}</h2>
//             <p>{props.title}</p>
//             <p>{props.email}</p>
//             <p>{props.about}</p>
//         </div>
//     )
// }

export default Hero;