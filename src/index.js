import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { Main } from './pages/main';
import { Login } from './pages/login';


class Switcher extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};
    this.state.page = <Main />;

    this.switch = this.switch.bind(this);
    this.PAGES = [<Main sw={this.switch} />, <Login sw={this.switch} />];
  }

  switch(number)
  {
    let p = this.PAGES[number];
    if(!p) return;
    this.setState({ page : p });
  }

  render() {
    return (this.state.page)
  }

}

ReactDOM.render(
  <React.StrictMode>
    <Switcher />
  </React.StrictMode>,
  document.getElementById('root')
);
