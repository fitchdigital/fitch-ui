import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Spinner } from '../../spinner';
import IconEye from '../../svg/icon-eye';
import IconEyeOff from '../../svg/icon-eye-off';
import IconCheckmark from '../../svg/icon-checkmark';
import IconMdClose from '../../svg/icon-close';
import { excludeFactoryProps } from '../../utils';
import './style.scss';

export class InputText extends PureComponent {

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

    static defaultProps = {
        type: 'text',
    };

    state = {
        valid: null,
        showPassword: false,
    };

    togglePasswordType = () => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword,
        }));
    };

    handleChange = (e) => {
        const { value } = e.target;

        // validation just happens on non passwords
        if (
            !this.props.password &&
            this.props.validate) {
            const valid = this.props.validate(value);
            this.setState({
                valid: value.length > 0 ? valid : null,
            });
        }

        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        const classes = classNames({
            'input-text': true,
            password: !!this.props.password,
            focus: !!this.props.focus,
            disabled: !!this.props.disabled,
            success: this.state.valid === true || !!this.props.success,
            error: this.state.valid === false || !!this.props.error,
        });

        // if field is password, toggle visibility
        let type = this.props.type;
        if (this.props.password && !this.state.showPassword) {
            type = 'password';
        }

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
            'type',
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
                        <input
                            type={type}
                            placeholder={this.props.placeholder}
                            defaultValue={this.props.defaultValue}
                            disabled={!!this.props.disabled}
                            onChange={this.handleChange}
                            {...props}
                            {...field}
                        />

                        <div className="icon">
                            {this.props.password && this.state.showPassword &&
                            <IconEyeOff onClick={this.togglePasswordType} />
                            }

                            {this.props.password && !this.state.showPassword &&
                            <IconEye onClick={this.togglePasswordType} />
                            }

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
