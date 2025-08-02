import errorImage from '../../assets/404.svg';
import "./notFound.css";
import { useNavigate } from 'react-router-dom';
function PageNotFound(){
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/",{replace:true});
    }

    return(
        <main className="h-100 d-flex place-content-center">
            <section className="w-100 w-max-1000 d-flex justify-space-between align-items-center gap-2">
                <div>
                    <h1 className="text-primary fs-7 uppercase mb-5">nomad</h1>
                    <h2 className="fs-8 font-weight-500">Page not found</h2>
                    <p className="fs-5 mtb-1 text-secondary">Unfortunately, the page you are looking for does not exist.</p>
                    <button onClick={handleButtonClick} className="fs-4 font-weight-500 ptb-025 plr-1 rounded-025 bg-green mt-1" type="button">Go to home page</button>
                </div>
                <img className="w-50 starting-animation" src={errorImage} alt="not found" />
            </section>
        </main>
    );
}
export default PageNotFound;