import styles from './body.module.scss'
import babylooks from '../../assets/babylooks.svg'
import playicon from '../../assets/playicon.svg'
import smallplay from '../../assets/smallplay.svg'
import { answersArray, exploreToolsArray, babyDiaryVideosArray } from '../cardsArray'
import Card from '../Card/card'
import toolsdot from '../../assets/toolsdot.svg'
import babydiarylogo1 from '../../assets/babydiarylogo1.svg'
import babydiarylogo2 from '../../assets/babydiarylogo2.svg'
import testimony from '../../assets/testimony.svg'
import phonelight from '../../assets/phonelight.svg'
import phonedark from '../../assets/phonedark.svg'
import applestore from '../../assets/applestore.svg'
import googleplay from '../../assets/googleplay.svg'
import arrowleft from '../../assets/arrowleft.svg'
import arrowright from '../../assets/arrowright.svg'
import ourtestimonials from '../../assets/ourtestimonials.svg'


const Body = () => {

  let answersCards = answersArray.map((card: any) => {
    const {label, icon, name} = card;

    return(
      <Card width='292px' height='380px' bdRadius='15px' key={name}>
        <div className={styles["card"]}>
          <div className={styles["img"]}>
            <img src={icon} alt="cardIcon" />
          </div>
          <div className={styles["card-content"]}>
            <h3>{label}</h3>
          </div> 
        </div>  
      </Card>
    )
  })

  let diaryVideosCards = babyDiaryVideosArray.map((card:any) => {
    const {label, icon, name, time} = card;

    return(
      <Card width='292px' height='160px' bdRadius='10px' key={name}>
        <div className={styles["card"]}> 
          <div className={styles["img"]}>
            <img src={icon} alt="cardIcon" />
            <img className={styles["play"]} src={smallplay} alt="" />
            <div className={styles["card-bg"]}></div>
          </div>
          <div className={styles["card-content"]}>
            <h3>{label}</h3>
            <p>{time}</p>
          </div> 
        </div> 
      </Card>
    )
  })

  let diaryBlogCards = babyDiaryVideosArray.map((card: any) => {
    const {label, icon, name, text} = card;

    return(
      <Card width='292px' height='160px' bdRadius='10px' key={name}>
        <div className={styles["card"]}> 
          <div className={styles["img"]}>
            <img src={icon} alt="cardIcon" />
          </div>
          <div className={styles["card-content"]}>
            <h3>{label}</h3>
            <p>{text}</p>
          </div> 
        </div> 
      </Card>
    )
  })

  let exploreToolsCards = exploreToolsArray.map((card: any) => {
    const {label, icon, name} = card;

    return (
      <div className={styles["tools-item"]} key={name}>
        <img className={styles["tools-item-img"]} src={icon} alt="icon" />
        <div className={styles["tools-item-dot"]}>
          <img src={toolsdot} alt="" />
        </div>
        <hr/>
        <p>{label}</p>
      </div>
    )
  })

  return (
    <div className={styles['body']}>
      <div className={styles['baby-looks']}>
        <div className={styles['baby-looks-contain']}>
          <div className={styles['baby-looks_text']}>
            <h2>Want to know how your baby looks like now?</h2>
            <div className={styles['baby-looks_text_btns']}>
              <button className={styles['btn1']}>Show me</button>
              <button className={styles['btn2']}>Create account</button>
            </div>
          </div>
          <div className={styles['baby-looks_img']}>
            <img className={styles['babylooks']} src={babylooks} alt="baby" />
            <img className={styles['playicon']} src={playicon} alt="play" />
          </div>
        </div>
      </div>
      <div className={styles['advice-and-ansers']}>
        <h2>Get expert advice and answers</h2>
        <div className={styles['advice-and-ansers_cards']}>
          {answersCards} 
        </div>
      </div>
      <div className={styles['explore-tools']}>
        <h2>Explore our tools</h2>
        <div className={styles['explore-tools_cards']}>
          {exploreToolsCards}
        </div>
      </div>
      <div className={styles['diary-videos']}>
        <div className={styles['diary-videos_content']}>
          <div className={styles['diary-videos_content-logo']}>
            <img src={babydiarylogo1} alt="" />
            <img src={babydiarylogo2} alt="" /> 
            <h2>VIDEOS</h2>
          </div>
          <div className={styles['diary-videos_content_header']}>
            <h2>What people are watching now</h2>
            <button className={styles['btn']}>View more videos</button>
          </div>
          <div className={styles['diary-videos_content_cards']}>
            {diaryVideosCards}
          </div>
        </div>
      </div>
      <div className={styles['testimony']}>
        <div className={styles['testimony-arrow-left']}>
          <img src={arrowleft} alt="" />
        </div>
        <div className={styles['testimony-arrow-right']}>
          <img src={arrowright} alt="" />
        </div>
        <div className={styles['testimony-bg']}>
          <img src={ourtestimonials} alt="" />
        </div>
        <div className={styles['testimony-left']}>
          <div className={styles['testimony-text']}>
            <p>Love this app! I've been using it since I found out I was pregnant. My daughter is now 8 months old, and I still rely on the information provided. I would be lost without it.</p>
            <h3>Oyinkansola Salami</h3>
          </div>
        </div>
        <div className={styles['testimony-img']}>
          <img src={testimony} alt="testimony" />
        </div>
      </div>
      <div className={styles['diary-blog']}>
        <h2>Baby Diary Blog</h2>
        <div className={styles['diary-blog_cards']}>
          {diaryBlogCards}
        </div>
      </div>
      <div className={styles['app']}>
        <div className={styles['app-text']}>
          <h3>Get the BabyCenter app</h3>
          <p>The #1 app for tracking pregnancy and baby growth</p>
          <div className={styles['app-text_logo']}>
            <img src={applestore} alt="applestore" />
            <img src={googleplay} alt="googleplaystore" />
          </div>
        </div>
        <div className={styles['phone-light']} >
          <img src={phonelight} alt="phone" />
        </div>
        <div className={styles['phone-dark']}>
          <img src={phonedark} alt="phone" />
        </div>    
      </div>
    </div>
  )
}

export default Body