// const HTML_LI_TEMPLATE = ;

const catalogue = [
  {
    imgSrc: "by-the-diggs-white.png",
    shirtName: "By the diggs T-Shirt - White",
  },
  {
    imgSrc: "by-the-diggs-black.png",
    shirtName: "By the diggs T-Shirt - Black",
  },
  {
    imgSrc: "by-the-diggs-shelf.jpeg",
    shirtName: "By the diggs T-Shirt - Black & White",
  },
  {
    imgSrc: "by-the-diggs-cap.jpeg",
    shirtName: "By the diggs Cap",
  },
  {
    imgSrc: "by-the-diggs-blue.jpeg",
    shirtName: "By the diggs T-Shirt Blue",
  },
  {
    imgSrc: "by-the-diggs-yellow.jpeg",
    shirtName: "By the diggs T-Shirt Yellow",
  },
  {
    imgSrc: "by-the-diggs-black.png",
    shirtName: "By the diggs T-Shirt - Black",
  },
  {
    imgSrc: "by-the-diggs-white.png",
    shirtName: "By the diggs T-Shirt - White",
  },
  {
    imgSrc: "by-the-diggs-shelf.jpeg",
    shirtName: "By the diggs T-Shirt - Black & White",
  },
];

const catalogue_ul = document.getElementById(
  "Slider-template--16963826647360__featured-collection"
);

const result_map = catalogue
  .map(
    ({ imgSrc, shirtName }) =>
      `
    <li id="Slide-template--16963826647360__featured-collection-1" class="grid__item">
            

<!-- <link href="cdn/shop/t/3/assets/component-rating40e3.css?v=24573085263941240431668566309" rel="stylesheet" type="text/css" media="all" /> -->
<div class="card-wrapper product-card-wrapper underline-links-hover">
    <div class="card card--standard card--media" style="--ratio-percent: 100.0%;">
      <div class="card__inner color-background-1 gradient ratio" style="--ratio-percent: 100.0%;">
        <div class="card__media">
            <div class="media media--transparent media--hover-effect">
              <img src="./diggs/${imgSrc}"
                sizes="(min-width: 1000px) 217px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
                alt="Perverts T-Shirt - Black"
                class="motion-reduce" loading="lazy" width="1426" height="1426" />
              
              <img src="./diggs/${imgSrc}"
                  sizes="(min-width: 1000px) 217px, (min-width: 990px) calc((100vw - 130px) / 4), (min-width: 750px) calc((100vw - 120px) / 3), calc((100vw - 35px) / 2)"
                  alt=""
                  class="motion-reduce"
                  loading="lazy"
                  width="1351"
                  height="1920" />
            </div>
          </div>
          <div class="card__content">
            <div class="card__information">
                <h3 class="card__heading">
                    <a
                        href="#"
                        id="StandardCardNoMediaLink-template--16963826647360__featured-collection-9636378640704"
                        class="full-unstyled-link"
                        aria-labelledby="StandardCardNoMediaLink-template--16963826647360__featured-collection-9636378640704 NoMediaStandardBadge-template--16963826647360__featured-collection-9636378640704"
                    >
                        ${shirtName}
                    </a>
                </h3>
          </div>
          <div class="card__badge bottom right">
            <span
                id="NoMediaStandardBadge-template--16963826647360__featured-collection-9636378640704"
                class="badge badge--bottom-left color-inverse">
                    COMING SOON
            </span>
        </div>
    </div>
</div>
      <div class="card__content">
        <div class="card__information">
          <h3
            class="card__heading h5"
            
              id="title-template--16963826647360__featured-collection-9636378640704"
            
          >
            <a
              href="#"
              id="CardLink-template--16963826647360__featured-collection-9636378640704"
              class="full-unstyled-link"
              aria-labelledby="CardLink-template--16963826647360__featured-collection-9636378640704 Badge-template--16963826647360__featured-collection-9636378640704"
            >
            ${shirtName}
            </a>
          </h3>
          <div class="card-information"><span class="caption-large light"></span>
<div class="price  price--sold-out ">
  <div class="price__container"><div class="price__regular">
      <span class="visually-hidden visually-hidden--inline">Regular price</span>
      <span class="price-item price-item--regular">
        ₦57,600.00
      </span>
    </div>
    <div class="price__sale">
        <span class="visually-hidden visually-hidden--inline">Regular price</span>
        <span>
          <s class="price-item price-item--regular">
            
              
            
          </s>
        </span><span class="visually-hidden visually-hidden--inline">Sale price</span>
      <span class="price-item price-item--sale price-item--last" style="display: none;">
        ₦57,600.00
      </span>
    </div>
    <small class="unit-price caption hidden">
      <span class="visually-hidden">Unit price</span>
      <span class="price-item price-item--last">
        <span></span>
        <span aria-hidden="true">/</span>
        <span class="visually-hidden">&nbsp;per&nbsp;</span>
        <span>
        </span>
      </span>
    </small>
  </div></div>

          </div>
        </div><div class="card__badge bottom right"><span
              id="Badge-template--16963826647360__featured-collection-9636378640704"
              class="badge badge--bottom-left color-inverse"
            >COMING SOON</span></div>
      </div>
    </div>
  </div>
</li>
`
  )
  .join("");
console.log(result_map);
catalogue_ul.insertAdjacentHTML("beforeend", result_map);
