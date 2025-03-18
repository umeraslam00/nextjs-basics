

/**
 * This function fetches a list of blog posts from the jsonplaceholder API
 * and displays them with their title and body.
 * 
 * @returns A JSX element containing the list of posts.
 */
export default async function Posts() {

    const res = await fetch("https://jsonplaceholder.typicode.com/posts")
    const allPosts = await res.json()

    return (
        <>
            <h1 className="font-bold text-5xl mb-10">Blog Posts</h1>
            <div>
                {allPosts.map((item, index) => (
                    <div className="m-3 mb-6">
                        <div className="font-bold text-2xl">Title:{item.title}</div>
                        <div>{item.body}</div>
                    </div>
                    
                ))}
            </div>

        </>
    )
}