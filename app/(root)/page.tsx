import Searchform from "@/components/ui/SearchForm";
import StartupCard from "../../components/StartupCard";


export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name:'Roald Dahl' },
      _id: 1,
      description: "This is a description",
      image: "https://cdn4.libris.ro/img/pozeprod/39135/39134858-1.jpg",
      category:'Universal literature',
      title:'Matilda',
    },
  ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          From classics to bestsellers, <br /> explore a world of curated books
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Books, Vote on entries, and Get suggestions tailored to your
          taste
        </p>
        <Searchform query={query} />
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query? `Search results for "${query}"` : 'All Startups'}
        </p>
<ul className="mt-7 card_grid">
  {posts?.length > 0 ?(
    posts.map((post:StartupCardType)=>(
      <StartupCard key={post?._id} post={post}/>)
    )) :(
      <p className="no-results">No books found</p>
    )
  }
</ul>
      </section>
    </>
  );
}
