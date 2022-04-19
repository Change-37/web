function Page() {
    return (
        <div> 
            <Header />
            <MainCon />
            <Footer />
        </div>
    )
}
function Header() {
    return (
        <header>
            <nav>
                <img src="./sky.jpeg" />
            </nav>
        </header>
    )
}
function MainCon() {
    return (
        <div>
            <h1>Hi</h1>
            <ol>
                <li>aa</li>
                <li>bb</li>
                <li>cc</li>
            </ol>
        </div>
    )
}
function Footer() {  
    return (
        <footer>
            <small>1234</small>
        </footer>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"));