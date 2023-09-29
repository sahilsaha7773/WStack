import React from 'react'
import styles from '../assets/styles/Event.module.css'
import { Link } from 'react-router-dom'

export default function Event() {
  return (
    <Link to='/event'>
      <div className={styles.eventCard}>
        <div className={styles.eventMain}>
          <div className={styles.eventMainLeft}>
            <div className={styles.info}>
              <h2>Event Header</h2>
              <h3>Host Name</h3>
            </div>
            <div className={styles.time}>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4" fill="none">
                <circle cx="2" cy="2" r="2" fill="#4DD964" />
              </svg>
              <h4>Started: 19:00</h4>
            </div>
          </div>
          <div className={styles.eventMainRight}>
            <h3>Mon, 24th Jan'22</h3>
            <div className={styles.stats}>
              <div className={styles.minCommit}>
                <h2>72</h2>
                <h4>Min. Commit.</h4>
              </div>
              <div className={styles.liveCount}>
                <h2>72</h2>
                <h4>Live Count</h4>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.eventFooter}>
          <h2>H: 5</h2>
          <button className={styles.notificationsButton}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <mask id="mask0_1653_6" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="16" height="16">
                <rect width="16" height="16" fill="#090E82" />
              </mask>
              <g mask="url(#mask0_1653_6)">
                <path d="M3.33335 12.6667C3.14446 12.6667 2.98602 12.6027 2.85802 12.4747C2.73046 12.3472 2.66669 12.1889 2.66669 12C2.66669 11.8112 2.73046 11.6529 2.85802 11.5254C2.98602 11.3974 3.14446 11.3334 3.33335 11.3334H4.00002V6.66671C4.00002 5.74448 4.2778 4.92493 4.83335 4.20804C5.38891 3.4916 6.11113 3.02226 7.00002 2.80004V2.33337C7.00002 2.0556 7.09735 1.8196 7.29202 1.62537C7.48624 1.43071 7.72224 1.33337 8.00002 1.33337C8.2778 1.33337 8.5138 1.43071 8.70802 1.62537C8.90269 1.8196 9.00002 2.0556 9.00002 2.33337V2.80004C9.88891 3.02226 10.6111 3.4916 11.1667 4.20804C11.7222 4.92493 12 5.74448 12 6.66671V11.3334H12.6667C12.8556 11.3334 13.0138 11.3974 13.1414 11.5254C13.2694 11.6529 13.3334 11.8112 13.3334 12C13.3334 12.1889 13.2694 12.3472 13.1414 12.4747C13.0138 12.6027 12.8556 12.6667 12.6667 12.6667H3.33335ZM8.00002 14.6667C7.63335 14.6667 7.31958 14.5363 7.05869 14.2754C6.79735 14.014 6.66669 13.7 6.66669 13.3334H9.33335C9.33335 13.7 9.20291 14.014 8.94202 14.2754C8.68069 14.5363 8.36669 14.6667 8.00002 14.6667Z" fill="#090E82" />
              </g>
            </svg>
            02
          </button>
          <button className={styles.manageButton}>
            Manage Event
          </button>
        </div>
      </div>
    </Link>
  )
}
