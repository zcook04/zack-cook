import Link from 'next/link'

function PageNotFound() {
    return (
        <main>
            <h1>Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.
                <Link href='/'>Return Home</Link>
            </p>
        </main>
    )
}

export default PageNotFound
