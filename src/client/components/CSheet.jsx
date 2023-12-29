import "bootstrap/dist/css/bootstrap.min.css";
import BasicInfo from "./CharSheet/BasicInfo";
import Stats from "./CharSheet/Stats";

export default function CSheet() {

    return(
        <>
        	<div className="container mt-5">
            {/* <div className="row justify-content-center align-items-center" style={{ height: '50vh' }}> */}
                <div className="card text-white bg-dark text-center align-items-start border border-dark-subtle">
                    <div className="card-header">
                        <h2>Character Sheet</h2>
                    </div>
                    <div className="container row row-gap-2">
                        <div className="row gap-0 column-gap-3 row-gap-2">
                            <div className="col">
                                <BasicInfo />
                            </div>
                            <div className="col">
                                <Stats />
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
            {/* </div> */}
        </>
    )
}