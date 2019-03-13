import React, { Component, createElement } from 'react'
import { render } from 'react-dom'

import "./styles.scss"

const createElementMethod = () => createElement('div', null, 'created with React.createElement');

class ComponentMethod extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: '',
        }
    }

    componentDidMount() {
        fetch('http://localhost:2500/')
            .then(response => response.text())
            .then(result => this.setState({ message: result }))
    }

    render() {
        const { message } = this.state;

        return (
            <div>
                <div className='red'>created with React.Component</div>
                { message && <p>The meassage from server is <span>&quot;{ message }&quot;</span></p> }
            </div>
        )
    }
}

function PureComponentMethod() {
    return (
        <div>created with React.PureComponent</div>
    )
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