import { Certificate } from "@/components/Certificate";
import { useParams } from "react-router-dom";

const CertificatePage = () => {
  const { name } = useParams();
  
  if (!name) return null;

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-3xl">
        <Certificate name={decodeURIComponent(name)} />
      </div>
    </div>
  );
};

export default CertificatePage;