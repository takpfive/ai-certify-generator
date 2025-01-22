import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useNavigate } from "react-router-dom";

export const NameInput = () => {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      navigate(`/certificate/${encodeURIComponent(name)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h1 className="text-4xl font-playfair font-bold text-center">
          AI基礎講座 認定証
        </h1>
        <p className="text-center text-muted-foreground font-inter">
          あなたの名前を入力してください
        </p>
      </div>
      <div className="space-y-4">
        <Input
          type="text"
          placeholder="名前を入力"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="text-lg py-6 font-inter text-center"
          required
        />
        <Button
          type="submit"
          className="w-full py-6 text-lg font-inter transition-all duration-300 hover:scale-[1.02]"
          disabled={!name.trim()}
        >
          効率化思考を身につけた！
        </Button>
      </div>
    </form>
  );
};