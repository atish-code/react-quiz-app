function StartScreen({ onStart }) {
  return (
    <div className="relative min-h-screen bg-[#FBF6EA] flex items-center">
      <div className="max-w-7xl mx-auto w-full px-10 flex items-center justify-between">
        
        {/* LEFT TEXT */}
        <h1 className="text-[90px] leading-[1.1] text-black -mt-[150px]">
          Not just a quiz
          <span className="inline-flex items-center ml-3 px-8 py-1 rounded-full bg-[#DFFA15]">
            →
          </span>
          <br />
          <span className="text-[#3229D0]">
            a challenge
          </span>
        </h1>

        {/* RIGHT BUTTON */}
        <button
          onClick={onStart}
          className="bg-[#3229D0] mr-[100px] text-white px-20 py-3 rounded-full text-lg font-medium hover:opacity-90 transition my-[30px]"
        >
          Start Quiz
        </button>

      </div>

      {/* BLUE UNDERLINE — FIXED AT BOTTOM */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[90%] h-2 bg-blue-600 rounded-full"></div>
    </div>
  );
}

export default StartScreen;
