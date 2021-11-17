
import { useEffect, useState } from 'react';
import ApplicationCard from './ApplicationCard';
import ApplicationAdd from './ApplicationAdd';

function ApplicationsContainer() {
    const [applications, setApplications] = useState([]);
    const [wasClicked, setWasClicked] = useState(false)
    const [rerender, setRerender] = useState(false)
   
    useEffect(() => {
        fetch("http://localhost:9292/applications")
        .then((resp) => resp.json())
        .then(setApplications)
    }, [rerender])

    function handleClick() {
        setWasClicked(current => !current)
    }

    const appCards = applications.map((app) => <ApplicationCard key={app.id} app={app} setRerender={setRerender} setApplications={setApplications}/>);
    return (
        <>
        <h1>Applications</h1>
        {wasClicked?<ApplicationAdd setWasClicked={setWasClicked} setApplications={setApplications} />:null}
        <button onClick={handleClick}>Submit an Application</button>
        {appCards}

        </>
    )
}


export default ApplicationsContainer;

