function Footer() {
    return (
        <footer className=" bottom-0 left-0 right-0 bg-blue-900 text-white pt-6">
            <div className="container mx-auto">
                <div className="flex flex-col space-y-2">
                    <h3 className="text-lg font-semibold">GeoSpain</h3>
                    <p className="text-sm">© 2025</p>
                    <p className="text-sm">Creado por Erik Manuel Saldaña Diaz</p>
                    <a href="#" className="hover:text-blue-300 transition-colors">
                        Repositorio GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;