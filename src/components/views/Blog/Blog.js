import React from 'react';
import BlogMenu from '../../common/BlogMenu/BlogMenu';
import BlogPost from '../../common/BlogPost/BlogPost';
import styles from './Blog.module.scss';

const Blog = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <h1 className='col-12 text-center mt-5 mb-5'>Blog</h1>
        <div className='d-flex flex-row'>
          <div className={`${styles.posts} col-9`}>
            <BlogPost
              title='Witamy na nowej stronie sklepu!'
              text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga mollitia repellendus esse harum odit eius a. Explicabo consequuntur excepturi quaerat.'
              img='https://images.unsplash.com/photo-1543332164-6e82f355badc'
              author='Admin'
              date='01-05-2022'
            />
          </div>

          <div className={`${styles.menu} col-3`}>
            <BlogMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
