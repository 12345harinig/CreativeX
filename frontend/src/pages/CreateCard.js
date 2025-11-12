import { useState } from "react";

export default function CreateCard() {
  const [selectedProverb, setSelectedProverb] = useState("");
  const [proverbs] = useState([
    "Happiness blooms from within 🌸",
    "Love makes every day beautiful ❤️",
    "Dream big, work hard, stay humble ✨",
  ]);

  return (
    <div className="p-6 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Create Your Card</h2>

      <select 
        className="border p-2 rounded-lg mb-4"
        onChange={(e) => setSelectedProverb(e.target.value)}
      >
        <option>Select a proverb</option>
        {proverbs.map((p, i) => (
          <option key={i}>{p}</option>
        ))}
      </select>

      {selectedProverb && (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <p className="text-lg font-semibold">{selectedProverb}</p>
        </div>
      )}
    </div>
  );
}
