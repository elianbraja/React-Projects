import {Link, useNavigate} from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();

    function navigateHandler() {
        navigate('/products')
    }

    return (
        <>
            <h1>My Home Page</h1>
            {/*
            Me kete menyre dergojme nje HTTP Request qe ben qe faqja te beje reload dhe i gjithe
            javascript te behet download nga e para. Nuk eshte shume optiomale si zgjidhje.
            <p>Go to <a href="/products">the list of products (href)</a></p>
            */}

            {/*Me kete menyre beget load vetem faqja e re dhe vetem portion i javascript qe duhet. Pra
            nuk kemi page reload ne kete rast. Link mundesohet nga vete react-router-dom. */}
            <p>
                <button><Link to="/products">Products (Link)</Link></button>
            </p>
            <p>
                <button onClick={navigateHandler}>Products (Function Handler)</button>
            </p>
        </>
    )
}

export default HomePage