import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import  "./BreadCrumbs.css";


function BreadCrumbs({search}) {

  function handleClick(event) {
    event.preventDefault();
    // console.log('You clicked a breadcrumb.');
  }

  const breadcrumb_model = [
    <Link underline="hover" key="1" color="inherit" path="/path" onClick={handleClick} className='deadclick'>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/path"
      onClick={handleClick}
      className='deadclick'
      
    >
      India
    </Link>,
    <Link
       underline="hover"
       key="2"
       color="inherit"
       href="/path"
       onClick={handleClick}
       className='deadclick'
     >
       New Delhi
     </Link>

    // <Typography key="3" color="text.primary">
    //   Search results
    // </Typography>,
  ];


  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" path="/path" onClick={handleClick}>
      Home
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/path"
      onClick={handleClick}
      className='deadclick'
    >
      India
    </Link>,

    <Typography key="3" color="text.primary">
      Search results
    </Typography>,
  ];



  return (
    <section className='breadcrumbscontainer'>
    <Stack spacing={2} title='Coming Soon'  className='deadclick'>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {search ? breadcrumb_model : breadcrumbs}
      </Breadcrumbs>
    </Stack>
    </section>
  )
}

export default BreadCrumbs
