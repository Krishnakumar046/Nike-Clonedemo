import React from 'react'

export default function Sample() {
    return (
        <div>
            <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td><img src={product.icon} alt="image" class="w-50 h-40" /></td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <div className="btn-group btn-group-sm ">
                        <button className="btn btn-primary " onClick={() => Decrement(product.id)}><b>-</b></button>
                        <button className="btn btn-light">{product.Quantity}</button>
                        <button className="btn btn-primary " onClick={() => Increment(product.id)}><b>+</b></button>
                    </div>
                </td>
                <td>
                    <button className="btn btn-sm btn-warning" onClick={() => dispatch({ type: 'Remove', id: product.id })}>Remove</button>
                </td>
            </tr>
        </div>
    )
}
