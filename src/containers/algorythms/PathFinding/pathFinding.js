import React from "react"
import ReactDOM from "react-dom"
import { useImmerReducer } from "use-immer"
import styled from "styled-components"
import { createMuiTheme } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import CssBaseline from "@material-ui/core/CssBaseline"
import StarIcon from "@material-ui/icons/Star"
import StarOutlinedIcon from "@material-ui/icons/StarBorder"
import _flatten from "lodash/flatten"
import _memoize from "lodash/memoize"
import PF from "pathfinding"
import matrixJs from "matrix-js"

import { Toolbar } from "./pathFindingToolbar"

const algorithms = [
  "AStarFinder",
  "BestFirstFinder",
  "BreadthFirstFinder",
  "DijkstraFinder",
  "IDAStarFinder",
  "JumpPointFinder",
  "BiAStarFinder",
  "BiBestFirstFinder",
  "BiBreadthFirstFinder",
  "BiDijkstraFinder",
]

// A matrix of the game map. 1 for non-walkable; 0 for walkable
const size = 8
const matrix = [
  [1, 0, 0, 0, 0, 0, 0, 0],
  [1, 0, 0, 0, 0, 1, 1, 0],
  [1, 1, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 1, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1],
]

function getIndexFromPosition(x, y, size) {
  return x * size + y
}

// For future reference
// function getPositionFromIndex(i, size) {
//   return {
//     x: Math.floor(i / size),
//     y: i % size
//   };
// }

// create a "grid" from the original matrix
function getGridFromMatrix({ matrix }) {
  return new PF.Grid([...matrix])
}

// Convert the matrix above to a flat array of tile objects
// with their x,y position and own index
function getTilesFromMatrix({ matrix }) {
  return _flatten(
    // Flatten the result of...
    matrixJs(matrix) // The matrix utility so we can...
      .trans() // Transpose (rotate 90 degrees) so it's not weird
      .map((column, x) =>
        column.map((value, y) => ({
          x, // the column
          y, // the row
          walkable: !value, // 0 for walkable, 1 for not
          i: getIndexFromPosition(x, y), // the correct index number
          inPath: false, // no path yet!
          isStart: false, // no starting tile yet!
          isEnd: false, // no ending tile yet!
        }))
      )
  )
}

const getPathFinder = _memoize(
  ({ algorithm, allowDiagonal }) => {
    return new PF[algorithm]({
      allowDiagonal,
    })
  },
  ({ algorithm, allowDiagonal }) => algorithm + allowDiagonal
)

function getPositionsAreEqual(a, b) {
  return a && b && a.x === b.x && a.y === b.y
}

function computeTiles({ start, end, algorithm, allowDiagonal, matrix }) {
  const tiles = getTilesFromMatrix({ matrix })
  if (start) {
    tiles[getIndexFromPosition(start.x, start.y, size)].isStart = true
  }
  if (end) {
    tiles[getIndexFromPosition(end.x, end.y, size)].isEnd = true
  }
  if (start && end) {
    const pathFinder = getPathFinder({ algorithm, allowDiagonal })
    const grid = getGridFromMatrix({ matrix })
    const path = pathFinder.findPath(start.x, start.y, end.x, end.y, grid)
    path.forEach(([x, y]) => {
      tiles[getIndexFromPosition(x, y, size)].inPath = true
    })
  }
  return tiles
}

const initialState = {
  start: null, // starting tile for pathfinding
  end: null, // ending tile
  pathSet: false,
  algorithm: "AStarFinder", // the pathfinding algorithm to use
  allowDiagonal: true, // optionally allow diagonal paths
  matrix,
  editMode: false,
}

function reducer(state, action) {
  switch (action.type) {
    case "tile clicked": {
      const { tile } = action
      if (state.editMode) {
        const matrixTile = (state.matrix[tile.y][tile.x] ^= 1)
        if (
          matrixTile &&
          (getPositionsAreEqual(state.end, tile) ||
            getPositionsAreEqual(state.start, tile))
        ) {
          state.start = null
          state.end = null
          state.pathSet = false
        }
      } else if (state.pathSet && tile.walkable) {
        state.pathSet = false
        state.start = tile
        state.end = null
      } else if (state.start && tile.walkable) {
        state.pathSet = true
      } else if (tile.walkable) {
        state.start = tile
      }
      return
    }

    case "mouse entered tile": {
      const { tile } = action
      if (
        !state.editMode &&
        !state.pathSet &&
        state.start &&
        tile.walkable &&
        !tile.isStart
      ) {
        state.end = tile
      }
      return
    }

    case "algorithm changed": {
      state.algorithm = action.algorithm
      return
    }

    case "allow diagonal toggled": {
      state.allowDiagonal = !state.allowDiagonal
      return
    }

    case "edit mode toggled": {
      state.editMode = !state.editMode
      return
    }

    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useImmerReducer(reducer, initialState)
  const tiles = computeTiles(state)

  return (
    <>
      <CssBaseline />
      <Toolbar
        algorithm={state.algorithm}
        algorithms={algorithms}
        handleAlgorithmChange={(e) =>
          dispatch({ type: "algorithm changed", algorithm: e.target.value })
        }
        allowDiagonal={state.allowDiagonal}
        handleAllowDiagonalChange={() =>
          dispatch({ type: "allow diagonal toggled" })
        }
        handleEditModeChange={() => dispatch({ type: "edit mode toggled" })}
      />
      <GameContainer>
        {/* <div style={{ flex: 1 }} /> */}
        <GridContainer>
          {tiles.map((tile, i) => (
            <Tile
              key={i}
              tile={tile}
              onClick={() => dispatch({ type: "tile clicked", tile })}
              onMouseEnter={() =>
                dispatch({ type: "mouse entered tile", tile })
              }
              editMode={state.editMode}>
              <TileIcon tile={tile} pathSet={state.pathSet} />
            </Tile>
          ))}
        </GridContainer>
      </GameContainer>
    </>
  )
}

const GameContainer = styled.div`
  display: flex;
  margin: 120px 24px;
`

const GridContainer = styled(Paper)`
  display: grid;
  grid-template-rows: repeat(8, 64px);
  grid-auto-flow: column;
  grid-auto-columns: 64px;
  grid-auto-rows: 64px;
`

function getHoverColor({ editMode, tile }) {
  if (editMode) {
    return tile.walkable ? "rgba(0,0,0,0.4)" : "rgba(0,0,0,0.6)"
  } else {
    return tile.walkable ? "rgba(255,255,255,0.2)" : "#1890ff"
  }
}

const Tile = styled.div`
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  background-color: ${(props) =>
    props.tile.walkable ? "transparent" : "#1890ff"};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  user-select: none;
  &:hover {
    background-color: ${getHoverColor};
  }
`

function getIconColor(tile) {
  if (tile.isStart) {
    return "Chartreuse"
  } else if (tile.isEnd) {
    return "OrangeRed"
  } else if (tile.inPath) {
    return "CornflowerBlue"
  } else {
    return "AntiqueWhite"
  }
}

function TileIcon({ tile, pathSet }) {
  if (tile.isStart || tile.inPath || tile.isEnd) {
    const color = getIconColor(tile)
    if (tile.isEnd && !pathSet) {
      return <StarOutlinedIcon fontSize='large' style={{ color }} />
    } else {
      return <StarIcon fontSize='large' style={{ color }} />
    }
  }
  return null
}

export default App
