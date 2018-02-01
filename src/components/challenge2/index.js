import React, {Component} from 'react'

export default class Challenge2 extends Component {
    handleClick(e) {
        alert(e.target.id)
    }

    renderName = (name) => <p className="challenge-label">{name}</p>;

    render() {
        const {renderName} = this;
        return (
            <div className="challenge2" id="Div 1" onClick={this.handleClick}>
                {renderName('Div 1')}
                <div className="inner" id="Div 2">
                    {renderName('Div 2')}
                    <div className="inner-inner" id="Div 3">
                        {renderName('Div 3')}
                    </div>
                </div>
            </div>
        );
    }
}