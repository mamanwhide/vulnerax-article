const BlogDetail = ({ title, date, image, content }) => {
  return (
    <div className="container mt-5 pt-5">
      <article>
        <header className="mb-4">
          <figure className="mb-4">
            <img className="img-fluid rounded" src={image} alt={title} />
          </figure>
          <h1 className="fw-bolder mb-1">{title}</h1>
          <div className="text-muted fst-italic mb-2">Posted on {date}</div>
        </header>
        <section className="mb-2">
          {content.map((paragraph, index) => (
            <div key={index} className="mb-4">
              <p className="fs-5">{paragraph}</p>
            </div>
          ))}
        </section>
      </article>
    </div>
  );
};

export default BlogDetail;
