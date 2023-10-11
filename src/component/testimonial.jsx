import React from 'react'

export const Testimonial = ({ comment }) => {
  return (
    <>
      <div className="testimonial-container">
        <h2 className="testimonial-text">testimonial</h2>
        <div className="comment-container">
          {comment.map((comment) => {
            return (
              <section className="comment-item">
                <p>{comment.testimonial}</p>
                <h5>-{comment.name}</h5>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
