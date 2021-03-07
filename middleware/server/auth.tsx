import { getSession } from 'next-auth/client'

export default function withAuth(Component) {
    const withAuth = props => {
        return <Component {...props} />
    }

    withAuth.getInitialProps = async (req, res) => {
        const session = await getSession({ req })

        if (!session && req) {
            res.writeHead(
                302, { location: '/' }
            ).end()
            return {}
        }

        return { session }
    }

    return withAuth
}