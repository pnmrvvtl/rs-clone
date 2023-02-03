import {useContext} from "react";
import {UserContext} from "../../context/user-context";

export default function ResultsPage() {
    const {userData} = useContext(UserContext);

    return (
        <div>
            {JSON.stringify(userData)}
        </div>
    )
}