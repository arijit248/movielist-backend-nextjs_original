export default async function movieDetails(title){
    const response = await fetch(
        `http://localhost:8000/movielist`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: title
          }),
          revalidate: 10,
        }
      );
      const movieDetails = await response.json();
      return movieDetails
}