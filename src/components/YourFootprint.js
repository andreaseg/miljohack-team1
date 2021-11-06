
import React from 'react';

class YourFootprint extends React.Component {

    render() {
        const value = this.props.value;

        if (value) {

            return (
                <div>
                    Ditt fotavtrykk: {value}
                </div>
            );

        } else {
            return (null)
        }
    }
}

export default YourFootprint;