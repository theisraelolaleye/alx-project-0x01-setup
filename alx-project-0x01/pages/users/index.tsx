import React from 'react'
import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';

const UsersPage = () => {
  const users: UserProps[] = []; // Fetch or pass users data here

  return (
    <div>
      {users.map(user => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts
    }
  }
}

export default UsersPage