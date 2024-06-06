import { Link } from "react-router-dom";
import { useState } from "react"

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


import { useNavigate } from "react-router-dom";

import { login } from "./services/auth.service";
import { IResponse } from "./types/http.type";

function Login() {
    const navigate = useNavigate()
    const [response, setResponse] = useState<IResponse>({
        statusCode: 0,
        message: "",
        errorMessage: null,
        data: null,
    });

    const initialValues: {
        username: string;
        password: string;
      } = {
        username: "",
        password: "",
      };
    
      const validationSchema = Yup.object().shape({
        username: Yup.string().required("This field is required!"),
        password: Yup.string().required("This field is required!"),
      });
    
      const handleLogin = (formValue: { username: string; password: string }) => {
        const { username, password } = formValue;
        login({username, password}).then(
          () => {
            navigate("/");
          },
          (error) => {
            const res: IResponse = error.response.data
            setResponse(res)
          }
        );
      };
    
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
                        {response.statusCode !== 0 &&
                            <div className="mb-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex justify-between relative" role="alert">
                                <div>
                                    <strong className="font-bold">Error!&nbsp;</strong>
                                    <span className="block sm:inline">{response.errorMessage}</span>
                                </div>
                                <div className="font-bold cursor-pointer" onClick={() => setResponse({
                                    ...response,
                                    statusCode: 0
                                })}>x</div>
                            </div>
                        }
                        <Formik
                            initialValues={initialValues}
                            validationSchema={validationSchema}
                            onSubmit={handleLogin}
                        >
                            <Form className="space-y-6" >
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <Field
                                            id="username"
                                            name="username"
                                            type="text"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <ErrorMessage
                                        name="username"
                                        component="div"
                                        className="text-red-600 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="mt-2">
                                        <Field
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="text-red-600 text-sm mt-1"
                                    />
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-red-600 px-3 p-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Didn't have account?{' '}
                        <Link to={"/register"} className="font-semibold leading-6 text-red-600 hover:text-red-500">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login;