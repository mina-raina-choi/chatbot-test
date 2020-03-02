import React from "react"
import PropTypes from "prop-types"
import styles from "./Header.module.scss"
//import { Test } from './Header.styles';

// console.log(styles)
const Header = props => (
  <header className={styles.appHeader}>
    <h1 className={styles.title}> 챗봇 JSON 생성기</h1>
    <button className={styles.btn}>카카오톡</button>
  </header>
)

Header.propTypes = {
  // bla: PropTypes.string,
}

Header.defaultProps = {
  // bla: 'test',
}

export default Header
