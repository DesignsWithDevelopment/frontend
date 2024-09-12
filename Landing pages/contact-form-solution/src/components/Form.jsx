import FormElement from "./FormElement"

export default function Form(){
    return <div>
        <h2 className=" text-2xl font-semibold ml-4 mt-4">Contact Us</h2>
        <form className="grid grid-cols-12 grid-rows-6 ml-4 mt-4">
            <div className="col-span-3 border">
                <FormElement  title="First Name *"/>
            </div>
            <div className="col-span-3 border">
                <FormElement title="Last Name *" />
            </div>
            <div className="col-span-6 border row-start-2">
                <FormElement title="Email Address *" />
            </div>
            <div className="row-start-3 col-span-3 border">
                <FormElement title="Query Type *" />
            </div>
            <div className="row-start-4 col-span-3 border">
                <FormElement title="Message *"/>
            </div>  
            <div className="row-start-5 col-span-3 border">
                <FormElement title="I consent to being contacted by the team *"/>
            </div>          
            <div className="row-start-6 col-span-3 border">
                <button>Submit</button>
            </div>           
            
        </form>
    </div>
}