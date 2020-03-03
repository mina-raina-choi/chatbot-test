import React from "react"
import PropTypes from "prop-types"
import styles from "./ImageCard.module.scss"

const ImageCard = ({ handleChange, value, handleDeleteCard }) => (
  <div className={styles.cardWrapper}>
    <h1>이미지</h1>
    <button onClick={handleDeleteCard}>닫기</button>
    <label htmlFor="">이미지 url</label>
    <input type="text" value={value.simpleImage.imageUrl} name="imageUrl" onChange={handleChange} />
    <label htmlFor="">대체 문구</label>
    <input type="text" value={value.simpleImage.altText} name="altText" onChange={handleChange} />
  </div>
)

ImageCard.propTypes = {
  // bla: PropTypes.string,
}

ImageCard.defaultProps = {
  // bla: 'test',
}

export default ImageCard
