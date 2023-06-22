import { Link } from "react-router-dom";
import Constants from "../api/Constants";

const Products = (props) => {
    const { catId, catName, catImageUrl } = props.data;
    return (
        <div className="col-sm-3">
            <div className="card">
                <img src={catImageUrl}
                    alt=""
                    className="card-image-top"
                />
                <div className="card-body">
                    <h5 className="card-title">{catName}</h5>

                    <Link to={"/products/" + catId} className="btn btn-primary btn-block">
                        Select
                    </Link>
                </div>
            </div>
        </div>

    );
};
export default Products;