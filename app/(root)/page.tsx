import Searchform from "../components/SearchForm";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
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
    </>
  );
}
