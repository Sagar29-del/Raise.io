export default function News1(){
    return(
        <>
         <section className="news-section section-padding" id="section_5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-12 mb-5">
              <h2>Latest News</h2>
            </div>
            <div className="col-lg-7 col-12">
              <div className="news-block">
                <div className="news-block-top">
                  <a href="news-detail.html">
                    <img
                      src="/assets/images/news/medium-shot-volunteers-with-clothing-donations.jpg"
                      className="news-image img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="news-category-block">
                    <a href="#" className="category-block-link">
                      Lifestyle,
                    </a>
                    <a href="#" className="category-block-link">
                      Clothing Donation
                    </a>
                  </div>
                </div>
                <div className="news-block-info">
                  <div className="d-flex mt-2">
                   
                  </div>
                  <div className="news-block-title mb-2">
                    <h4>
                      <a
                        href="news-detail.html"
                        className="news-block-title-link"
                      >
                        Clothing donation to urban area
                      </a>
                    </h4>
                  </div>
                  <div className="news-block-body">
                    <p>
                     The fundraiser project promotes clothing donation drives in urban areas to collect and 
                      distribute garments to homeless and low-income families, supporting dignity and basic needs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="news-block mt-3">
                <div className="news-block-top">
                  <a href="news-detail.html">
                    <img
                      src="/assets/images/news/medium-shot-people-collecting-foodstuff.jpg"
                      className="news-image img-fluid"
                      alt=""
                    />
                  </a>
                  <div className="news-category-block">
                    <a href="#" className="category-block-link">
                      Food,
                    </a>
                    <a href="#" className="category-block-link">
                      Donation,
                    </a>
                    <a href="#" className="category-block-link">
                      Caring
                    </a>
                  </div>
                </div>
                <div className="news-block-info">
                  <div className="d-flex mt-2">
                    
                  </div>
                  <div className="news-block-title mb-2">
                    <h4>
                      <a
                        href="news-detail.html"
                        className="news-block-title-link"
                      >
                        Food donation area
                      </a>
                    </h4>
                  </div>
                  <div className="news-block-body">
                    <p>
                       The fundraiser project includes food donation drives in targeted areas to provide meals and essential groceries to underprivileged families, helping to reduce hunger and improve nutrition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 mx-auto">
              <form
                className="custom-form search-form"
                action="#"
                method="post"
                role="form"
              >
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button type="submit" className="form-control">
                  <i className="bi-search" />
                </button>
              </form>
              <h5 className="mt-5 mb-3">Recent news</h5>
              <div className="news-block news-block-two-col d-flex mt-4">
                <div className="news-block-two-col-image-wrap">
                  <a href="news-detail.html">
                    <img
                      src="/assets/images/news/africa-humanitarian-aid-doctor.jpg"
                      className="news-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="news-block-two-col-info">
                  <div className="news-block-title mb-2">
                    <h6>
                      <a
                        href="news-detail.html"
                        className="news-block-title-link"
                      >
                        Food donation area
                      </a>
                    </h6>
                  </div>
                  <div className="news-block-date">
                   
                  </div>
                </div>
              </div>
              <div className="news-block news-block-two-col d-flex mt-4">
                <div className="news-block-two-col-image-wrap">
                  <a href="news-detail.html">
                    <img
                      src="/assets/images/news/close-up-happy-people-working-together.jpg"
                      className="news-image img-fluid"
                      alt=""
                    />
                  </a>
                </div>
                <div className="news-block-two-col-info">
                  <div className="news-block-title mb-2">
                    <h6>
                      <a
                        href="news-detail.html"
                        className="news-block-title-link"
                      >
                        Volunteering Clean
                      </a>
                    </h6>
                  </div>
                  <div className="news-block-date">
                    
                  </div>
                </div>
              </div>
              <div className="category-block d-flex flex-column">
                <h5 className="mb-3">Categories</h5>
                <a href="#" className="category-block-link">
                  Drinking water
                  <span className="badge">20</span>
                </a>
                <a href="#" className="category-block-link">
                  Food Donation
                  <span className="badge">30</span>
                </a>
                <a href="#" className="category-block-link">
                  Children Education
                  <span className="badge">10</span>
                </a>
                <a href="#" className="category-block-link">
                  Poverty Development
                  <span className="badge">15</span>
                </a>
                <a href="#" className="category-block-link">
                  Clothing Donation
                  <span className="badge">20</span>
                </a>
              </div>
              <div className="tags-block">
                <h5 className="mb-3">Tags</h5>
                <a href="#" className="tags-block-link">
                  Donation
                </a>
                <a href="#" className="tags-block-link">
                  Clothing
                </a>
                <a href="#" className="tags-block-link">
                  Food
                </a>
                <a href="#" className="tags-block-link">
                  Children
                </a>
                <a href="#" className="tags-block-link">
                  Education
                </a>
                <a href="#" className="tags-block-link">
                  Poverty
                </a>
                <a href="#" className="tags-block-link">
                  Clean Water
                </a>
              </div>
              <form
                className="custom-form subscribe-form"
                action="#"
                method="post"
                role="form"
              >
                <h5 className="mb-4">Newsletter Form</h5>
                <input
                  type="email"
                  name="subscribe-email"
                  id="subscribe-email"
                  pattern="[^ @]*@[^ @]*"
                  className="form-control"
                  placeholder="Email Address"
                  required=""
                />
                <div className="col-lg-12 col-12">
                  <button type="submit" className="form-control">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
       <section className="testimonial-section section-padding section-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 mx-auto">
              <h2 className="mb-lg-3">Happy customers</h2>
              <div
                id="testimonial-carousel"
                className="carousel carousel-fade slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="carousel-caption">
                      <h4 className="carousel-title">
                        support that improved their living conditions, education, and well-being. Their satisfaction reflects the project's meaningful impact and success.
                        
                      </h4>
                      <small className="carousel-name">
                        <span className="carousel-name-title">Maria</span>, Boss
                      </small>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <h4 className="carousel-title">
                        Sed leo nisl, posuere at molestie ac, suscipit auctor
                        mauris quis metus tempor orci
                      </h4>
                      <small className="carousel-name">
                        <span className="carousel-name-title">Thomas</span>,
                        Partner
                      </small>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <h4 className="carousel-title">
                        Lorem Ipsum dolor sit amet, consectetur adipsicing kengan
                        omeg kohm tokito charity theme
                      </h4>
                      <small className="carousel-name">
                        <span className="carousel-name-title">Jane</span>, Advisor
                      </small>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="carousel-caption">
                      <h4 className="carousel-title">
                        Sed leo nisl, posuere at molestie ac, suscipit auctor
                        mauris quis metus tempor orci
                      </h4>
                      <small className="carousel-name">
                        <span className="carousel-name-title">Bob</span>,
                        Entreprenuer
                      </small>
                    </div>
                  </div>
                  <ol className="carousel-indicators">
                    <li
                      data-bs-target="#testimonial-carousel"
                      data-bs-slide-to={0}
                      className="active"
                    >
                      <img
                        src="/assets/images/avatar/portrait-beautiful-young-woman-standing-grey-wall.jpg"
                        className="img-fluid rounded-circle avatar-image"
                        alt="avatar"
                      />
                    </li>
                    <li
                      data-bs-target="#testimonial-carousel"
                      data-bs-slide-to={1}
                      className=""
                    >
                      <img
                        src="/assets/images/avatar/portrait-young-redhead-bearded-male.jpg"
                        className="img-fluid rounded-circle avatar-image"
                        alt="avatar"
                      />
                    </li>
                    <li
                      data-bs-target="#testimonial-carousel"
                      data-bs-slide-to={2}
                      className=""
                    >
                      <img
                        src="/assets/images/avatar/pretty-blonde-woman-wearing-white-t-shirt.jpg"
                        className="img-fluid rounded-circle avatar-image"
                        alt="avatar"
                      />
                    </li>
                    <li
                      data-bs-target="#testimonial-carousel"
                      data-bs-slide-to={3}
                      className=""
                    >
                      <img
                        src="/assets/images/avatar/studio-portrait-emotional-happy-funny.jpg"
                        className="img-fluid rounded-circle avatar-image"
                        alt="avatar"
                      />
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    )
}