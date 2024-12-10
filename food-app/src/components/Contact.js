
const Contact = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="m-4 font-bold text-2xl p-4">Contact Page</h1>
            <form className="shadow rounded-md p-4 flex flex-col gap-3 w-1/3" onSubmit={(e)=> e.preventDefault()}>
                <input className="border p-2" type="text" placeholder="name"/>
                <input className="border p-2" type="text" placeholder="message" />
                <button className="border p-2 w-32 bg-slate-200">Submit</button>
            </form>
        </div>
    )
}

export default Contact;