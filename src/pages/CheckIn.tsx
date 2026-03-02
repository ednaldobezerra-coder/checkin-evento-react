import { useEffect, useMemo, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Alert,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { FeedbackCard } from "../components/FeedbackCard";
import type { CheckInItem } from "../components/FeedbackCard";

type Option = { value: string; label: string };

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

function saveItems(items: CheckInItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function CheckIn() {
  const nav = useNavigate();

  // ciclo de vida: carrega JSON no mount
  const [options, setOptions] = useState<Option[]>([]);
  useEffect(() => {
    // “requisição” local (pode trocar por fetch também)
    import("../data/eventTypes.json").then((m) => setOptions(m.default as Option[]));
  }, []);

  // one-way data binding (inputs controlados)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [eventType, setEventType] = useState("");
  const [message, setMessage] = useState("");

  // validação simples
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const errors = useMemo(() => {
    const e: Record<string, string> = {};
    if (name.trim().length < 3) e.name = "Informe um nome com pelo menos 3 caracteres.";
    if (!email.includes("@")) e.email = "Informe um e-mail válido.";
    if (!eventType) e.eventType = "Selecione o tipo de evento.";
    return e;
  }, [name, email, eventType]);

  const isValid = Object.keys(errors).length === 0;

  const [submitted, setSubmitted] = useState<CheckInItem | null>(null);

  function touchAll() {
    setTouched({ name: true, email: true, eventType: true, message: true });
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    touchAll();
    if (!isValid) return;

    const item: CheckInItem = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      eventType,
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    const items = [item, ...loadItems()];
    saveItems(items);
    setSubmitted(item);

    // limpa
    setName("");
    setEmail("");
    setEventType("");
    setMessage("");
  }

  return (
    <>
      <Card className="mt-2">
        <CardBody>
          <h4 style={{ margin: 0 }}>Novo check-in</h4>
          <div className="text-muted" style={{ marginTop: 6 }}>
            Formulário Reactstrap + select vindo de JSON + validação + feedback.
          </div>

          <Form onSubmit={onSubmit} style={{ marginTop: 14 }}>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input
                id="name"
                value={name}
                onChange={(ev) => setName(ev.target.value)}
                onBlur={() => setTouched((s) => ({ ...s, name: true }))}
                invalid={!!touched.name && !!errors.name}
                placeholder="Ex: Ednaldo"
              />
              <FormFeedback>{errors.name}</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="email">E-mail</Label>
              <Input
                id="email"
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                onBlur={() => setTouched((s) => ({ ...s, email: true }))}
                invalid={!!touched.email && !!errors.email}
                placeholder="exemplo@email.com"
              />
              <FormFeedback>{errors.email}</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="eventType">Tipo de evento</Label>
              <Input
                id="eventType"
                type="select"
                value={eventType}
                onChange={(ev) => setEventType(ev.target.value)}
                onBlur={() => setTouched((s) => ({ ...s, eventType: true }))}
                invalid={!!touched.eventType && !!errors.eventType}
              >
                {options.map((o) => (
                  <option key={o.value + o.label} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </Input>
              <FormFeedback>{errors.eventType}</FormFeedback>
            </FormGroup>

            <FormGroup>
              <Label for="message">Mensagem (opcional)</Label>
              <Input
                id="message"
                type="textarea"
                rows={3}
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
                placeholder="Ex: Vou chegar 10 min antes."
              />
            </FormGroup>

            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Button color="primary" type="submit">
                Enviar check-in
              </Button>
              <Button outline color="light" type="button" onClick={() => nav("/lista")}>
                Ir para lista
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>

      {submitted ? (
        <>
          <Alert color="success" className="mt-3">
            Check-in realizado com sucesso! (Feedback com os dados enviados)
          </Alert>
          <FeedbackCard item={submitted} />
        </>
      ) : null}
    </>
  );
}