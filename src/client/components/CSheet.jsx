import "bootstrap/dist/css/bootstrap.min.css";

export default function CSheet() {

    return(
        <>
        	<div className="position-relative">
                <div className="card text-white bg-dark text-center align-items-start">
                    <div className="container row row-gap-2">
                        <div className="row gap-0 column-gap-3 row-gap-2">
                            <div className="col-2 p-2 border border-dark-subtle">
                                <div className="box">Maybe</div>
                                </div>
                            <div className="col-2 p-2 border border-dark-subtle">
                                <div className="box">Maybe2</div>
                            </div>
                            <div className="col-2 p-2 border border-dark-subtle">
                                <div className="box">Maybe3</div>
                            </div>
                        </div>
                        <div className="row gap-0 column-gap-3 row-gap-2">
                            <div className="col-2 p-2 border border-dark-subtle">
                                <div className="box">Help</div>
                            </div>
                            <div className="col-2 p-2 border border-dark-subtle">
                                <div className="box">Help2</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}