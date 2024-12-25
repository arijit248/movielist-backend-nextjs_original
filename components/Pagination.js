'use client'
import Button from '@mui/material/Button';
import {useRouter}  from 'next/navigation';
import Pagination from '@mui/material/Pagination';
import{useState,useEffect} from 'react';

export default function Paginations({ data,page}){
    const router = useRouter();
    const [pages, setPage] = useState(page);


    const handleChange = (event, value) => {
      setPage(value);
      const url = `/movielist?page=${value}`;
          router.push(url)
    };
    //  function dataFetcher(event){
    //     console.log(event.target.innerText,"Sd")
    //     const url = `/movielist?page=${event.target.innerText}`;
    //     router.push(url)
    //   }

    return(
        // <Button onClick={()=>dataFetcher(data)} variant="outlined">{data}</Button>
        <Pagination count={1504}
        color='primary'
        // page={pages}
        size='large'
        // onClick={(evt)=>dataFetcher(evt)}
        siblingCount={5}
        onChange={handleChange}
         />
    )
}