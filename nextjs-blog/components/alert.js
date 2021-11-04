/*
Using `classnames` library to toggle classes
`classnames` is a simple library that lets you toggle class names easily. You can install it using `npm install classnames` or `yarn add classnames`.
*/

import styles from './alert.module.css'
import cn from 'classnames'

export default function Alert({ children, type }) {
    return (
        <div
            className={cn({
                [styles.success]: type === 'success',
                [styles.error]: type === 'error',
            })}
        >
            {children}
        </div>
    )
}
