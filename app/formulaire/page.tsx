"use client";
import { Form, Input, Button } from "antd";
import { useDispatch } from "react-redux";
import { addCandidate } from "@/redux/candidateSlice";
import { useRouter } from "next/navigation";

export default function CandidateForm() {
  const dispatch = useDispatch();
  const router = useRouter();

  const onFinish = (values: any) => {
    console.log("Données envoyées :", values); // Vérifie si le formulaire capture bien les infos
    dispatch(addCandidate(values)); // Ajoute le candidat dans Redux
    router.push("/candidats"); // Redirige vers la liste des candidats
  };

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: "20px" }}>
      <h2>Formulaire Candidat</h2>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Nom" name="nom" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Soumettre
        </Button>
      </Form>
    </div>
  );
}
