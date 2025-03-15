"use client";
import { store } from "@/redux/store";
import { Provider } from "react-redux";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <html lang="fr">
        <body>{children}</body>
      </html>
    </Provider>
  );
}


