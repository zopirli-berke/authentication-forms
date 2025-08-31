export default function Button({
  type = "button",

  children,
  ...otherProps
}) {
  return (
    <button
      className="group w-full p-4 mt-6 bg-gradient-to-r from-sky-500 to-sky-400 text-blue-950 rounded-xl font-bold shadow-lg hover:shadow-sky-400/40 overflow-hidden transform hover:-translate-y-.5 hover:scale-105 hover:translate-z-20 transition-all duration-300 cursor-pointer transform-style-3d relative"
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
}
