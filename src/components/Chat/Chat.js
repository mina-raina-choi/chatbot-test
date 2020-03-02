import React from "react"
import PropTypes from "prop-types"
import styles from "./Chat.module.scss"
//import { Test } from './Chat.styles';

const Chat = props => (
  <div className={styles.chatWrapper}>
    <div>
      <textarea className={styles.textarea} name="" id="" cols="30" rows="10"></textarea>
      <div className={styles.btnWrapper}>
        <button className={styles.btn}>복사하기</button>
        <button className={styles.btn}>복사하기 (Dialogflow 버전)</button>
        <button className={styles.btn}>텍스트 예시</button>
        <button className={styles.btn}>케로셀 예시</button>
      </div>
    </div>
    <div className={styles.controlWrapper}>
      <input className={styles.input} type="text" />
      <div className={styles.btnWrapper}>
        <button className={styles.btn}>복사하기</button>
        <button className={styles.btn}>복사하기 (Dialogflow 버전)</button>
        <button className={styles.btn}>텍스트 예시</button>
        <button className={styles.btn}>케로셀 예시</button>
      </div>
    </div>
  </div>
)

Chat.propTypes = {
  // bla: PropTypes.string,
}

Chat.defaultProps = {
  // bla: 'test',
}

export default Chat
