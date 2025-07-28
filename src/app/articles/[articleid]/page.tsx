// app/products/page.tsx
export default function ArticleId({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      Sort: {searchParams.sort} <br />
      Page: {searchParams.page}
    </div>
  );
}
