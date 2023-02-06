import React, {useContext, useEffect, useLayoutEffect, useState} from 'react';
import {UserContext} from "../../context/user-context";

export default function ResultsPage() {
    const {userData} = useContext(UserContext);

    useEffect(() => {
        //api calls here

    }, [/*userData*/]);

    return (
        <div> Result Page
            {/*<section style={{width: '200px'}}>*/}
            {/*    {JSON.stringify(userData)}*/}
            {/*</section>*/}
        </div>
    )
}