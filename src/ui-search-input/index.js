import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Spinner } from '../spinner';
import IconSearch from '../svg/icon-search';

import './style.scss';

export class SearchInput extends PureComponent {

    static propTypes = {
        type: PropTypes.oneOf([
            'text',
            'number',
        ]),
        placeholder: PropTypes.string,
        defaultValue: PropTypes.string,
        focus: PropTypes.bool,
        disabled: PropTypes.bool,
        progress: PropTypes.bool,
        success: PropTypes.bool,
        error: PropTypes.bool,
        onChange: PropTypes.func,
        validate: PropTypes.func,
    }

    static defaultProps = {
        type: 'text',
    }

    state = {
        valid: null,
    }

    validate = (e) => {
        const { value } = e.target;

        if (this.props.validate) {
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
            search: true,
            focus: !!this.props.focus,
            disabled: !!this.props.disabled,
            success: this.state.valid === true || !!this.props.success,
            error: this.state.valid === false || !!this.props.error,
        });

        return (
            <div className={classes}>
                <div className="search-icon">
                    <IconSearch />
                </div>

                <input
                    type={this.props.type}
                    placeholder={this.props.placeholder}
                    defaultValue={this.props.defaultValue}
                    disabled={!!this.props.disabled}
                    onChange={this.validate}
                />

                <div className="icon">
                    { this.props.progress &&
                        <Spinner />
                    }
                </div>
            </div>
        );
    }
}
