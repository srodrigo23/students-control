import {type NextPage} from "next"
import FormAddStudent from "~/components/FormAddStudent";


const AddStudent: NextPage = () =>{
    return(
        <> 
            <h1 className="border p-3 m-3">
                Add Students:
            </h1>
           <FormAddStudent
                
           ></FormAddStudent>
        </>
    )

}

export default AddStudent;