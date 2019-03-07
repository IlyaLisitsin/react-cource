import React, { Component, PureComponent, createElement } from 'react'
import { render } from 'react-dom'

const createElementMethod = () => createElement('div', null, 'created with React.createElement');

class ComponentMethod  extends Component {
    render() {
        return (
            <div>created with React.Component</div>
        )
    }
}

class PureComponentMethod  extends PureComponent {
    render() {
        return (
            <div>created with React.PureComponent</div>
        )
    }
}

const FunctionalComponent = () => (
    <div>
        { createElementMethod() }
        <PureComponentMethod />
        <ComponentMethod />
    </div>
);

render(
    <FunctionalComponent />,
    document.getElementById('root')
);