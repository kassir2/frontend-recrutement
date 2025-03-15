"use client";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function CandidateDetails() {
  const { id } = useParams(); // Récupère l'ID dans l'URL

  // Vérifie si l'ID est bien un nombre
  const candidateId = parseInt(id as string, 10);

  const candidat = useSelector((state: RootState) =>
    state.candidats.find((c) => c.id === candidateId)
  );

  if (!candidat) return <p style={{ textAlign: "center", marginTop: 50 }}>⚠️ Candidat non trouvé</p>;

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "20px" }}>
      <h2>Détails du Candidat</h2>
      <p><strong>Nom :</strong> {candidat.nom}</p>
      <p><strong>Email :</strong> {candidat.email}</p>
    </div>
  );
}


