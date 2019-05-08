import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './style.scss';

export class List extends PureComponent {

    static propTypes = {
        label: PropTypes.func,
        list: PropTypes.array,
        primary: PropTypes.bool,
        secondary: PropTypes.bool,
    }

    static defaultProps = {
        list: [],
    }

    render() {
        const classes = classNames({
            list: true,
            primary: !!this.props.primary,
            secondary: !!this.props.secondary,
        });

        const Label = this.props.label;
        return (
            <div className={classes}>
                { this.props.label &&
                    <Label />
                }
                <ul>
                    { this.props.list.map((item, index) => {
                        const Component = item.component;
                        const key = item.uid || index;
                        const data = item.data || {};
                        return (
                            <li key={key}>
                                <Component {...data} />
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
