import React from "react";

class PageNotFound extends React.Component{
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h1 style={{fontSize:60}}>Oops!</h1>
                            <p><b>404 - PAGE NOT FOUND</b></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PageNotFound
