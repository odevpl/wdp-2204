import React from 'react';

const BlogMenu = () => {
  return (
    <div className='d-flex flex-column mt-2'>
      <div className='mb-4'>
        <input type='text' placeholder='Search..' />
      </div>
      <div className='mb-4'>
        <h5>Recent Posts</h5>
        <div className='d-flex flex-column'>
          <div>
            <a href='#'>Witamy na nowej stronie sklepu!</a>
          </div>
          <div>
            <a href='#'>Nowe godziny otwarcia</a>
          </div>
          <div>
            <a href='#'>Meble w stylu skandynawskim</a>
          </div>
          <div>
            <a href='#'>Jak dopasować zasłony</a>
          </div>
        </div>
      </div>

      <div className='mb-4'>
        <h5>Recent Comments</h5>
        <div className='d-flex flex-column'>
          <div>
            <a href='#'>Meble w stylu skandynawskim</a>
          </div>
          <div>
            <a href='#'>Jak dopasować zasłony</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMenu;
