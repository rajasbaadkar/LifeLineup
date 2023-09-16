import React from 'react'
import "./footer.css"
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
      <div className='stockify__footer'>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
          <footer>
              <div class="footer">
                  <Box display="flex" flexDirection="row" justifyContent="center" gap="3rem">
                      <Link href="#"><i style={{color:"gray"}} class="fa fa-facebook"></i></Link>
                      <Link href="#"><i style={{color:"gray"}} class="fa fa-instagram"></i></Link>
                      <Link href="#"><i style={{color:"gray"}} class="fa fa-youtube"></i></Link>
                      <Link href="#"><i style={{color:"gray"}} class="fa fa-twitter"></i></Link>
                  </Box>

                  <div class="row">
                      <ul>
                          <li><Link href="#">Contact us</Link></li>
                          <li><Link href="#">Our Services</Link></li>
                          <li><Link href="#">Privacy Policy</Link></li>
                          <li><Link href="#">Terms & Conditions</Link></li>
                      </ul>
                  </div>

                  <Box display="flex" justifyContent="center">
                      <Typography sx={{
                        color:"gray"
                      }}>LifeLineup Copyright © 2023 LifeLineup - All rights reserved</Typography>
                  </Box>
              </div>
          </footer>
      </div>
  )
}

export default Footer;


