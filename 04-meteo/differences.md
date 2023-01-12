# HTML

- Tag semantici `<main>`,`<figure>`, `<section>`

- classi più "ripetitive ed estese: `weather-icon`, `wheather-info`, `weather-panel`; `location-info`, `temperature-info`

- id snake-case, come da convenzione (come mai sono tutti PascalCase?)

<br>
<br>

# CSS

- non riutilizziamo mai le custom properties... perchè metterle?

- `background-image` al posto di `background` per coerenza con le altre proprietà di background sotto. (o facciamo tutto dentro `background` o le spezziamo tutte)

- il font-size:16px sul body è inutile: se vogliamo usarlo per i rem va su html altrimenti non funziona. Ma visto che non stiamo usando i rem e stiamo specificando tutti gli elementi in pixel, lo leviamo?

- aggiunto `capitalize` all' advice

- `ease-in-out` è davvero necessario? poi tocca spiegarli, non è meglio omettere e lasciare `ease` come default?

<br>
<br>

# JS

- Come mai la scelta di usare il rootElement? non potremmo usare il main o il container?

- possiamo menzionare il querySelector e spiegare perchè abbiamo usato getElementById

- Qualche cambio di nome variabile, ma ci sto pensando

- invertite dichiarazioni delle functions sfruttando l'hoisting per seguire il filo logico

<br>
<br>

# Altro

Magari un'icona per il caricamento e una per quando non c'è la geolocalizzazione?

Nel primo caso potrebbe essere utile per poter cambiare poi il
