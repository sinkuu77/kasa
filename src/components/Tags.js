import styles from '../styles/Tags.module.scss'

export default function Tags({ tags }) {
  return <li className={styles.tags__list}>{tags}</li>
}
