import React, {useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const professions = ['full stack web developer', 'network engineer', 'security professional', 'network security engineer', 'developer', 'problem solver', 'professional', 'content creator', 'information systems security professional']

  const [profession, setProfession] = useState(professions[0])


  const updateProfession = (i) => {
    if (i === professions.length -1){
      setProfession(professions[0])
    } else {
      setProfession(professions[i+1])
    }
  }

  useEffect(() => {
    setTimeout(() => updateProfession(professions.indexOf(profession)), 4500)
  }, [profession])

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTextWrap}>
        <div className={styles.heroTextCentered}>
          <h1 className={styles.heroTitle}>
            Hi, I&apos;m Zack
          </h1>
          <p className={styles.heroDescription}>
            I&apos;m a <b>{profession}</b>
          </p>
          <div className={styles.ctadiv}>
          <p className={styles.cta}>View My Work</p>
          </div>
        </div>
      </div>
    </div>
  )
}
