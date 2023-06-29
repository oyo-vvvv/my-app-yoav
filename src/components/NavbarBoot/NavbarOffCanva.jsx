import React from "react";
import "./NavbarOffCanva.css"
import { Link } from "react-router-dom"

const NavbarOffCanva = () => {
  return (
    <div>

<div className="sec-center lazy">
          <input
            class="dropdown-sub"
            type="checkbox"
            id="dropdown-sub"
            name="dropdown"
          />
          <label class="for-dropdown-sub" for="dropdown-sub">
            Are you lazy ?<i class="uil uil-plus"></i>
          </label>
          <div class="section-dropdown-sub">
            <Link className='a' to="/portfolio">
             Home<i class="uil uil-arrow-right"></i>
            </Link>
          </div>
        </div>
      <div id="navCanMain">
        
        <div className="sec-center">
          <input
            class="dropdown"
            type="checkbox"
            id="dropdown-1"
            name="dropdown"
          />
          <label class="for-dropdown" for="dropdown-1">
            UseState<i class="uil uil-arrow-down"></i>
          </label>
          <div class="section-dropdown">
            <Link className='a'to="/PresUseState">
              Hooks<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/usfObject">
              Object<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/UseStateToogle">
              Boolean<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/UseStateList">
              {" "}
              Array List<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/UseStateNumber">
              Number<i class="uil uil-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="sec-center">
          <input
            class="dropdown"
            type="checkbox"
            id="dropdown-2"
            name="dropdown"
          />
          <label class="for-dropdown" for="dropdown-2">
            UseEffect<i class="uil uil-arrow-down"></i>
          </label>
          <div class="section-dropdown">
            <Link className='a'to="/PresUseEffect">
              resentation UseEffect<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/UefVide">
              UseEffect []<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/useEffectDependance">
              UseEffect [Avec Dependance]<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/UseEffectReturn">
              UseEffect Avec Nettoyage ( Return )
              <i class="uil uil-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="sec-center">
          <input
            class="dropdown"
            type="checkbox"
            id="dropdown-3"
            name="dropdown"
          />
          <label class="for-dropdown" for="dropdown-3">
            API<i class="uil uil-arrow-down"></i>
          </label>
          <div class="section-dropdown">
            <Link className='a'to="/AxiosGet">
              Axios get<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/AxiosPost">
              Axios post<i class="uil uil-arrow-right"></i>
            </Link>
            <hr />
            <Link className='a'to="">
              Recuperer tous les articles<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="">
              Recuperer un article par son ID<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/AddArticle">
              add Article<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/DeleteArticle">
              Delete Article<i class="uil uil-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="sec-center">
          <input
            class="dropdown"
            type="checkbox"
            id="dropdown-4"
            name="dropdown"
          />
          <label class="for-dropdown" for="dropdown-4">
            Router<i class="uil uil-arrow-down"></i>
          </label>
          <div class="section-dropdown">
            <Link className='a'to="/Intro">
              Creer une route<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/*">
              Page 404<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="">
              Route dynamique<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="">
              Link<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="">
              UseLocation<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="">
              UseParams<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="">
              Navigate<i class="uil uil-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="sec-center">
          <input
            class="dropdown"
            type="checkbox"
            id="dropdown-5"
            name="dropdown"
          />
          <label class="for-dropdown" for="dropdown-5">
            DataTable<i class="uil uil-arrow-down"></i>
          </label>
          <div class="section-dropdown">
            <Link className='a'to="/DataTableBasique">
              DataTable Basique<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/DataTableSort">
              DataTableSort<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/DataTableFull">
              DataTable Full<i class="uil uil-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="sec-center">
          <input
            class="dropdown"
            type="checkbox"
            id="dropdown-6"
            name="dropdown"
          />
          <label class="for-dropdown" for="dropdown-6">
            Hooks Avancé<i class="uil uil-arrow-down"></i>
          </label>
          <div class="section-dropdown">
            <Link className='a'to="/DataTableFull">
              UseReducer<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/DataTableFull">
              UseMemo<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/DataTableFull">
              UseCallback<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/DataTableFull">
              useMemo vs useCB<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/PresUseRef">
              UseRef<i class="uil uil-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="sec-center">
          <input
            class="dropdown"
            type="checkbox"
            id="dropdown-7"
            name="dropdown"
          />
          <label class="for-dropdown" for="dropdown-7">
            Redux<i class="uil uil-arrow-down"></i>
          </label>
          <div class="section-dropdown">
            <Link className='a'to="/DataTableFull">
              Environnement<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/DataTableFull">
              UseSelector<i class="uil uil-arrow-right"></i>
            </Link>
            <Link className='a'to="/DataTableFull">
              UseDispatch<i class="uil uil-arrow-right"></i>
            </Link>
          </div>
        </div>
        <div className="sec-center">
          <input
            class="dropdown"
            type="checkbox"
            id="dropdown-8"
            name="dropdown"
          />
          <label class="for-dropdown" for="dropdown-8">
            Form<i class="uil uil-arrow-down"></i>
          </label>
          <div class="section-dropdown">
            <Link className='a'to="/HKbase">
              React-Hook-Form base<i class="uil uil-arrow-right"></i>
            </Link>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default NavbarOffCanva;
