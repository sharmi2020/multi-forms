 

const  AddressForm=()=> {
    return (
        <>
            <label>Street</label>
            <input autoFocus required type="text" />
            <label>City</label>
            <input title="text" required type="text" />
            <label>State</label>
            <input title="number " required min={1} type="number" />
            <label>Zip</label>
            <input title="number" required type="text" />
        </>
    )
}

export default AddressForm