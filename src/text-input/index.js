import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Spinner } from '../spinner';
import IconEye from '../svg/icon-eye';
import IconEyeOff from '../svg/icon-eye-off';
import IconCheckmark from '../svg/icon-checkmark';
import IconMdClose from '../svg/icon-close';

import './style.scss';

class TextInput extends PureComponent {

    static propTypes = {
        type: PropTypes.oneOf([
            'text',
            'number',
        ]),
        placeholder: PropTypes.string,
        defaultValue: PropTypes.string,
        password: PropTypes.bool,
        focus: PropTypes.bool,
        disabled: PropTypes.bool,
        progress: PropTypes.bool,
        success: PropTypes.bool,
        error: PropTypes.bool,
        onChange: PropTypes.func,
        validate: PropTypes.func,
        label: PropTypes.string,
    }

    static defaultProps = {
        type: 'text',
    }

    state = {
        valid: null,
        showPassword: false,
    }

    togglePasswordType = () => {
        this.setState(prevState => ({
            showPassword: !prevState.showPassword,
        }));
    }

    validate = (e) => {
        const { value } = e.target;

        // validation just happens on non passwords
        if (
            !this.props.password &&
            this.props.validate) {
            const valid = this.props.validate(e.target.value);
            this.setState({
                valid: value.length > 0 ? valid : null,
            });
        }

        if (this.props.onChange) {
            this.props.onChange(e.target.value);
        }
    }

    render() {
        const classes = classnames({
            input: true,
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

        return (
            <div className={classes}>
                <label>
                    { this.props.label &&
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
                            onChange={this.validate}
                        />

                        <div className="icon">
                            { this.props.password && this.state.showPassword &&
                                <IconEyeOff onClick={this.togglePasswordType} />
                            }

                            { this.props.password && !this.state.showPassword &&
                                <IconEye onClick={this.togglePasswordType} />
                            }

                            { !this.props.password &&
                                <>
                                { (this.state.valid === true || this.props.success) &&
                                    <IconCheckmark />
                                }

                                { (this.state.valid === false || this.props.error) &&
                                    <IconMdClose />
                                }

                                { this.props.progress &&
                                    <Spinner />
                                }
                                </>
                            }
                        </div>
                    </div>
                </label>
            </div>
        );
    }
}

export {
    TextInput,
};
