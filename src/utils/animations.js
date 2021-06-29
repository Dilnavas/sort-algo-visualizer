export const bubbleSortAnimation = async (array) => {
  let sorted = true
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      sorted = false
      break
    }
  }
  if (!sorted) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length; j++) {
        for (let k = 0; k < array.length; k++) {
          document.getElementById(`${k}`).style.background = '#a7d129'
        }
        document.getElementById(`${j}`).style.background = 'red'
        if (array[j] > array[j + 1]) {
          await new Promise((resolve) =>
            setTimeout(() => {
              resolve()
            }, 100)
          )
          const temp2 = document.getElementById(`${j}`).style.height
          document.getElementById(`${j}`).style.height =
            document.getElementById(`${j + 1}`).style.height
          document.getElementById(`${j + 1}`).style.height = temp2
          document.getElementById(`${j + 1}`).style.background = 'red'
          const temp = array[j]
          array[j] = array[j + 1]
          array[j + 1] = temp
        }
      }
    }
    for (let i = 0; i < array.length; i++) {
      document.getElementById(`${i}`).style.background = '#a7d129'
    }
  }
  return true
}

export const selectionSortAnimation = async (array) => {
  let sorted = true
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      sorted = false
      break
    }
  }
  if (!sorted) {
    for (let i = 0; i < array.length; i++) {
      for (let m = 0; m < array.length; m++) {
        document.getElementById(`${m}`).style.background = '#a7d129'
      }
      var min = i
      for (let j = i + 1; j < array.length; j++) {
        await new Promise((resolve) =>
          setTimeout(() => {
            resolve()
          }, 50)
        )
        document.getElementById(`${j}`).style.background = 'magenta'
        if (array[j] < array[min]) {
          min = j
          document.getElementById(`${min}`).style.background = 'red'
          for (let k = i + 1; k < j; k++) {
            document.getElementById(`${k}`).style.background = '#a7d129'
          }
        }
      }

      await new Promise((resolve) =>
        setTimeout(() => {
          resolve()
        }, 200)
      )
      const temp = document.getElementById(`${min}`).style.height
      document.getElementById(`${min}`).style.height = document.getElementById(
        `${i}`
      ).style.height
      document.getElementById(`${i}`).style.height = temp
      document.getElementById(`${i}`).style.background = 'yellow'
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve()
        }, 700)
      )
      document.getElementById(`${i}`).style.background = '#a7d129'
      document.getElementById(`${min}`).style.background = '#a7d129'
      const temp2 = array[i]
      array[i] = array[min]
      array[min] = temp2
    }
    for (let i = 0; i < array.length; i++) {
      document.getElementById(`${i}`).style.background = '#a7d129'
    }
  }
  return true
}

export const insertionSortAnimation = async (array) => {
  let sorted = true
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      sorted = false
      break
    }
  }
  if (!sorted) {
    for (let i = 1; i < array.length; i++) {
      for (let k = 0; k < array.length; k++) {
        document.getElementById(`${k}`).style.background = '#a7d129'
      }
      let key = array[i]
      document.getElementById(`${i}`).style.background = 'red'
      let j = i - 1
      while (j >= 0 && key <= array[j]) {
        document.getElementById(`${j}`).style.background = 'yellow'
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve()
          }, 200)
        })
        document.getElementById(`${j + 1}`).style.background = '#a7d129'
        document.getElementById(`${j + 1}`).style.height = `${array[j]}px`
        array[j + 1] = array[j]
        j -= 1
      }
      document.getElementById(`${j + 1}`).style.height = `${key}px`
      array[j + 1] = key
    }
    for (let i = 0; i < array.length; i++) {
      document.getElementById(`${i}`).style.background = '#a7d129'
    }
  }
  return true
}
const hoarePartition = async (l, r, array, delay = 200) => {
  var blocks = document.querySelectorAll('.block')
  var pivot = Number(blocks[l].style.height.split('p')[0])

  var i = l - 1
  var j = r + 1

  while (true) {
    // Find leftmost element greater than
    // or equal to pivot
    do {
      i++
      if (i - 1 >= l) blocks[i - 1].style.backgroundColor = 'red'
      blocks[i].style.backgroundColor = 'yellow'
      //To wait for 700 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve()
        }, delay)
      )
    } while (Number(blocks[i].style.height.split('p')[0]) < pivot)

    // Find rightmost element smaller than
    // or equal to pivot
    do {
      j--
      if (j + 1 <= r) blocks[j + 1].style.backgroundColor = 'magenta'
      blocks[j].style.backgroundColor = 'yellow'
      //To wait for 700 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve()
        }, delay)
      )
    } while (Number(blocks[j].style.height.split('p')[0]) > pivot)

    // If two pointers met.
    if (i >= j) {
      for (var k = 0; k < r + 1; k++)
        blocks[k].style.backgroundColor = '#a7d129'
      return j
    }

    //swapping ith and jth element
    var temp1 = blocks[i].style.height
    var temp2 = array[i]
    blocks[i].style.height = blocks[j].style.height
    array[i] = array[j]
    blocks[j].style.height = temp1
    array[j] = temp2
    //To wait for 700 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve()
      }, delay)
    )
  }
}

export const quickSortAnimation = async (l, r, array, delay = 100) => {
  const blocks = document.querySelectorAll('.block')
  let sorted = true
  for (let i = 0; i < blocks.length - 1; i++) {
    if (
      Number(blocks[i].style.height.split('p')[0]) >
      Number(blocks[i + 1].style.height.split('p')[0])
    ) {
      sorted = false
      break
    }
  }

  // QuickSort Algorithm
  if (!sorted)
    if (l < r) {
      //Storing the index of pivot element after partition
      var pivot_idx = await hoarePartition(l, r, array)
      //Recursively calling quicksort for left partition
      await quickSortAnimation(l, pivot_idx, array)
      //Recursively calling quicksort for right partition
      await quickSortAnimation(pivot_idx + 1, r, array)
    }
  return true
}
