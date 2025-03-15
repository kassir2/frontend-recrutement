"use client";
import { Table } from "antd";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function CandidateList() {
  // ✅ Typage du useSelector
  const candidats = useSelector((state: RootState) => state.candidats);

  const columns = [
    { title: "Nom", dataIndex: "nom", key: "nom" },
    { title: "Email", dataIndex: "email", key: "email" },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <Link href={`/candidats/${record.id}`}>Voir détails</Link>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: 600, margin: "auto", padding: "20px" }}>
      <h2>Liste des Candidats</h2>
      <Table dataSource={candidats} columns={columns} rowKey="id" />
    </div>
  );
}


