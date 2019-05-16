import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Spinner } from '../../spinner';
import IconCheckmark from '../../svg/icon-checkmark';
import IconMdClose from '../../svg/icon-close';
import { excludeFactoryProps } from '../../utils';
import './style.scss';

export class InputTextArea extends PureComponent {

    static propTypes = {
        defaultValue: PropTypes.oneOf([
            'text',
            'number',
        ]),
        disabled: PropTypes.bool,
        error: PropTypes.string,
        focus: PropTypes.bool,
        label: PropTypes.string,
        onChange: PropTypes.func,
        password: PropTypes.bool,
        placeholder: PropTypes.string,
        progress: PropTypes.bool,
        success: PropTypes.bool,
        type: PropTypes.oneOf([
            'text',
            'number',
            'textarea',
        ]),
        validate: PropTypes.func,
        field: PropTypes.object,
    };

    state = {
        valid: null,
    };

    handleChange = (e) => {
        const { value } = e.target;

        // validation just happens on non passwords
        if (
            this.props.validate) {
            const valid = this.props.validate(value);
            this.setState({
                valid: value.length > 0 ? valid : null,
            });
        }

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    };

    render() {
        const classes = classNames({
            'input-textarea': true,
            focus: !!this.props.focus,
            disabled: !!this.props.disabled,
            success: this.state.valid === true || !!this.props.success,
            error: this.state.valid === false || !!this.props.error,
        });

        const props = excludeFactoryProps([
            'defaultValue',
            'disabled',
            'error',
            'focus',
            'label',
            'onChange',
            'password',
            'placeholder',
            'progress',
            'success',
            'field',
        ], this.props);
        const { field } = this.props;
        return (
            <div className={classes}>
                <label>
                    {this.props.label &&
                    <div className="label">
                        {this.props.label}
                    </div>
                    }

                    <div className="element">
                        <textarea
                            placeholder={this.props.placeholder}
                            defaultValue={this.props.defaultValue}
                            disabled={!!this.props.disabled}
                            onChange={this.handleChange}
                            {...props}
                            {...field}
                        />

                        <div className="icon">

                            {!this.props.password &&
                            <>
                                {(this.state.valid === true || this.props.success) &&
                                <IconCheckmark />
                                }

                                {(this.state.valid === false || this.props.error) &&
                                <IconMdClose />
                                }

                                {this.props.progress &&
                                <Spinner />
                                }
                            </>
                            }
                        </div>
                    </div>

                    {this.props.error &&
                    <div className="error">
                        {this.props.error}
                    </div>
                    }
                </label>
            </div>
        );
    }
}
