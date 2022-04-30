import styles from './footer.module.scss'
import footerlogo1 from '../../assets/footerlogo1.svg'
import footerlogo2 from '../../assets/footerlogo2.svg'
import facebooklogo from '../../assets/facebooklogo.svg'
import twitterlogo from '../../assets/twitterlogo.svg'
import instagramlogo from '../../assets/instagramlogo.svg'
import mlogo from '../../assets/mlogo.svg'

const Footer = () => {

  return (
    <div className={styles['footer']}>
      <div className={styles['footer-top']}>
        <div className={styles['footer-top_nav']}>
          <div className={styles['about']}>
            <h2>About</h2>
            <div className={styles['about-content']}>
              <p>Careers</p>
              <p>Terms of Service</p>
              <p>Press &amp; News</p>
              <p>Intellectual Property Claim</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div className={styles['support']}>
            <h2>Support</h2>
            <div className={styles['support-content']}>
              <p>FAQ</p>
              <p>Trust &amp; Safety</p>
              <p>Help &amp; Support</p>
              <p>Contact us</p>
            </div>
          </div>
          <div className={styles['community']}>
            <h2>Community</h2>
            <div className={styles['community-content']}>
              <p>Blog</p>
              <p>Affiliates</p>
              <p>Forum</p>
              <p>Invite a Friend</p>
              <p>Podcast</p>
            </div>
          </div>
        </div>
        <div className={styles['footer-top_text']}>
          <p>All rights reserved. Baby Diary is designed for educational purposes only</p>
          <p>Consult with a medical professional if you have health concerns. Use of this site is subject to our <span>Terms of Use</span> and <span>Privacy Policy</span></p>
        </div>
      </div>
      <div className={styles['footer-down']}>
        <div className={styles['footer-bottom']}>
          <div className={styles['footer-bottom_logo']}>
            <div className={styles['logos']}>
              <img src={footerlogo1} alt="logo" />
              <img src={footerlogo2} alt="logo" />
            </div>
            <p>&copy; Baby Diary 2020</p>
          </div>
          <div className={styles['footer-bottom_socials']}>
            <img src={facebooklogo} alt="facebookLogo" />
            <img src={twitterlogo} alt="twitterlogo" />
            <img src={instagramlogo} alt="" />
            <img src={mlogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer