import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Select from "react-select";
import { api } from "~/utils/api";

type Career = {
    codCareer: string
    title: string
}

type Inputs = {
    name: string,
    lastname: string,
    codsis: number,
    ci : number,
    career: string,
};

const FormAddStudent = ()=>{

    const { register, handleSubmit, watch, control, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {console.log(data);}

    const {data} = api.career.getAll.useQuery();

    const country = [
        { label: "Bangladesh", value: "Bangladesh" },
        { label: "India", value: "India" },
        { label: "China", value: "China" },
        { label: "Finland", value: "Finland" }
    ];
    return(
        <>
            {/* /* "handleSubmit" will validate your inputs before invoking "onSubmit" */ }
            <div className="rounded boder-solid border-2 bg-white md:w-2/6 sm:w-4/6">      
                <form 
                    className="grid grid-cols-1 p-7"
                    onSubmit={handleSubmit(onSubmit)}>
                                        
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
                    
                    <a className="col-span-1">Cod. SISss :</a>
                    <input 
                        className="rounded border-solid border-2"
                        defaultValue="" {...register("codsis")} />
                    <br/>
                    <a className="col-span-1">Ci :</a>
                    <input 
                        className="rounded border-solid border-2"
                        defaultValue="" {...register("ci")} />
                    <br/>

                    <a className="col-span-1">Carrera :</a>
                    <Controller
                        name="career"
                        control={control}
                        rules={{ required: true }}
                        render = {() => (
                            <Select
                                options={country}
                                // value={country.find((c) => c.value === value)}
                                // onChange={(val) => onChange(val.value)}
                                // defaultValue={country.find((c) => c.value === countryValue)}
                            />)}
                    />
                    
                    {/* // <select className="rounded border-solid border-2" name="select">
                    //     <option value="value1">Value 1</option>
                    //     <option value="value2" selected>Value 2</option>
                    //     <option value="value3">Value 3</option>
                    // </select> */}

                    <button
                        className="bg-blue-400 border-white border-solid rounded-md text-white mt-5 pt-2 pb-2 pl-4 pr-4"
                        type="submit">
                        Crear
                    </button>
                
                </form>
            </div>
        </>
    )
}

export default FormAddStudent;