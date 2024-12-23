import { useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"

const Question:React.FC =() => {
    const {id} = useParams()
    const [question,setQuestion] = useState<any | undefined>(undefined)

    useEffect(()=>{
        // wamovigebt idit questions
        setQuestion({
            question:"what is this?",
            answers:[
                {
                    name:"Answer 1"
                }
            ]
        })
    },[id])

    function nextQuestion(){
        if(id === '5'){
            <Navigate to="/result" />
            return;
        }
        const nextId = parseInt(id as string)+1;
            <Navigate to={"/" + nextId} />
        
    }

    return <h1>THIS IS QUESTION: {JSON.stringify(question)} <button onClick={nextQuestion} >Next question</button> </h1>
}
export default Question