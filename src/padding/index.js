import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

export class Padding extends PureComponent {

    static propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        debug: PropTypes.bool,
    }

    static defaultProps = {
        debug: false,
    }

    render() {
        const classes = classNames({
            padding: true,
            debug: this.props.debug,
            [this.props.className]: this.props.className !== undefined,
        });
        return (
            <div className={classes}>{this.props.children}</div>
        );
    }
}
