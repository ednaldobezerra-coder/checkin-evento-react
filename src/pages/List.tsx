import { useEffect, useState } from "react";
import { Card, CardBody, Button, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FeedbackCard } from "../components/FeedbackCard";
import type { CheckInItem } from "../components/FeedbackCard";

const STORAGE_KEY = "checkin_items_v1";

function loadItems(): CheckInItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function List() {
  const nav = useNavigate();
  const [items, setItems] = useState<CheckInItem[]>([]);

  // ciclo de vida: carrega lista no mount
  useEffect(() => {
    setItems(loadItems());
  }, []);

  function clearAll() {
    localStorage.removeItem(STORAGE_KEY);
    setItems([]);
  }

  return (
    <>
      <Card className="mt-2">
        <CardBody>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
            <div>
              <h4 style={{ margin: 0 }}>Lista de check-ins</h4>
              <div className="text-muted" style={{ marginTop: 6 }}>
                Renderização condicional + cards. Persistência via localStorage.
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Button color="primary" onClick={() => nav("/checkin")}>
                Novo check-in
              </Button>
              <Button outline color="danger" onClick={clearAll} disabled={items.length === 0}>
                Limpar
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>

      {items.length === 0 ? (
        <Alert color="info" className="mt-3">
          Nenhum check-in ainda. Clique em “Novo check-in”.
        </Alert>
      ) : (
        items.map((it) => <FeedbackCard key={it.id} item={it} />)
      )}
    </>
  );
}