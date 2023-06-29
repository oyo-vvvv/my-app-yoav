import { Routes, Route } from "react-router-dom";
import "./App.css";
import CV from "./pages/CV/CV";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Article from './pages/Article/Article';
import Blog from "./pages/Blog/Blog";

import Portfolio from "./pages/Portfolio/Portfolio";

import PresUseState from "./pages/UseStatesSection/PresUseState"
import UseStateObject from './pages/UseStatesSection/UseStateObject'
import UseStateToogle from './pages/UseStatesSection/UseStateToogle'
import UseStateList from './pages/UseStatesSection/UseStateList'
import UseStateNumber from './pages/UseStatesSection/UseStateNumber';

import PresUseEffect from "./pages/UseEffectSection/PresUseEffect";
import UefVide from "./pages/UseEffectSection/UefVide";
import UseEffectDependance from "./pages/UseEffectSection/UseEffectDependance";
import UseEffectReturn from "./pages/UseEffectSection/UseEffectReturn";

import DataTableBasique from "./pages/DataTable/DataTableBasique"
import DataTableSort from "./pages/DataTable/DataTableSort"
import DataTableFull from "./pages/DataTable/DataTableFull"

import PresUseRef from "./pages/PresUseRef/PresUseRef"
import AddArticle from "./pages/Article/AddArticle" 
import UpdateArticle from "./pages/Article/UpdateArticle"
import DeleteArticle from "./pages/Article/DeleteArticle"

import AxiosPost from "./pages/ApiSection/AxiosPost"
import AxiosGet from "./pages/ApiSection/AxiosGet"

import HKbase from "./pages/HookForm/HKbase"
import HfSelect from "./pages/HookForm/HfSelect"
import HfBlur from './pages/HookForm/HfBlur';
import FormikExemple from "./pages/HookForm/FormikExemple"

import PageError from './pages/PageError/PageError';





function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/article/:id" element={<Article />} />

        {/* Section UseState */}
        <Route path="/PresUseState" element={<PresUseState />} />
        <Route path="/usfObject" element={<UseStateObject />} />
        <Route path="/UseStateToogle" element={<UseStateToogle />} />
        <Route path="/UseStateList" element={<UseStateList />} />
        <Route path="/UseStateNumber" element={<UseStateNumber />} />


        {/* Section UseEffect */}
        <Route path="/PresUseEffect" element={<PresUseEffect />} />
        <Route path="/UefVide" element={<UefVide />} />
        <Route path="/UseEffectDependance" element={<UseEffectDependance />} />
        <Route path="/UseEffectReturn" element={<UseEffectReturn />} />

        <Route path="/DataTableBasique" element={<DataTableBasique />} />
        <Route path="/DataTableSort" element={<DataTableSort />} />
        <Route path="/DataTableFull" element={<DataTableFull />} />

        <Route path="/PresUseRef" element={<PresUseRef />} />
        <Route path="/AddArticle" element={<AddArticle />} />
        <Route path="/UpdateArticle" element={<UpdateArticle />} />
        <Route path="/DeleteArticle" element={<DeleteArticle />} />
        <Route path="/AxiosPost" element={<AxiosPost />} />
        <Route path="/AxiosGet" element={<AxiosGet />} />

        <Route path="/HKbase" element={<HKbase />} />
        <Route path="/HfSelect" element={<HfSelect />} />
        <Route path="/HfBlur" element={<HfBlur />} />
        <Route path="/FormikExemple" element={<FormikExemple />} />

        

        <Route path="*" element={<PageError />} />


      </Routes>
    </div>
  );
}

export default App;
