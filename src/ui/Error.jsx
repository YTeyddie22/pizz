import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
    const navigate = useNavigate();
    //Custom router hook for error handling

    const error = useRouteError();

    return (
        <div>
            <h1>Something went wrong 😢</h1>
            <p>{error.data || error.message}</p>
            <button onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
    );
}

export default Error;
