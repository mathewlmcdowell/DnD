export default function Stats() {

    return(
        <>
        <div className="container mt-5">
        <div className="row">

            <div className="col-6 p-2">
                <div className="card text-white bg-dark text-center justify-content-center align-items-start border border-dark-subtle" style={{ width: '11rem', height: '30rem'}}>
                    
                    <div className="card-header border-bottom border-dark-subtle row" style={{ height: '2rem'}}>      
                        <div className="col" style={{width: '5rem'}}>
                            <p>Stats</p>
                        </div>
                    </div>
                    <div className="card-body row">
                        <div className="col">
                            <div className="row">
                                <div className="col" style={{width: '9rem'}}>
                                    <p>Strength</p>
                                </div>
                                <div className="col" style={{width: '2rem'}}>
                                    <p>10</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" style={{width: '9rem'}}>
                                    <p>Dexterity</p>
                                </div>
                                <div className="col" style={{width: '2rem'}}>
                                    <p>18</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" style={{width: '9rem'}}>
                                    <p>Constitution</p>
                                </div>
                                <div className="col" style={{width: '2rem'}}>
                                    <p>18</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" style={{width: '9rem'}}>
                                    <p>Intelligence</p>
                                </div>
                                <div className="col" style={{width: '2rem'}}>
                                    <p>9</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" style={{width: '9rem'}}>
                                    <p>Wisdom</p>
                                </div>
                                <div className="col" style={{width: '2rem'}}>
                                    <p>20</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" style={{width: '9rem'}}>
                                    <p>Charisma</p>
                                </div>
                                <div className="col" style={{width: '2rem'}}>
                                    <p>12</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-3 p-2">
                <div className="card text-white bg-dark text-center justify-content-center align-items-start border border-dark-subtle" style={{ width: '4rem', height: '30rem'}}>
                    
                    <div className="card-header border-bottom border-dark-subtle row" style={{ height: '2rem'}}>      
                        <div className="col ps-0" style={{width: '4rem'}}>
                            <p>Mod</p>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <p>+ 0</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>+ 4</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>+ 4</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>- 1</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>+ 5</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <p>+ 1</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        </div>
        </>
    )
}