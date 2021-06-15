import { Nav, Navbar, NavItem } from 'react-bootstrap'
import { arrayGenerator } from '../utils/arrayGenerator'

const Header = ({ device, onClick, array, modes }) => {
  return (
    <header>
      <Navbar expand='sm' className='navbar'>
        <Navbar.Brand className='font'>
          <i
            className='far fa-2x fa-chart-bar d-inline-block align-top'
            style={{
              color: '#a7d129',
              marginLeft: '10px',
              marginRight: '5px',
            }}
          ></i>
          SortAlgo Visualizer
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          style={{
            backgroundColor: '#a7d129',
            marginRight: '5px',
          }}
        />
        {device === 'mobile' && (
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
              <NavItem
                className='font'
                onClick={() => {
                  if (
                    modes.bubbleSortMode ||
                    modes.insertionSortMode ||
                    modes.selectionSortMode
                  )
                    return null
                  else {
                    onClick.setBubbleSortMode(0)
                    onClick.setInsertionSortMode(0)
                    onClick.setSelectionSortMode(0)
                    onClick.setArray(arrayGenerator(false, 'mobile'))
                  }
                }}
              >
                New Array
              </NavItem>
              <NavItem
                className='font'
                onClick={async () => {
                  if (
                    modes.insertionSortMode ||
                    modes.selectionSortMode ||
                    modes.bubbleSortMode
                  )
                    return null
                  else {
                    onClick.setBubbleSortMode(1)
                    onClick.setInsertionSortMode(0)
                    onClick.setSelectionSortMode(0)
                    const completed = await onClick.bubbleSortAnimation(array)
                    if (completed) onClick.setBubbleSortMode(0)
                  }
                }}
              >
                Bubble Sort
              </NavItem>
              <NavItem
                className='font'
                onClick={async () => {
                  if (
                    modes.bubbleSortMode ||
                    modes.selectionSortMode ||
                    modes.insertionSortMode
                  )
                    return null
                  else {
                    onClick.setInsertionSortMode(1)
                    onClick.setBubbleSortMode(0)
                    onClick.setSelectionSortMode(0)
                    const completed = await onClick.insertionSortAnimation(
                      array
                    )
                    if (completed) onClick.setInsertionSortMode(0)
                  }
                }}
              >
                Insertion Sort
              </NavItem>
              <NavItem
                className='font'
                onClick={async () => {
                  if (
                    modes.bubbleSortMode ||
                    modes.insertionSortMode ||
                    modes.selectionSortMode
                  )
                    return null
                  else {
                    onClick.setSelectionSortMode(1)
                    onClick.setBubbleSortMode(0)
                    onClick.setInsertionSortMode(0)
                    const completed = await onClick.selectionSortAnimation(
                      array
                    )
                    if (completed) onClick.setSelectionSortMode(0)
                  }
                }}
              >
                Selection Sort
              </NavItem>
              <NavItem className='font'>Quick Sort</NavItem>
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>
    </header>
  )
}

export default Header
