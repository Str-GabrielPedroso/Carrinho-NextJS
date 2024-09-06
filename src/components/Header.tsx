// src/components/Header.tsx

import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

const Header = () => {
    return (
        <Navbar container="md" color="dark" dark>
            <Link href="/" id="link" className="navbar-brand" passHref>
                Inicio
            </Link>
            <Nav className="flex-row" navbar>
                <Link href="/products" id="link" className="nav-link me-2">
                    Products
                </Link>
                <Link href="/cart" id="link" className="nav-link">
                    Carrinho
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Header