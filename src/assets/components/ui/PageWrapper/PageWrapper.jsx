import Header from "../Header/Header";

function PageWrapper({children}) {
    return (
        <>
        <Header/>
        <div className="wrapper" id="top">
            <div className="main">
                {children}
            </div>
        </div>
        </>
      );
}

export default PageWrapper;