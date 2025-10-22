
import { Container , Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router';
import './TheHeader.css'
const navlinks = [
    { path: '/', name: 'Home' },
    { path: '/cart', name: 'Cart' },
    { path: '/category', name: 'Category' },
    { path: '/login', name: 'Login' },
    { path: '/register', name: 'Register' },
    { path: '/ProductDetails', name: 'Product Details' }
]
function TheHeader() {
    return (
        <header>
            <Container>
                <Nav>
                    <ul className='nav-list'>
                        {navlinks.map(({ path, name }) => (
                            <li key={path} className='nav-item'>
                                <NavLink to={path}> {name}</NavLink>
                            </li>
                        ))}
                    </ul>
                </Nav>
            </Container>
        </header>
    )
}
export default TheHeader;