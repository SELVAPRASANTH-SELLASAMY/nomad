import pageNotFound from "../assets/not-found.webp";
import { MdOutlineHome } from "react-icons/md";
function NotFound(){
    return(
        <>
            <section className="center lh-lg">
                <img 
                    src={pageNotFound} 
                    className="w-full"
                    alt="page not found"
                />

                <h2 className="fs-xxl bold-md primary">404</h2>

                <h3 className="fs-2lg capitalize bold-normal">Page not found</h3>

                <p className="fs-sm secondary lh-sm">Looks like you've taken a wrong turn.<br/>The page you're looking for doesn't exist.</p>

                <button type="button" className="bg-green rounded-md py-2md d-flex items-center justify-center gap-md w-200 mx-auto my-lg">
                    <span className="fs-lg d-inline-flex">
                        <MdOutlineHome/>
                    </span>
                    <span style={{fontWeight: "800"}} className="fs-sm">Go Home</span>
                </button>
            </section>
        </>
    );
}

export default NotFound;