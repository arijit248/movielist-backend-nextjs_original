'use server'
export default async function CoreData(page){
    const response = await fetch(
      `http://localhost:8000/allmovie`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page: page,
          limit: 12
        }),
        revalidate: 10,
      }
    );
    const movieData = await response.json();
    return movieData
  }