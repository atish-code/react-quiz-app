function Buttons({ current, total }) {
  return (
    <div className="w-[260px] min-h-screen border-r pt-28 flex flex-col items-center">
      
      <p className="mb-12 text-lg">
        Question {current + 1}/{total}
      </p>

      <div>
        {Array.from({ length: total }).map((_, index) => (
          <div key={index} className="button-col-div">
            {index % 2 === 0 && (
              <>
                <button
                  className={`no-button ${
                    current === index ? "active" : ""
                  }`}
                >
                  {index + 1}
                </button>

                {index + 1 < total && (
                  <button
                    className={`no-button ${
                      current === index + 1 ? "active" : ""
                    }`}
                  >
                    {index + 2}
                  </button>
                )}
              </>
            )}
          </div>
        ))}
      </div>

    </div>
  );
}

export default Buttons;
