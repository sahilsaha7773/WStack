import React from 'react'
import Event from '../components/Event'
import styles from '../assets/styles/OngoingEvents.module.css'
export default function OngoingEvents() {
  return (
    <>
      <h1 className={styles.heading}>Ongoing Events</h1>
      <Event />
      <Event />
      <Event />
    </>
  )
}
