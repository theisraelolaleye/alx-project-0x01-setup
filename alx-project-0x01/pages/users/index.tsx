import { UserProps } from '@/interfaces';
import UserCard from '@/components/common/UserCard';
import Header from '@/components/layout/Header';

const UsersPage = ({ posts }: { posts: UserProps[] }) => {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="p-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <div className="grid grid-cols-3 gap-4">
          {posts.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
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