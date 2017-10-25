import React from 'react'
import IconMug from '../components/icon-mug'

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="row">
          <div className="col-6">
            <IconMug />
          </div>
          <nav className="col-6">
            {this.props.children}
          </nav>
        </div>
      </header>
    )
  }
}

export default Header
