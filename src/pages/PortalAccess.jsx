import { Login, ForgotPassword, ResetPassword, RequestAccess } from "../components";
import blogManagerImg from "../assets/blog-manager.png";
import { useState } from "react";
import { MdVpnKey, MdOutlinePassword, MdLockReset, MdOutlineSupervisedUserCircle } from "react-icons/md";
import { CiLock } from "react-icons/ci";

const pages = {
    login: {
        component: Login,
        icon: CiLock,
        h2: {normal: "Welcome",highlight: "back"},
        p: {firstline: "Please login to manage all",secondline: "your blogs"}
    },
    "forgot-password": {
        component: ForgotPassword,
        icon: MdVpnKey,
        h2: {normal: "Reset",highlight: "Password"},
        p: {firstline: "Enter your registered email", secondline: "to reset your password"}
    },
    "reset-password": {
        component: ResetPassword,
        icon: MdLockReset,
        h2: {normal: "Reset", highlight: "Password"},
        p: {firstline: "Please enter strong password",secondline: "to ensure security"}
    },
    "request-access": {
        component: RequestAccess,
        icon: MdOutlineSupervisedUserCircle,
        h2: {normal: "Get", highlight: "Started"},
        p: {firstline: "Let's start your",secondline: "journey"}
    }
};

function PortalAccess(){
    const [currentPage,setCurrentPage] = useState('login');

    const handleCurrentPageNavigation = (e) => {
        e.preventDefault();
        const target = e.target.getAttribute('data-target-page');
        setCurrentPage(target);
    }

    const CurrentPage = pages[currentPage];

    return(
        <>
            <div className="primary fs-xl border-sm-green rounded-lg d-flex w-fit mx-auto pd-sm bg-l-green center">
                <CurrentPage.icon/>
            </div>
            <h2 className="fs-xl bold-md my-sm center">{CurrentPage.h2.normal} <span className="italic primary">{CurrentPage.h2.highlight}!</span></h2>
            <p className="fs-md lh-sm secondary center">{CurrentPage.p.firstline}<br/> {CurrentPage.p.secondline}.</p>

            <CurrentPage.component handleCurrentPageNavigation={handleCurrentPageNavigation}/>

            <figure className="rounded-md no-overflow d-flex flex-col items-center relative">
                <img className="w-full middle" src={blogManagerImg} alt="blog-manager.png" />
                <figcaption className="lh-sm bg-tile-blue-tr border-sm-gray rounded-md pd-lg absolute bottom-1 w-90">
                    <p className="fs-md center">Create. Manage. Grow</p>
                    <p className="fs-sm secondary after-center-line center">Your content journey starts here.</p>
                </figcaption>
            </figure>
        </>
    );
}

export default PortalAccess;