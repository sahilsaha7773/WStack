import React from 'react'
import styles from '../assets/styles/Header.module.css'
export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerLeft}>
        <h1>Hi, Username</h1>
        <h2>VENUE NAME</h2>
      </div>
      <img
        src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp"
        className={styles.avatar}
        alt="avatar" />
    </div>
  )
}
