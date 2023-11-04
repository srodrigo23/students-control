import { useForm, SubmitHandler } from "react-hook-form";


type Inputs = {
    name: string,
    lastname: string,
    codsis: number,
    ci : number,
    // exampleRequired: string,
  };

const FormAddStudent = ()=>{

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    return(
        <>
            {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
            <div className="rounded boder-solid border-2 bg-white w-2/6">
                
                <form className="grid grid-cols-1 p-7"
                    // onSubmit={handleSubmit(onSubmit)}
                >                
                    <a className="col-span-1">Nombres :</a>
                    <input 
                        className="col-span-1 rounded border-solid border-2"
                        defaultValue="" {...register("name", { required: true })} />
                    { errors.name && <span>This field is required</span> }
                    {/* include validation with required or other standard HTML validation rules */}
                    <br/>
                    <a className="col-span-1">Apellidos :</a>
                    <input 
                        className="col-span-1 rounded border-solid border-2"
                        defaultValue="" {...register("lastname", { required: true })} />
                    { errors.name && <span>This field is required</span> }
                    <br/>
                    
                    <a className="col-span-1">Cod. SIS :</a>
                    <input 
                        className="rounded border-solid border-2"
                        defaultValue="" {...register("codsis")} />
                    <br/>
                    <a className="col-span-1">Ci :</a>
                    <input 
                        className="rounded border-solid border-2"
                        defaultValue="" {...register("ci")} />
                    <br/>

                    <button
                        className="bg-indigo-500 border-white border-solid rounded-md text-white mt-5 pt-2 pb-2 pl-4 pr-4"
                        type="submit">
                            Crear
                    </button>
                
                </form>
            </div>
        </>
    )
}

export default FormAddStudent;