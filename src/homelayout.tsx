import Header from "./components/header";
import Body from "./components/body";
import Footer from "./components/footer";

function homeLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="pt-24 w-full grow mb-10 mt-10 grid grid-cols-2 gap-x-8 px-4">
                <Body />
            </main>

            <Footer />
        </div>

    )
}

export default homeLayout;