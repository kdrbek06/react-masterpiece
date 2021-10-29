import React from "react"

export default function Login() {

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const email = e.target.elements.email?.value;
        const password = e.target.elements.password?.value;

        console.log(email, password);
    };
    return (

        <div className="h-screen flex bg-gray-300">
            <div className="w-full max-w-lg m-auto bg-white rounded-lg border shadow-default py-10 px-16">
                <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
                    Log in to your account 🔐
                </h1>

                <form onSubmit={handleFormSubmit} method="get" >
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            id="email"
                            placeholder="Your Email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="w-full p-2 border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4"
                            id="password"
                            placeholder="Your Password"
                        />
                    </div>

                    <div className="flex justify-center items-center mt-6">
                        <button
                            type="submit"
                            className="bg-green-500 py-2 px-8 text-sm rounded border border-green focus:outline-none focus:border-green-dark"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
