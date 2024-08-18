import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        hey, I'm Manan Chhajed 👋
      </h1>
      <p className="mb-4">
        {`I build backends and enjoy exploring algorithmic challenges. Competitive programmer rated Expert on Codeforces, 5 ⭐ on CodeChef, and Guardian on LeetCode`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
