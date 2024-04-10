import React from 'react'

const PostJob = () => {
  return (
    <section className="container">
      <div>
        <h4>Get oyur job done, right away!</h4>
      </div>

      <div className="mt-3">
        <form className="form d-flex flex-column gap-3 border p-4 rounded">
          <div className="form-group d-flex flex-column gap-2">
            <label className="form-label">Job title:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter job title"
              required
            />
          </div>

          <div className="form-group d-flex flex-column gap-2">
            <label className="form-label">Job description:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter job requirements"
              required
            />
          </div>

          <div className="form-group d-flex flex-column gap-2">
            <label className="form-label">Job requirements:</label>
            <textarea
              rows={6}
              className="form-control"
              placeholder="Enter job more requirements"
            />
          </div>
          <input
            type="submit"
            className="btn btn-primary w-25"
            value={"Post Job"}
          />
        </form>
      </div>
    </section>
  );
}

export default PostJob;