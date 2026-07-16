function Input({
  
    label,

    type,

    placeholder,

    value,

    onChange

}) {

    return(

        <div className="mb-4">

        <label className="black mb-2 font-medium">

        {label}

        </label>

        <input type={type}
        
        placeholder={placeholder}

        value={value}

        onChange={onChange}

        className="w-full border rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"

        />

        

        </div>
    );

}

export default Input;