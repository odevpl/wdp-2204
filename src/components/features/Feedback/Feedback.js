import React from 'react';
import { useSelector } from 'react-redux';
import { getAllFeedback } from '../../../redux/feedbackRedux';
import styles from './Feedback.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

const Feedback = () => {
  const feedbackList = useSelector(state => getAllFeedback(state));
  const feedbackCount = feedbackList.length;
  const activeFeedback = 0;

  const dots = [];
  for (let i = 0; i < feedbackCount; i++) {
    dots.push(
      <li key={'Feedback dot' + i}>
        <a
          href='#test'
          onClick={() => {}}
          className={i === activeFeedback ? styles.active : ''}
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
              <h3>Client Feedback</h3>
            </div>
            <div className={'col ' + styles.menu}></div>
            <div className={'col-auto ' + styles.dots}>
              <ul>{dots}</ul>
            </div>
          </div>
        </div>
        <div className={styles.panelContent}>
          <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
          <div className={styles.feedback}>{feedbackList[activeFeedback].comment}</div>
          <div className={styles.wrapper}>
            <div className={styles.photo}>
              <img src={feedbackList[activeFeedback].photo} alt='' />
            </div>
            <div className={styles.signature}>
              <h5>{feedbackList[activeFeedback].author}</h5>
              <p>{feedbackList[activeFeedback].authorType}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
