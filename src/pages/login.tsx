import Image from "next/image";
import IconLogin from "~/components/icons/IconLogin";


const Login = () => {

    return(
        <div
            // className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10"
            className="flex items-center justify-center h-screen dark:bg-gray-800">
            <div 
                // className="flex items-center justify-center h-screen dark:bg-gray-800"
                className="w-full md:w-3/6 sm:w-2/6 m-3 rounded-xl bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-900">Sign in</h1>
                    {/* <p className="mt-2 text-gray-500">Sign in below to access your account</p> */}
                </div>
                <div className="mt-5">
                    <form action="">
                        <div className="relative mt-6">
                            <input type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" 
                            // autocomplete="NA" 
                            />
                            <label 
                                // for="email" 
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                        </div>
                        <div className="relative mt-6">
                            <input type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                            <label 
                                // for="password" 
                                className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                        </div>
                        <div className="my-6">
                            
                            <button type="submit" className=" flex items-center justify-center border border-slate-200 dark:border-slate-700 py-2  rounded-lg  text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 w-full bg-cyan-200">
                                <IconLogin className="mr-4"/>
                                <span>Log In</span></button>
                        </div>
                        <div>
                            <button className="px-4 py-2 border flex items-center justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150 w-full">
                                {/* <img className="w-6 h-6" src="https://www.svgrepo.com/show/475656/google-color.svg" loading="lazy" alt="google logo"/> */}
                                <Image
                                    className="w-6 h-6"
                                    src={"https://www.svgrepo.com/show/475656/google-color.svg"}
                                    alt="google logo"
                                    width={6}
                                    height={6}
                                    loading="lazy"
                                />
                                <span>Login with Google</span>
                            </button>
                        </div>
                        {/* <p className="text-center text-sm text-gray-500">Don&#x27;t have an account yet?
                            <a href="#!"
                                className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none">Sign
                                up
                            </a>.
                        </p> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;