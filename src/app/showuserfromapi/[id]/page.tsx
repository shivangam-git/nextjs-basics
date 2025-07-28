async function fetchUser(id: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/users/${id}`)
    const json = await res.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchUser(params.id);

  if (!data || data.error) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <div key={data.id}>
        <p>{data.name}</p>
        <p>{data.age}</p>
        <p>{data.id}</p>
      </div>
    </div>
  );
}
