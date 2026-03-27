export default function Input ({ label, invalid, ...props}) {
  let labelClasses = "block mb-2 font-xs font-bold tracking-wide uppercase";
  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    labelClasses += " text-red-600";
    inputClasses += " bg-red-200 text-red-700";
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " bg-stone-300 text-gray-700";
  }

    return <p>
        <label className={labelClasses}>{ label }</label>
        <input {...props} className={inputClasses}/>
    </p>
};