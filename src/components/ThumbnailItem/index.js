// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, displayMainImage, isActive} = props
  const {
    id,
    imageUrl,
    thumbnailUrl,
    imageAltText,
    thumbnailAltText,
  } = imageDetails
  const onClickImage = () => {
    displayMainImage(imageUrl, imageAltText, id)
  }

  const activeOpacityClassName = isActive ? 'active-opacity' : ''

  return (
    <li key={id}>
      <button type="button" className="button" onClick={onClickImage}>
        <img
          className={`img-item ${activeOpacityClassName}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
