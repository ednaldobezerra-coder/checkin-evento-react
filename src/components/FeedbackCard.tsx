import { Card, CardBody, Badge } from "reactstrap";

export type CheckInItem = {
  id: string;
  name: string;
  email: string;
  eventType: string;
  message?: string;
  createdAt: string; // ISO
};

function labelForEventType(value: string) {
  const map: Record<string, string> = {
    culto: "Culto",
    reuniao: "Reunião",
    palestra: "Palestra",
    workshop: "Workshop",
    congresso: "Congresso",
  };
  return map[value] ?? value;
}

export function FeedbackCard({ item }: { item: CheckInItem }) {
  return (
    <Card className="mt-3">
      <CardBody>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <h5 style={{ margin: 0 }}>{item.name}</h5>
          <Badge color="info">{labelForEventType(item.eventType)}</Badge>
          <span className="text-muted" style={{ fontSize: ".9rem" }}>
            {new Date(item.createdAt).toLocaleString()}
          </span>
        </div>

        <div className="text-muted" style={{ marginTop: 8 }}>
          {item.email}
        </div>

        {item.message?.trim() ? (
          <div style={{ marginTop: 10 }}>{item.message}</div>
        ) : null}
      </CardBody>
    </Card>
  );
}