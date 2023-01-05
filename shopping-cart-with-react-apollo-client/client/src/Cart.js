import { gql, useQuery } from '@apollo/client';

const GET_CART_ITEMS = gql`
    query GetCartItems {
        cartItems @client
    }
`

function Cart() {
    const { loading, error, data } = useQuery(GET_CART_ITEMS);

    if (loading) return "Loading cart!";
    if (error) return <p>ERROR: {error.message}</p>
    console.log(data);

    return (
        <>
            <h4>My Cart</h4>
            {data && data.cartItems.length === 0 ? (
                <p>There are no items in your cart!</p>
            ) : (
                <ul style={{ listStyle: "none" }}>
                    {data && data.cartItems.map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Cart;