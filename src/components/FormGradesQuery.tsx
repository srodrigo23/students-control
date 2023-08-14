import { useForm, SubmitHandler } from "react-hook-form";
import { api } from "~/utils/api";


type Inputs = {
    name: string,
    lastname: string,
    codsis: number,
    ci : number,
    // exampleRequired: string,
};

const FormGradesQuery = ()=>{

    const { data: userData }  = api.user.getAll.useQuery();
    

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);

    const classRed = "text-red-400"

    if (!userData) return <p>Loading...</p>;
    {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
    return(
        <div className="rounded boder-solid border-indigo-600 border-2 m-5 bg-white">
            <>{userData[0]?.email}</>
            <form className="p-5" 
            // onSubmit={handleSubmit(onSubmit)}
            >
                <a>Nombres :</a>
                <input className="rounded border-solid border-2"
                    defaultValue="" {...register("name", { required: true })} />
                {/* include validation with required or other standard HTML validation rules */}
                { errors.name && <span className={classRed}>Los nombres son requeridos</span> }
                <br/>

                <a>Apellidos :</a>
                <input 
                    className="rounded border-solid border-2"
                    defaultValue="" {...register("lastname", { required: true })} />
                { errors.lastname && <span className={classRed}>Los apellidos son requeridos</span> }
                <br/>

                <a>Codigo Sis:</a>
                <input
                    type="password"
                    className="rounded border-solid border-2"
                    defaultValue="" {...register("codsis", { required: true })} />
                { errors.codsis && <span className={classRed}>El codigo sis es requerido</span> }
                <br/>
                <a>Ci :</a>
                <input 
                    className="rounded border-solid border-2"
                    defaultValue="" {...register("ci", { required: true })} />
                { errors.ci && <span className={classRed}>El CI es requerido</span> }
                <br/>
                <button
                    className="flex-1 bg-indigo-500 border-white border-solid rounded-md text-white mt-5 pt-2 pb-2 pl-4 pr-4"
                    type="submit">
                        Consultar Notas
                </button>
            </form>
        </div>)
}
export default FormGradesQuery;