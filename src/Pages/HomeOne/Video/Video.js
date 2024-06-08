import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'

const Video = ({bannerBg}) => {
    const [openVideo, setOpenVideo] = useState(false)
    const openVideoModal = () => {
        setOpenVideo(true)
    }
    return (
        <div className="video__area" style={{backgroundImage: `url(${bannerBg})`}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div onClick={openVideoModal} className="video__area-play-icon video-pulse"><i className="fas fa-play"></i></div>
                    </div>
                </div>
            </div>
            <ModalVideo channel="youtube" autoplay isOpen={openVideo} videoId="0WC-tD-njcA" onClose={() => setOpenVideo(false)} />
        </div>
    );
};

export default Video;