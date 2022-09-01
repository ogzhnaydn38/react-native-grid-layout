import React, { Component } from "react"
import { View } from "react-native"
import PropTypes from "prop-types"
import { ViewPropTypes } from "deprecated-react-native-prop-types"

/**
 * Render the Css Grid Layout
 *
 * @param {number} numCols
 * @param {number} numRows
 * @param {object} bodyStyle
 * @param {colStart} child component start col
 * @param {colEnd} child component end col
 * @param {rowStart} child component start row
 * @param {rowEnd} child component end row
 * @returns a rendering of the grids to react-native screen
 */

export default class GridLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      height: 0,
      perColWidth: 0,
      perColHeight: 0,
    }
  }

  onLayout = (event) => {
    var { width, height } = event.nativeEvent.layout
    width = width - this.props.numCols
    height = height - this.props.numRows
    this.setState({
      width: width,
      height: height,
      perColWidth: width / this.props.numCols,
      perColHeight: height / this.props.numRows,
    })
  }

  renderMain = () => {
    return this.props.children.map((element) => {
      const { rowStart, rowEnd, colStart, colEnd } = element.props
      var col = colStart == colEnd ? 1 : colEnd - (colStart - 1)
      var row = rowStart == rowEnd ? 1 : rowEnd - (rowStart - 1)

      const width = col * this.state.perColWidth
      const height = row * this.state.perColHeight

      var top = (rowStart - 1) * this.state.perColHeight
      var left = (colStart - 1) * this.state.perColWidth

      return this.generateElement(element, width, height, top, left)
    })
  }

  generateElement = (element, width, height, top, left) => {
    return (
      <View
        style={{
          position: "absolute",
          top: top,
          left: left,
          width: width,
          height: height,
          borderWidth: 4,
          borderColor: "#1e232a",
        }}
      >
        {element}
      </View>
    )
  }

  render() {
    return (
      <View onLayout={this.onLayout} style={this.props.bodyStyle}>
        {this.renderMain()}
      </View>
    )
  }
}

GridLayout.propTypes = {
  numCols: PropTypes.number.isRequired,
  numRows: PropTypes.number.isRequired,
  bodyStyle: ViewPropTypes.style,
}
