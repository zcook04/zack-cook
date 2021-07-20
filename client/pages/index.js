import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import CertificationCard from '../components/CertificationCard'

export default function Home() {
  const professions = ['full stack web developer', 'network engineer', 'security professional', 'network security engineer', 'developer', 'problem solver', 'chess enthusiast', 'professional', 'content creator', 'information systems security professional', 'husband and father']

  const [profession, setProfession] = useState(professions[0])


  const updateProfession = (i) => {
    if (i === professions.length -1){
      setProfession(professions[0])
    } else {
      setProfession(professions[i+1])
    }
  }

  useEffect(() => {
    setTimeout(() => updateProfession(professions.indexOf(profession)), 3500)
  }, [profession])

  return (
    <>
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
    <div className={styles.certificationContainer}>
    <div className={styles.certificationWrapper}>
      <CertificationCard
        desc="CISSP is the gold-standard information security certification that assures information security leaders possess the breadth and depth of knowledge to establish holistic security programs that protect against threats in an increasingly complex cyber world"
        title="Certified Informations Systems Security Professional"
        img="/cissp.png"
      />
      <CertificationCard
        desc="Cisco Certified Network Professional Security (CCNP Security) certification program is aligned specifically to the job role of the Cisco Network Security Engineer responsible for Security in Routers, Switches, Networking devices and appliances, as well as choosing, deploying, supporting and troubleshooting Firewalls, VPNS, and IDS/IPS solutions for their networking environments."
        title="Cisco Certified Network Professional - Security"
        img="/ccnp-sec.png"
      />
      <CertificationCard
        desc="Holders of CCNP Enterprise certification have demonstrated skills with enterprise networking solutions."
        title="Cisco Certified Networking Professional - Enterprise"
        img="/ccnp-ent.png"
      />
      <CertificationCard
        desc="Earners of Cisco Certified Specialist - Security Identity Management Implementation have demonstrated knowledge of Cisco Identify Services Engine, including architecture and deployment, policy enforcement, Web Auth and guest services, profiler, BYOD, endpoint compliance, and network access device administration."
        title="Cisco Certified Specialist - Security Identity Management Implementation"
        img="/ccnp-ise.png"
      />
      <CertificationCard
        desc="The JNCIA-Junos credential validates an understanding of networking fundamentals and core functionality of the Junos OS. A certification holder at this level has demonstrated entry-level to intermediate knowledge of networking."
        title="Juniper Networks Certified Associate, Junos"
        img="/jncia-junos.png"
      />
      <CertificationCard
        desc="The F5-CA, BIG-IP is awarded to individuals who possess knowledge and understanding of the concepts and technology standards applicable to application delivery architectures and the day-to-day operations of F5 products in diverse environments."
        title="F5 Certified Administrator"
        img="/f5ca.png"
      />
    </div>
    </div>
    </>
      )
}
