import React from 'react'
import { Link } from 'react-router-dom';

const Signin = () => {
	return (
		<>

			<div className='flex flex-col justify-center items-center h-screen w-screen bg-gray-900'>
				<form action="">

					<section className="flex w-[30rem] flex-col space-y-10">
						<div className="text-center text-4xl font-medium text-white">Log In</div>

						<div
							className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
						>
							<input
								type="email"
								placeholder="Email"
								className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none text-white"
							/>
						</div>

						<div
							className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500"
						>
							<input
								type="password"
								placeholder="Password"
								className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none text-white"
							/>
						</div>

						<button
							className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400"
						>
							SIGN IN
						</button>

						<a
							href="#"
							className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300"
						>FORGOT PASSWORD?</a>

					</section>

				</form>
						<p className="text-center text-lg text-white">
							Don't Have an Account -
							<Link
							to='/login'
								className="font-medium text-indigo-500 underline-offset-4 hover:underline"
							>Signup</Link>
						</p>
			</div>

		</>
	)
}

export { Signin };


