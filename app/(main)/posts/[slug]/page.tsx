// "use client";
// import { format, parseISO } from "date-fns";
import { allPosts } from "@/.contentlayer/generated";
import { getMDXComponent } from "next-contentlayer/hooks";
import GMDX from "@/components/gmdx";
// import { getMDXComponent } from "@/components/primecomp";
import Giscus from "@/components/Giscus";

// export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath }))
export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post.url }));

// export const generateMetadata = ({ params } : { params: { slug: string }}) => {
//   const post = allPosts.find((post) => post.url === params.slug)
//   return { title: post?.title }
// }

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post.url === params.slug);
  if (!post) {
    return <></>;
  }
  // const Content = getMDXComponent(post?.body.code);

  return (
    <article className="py-8 mx-auto max-w-xl">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs text-gray-600">
          {/* {format(parseISO(post.date), "LLLL d, yyyy")} */}
        </time>
        <h1>{post?.title}</h1>
      </div>
      {/* <Content /> */}
      <GMDX code={post.body.code} />
      <div className="tw-mt-12">
        <Giscus />
      </div>
    </article>
  );
};

export default PostLayout;
