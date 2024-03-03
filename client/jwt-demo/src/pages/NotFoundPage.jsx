import error from "../assets/404.svg"

export default function NotFoundPage(){
    return(
        <div className="flex flex-col items-center text-center">
            <h1 className="text-white">It seems that there is nothing to see here</h1>
            <img src={error} alt="404 image" />
        </div>
    );
}