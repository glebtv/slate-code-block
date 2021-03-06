// @flow
import { getCurrentIndent } from '../utils'
import { dedentLines } from '../changes'

/**
 * User pressed Shift+Tab in an editor:
 * Reduce indentation in the selected lines.
 */
function onShiftTab(opts, event, editor, next) {
  const { value } = editor
  event.preventDefault()
  event.stopPropagation()

  const indent = getCurrentIndent(opts, value)

  // We dedent all selected lines
  return dedentLines(opts, editor, indent)
}

export default onShiftTab
