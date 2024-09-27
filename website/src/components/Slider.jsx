const Slider = ({ children }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-75 z-20 transition-transform duration-300 ${
        isOpen ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      {children}
    </div>
  )
}
export default Slider
