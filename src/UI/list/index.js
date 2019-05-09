import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { extractAllUniquePropsFromArrayObjects } from '../../utils';
import './style.scss';
import './primary.scss';
import './secondary.scss';

export class List extends PureComponent {

    static propTypes = {
        labels: PropTypes.bool,
        list: PropTypes.array,
        primary: PropTypes.bool,
        secondary: PropTypes.bool,
    }

    static defaultProps = {
        labels: false,
        list: [],
    }

    render() {
        const classes = classNames({
            list: true,
            primary: !!this.props.primary,
            secondary: !!this.props.secondary,
        });

        let keys = [];

        if (this.props.labels) {
            keys = extractAllUniquePropsFromArrayObjects(this.props.list, 'data');
        }

        return (
            <div className={classes}>
                { this.props.labels &&
                    <div className="list__label">
                        { keys.map((key, i) => (
                            <div key={`label-${i}`}>{key}</div>
                        ))}
                    </div>
                }
                <ul>
                    { this.props.list.map((item, index) => {
                        const Component = item.component;
                        const key = item.uid || index;
                        const data = item.data || {};

                        return (
                            <li key={key}>
                                { Component &&
                                    <Component {...data} />
                                }

                                { !Component &&
                                    <div className="list__tab">
                                        { Object.keys(data).map((prop, i) => (
                                            <div key={`tab-label-${i}`}>
                                                {data[prop]}
                                            </div>
                                        ))}
                                    </div>
                                }
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
