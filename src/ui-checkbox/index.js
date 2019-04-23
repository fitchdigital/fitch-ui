import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import IconCheckmark from '../svg/icon-checkmark';

import './style.scss';

export class Checkbox extends PureComponent {

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
            checkbox: true,
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
                        <IconCheckmark />
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
