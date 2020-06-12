import React from "react";
import styles from "./style.module.scss";

export default function CenterMiddleContentComponent(props) {
    return (
        <table {...props} className={styles.root}>
            <tbody>
                <tr>
                    <td>{props.children}</td>
                </tr>
            </tbody>
        </table>
    );
}