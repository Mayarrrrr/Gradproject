import ItemList from "./ItemList";
import NavBar from "./NavBar";

const DrList = () => {
    return (
        <div>
            <NavBar/>
            <div className="row justify-content-center padding" style={{padding: 18}}>
        <div className="col-md-6 ftco-animate fadeInUp ftco-animated">
          <form action="" className="domain-form" method="post">
            <div className="form-group d-md-flex"> <input type="text" className="form-control px-3" placeholder="Enter the specialty you want" name="srch" /> 
              <button type="submit" className="search-domain btn btn-outline-warning px-5" value="Search" size="4px"> Search</button></div>
          </form>
        </div>
      </div>
      <ItemList/>
        </div>
      );
}
 
export default DrList;
