// "use client";
import { ReactNode, Suspense } from "react";
import { notFound } from "next/navigation";
// import { getMDXComponent } from "next-contentlayer/hooks";
import { format, parseISO } from "date-fns";
import { allBooks } from "@/.contentlayer/generated";
import GMDX from "@/components/gmdx";
import Layout from "@/provider/layoutprovider";
import AppRightbar from "@/components/layout/AppRightbar";

export const generateStaticParams = async () =>
  // allBooks.map((post) => ({ slug: post.url }));
  allBooks.map((post) => ({ slug: post.url.split("/") }));

function SearchBarFallback() {
  return <>placeholder</>;
}

export default async function Page({ params }: { params: { slug: string[] } }) {
  console.log("Param Book", params);
  // const post = allBooks.find((post) => post.url.split("/") == params.slug);
  const post = allBooks.find(
    (post) => post.urlarray === params.slug.join("/")
    // (post) =>JSON.stringify(post.url.split("/")) === JSON.stringify(params.slug)
  );

  if (!post) notFound();

  // const url = post.url;
  const url = post.url;
  const rightMenu = post.headings;
  console.log("Url", url);

  return (
    <>
      <div className="flex justify-content-between flex-column-reverse md:flex-row">
        <div className="flex flex-column !rw-relative tw-grow tw-max-w-screen-md tw-mx-auto">
          <GMDX code={post.body.code} />
        </div>
        <div style={{ minWidth: `250px`, fontSize: "0.875rem" }}>
          <div
            className="sticky font-bold  pt-4 pl-4 tw-top-10"
            // style={{ top: `40px` }}
          >
            <AppRightbar menu={rightMenu} pageUrl={url} />
          </div>
        </div>
      </div>
    </>
  );
}
// export default KicsPage;
