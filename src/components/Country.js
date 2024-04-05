import { useQuery } from "@apollo/client";
import { GET_ALL_PRODUCT_DETAILS } from "./query";
import { useEffect, useState } from "react";
import "../styles/country.css";

const ProductList = () => {
  let { data } = useQuery(GET_ALL_PRODUCT_DETAILS);
  let [productList, setProductList] = useState([]);
  let [flag, setFlag] = useState(false);
  let [item, setItem] = useState(null);

  useEffect(() => {
    if (data !== undefined) {
      setProductList(data.countries);
    }
  }, [data]);
  return (
    <>
      {productList.map((i) => (
        <div id="item-list">
          <ul>
            <li>
              <a className="expand">
                <h2>{i.name}</h2>
                <span>
                  <strong>Capital</strong> : {i.capital}
                </span>
              </a>
              <button
                onClick={() => {
                  setFlag(!flag);
                  setItem(i);
                }}
              >
                Details
              </button>
            </li>
          </ul>
        </div>
      ))}

      {flag && (
        <section className="pop-registration">
          <section className="user-registration">
            <form action="#">
              <h1>
                {item.name} - {item.emoji}
              </h1>

              <div className="box">
                <div>
                  <strong>Capital</strong> : {item.capital}
                </div>
                <div>
                  <strong>Native</strong> : {item.native}
                </div>
                <div>
                  <strong>Reigion</strong> : {item.awsRegion}
                </div>
                <div>
                  <strong>Phone-Code</strong> : {item.phone}
                </div>
                <div>
                  <strong>Currency</strong> : {item.currency}
                </div>
                <div>
                  <strong>Languages</strong> :{" "}
                  {item.languages.map((ln) => (
                    <p>
                      {" "}
                      {" - "} {ln.name}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => setFlag(!flag)}
                  type="button"
                  className="cancel btn btn-danger"
                >
                  Cancel
                </button>
              </div>
            </form>
          </section>
        </section>
      )}
    </>
  );
};

export default ProductList;
