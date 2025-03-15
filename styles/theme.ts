// styles/theme.ts
import { ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {
    colorPrimary: "#1890ff", // Couleur principale (bleu Ant Design par défaut)
    colorError: "#ff4d4f", // Rouge utilisé pour les erreurs ou actions secondaires
    borderRadius: 6, // Arrondi global
    fontSize: 14, // Taille de police standard
  },
  components: {
    Button: {
      colorPrimary: "#1890ff",
      borderRadius: 6,
    },
    Input: {
      borderRadius: 6,
    },
    Card: {
      borderRadius: 8,
    },
  },
};

export default theme ;
    
