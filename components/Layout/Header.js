import React, { Component } from 'react'


class Header extends Component {
    static defaultProps = {
        title: 'Github Finder'
    }
    render() {
        return (
            <div>
                <nav className='navbar bg-danger'>
                    <h1>{this.props.title}</h1>
                </nav>
            </div>
        )
    }
}

export default Header