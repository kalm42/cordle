import React, { useState } from "react";

function App() {
  const [choice, setChoice] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChoice(e.target.value);
  };

  const answer = "#F40009";

  const red = choice.length > 0 ? parseInt(choice.substring(1, 3), 16) : 0;
  const green = choice.length > 3 ? parseInt(choice.substring(3, 5), 16) : 0;
  const blue = choice.length > 5 ? parseInt(choice.substring(5, 7), 16) : 0;

  const aRed = parseInt(answer.substring(1, 3), 16);
  const aGreen = parseInt(answer.substring(3, 5), 16);
  const aBlue = parseInt(answer.substring(5, 7), 16);

  const delta =
    Math.abs(red - aRed) + Math.abs(green - aGreen) + Math.abs(blue - aBlue);

  return (
    <main className="mx-auto w-max">
      <h1 className="text-5xl font-bold pb-5">What color is Cocoa Cola Red?</h1>
      {choice.length < 1 && (
        <label htmlFor="choice">
          Pick a color <br />
          <input
            type="color"
            name="choice"
            onChange={handleChange}
            className="block"
          />
        </label>
      )}
      {choice.length > 0 && <p>You were {delta} off.</p>}
    </main>
  );
}

export default App;
