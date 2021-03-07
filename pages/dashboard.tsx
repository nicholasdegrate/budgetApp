import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/client'
import withAuth from '../middleware/server/auth';

const Dashboard: React.FC<{}> = () => {
    const [session, loading] = useSession()
    const [content, setContent] = useState();

    useEffect(() => {

        const data = async () => {
            const res = await fetch("/api/dashboard")
            const json = await res.json()

            if (json.content) {
                setContent(json.content)
            }
        }
        data()
    }, [session])

    if (typeof window !== 'undefined' && loading) return null

    if (!session) {

        return (
            <div>
                you are not signed in
            </div>
        )
    }

    return (
        <div>
            hello you are signed in
            {content}
        </div>
    )
}

export default withAuth(Dashboard)