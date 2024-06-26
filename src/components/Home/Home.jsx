import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import { GITHUB_URL, LINKDIN_URL, EMAIL } from '../../utils/links/links'
import './Home.css'
import Stack from '../Stack/Stack';


const Home = () => {


  return (
    <div className='home-con'>
      <div>
        <h1 className='heading-1'>Hi I<span className='name-clr'>'</span>m <span className='name-clr'>Sreeparvathy</span><span className='name-clr'>.</span></h1>
        <h3 className='role'>FRONTEND DEVELOPER</h3>
        <h2>They say I speak code<span className='name-clr'>.</span> Fluently<span className='name-clr'> !</span> <br/>
        Let<span className='name-clr'>'</span>s connect<span className='name-clr'>.</span></h2>
        <div className='icons'>
          <a href={LINKDIN_URL}><IconButton className='icon-btn'>
            <LinkedInIcon className='icon-mat' />
          </IconButton >
          </a>
          <a href={GITHUB_URL}><IconButton className='icon-btn'>
            <GitHubIcon className='icon-mat' />
          </IconButton>
          </a>
          <a href={EMAIL}>
            <IconButton className='icon-btn'>
              <EmailIcon className='icon-mat' />
            </IconButton>
          </a>
        </div>
      </div>
      <div className='profile'>
        {/* <img src='src/utils/images/parvathy1.png' alt='developer'></img> */}
      </div>
    </div>
  )
}

export default Home