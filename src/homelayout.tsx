import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

function homeLayout() {
    return (
        <>
        <Header />

        <main>
            <Body />
        </main>

        <Footer />
        </>
    )
}

export default homeLayout;