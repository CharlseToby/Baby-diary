import styles from './header.module.scss'
import search from '../../assets/search.svg'
import banner from '../../assets/banner.svg'
import weekbyweek from '../../assets/weekbyweek.svg'

const Header = () => {
  return(
    <div className={styles['header']}>
      <div className={styles['header-top']}>
        <div className={styles['header-top_input-wrapper']}>
          <div className={styles['header-top_input']}>
            <div className={styles['search']}>
              <div>
                <img src={search} alt="search" />
                <input type="text" placeholder='Find information' />
              </div>
                <button className={styles['search-btn']}>Search</button>
            </div>
            <div className={styles['sign-up']}>
              <p>About Baby Diary</p>
              <p>Sign in</p>
              <button>Sign up</button>
            </div>
          </div>
        </div>
        <div className={styles['header-top_nav']}>
          <ul>
            <li>Community</li>
            <li>Getting Pregnant</li>
            <li>Pregnancy</li>
            <li>Baby</li>
            <li>Health</li>
            <li>Video</li>
            <li>For you</li>
          </ul>
        </div>
      </div>
      <div className={styles['header-banner']}>
        <img className={styles['header-banner_bg']} src={banner} alt="banner" />
        
        <div className={styles['header-banner_text']}>
          <div>
            <h2>Follow your baby's amazing development</h2>
            <p>Baby Diary is world's number one digital parenting resource, with content that reaches more than 100 million people monthly.</p>
            <button className={styles['btn-start']}>Get started</button>
            <button className={styles['btn-sign']}>Sign in</button>
          </div>
        </div>
      </div>
      <div className={styles['header-pregnancy']}>
        <h1>Your pregnancy week by week</h1>
        <img src={weekbyweek} alt="pregnancy" />
      </div>
    </div>
  )
}

export default Header