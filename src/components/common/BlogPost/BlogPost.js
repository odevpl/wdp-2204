import React from 'react';
import { Link } from 'react-router-dom';
import { faUser, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const BlogPost = ({ img, title, text, author, date }) => {
  return (
    <div className='d-fex flex-col'>
      <div className='mb-3'>
        <h3>{title}</h3>
      </div>
      <div>
        <img className='mb-2 img-fluid' src={img} alt='' />
      </div>
      <div className='mb-3'>{text}</div>
      <div className='d-flex flex-row border-top border-bottom py-1 mb-5'>
        <div className='col-2'>
          <FontAwesomeIcon className='mr-2' icon={faUser} />
          {author}
        </div>
        <div className='col-3'>
          <FontAwesomeIcon className='mr-2' icon={faCalendarDays} />
          {date}
        </div>
        <div className='col-7 text-right'>
          <Link to={'#'}>Read more..</Link>
        </div>
      </div>
    </div>
  );
};

BlogPost.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.string,
  date: PropTypes.string,
};

export default BlogPost;
