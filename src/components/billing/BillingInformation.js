export default function BillingInformation () {

    function handleClick() {
        console.log('Button works');
      }
    return(
        <div className="ml-96 w-9/12 ">
            <h1 className="mt-4 font-serif text-5xl font-bold text-name"> Billing profile details </h1>

            <div className="w-full h-[24rem] border rounded border-borderr"> 
                <h2 className="mt-8 ml-12 text-2xl font-bold text-name"> Billing Information </h2>
                <div className=" ml-12 w-11/12 border-border border-t"> </div>

                <h2 className="mt-8 ml-12 text-base font-bold text-name"> Credit Card </h2>
                <h2 className="mt-8 ml-12 text-base font-bold text-name"> Name </h2>
                <h2 className="mt-8 ml-12 text-base font-bold text-name"> Address </h2>
                <h2 className="mt-8 ml-12 text-base font-bold text-name"> Next billing </h2>

                <button onClick={handleClick} className="mt-6 ml-12 bg-name text-white font-bold py-2 px-6 rounded">Change Credit card</button>
                <button onClick={handleClick} className="mt-6 ml-6 bg-name text-white font-bold py-2 px-6 rounded">Edit billing information</button>
            </div>

            <div className="mt-10 w-full h-[10rem] border rounded border-border"> 
                <h2 className="mt-8 ml-12 text-2xl font-bold text-name"> Project on this profile </h2>
                    <table className="table-auto">
                        <thead>
                            <tr>
                            <th>Project</th>
                            <th>Product</th>
                            <th>Last Update</th>
                            </tr>
                        </thead>
                            <tbody>
                                <tr>
                                <td>Lexir</td>
                                <td>Lexir</td>
                                <td>Lexir</td>
                                </tr>
                            </tbody>
                        </table>
            </div>

            <div className="mt-10 w-full h-[15rem] border rounded border-border"> 
            
            
            </div>

        </div>
    );
}