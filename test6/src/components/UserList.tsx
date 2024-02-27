import { useEffect, useState } from 'react';

type User = {
    id: number;
    firstName: string;
    age: number;
}

async function getUserList (url: string): Promise<User[]> {   
    return fetch(url).then(res => res.json())
}


const UserList = () => {
const [user, setUser] = useState <User[] | null>(null);

useEffect (() => {
    getUserList('https://dummyjson.com/users').then((data: any) => {
        if (data) {
            setUser(data.users)
        }
    })
}, [])

if (!user) {
    return null;
}

    return (
        <>
            {user.map((user) => {
                return(
                    <div>
                        <div>
                            id: {user.id}
                        </div>
                        <div>
                            name: {user.firstName}
                        </div>
                        <div>
                            age: {user.age}
                        </div>
                    </div>
                )
            })}
        </>
    );
};

export default UserList;
