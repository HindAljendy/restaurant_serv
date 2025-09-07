import './VideoPlayer.css'
import video from './../../../assets/video.mp4'
import { FaTimes } from 'react-icons/fa'
import ReactPlayer from 'react-player'
import { useState } from 'react'

const VideoPlayer = ({ playState, setPlayState }) => {

    return (

        
        <div className={`VideoPlayer ${playState ? '' : 'hide'}`} >
            <div className='container-video'>
                <div className='heading-video'>
                    <h2>Youtube Video</h2>
                    <FaTimes className='icon-close'  onClick={()=>setPlayState(false)}  />
                </div>
                {/* local video */}

                {/*  {playState && (
                    <video src={video} autoPlay controls muted></video>
                )} */}

                {/* youtube video */}
                <ReactPlayer 
                    src='https://www.youtube.com/watch?v=xPPLbEFbCAo'
                    width="100%"
                    height="400px"
                    controls={true}
                    onPlay={true}
                    style={{marginTop:"30px"}}
                />

            </div>


        </div>
    )
}

export default VideoPlayer