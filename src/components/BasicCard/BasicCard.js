import React from "react"
import PropTypes from "prop-types"
import styles from "./BasicCard.module.scss"

const BasicCard = ({ handleChange, value, handleDeleteCard }) => (
  <div className={styles.cardWrapper}>
    <h1>BasicCard</h1>
    <button onClick={handleDeleteCard}>닫기</button>
    <label htmlFor="">카드제목</label>
    <input type="text" value={value.basicCard.title} name="title" onChange={handleChange} />
    <label htmlFor="">카드 설명</label>
    <textarea value={value.basicCard.description} name="description" onChange={handleChange} />

    <label htmlFor="">Buttons</label>
    <button onClick={handleDeleteCard}>버튼추가</button>
  </div>
)

BasicCard.propTypes = {
  // bla: PropTypes.string,
}

BasicCard.defaultProps = {
  // bla: 'test',
}

export default BasicCard
