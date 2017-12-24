import { PropTypes } from 'prop-types'

/*
    Usage:
        <Condition rule={ booleanVar }>
            <ComponentToRenderIfRuleIsTrue />
        </Condition>
    or
        <Condition
            rule={ booleanVar }
            success={ <ComponentToRenderIfRuleIsTrue /> }
            fail={ <ComponentToRenderIfRuleIsFalse /> }
        />
 */

export default function Condition(props) {
  if (props.children) {
    return props.rule
      ? props.children
      : null
  }
  return props.rule
    ? props.success
    : props.fail
}

Condition.propTypes = {
  rule: PropTypes.bool,
  children: PropTypes.node,
  success: PropTypes.node,
  fail: PropTypes.node,
}
