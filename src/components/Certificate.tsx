import { useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import { Button } from "./ui/button";
import { toast } from "sonner";

interface CertificateProps {
  name: string;
}

export const Certificate = ({ name }: CertificateProps) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const saveCertificate = async () => {
    if (!certificateRef.current) return;

    try {
      const canvas = await html2canvas(certificateRef.current);
      const link = document.createElement("a");
      link.download = `certificate-${name}.png`;
      link.href = canvas.toDataURL();
      link.click();
      toast.success("認定証を保存しました！");
    } catch (error) {
      toast.error("保存中にエラーが発生しました。");
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div
        ref={certificateRef}
        className="certificate-container p-8 rounded-lg border border-primary/20 shadow-lg max-w-2xl mx-auto space-y-6"
      >
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-playfair font-bold">認定証</h2>
          <p className="font-cormorant text-xl">
            ここに、{name}殿が
            <br />
            AI基礎講座を修了し
            <br />
            効率化思考を身につけたことを
            <br />
            ここに証します
          </p>
          <div className="pt-8 space-y-2">
            <p className="font-cormorant text-lg">2025年1月22日</p>
            <p className="font-playfair text-xl">AI木曜会</p>
            <p className="font-cormorant italic text-xl">usutaku</p>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            ※この認定証はAIで作られました
          </p>
        </div>
      </div>
      <Button
        onClick={saveCertificate}
        className="w-full py-6 text-lg font-inter transition-all duration-300 hover:scale-[1.02]"
      >
        認定証を保存する
      </Button>
    </div>
  );
};