import React from 'react';
import Card from './Card.component';

// const CardList = ({robots}) =>{
//     const cardArray = robots.map((user,i) => {
//         return (
//             <Card 
//                 id={robots[i].id} 
//                 name={robots[i].name} 
//                 email={robots[i].email} 
//             />);
//     });
//     return (
//         <div>{cardArray}</div>
//     )
// };
const CardList = ({ robots }) => {
    return (
        <div>
            {robots.map((user, i) => {
                return (
                    <Card
                        key={i}
                        id={robots[i].id}
                        name={robots[i].name}
                        email={robots[i].email}
                    />);
            })
            }
        </div>
    )
};

export default CardList;