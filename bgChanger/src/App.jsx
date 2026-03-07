import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("blue");

  const colors = [
    { name: "blue", bg: "bg-blue-600" },
    { name: "green", bg: "bg-green-600" },
    { name: "purple", bg: "bg-purple-600" },
    { name: "red", bg: "bg-red-600" },
    { name: "orange", bg: "bg-orange-600" },
    { name: "black", bg: "bg-black" },
  ];

  const selectedColor = colors.find((c) => c.name === color);

  return (
    <div
      className={`h-screen w-screen ${selectedColor.bg} flex flex-col items-center justify-center transition-colors duration-500`}
    >
      <h1 className="text-white text-4xl font-bold mb-8">
        Background Color Changer
      </h1>

      <div className="flex gap-4 flex-wrap justify-center">
        {colors.map((c) => (
          <button
            key={c.name}
            onClick={() => setColor(c.name)}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300
              ${
                color === c.name
                  ? `${c.bg} text-white scale-110 shadow-xl`
                  : "bg-white text-black hover:scale-105"
              }`}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}