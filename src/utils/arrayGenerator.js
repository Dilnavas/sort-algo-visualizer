export const arrayGenerator = (length, viewPort) => {
  if (viewPort === 'laptop') {
    let size
    const array = []
    if (length) size = 10
    else size = Math.round(Math.random() * 12) * 10
    if (size === 0) {
      size = 10
    }
    for (let i = 0; i < size; i++) {
      let value = Math.round(Math.random() * 375)
      if (value === 0) array.push(10)
      else array.push(value)
    }
    return array
  } else {
    let size
    const array = []
    if (length) size = 10
    else size = Math.round(Math.random() * 7) * 10
    if (size === 0) {
      size = 10
    }
    for (let i = 0; i < size; i++) {
      let value = Math.round(Math.random() * 275)
      if (value === 0) array.push(10)
      else array.push(value)
    }
    return array
  }
}
