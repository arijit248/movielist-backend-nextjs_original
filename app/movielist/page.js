import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
import { Container } from '@mui/material';
import Paginations from "@/components/Pagination";
import CoreData from '@/helper/movieListAction';
import Link from 'next/link';


export default async function MovieList({searchParams }) {
  const pages = [1,2,3,4,5]
  const page = (await searchParams)?.page || 1;

  // async function coreData(){
  //   'use server'
  //   const response = await fetch(
  //     `http://localhost:8000/allmovie`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         page: page,
  //         limit: 12
  //       }),
  //       revalidate: 10,
  //     }
  //   );
  //   const movieData = await response.json();
  //   return movieData
  // }

  const movieData = await CoreData(page)

  return (
    <Container fluid="true" maxWidth='xl' style={{padding:'16px',backgroundColor:'snow'}}>
      <center><h1 style={{color:'black',padding:'5px'}}>Movies</h1></center>
      <Grid container spacing={4}>
        {movieData.map((ele) => {
          return (
            <Grid xl={4} lg={4} sm={12} key={ele.title}>
              <Link href={`/movie-detail/${ele?._id}`}>
              <Card sx={{ maxWidth: 345, height:500}}>
                {/* <CardMedia
                  sx={{ height: 300 }}
                  image={ele.poster}
                  title="green iguana"
                /> */}
                <div style={{height:'300px'}}>
                 <Image src = {ele?.poster} alt={ele?.title} width="345" height="300"/>
                </div>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Title: {ele?.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Plot: {ele?.plot}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Release: {ele?.year}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    CAST: {ele?.cast?.join(", ")}
                  </Typography>
                </CardContent>
                {/* <CardActions>
          <Button size="small">View</Button>
        </CardActions> */}
              </Card>
              </Link>
            </Grid>
          )
        })}
      </Grid>
      <div style={{display:'flex',justifyContent:'center',padding:'20px',gap:'2px'}}>
        {/* {pages.map((elem) => {
          return(
            <Paginations  data={elem} key={elem}/>
          )
        })} */}
        <Paginations page={page}/>
        </div>
    </Container>
  );
}
