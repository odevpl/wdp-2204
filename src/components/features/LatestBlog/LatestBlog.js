import React from 'react';
import styles from './LatestBlog.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const LatestBlog = () => {
  const PostsList = [{}, {}, {}];
  const PostsCount = PostsList.length;
  const activePosts = 0;

  const dots = [];
  for (let i = 0; i < PostsCount; i++) {
    dots.push(
      <li key={'Posts dot' + i}>
        <a
          href='#test'
          onClick={() => {}}
          className={i === activePosts ? styles.active : ''}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>Latest Blog</h3>
            </div>
            <div className='col'></div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <div className='card-deck'>
          <div className={`card ${styles.postCard}`}>
            <div
              className={`card-img-top d-flex justify-content-center ${styles.imageBlock}`}
            >
              <div
                className={`row justify-content-center align-items-end w-100 ${styles.imageBlockWrapper}`}
              >
                <div className='d-flex align-items-center p-3'>
                  <FontAwesomeIcon className='mr-2 text-muted' icon={faCalendarDays} />
                  <p className='my-auto text-muted'>15 JAN 2016</p>
                </div>
                <div className='d-flex align-items-center p-3'>
                  <FontAwesomeIcon className='mr-2' icon={faComments} />
                  <p className='my-auto text-muted'>4 Comments</p>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <h5 className='card-title'>
                <a href='#test'>Product That Fight Static</a>
              </h5>
              <p className='card-text text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet
                pretium odio, vel dictum nulla auctor egestas. Cras et purus nibh. Proin
                feugiat mauris ac neque viverra consectetur. Etiam vel sodales metus.
              </p>
              <div className='text-center mt-5'>
                <Button variant='main'>Read more</Button>
              </div>
            </div>
          </div>
          <div className={`card ${styles.postCard}`}>
            <div
              className={`card-img-top d-flex justify-content-center ${styles.imageBlock}`}
            >
              <div
                className={`row justify-content-center align-items-end w-100 ${styles.imageBlockWrapper}`}
              >
                <div className='d-flex align-items-center p-3'>
                  <FontAwesomeIcon className='mr-2 text-muted' icon={faCalendarDays} />
                  <p className='my-auto text-muted'>15 JAN 2016</p>
                </div>
                <div className='d-flex align-items-center p-3'>
                  <FontAwesomeIcon className='mr-2' icon={faComments} />
                  <p className='my-auto text-muted'>4 Comments</p>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <h5 className='card-title'>
                <a href='#test'>Product That Fight Static</a>
              </h5>
              <p className='card-text text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet
                pretium odio, vel dictum nulla auctor egestas. Cras et purus nibh. Proin
                feugiat mauris ac neque viverra consectetur. Etiam vel sodales metus.
              </p>
              <div className='text-center mt-5'>
                <Button variant='main'>Read more</Button>
              </div>
            </div>
          </div>
          <div className={`card ${styles.postCard}`}>
            <div
              className={`card-img-top d-flex justify-content-center ${styles.imageBlock}`}
            >
              <div
                className={`row justify-content-center align-items-end w-100 ${styles.imageBlockWrapper}`}
              >
                <div className='d-flex align-items-center p-3'>
                  <FontAwesomeIcon className='mr-2 text-muted' icon={faCalendarDays} />
                  <p className='my-auto text-muted'>15 JAN 2016</p>
                </div>
                <div className='d-flex align-items-center p-3'>
                  <FontAwesomeIcon className='mr-2' icon={faComments} />
                  <p className='my-auto text-muted'>4 Comments</p>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <h5 className='card-title'>
                <a href='#test'>Product That Fight Static</a>
              </h5>
              <p className='card-text text-muted'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aliquet
                pretium odio, vel dictum nulla auctor egestas. Cras et purus nibh. Proin
                feugiat mauris ac neque viverra consectetur. Etiam vel sodales metus.
              </p>
              <div className='text-center mt-5'>
                <Button variant='main'>Read more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
