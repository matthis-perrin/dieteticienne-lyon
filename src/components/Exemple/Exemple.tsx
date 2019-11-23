import React from 'react';

interface Props {
  title: string;
}

interface State {
  counter: number;
}

export class Exemple extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }

  handleClick = () => {
    this.setState({counter: this.state.counter + 1});
  };

  render() {
    const content = `Click ${this.state.counter}`;
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>Hello</h2>
        <p>{content}</p>
        <button onClick={this.handleClick}>+1</button>
      </div>
    );
  }
}
