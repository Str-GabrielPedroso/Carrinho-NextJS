import Header from '@/components/Header';
import CartTable from "../components/CartTable"
import { NextPage } from 'next';
import Head from 'next/head';
import { Container } from 'reactstrap';
import CartTotal from '@/components/CartTotal';

const Products: NextPage = () => {
    return (
        <>
            <Head>
                <title>Carrinho</title>
                <meta name='description' content='Meu carrinho de compras' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Header />
            <main>
                <Container className="mb-5">
                    <h1 className="my-5">
                        Carrinho
                    </h1>

                    <CartTable />
                    <CartTotal />
                </Container>
            </main>
        </>
    )
}

export default Products