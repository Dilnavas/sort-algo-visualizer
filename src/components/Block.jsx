const Block = ({ height, width, margin, pos, onClick }) => {
  return (
    <div
      className='block'
      style={{
        height: `${height}px`,
        marginLeft: `${margin}px`,
        width: `${width}px`,
      }}
      id={`${pos}`}
      onClick={onClick}
    ></div>
  )
}

export default Block
