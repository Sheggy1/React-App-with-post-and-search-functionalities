// src/components/Post.js
import React from 'react';
import styles from './SearchBar.module.css';

const Post = ({ title, content }) => {
    return (
        <div className={styles['post-container']}>
            <h2 className={styles['post-title']}>{title}</h2>
            <p className={styles['post-content']}>{content}</p>
        </div>
    );
};

export default Post;
