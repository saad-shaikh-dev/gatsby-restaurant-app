import React from 'react'

const Footer = () => {
    return (
        <footer className=" footer dark-background">
            <div className="social-media-links">
                <a href="https://www.facebook.com/" target="_blank">
                    <img src="https://img.icons8.com/color/48/000000/facebook.png" alt="facebook" />
                </a>
                <a href="https://www.twitter.com/" target="_blank">
                    <img src="https://img.icons8.com/color/48/000000/twitter.png" alt="twitter" />
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="instagram" />
                </a>
            </div>
            <p>This website was made by <a href="https://saad-shaikh-portfolio.netlify.app/" target="_blank">Saad Shaikh</a> - Copyright 2021 Saad Shaikh</p>
        </footer>
    )
}

export default Footer
