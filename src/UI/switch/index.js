import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { excludeFactoryProps } from '../../utils';
import './style.scss';

export class Switch extends PureComponent {

    static propTypes = {
        checked: PropTypes.bool,
        disabled: PropTypes.bool,
        focus: PropTypes.bool,
        label: PropTypes.string,
        onChange: PropTypes.func,
        error: PropTypes.string,
        name: PropTypes.string,
    }

    state = {
        checked: !!this.props.checked,
    }

    handleChange = (e) => {
        this.setState(prevState => ({
            checked: !prevState.checked,
        }));

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        const classes = classNames({
            switch: true,
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
        const { field } = this.props;
        const { name } = field;
        return (
            <div className={classes}>
                <label>
                    <div className="element">
                        <input
                            name={name}
                            type="checkbox"
                            checked={this.state.checked}
                            onChange={this.handleChange}
                            disabled={!!this.props.disabled}
                            {...props}
                            name={name}
                        />
                        <span />
                    </div>
                    {this.props.label &&
                    <div className="label">
                        {this.props.label}
                    </div>
                    }
                </label>

                {this.props.error &&
                <div className="error">
                    {this.props.error}
                </div>
                }
            </div>
        );
    }
}
