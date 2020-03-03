import React from "react"
import PropTypes from "prop-types"
import styles from "./TextCard.module.scss"

const TextCard = ({ handleChange, value, handleDeleteCard }) => (
  <div className={styles.textCardWrapper}>
    <h1>텍스트</h1>
    <button onClick={handleDeleteCard}>닫기</button>
    <textarea
      className={styles.input}
      type="text"
      onChange={handleChange}
      value={value.simpleText.text}
      cols="30"
      rows="10"
    />
    <div>글자수세기</div>
  </div>
)

TextCard.propTypes = {
  // bla: PropTypes.string,
}

TextCard.defaultProps = {
  // bla: 'test',
}

export default TextCard
