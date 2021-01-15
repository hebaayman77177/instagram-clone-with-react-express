import Classes from "./Home.module.css";

function Home() {
  return (
    <div className={Classes.home}>
      <div className={`card  ${Classes.post} input-field`}>
        <h3>Heba</h3>
        <div className={Classes.Post__img}>
          <img
            src={
              "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3rwaAEsoRTEH5tG7hkbmiP/7104590268166374b6165b47d01bb454/data_scientist_catalog_image.jpg"
            }
          />
        </div>
        <h5>post title</h5>
        <p>post body</p>
        <input type="text" placeholder="Comment" />
        <a className="waves-effect waves-light btn #01579b light-blue darken-4">
          Add
        </a>
      </div>
      <div className={`card  ${Classes.post} input-field`}>
        <h3>Heba</h3>
        <div className={Classes.Post__img}>
          <img
            src={
              "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3rwaAEsoRTEH5tG7hkbmiP/7104590268166374b6165b47d01bb454/data_scientist_catalog_image.jpg"
            }
          />
        </div>
        <i class="material-icons" style={{color:"red"}}>favorite</i>
        <h5>post title</h5>
        <p>post body</p>
        <input type="text" placeholder="Comment" />
        <a className="waves-effect waves-light btn #01579b light-blue darken-4">
          Add
        </a>
      </div>
      <div className={`card  ${Classes.post} input-field`}>
        <h3>Heba</h3>
        <div className={Classes.Post__img}>
          <img
            src={
              "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3rwaAEsoRTEH5tG7hkbmiP/7104590268166374b6165b47d01bb454/data_scientist_catalog_image.jpg"
            }
          />
        </div>
        <i class="material-icons" style={{color:"red"}}>favorite</i>
        <h5>post title</h5>
        <p>post body</p>
        <input type="text" placeholder="Comment" />
        <a className="waves-effect waves-light btn #01579b light-blue darken-4">
          Add
        </a>
      </div>

      <div className={`card  ${Classes.post} input-field`}>
        <h3>Heba</h3>
        <div className={Classes.Post__img}>
          <img
            src={
              "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3rwaAEsoRTEH5tG7hkbmiP/7104590268166374b6165b47d01bb454/data_scientist_catalog_image.jpg"
            }
          />
        </div>
        <i class="material-icons" style={{color:"red"}}>favorite</i>
        <h5>post title</h5>
        <p>post body</p>
        <input type="text" placeholder="Comment" />
        <a className="waves-effect waves-light btn #01579b light-blue darken-4">
          Add
        </a>
      </div>

      <div className={`card  ${Classes.post} input-field`}>
        <h3>Heba</h3>
        <div className={Classes.Post__img}>
          <img
            src={
              "https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/3rwaAEsoRTEH5tG7hkbmiP/7104590268166374b6165b47d01bb454/data_scientist_catalog_image.jpg"
            }
          />
        </div>
        <i class="material-icons" style={{color:"red"}}>favorite</i>
        <h5>post title</h5>
        <p>post body</p>
        <input type="text" placeholder="Comment" />
        <a className="waves-effect waves-light btn #01579b light-blue darken-4">
          Add
        </a>
      </div>
    </div>
  );
}

export default Home;
