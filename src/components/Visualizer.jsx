import { arrayGenerator } from '../utils/arrayGenerator'
import {
  bubbleSortAnimation,
  insertionSortAnimation,
  quickSortAnimation,
  selectionSortAnimation,
} from '../utils/animations'
import Block from './Block'
import Description from './Description'
const Visualizer = ({ viewPort, array, onClick, modes }) => {
  const mobileArraySizes = [10, 20, 30, 40, 50, 60, 70]
  const laptopArraySizes = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120]
  var margin = 200
  var margin2 = 10
  return (
    <div>
      <div className='visualizer-container '>
        {viewPort === 'laptop' && (
          <>
            <button
              className='button'
              onClick={() => {
                onClick.setBubbleSortMode(0)
                onClick.setInsertionSortMode(0)
                onClick.setSelectionSortMode(0)
                onClick.setQuickSortMode(0)
                onClick.setArray(arrayGenerator(false, viewPort))
              }}
              disabled={
                modes.bubbleSortMode ||
                modes.insertionSortMode ||
                modes.selectionSortMode ||
                modes.quickSortMode
                  ? true
                  : false
              }
            >
              New Array
            </button>
            <button
              className='button'
              onClick={async () => {
                onClick.setBubbleSortMode(1)
                onClick.setInsertionSortMode(0)
                onClick.setSelectionSortMode(0)
                onClick.setQuickSortMode(0)
                const completed = await bubbleSortAnimation(array)
                if (completed) onClick.setBubbleSortMode(0)
              }}
              disabled={
                modes.insertionSortMode ||
                modes.selectionSortMode ||
                modes.bubbleSortMode ||
                modes.quickSortMode
                  ? true
                  : false
              }
            >
              Bubble Sort
            </button>
            <button
              className='button'
              onClick={async () => {
                onClick.setInsertionSortMode(1)
                onClick.setSelectionSortMode(0)
                onClick.setBubbleSortMode(0)
                onClick.setQuickSortMode(0)
                const completed = await insertionSortAnimation(array)
                if (completed) onClick.setInsertionSortMode(0)
              }}
              disabled={
                modes.bubbleSortMode ||
                modes.selectionSortMode ||
                modes.insertionSortMode ||
                modes.quickSortMode
                  ? true
                  : false
              }
            >
              Insertion Sort
            </button>
            <button
              className='button'
              onClick={async () => {
                onClick.setSelectionSortMode(1)
                onClick.setInsertionSortMode(0)
                onClick.setBubbleSortMode(0)
                onClick.setQuickSortMode(0)
                const completed = await selectionSortAnimation(array)
                if (completed) onClick.setSelectionSortMode(0)
              }}
              disabled={
                modes.insertionSortMode ||
                modes.bubbleSortMode ||
                modes.selectionSortMode ||
                modes.quickSortMode
                  ? true
                  : false
              }
            >
              Selection Sort
            </button>
            <button
              className='button'
              onClick={async () => {
                onClick.setQuickSortMode(1)
                onClick.setBubbleSortMode(0)
                onClick.setInsertionSortMode(0)
                onClick.setSelectionSortMode(0)
                const completed = await quickSortAnimation(
                  0,
                  array.length - 1,
                  array
                )
                if (completed) onClick.setQuickSortMode(0)
              }}
              disabled={
                modes.insertionSortMode ||
                modes.bubbleSortMode ||
                modes.selectionSortMode ||
                modes.quickSortMode
                  ? true
                  : false
              }
            >
              Quick Sort
            </button>
          </>
        )}
        {viewPort === 'laptop' &&
          laptopArraySizes.map((size) => {
            if (array.length === size) {
              return array.map((value, i) => {
                const x = 600 / size
                margin += x
                if (i === 0) {
                  margin = 200
                  return <Block height={value} width={x - 2} key={i} pos={i} />
                } else
                  return (
                    <Block
                      height={value}
                      width={x - 2}
                      margin={margin}
                      key={i}
                      pos={i}
                    />
                  )
              })
            } else return null
          })}
        {viewPort === 'mobile' &&
          mobileArraySizes.map((size) => {
            if (array.length === size) {
              return array.map((value, i) => {
                const x = 280 / size
                margin2 += x
                if (i === 0) {
                  margin2 = 10
                  return <Block height={value} width={x - 2} key={i} pos={i} />
                } else
                  return (
                    <Block
                      height={value}
                      width={x - 2}
                      margin={margin2}
                      key={i}
                      pos={i}
                    />
                  )
              })
            } else return null
          })}
      </div>
      {modes.bubbleSortMode && (
        <div className='description-container'>
          <Description
            key='bubbleSort'
            name='Bubble Sort'
            description='Bubble sort is a simple sorting algorithm. This sorting algorithm is comparison-based algorithm in which each pair of adjacent elements is compared and the elements are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2) where n is the number of items.'
            algorithm={[
              'In an unsorted array of 5 elements, start with the first two elements and sort them in ascending order. (Compare the element to check which one is greater).',
              'Compare the second and third element to check which one is greater, and sort them in ascending order.',
              'Compare the third and fourth element to check which one is greater, and sort them in ascending order.',
              'Compare the fourth and fifth element to check which one is greater, and sort them in ascending order.',
              'Repeat steps 1–5 until no more swaps are required.',
            ]}
            code={
              'function bubbleSort(array) {\n let swapped;\n do {\n swapped = false;\n  for(let i = 0; i < array.length; i++) {\n   if(array[i] && array[i + 1] && array[i] > array[i + 1]) {\n    [array[i], array[i + 1]] = [array[i + 1], array[i]];\n    swapped = true;\n   }\n  }\n } while(swapped);\n return array;\n}'
            }
          />
        </div>
      )}
      {modes.selectionSortMode && (
        <div className='description-container'>
          <Description
            key='selectionSort'
            name='Selection Sort'
            description='Selection sort is a simple sorting algorithm. This sorting algorithm is an in-place comparison-based algorithm in which the list is divided into two parts, the sorted part at the left end and the unsorted part at the right end.Initially, the sorted part is empty and the unsorted part is the entire list.The smallest element is selected from the unsorted array and swapped with the leftmost element, and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n2), where n is the number of items.'
            algorithm={[
              'Set MIN to location 0',
              'Search the minimum element in the list',
              'Swap with value at location MIN',
              'Increment MIN to point to next element',
              'Repeat until list is sorted',
            ]}
            code={
              'function selectionSort(arr,  n){\n var i, j, min_idx,temp;\n for (i = 0; i < n-1; i++){\n  min_idx = i;\n  for (j = i + 1; j < n; j++)\n   if (arr[j] < arr[min_idx])\n    min_idx = j;\n  temp = arr[min];\n  arr[min] = arr[i];\n  arr[i] = temp;\n }\n}'
            }
          />
        </div>
      )}
      {modes.insertionSortMode && (
        <div className='description-container'>
          <Description
            key='insertionSort'
            name='Insertion Sort'
            description='This is an in-place comparison-based sorting algorithm. Here, a sub-list is maintained which is always sorted. For example, the lower part of an array is maintained to be sorted. An element which is to be inserted in this sorted sub-list, has to find its appropriate place and then it has to be inserted there. Hence the name, insertion sort.The array is searched sequentially and unsorted items are moved and inserted into the sorted sub-list (in the same array). This algorithm is not suitable for large data sets as its average and worst case complexity are of Ο(n2), where n is the number of items.'
            algorithm={[
              'If it is the first element, it is already sorted. return 1;',
              'Pick next element',
              'Compare with all elements in the sorted sub-list',
              'Shift all the elements in the sorted sub-list that is greater than the value to be sorted',
              'Insert the value',
              'Repeat until list is sorted',
            ]}
            code={
              'function insertionSort(arr, n) {\n let i, key, j;\n for (i = 1; i < n; i++) {\n  key = arr[i];\n  j = i - 1;\n  while (j >= 0 && arr[j] > key) {\n   arr[j + 1] = arr[j];\n   j = j - 1;\n  }\n  arr[j + 1] = key;\n }\n}'
            }
          />
        </div>
      )}
      {modes.quickSortMode && (
        <div
          className='description-container'
          style={
            viewPort === 'laptop'
              ? { height: '1500px' }
              : { height: 'fit-content' }
          }
        >
          <Description
            key='quickSort'
            name='Quick Sort'
            description='Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays. A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot, based on which the partition is made and another array holds values greater than the pivot value.Quicksort partitions an array and then calls itself recursively twice to sort the two resulting subarrays. This algorithm is quite efficient for large-sized data sets as its average and worst-case complexity are O(n2), respectively.'
            subAlgorithm={[
              {
                heading: 'Partition Algorithm',
                algorithm: [
                  'Choose the highest index value has pivot',
                  'Take two variables to point left and right of the list excluding pivot',
                  'left points to the low index',
                  'right points to the high',
                  'while value at left is less than pivot move right',
                  'while value at right is greater than pivot move left',
                  'if both step 5 and step 6 does not match swap left and right',
                  'if left ≥ right, the point where they met is new pivot',
                ],
              },
              {
                heading: 'Quick Sort Algorithm',
                algorithm: [
                  'Make the right-most index value pivot',
                  'partition the array using pivot value',
                  'quicksort left partition recursively',
                  'quicksort right partition recursively',
                ],
              },
            ]}
            algorithm={[]}
            code={
              ' // QuickSort Function \n function quickSort(arr, left, right) {\n if (left < right) {\n  const index = partition(arr, left, right);\n  quickSort(arr, left, index);\n  quickSort(arr, index + 1, right);\n  }\n }\n\n // Partition Function \n function partition(arr, left, right) {\n  const pivot = arr[Math.floor((left+right)/2)];\n  while (true) {\n   while (arr[left] < pivot) {\n    left++;\n   }\n   while (arr[right] > pivot) {\n    right--;\n   }\n   if (left >= right) {\n    return right;\n   }\n   swap(arr, left, right);\n  }\n }\n\n // Swap Function \n function swap(arr, i, j) {\n  const tmp = arr[i];\n  arr[i] = arr[j];\n  arr[j] = tmp;\n }'
            }
          />
        </div>
      )}
    </div>
  )
}

export default Visualizer
