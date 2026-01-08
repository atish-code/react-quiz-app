function ResultScreen({ score, total, bestScore, onRestart }) {
  return (
    <div className="min-h-screen bg-[#FBF6EA] flex items-center justify-center px-6">
      
      {/* RESULT CARD */}
      <div className="w-full max-w-3xl border-2 border-gray-400/70 rounded-[40px] px-12 py-14 text-center">
        
        {/* QUOTE */}
        <p className="text-purple-600 text-lg mb-6 font-medium">
          “You didn’t guess — you knew.”
        </p>

        {/* TITLE */}
        <h1 className="text-5xl font-serif mb-10">
          Quiz session finished.
        </h1>

        {/* SCORES */}
        <div className="flex justify-center gap-8 mb-10">
          
          <div className="px-8 py-3 border-2 border-[#DFFA15] rounded-full text-lg">
            Your Score-{String(score).padStart(2, "0")}
          </div>

          <div className="px-8 py-3 border-2 border-[#DFFA15] rounded-full text-lg">
            Best Score-{String(bestScore).padStart(2, "0")}
          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-[2px] bg-gray-300 mb-10" />

        {/* RESTART BUTTON */}
        <button
          onClick={onRestart}
          className="block mx-auto bg-[#3229D0] text-white px-10 py-3 rounded-full text-lg font-medium hover:opacity-90 transition"
        >
          Restart Quiz
        </button>


      </div>
    </div>
  );
}

export default ResultScreen;
