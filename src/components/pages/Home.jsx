import "./Home.css";

function Home() {
  return (
    <>

    <div className="container">
                <header className="my-4">
                    <h1 className="text-center">Bienvenido a El Obrador</h1>
                    <p className="text-center">
                        Tu destino para delicias libres de gluten. Descubre nuestra pasión por la cocina y disfruta de una experiencia culinaria sin igual.
                    </p>
                </header>
                <div className="row">
                    <div className="col-md-4">
                        <img src="/img/alfajores_choco_p-min.webp" className="img-thumbnail custom-img" alt="Imagen 1" />
                    </div>
                    <div className="col-md-4">
                        <img src="/img/pastafrola_cerca-min.webp" className="img-thumbnail custom-img" alt="Imagen 2" />
                    </div>
                    <div className="col-md-4">
                        <img src="/img/pasta_rellena-min.webp" className="img-thumbnail custom-img " alt="Imagen 3" />
                    </div>
                    
                    <h2 className="text-center p-2"> Si te interesa  </h2>
                </div>

                <div className="row mt-4">
                                                        <div className="col-md-8 offset-md-2">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                </div>
            </div>


    </>
  )
}

export default Home