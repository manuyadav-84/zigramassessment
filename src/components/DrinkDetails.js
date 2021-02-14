function DrinkDetails (props)   {
    let {id, drink, img} = props.recipe
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                 <h3 className="card-header">{drink}</h3>

                 <img className="card-img-top" src={img} alt={`Imagen de ${drink}`} />

                 <div className="card-body">
                     <button type="button" className="btn btn-block btn-danger">
                         See Recipe
                     </button>
                 </div>
            </div>
        </div>
     );
}
 
export default DrinkDetails;