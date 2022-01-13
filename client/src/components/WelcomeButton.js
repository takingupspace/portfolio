import React, { Component } from 'react';
import styles from './WelcomeButton.module.css';

export default function WelcomeButton(props){
    const {kind, ...other} = props;
    const className = kind === 'primary' ? 'PrimaryButton' : 'SecondaryButton';
    return <button className={`${className} ${styles.error}`} {...other}>Error</button>;
}