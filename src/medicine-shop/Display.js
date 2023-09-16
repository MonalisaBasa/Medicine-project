import React from 'react'

const Display = (props) => {
    return (
        <div>
            <div >
                <h2>Product Added:</h2>

                
                   
                    <ul >
                        {props.users
                          .map((user) => (
                                <li key={user.id}>
                                    Product_ID: {user.id},
                                    Product_Name:{user.name},
                                    Product_Desc:{user.desc}
                                    Product_Price: Rs.{user.price}, 
                                    Product_Quantity{user.qty}
                                    <button 
                                       
                                    >
                                        Add to cart
                                    </button>

                                </li>
                            ))}

                    </ul>
            
            </div>
        </div>
    )
}

export default Display
