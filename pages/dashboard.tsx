import { useState, useEffect } from 'react'
import { useSession, getSession } from 'next-auth/client'
import withAuth from '../middleware/server/auth';
import { useRouter } from 'next/router'

const Dashboard = () => {

    const [session, loading] = useSession()
    const [content, setContent] = useState();
    console.log(session)

    const router = useRouter()

    function Redirect({to}) {
        const router = useRouter();

        useEffect(() => {

            router.push(to)
        }, [to]);
        return null;
    }

 

    if(session) {
        return <div>
                <p>hello you are signed in
                {content}</p>
                
            </div>
           
        }
    


        if (!session) {
            return <Redirect to='/' />
        } 

        


          return <p>hi</p>  

        }
        export async function getServerSideProps(context) {
            const session = await getSession(context)
            return {
              props: { session }
            }
          }
        
        

export default Dashboard