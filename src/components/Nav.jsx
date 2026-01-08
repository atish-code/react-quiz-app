function Nav({ bestScore }) {
  return (
    <nav className="fixed top-0 w-full bg-[#FBF6EA] shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex h-18 items-center justify-between px-8">
        <p className="text-[#424242] font-semibold">Project-01</p>

        <button className="text-[#424242] font-medium border-4 border-[#DFFA15] rounded-full px-5 cursor-default">
          Best Score: {bestScore}
        </button>
      </div>
    </nav>
  );
}

export default Nav;
