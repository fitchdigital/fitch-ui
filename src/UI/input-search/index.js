import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Spinner } from '../../spinner';
import IconSearch from '../../svg/icon-search';
import { excludeFactoryProps } from '../../utils';
import './style.scss';

export class InputSearch extends PureComponent {

    static propTypes = {
        defaultValue: PropTypes.string,
        disabled: PropTypes.bool,
        focus: PropTypes.bool,
        onChange: PropTypes.func,
        placeholder: PropTypes.string,
        progress: PropTypes.bool,
        type: PropTypes.oneOf([
            'text',
            'number',
        ]),
    }

    static defaultProps = {
        type: 'text',
    }

    handleChange = (e) => {
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        const classes = classNames({
            'input-search': true,
            focus: !!this.props.focus,
            disabled: !!this.props.disabled,
        });

        const props = excludeFactoryProps([
            'defaultValue',
            'disabled',
            'focus',
            'onChange',
            'placeholder',
            'progress',
            'type',
        ], this.props);

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
                    onChange={this.handleChange}
                    {...props}
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
