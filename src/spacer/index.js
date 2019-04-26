import React, { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './style.scss';

export class Spacer extends PureComponent {

    static propTypes = {
        small: PropTypes.bool,
        medium: PropTypes.bool,
        large: PropTypes.bool,
        debug: PropTypes.bool,
    }

    static defaultProps = {
        small: true,
        debug: false,
    }

    render() {
        const classes = classNames({
            spacer: true,
            debug: this.props.debug,
            small: !!this.props.small,
            medium: !!this.props.medium,
            large: !!this.props.large,
        });

        return (
            <div
                className={classes}
            />
        );
    }
}
