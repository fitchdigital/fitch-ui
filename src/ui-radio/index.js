import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './style.scss';

export class Radio extends PureComponent {

    static propTypes = {
        checked: PropTypes.bool,
        focus: PropTypes.bool,
        disabled: PropTypes.bool,
        label: PropTypes.string,
    }

    state = {
        checked: !!this.props.checked,
    }

    onChange = () => {
        this.setState(prevState => ({
            checked: !prevState.checked,
        }));
    }

    render() {
        const classes = classnames({
            radio: true,
            focus: !!this.props.focus,
            disabled: !!this.props.disabled,
            checked: this.state.checked,
        });

        return (
            <div className={classes}>
                <label>
                    <div className="element">
                        <input
                            type="checkbox"
                            checked={this.state.checked}
                            onChange={this.onChange}
                            disabled={!!this.props.disabled}
                        />
                        <span />
                    </div>
                    { this.props.label &&
                        <div className="label">
                            {this.props.label}
                        </div>
                    }
                </label>
            </div>
        );
    }
}
