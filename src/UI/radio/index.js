import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { excludeFactoryProps } from '../../utils';
import './style.scss';

export class Radio extends PureComponent {

    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        focus: PropTypes.bool,
        label: PropTypes.string,
        onChange: PropTypes.func,
        error: PropTypes.string,
    }

    state = {
        checked: !!this.props.checked,
    }

    onChange = (e) => {
        this.setState(prevState => ({
            checked: !prevState.checked,
        }));

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        const classes = classNames({
            radio: true,
            focus: !!this.props.focus,
            disabled: !!this.props.disabled,
            checked: this.state.checked,
        });

        const props = excludeFactoryProps([
            'checked',
            'disabled',
            'focus',
            'label',
            'onChange',
            'type',
        ], this.props);

        return (
            <div className={classes}>
                <label>
                    <div className="element">
                        <input
                            type="checkbox"
                            checked={this.state.checked}
                            onChange={this.onChange}
                            disabled={!!this.props.disabled}
                            {...props}
                        />
                        <span />
                    </div>
                    { this.props.label &&
                        <div className="label">
                            {this.props.label}
                        </div>
                    }
                </label>

                { this.props.error &&
                    <div className="error">
                        {this.props.error}
                    </div>
                }
            </div>
        );
    }
}
