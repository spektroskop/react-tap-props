import {  } from 'ramda'
import { isClassComponent } from 'react-util'

const tapProps = (func) => (component) => {
	if (isClassComponent(component)) {
		return class extends component {
			render() {
				func(this.props)
				return super.render()
			}
		}
	} else {
		const wrapped = (props) => {
			func(props) ; return component(props)
		}

		wrapped.defaultProps = component.defaultProps
		wrapped.propTypes = component.propTypes
		wrapped.displayName = component.displayName || component.name

		return wrapped
	}
}

export default tapProps
