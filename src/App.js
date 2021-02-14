import React, { useEffect, useState }from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import UseCategory from './hooks/useCategory' 
import UserRecipes from './hooks/useRecipes'

function App() {

  const  [useSearch, saveSearch ] = useState({name: '', category: 'Cocktail'})

  const onSubmit = e => {
    saveSearch({
        ...useSearch,
        [e.target.name] : e.target.value
    })
  }

  return (
    <div className="App">
      <Header />
      <form className="col-12" >
        <fieldset className="text-center" style={{marginTop:10}}>
            <legend>Search drinks by Category or Ingredient</legend>
        </fieldset>

        <div className="row mt-4">
            <div className="input-group mb-3 " style={{margin: "0 3rem"}}>
              <input onChange={onSubmit} name="name" className="form-control"  type="text" placeholder="Search by Ingredient"/>
              <UseCategory onChange={onSubmit} className="form-control" name="category" />
              <div className="input-group-append">
                <button type="button" className="btn btn-block btn-danger" >Search</button>
              </div>
            </div>
        </div>
      </form>
      <UserRecipes ingredient={useSearch.name}  category={useSearch.category} />
      <Footer/>
    </div>
  );
}

export default App;