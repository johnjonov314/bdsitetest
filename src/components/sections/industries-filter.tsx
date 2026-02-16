"use client";

import { useMemo, useState } from "react";

const data = [
  { name: "Госуслуги региона", sector: "Госсектор", value: "Контроль загрузки МФЦ и оптимизация маршрутов граждан." },
  { name: "Банк федерального уровня", sector: "Финансы", value: "Антифрод и smart-маршрутизация обращений." },
  { name: "Городской транспорт", sector: "Транспорт", value: "Видеоаналитика пассажиропотока и инцидентов." },
  { name: "Федеральная retail-сеть", sector: "Ритейл", value: "Geo+video для качества операций и планирования." },
  { name: "Промышленный холдинг", sector: "Промышленность", value: "Контроль ПБ и мониторинг критических зон." },
  { name: "Энергогенерирующая компания", sector: "Энергетика", value: "Предиктивные оповещения и контроль объектов." }
];

const sectors = ["Все", "Госсектор", "Финансы", "Транспорт", "Ритейл", "Промышленность", "Энергетика"];

export function IndustriesFilter() {
  const [active, setActive] = useState("Все");
  const filtered = useMemo(() => active === "Все" ? data : data.filter((d) => d.sector === active), [active]);

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {sectors.map((s) => <button key={s} onClick={() => setActive(s)} className={`rounded-full border px-3 py-1 text-sm ${s===active ? "border-primary text-primary" : "border-white/20 text-muted"}`}>{s}</button>)}
      </div>
      <div className="grid gap-3 md:grid-cols-2">{filtered.map((item) => <article key={item.name} className="glass rounded-xl p-4"><p className="text-xs text-primary">{item.sector}</p><h3>{item.name}</h3><p className="text-sm text-muted">{item.value}</p></article>)}</div>
    </div>
  );
}
