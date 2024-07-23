function Footer() {
  return (
    <footer className="footer absolute bottom-0 w-full p-3 flex justify-center items-center bg-[#232323]">
      <hr />
      <p className="text-center text-white font-bold">Copiryght &copy; {new Date().getFullYear()} - Todo List App</p>
    </footer>
  );
}

export default Footer;

