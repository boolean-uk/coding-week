# HTML

- Cambiato il link rel dell'icona da `apple-touch-icon` a `icon` (dovrebbe funzionare su entrambi gli OS)
- Aggiunto `<main>` sotto header
- cambiati alcuni id e classi per renderli più espliciti \_es: `speak` > `play-button`
- Reso il bottone `disabled` già in partenza
- Nascosta l'immagine della paperella parlante con attributo booleano `hidden` giusto per mostrare una cosa in più, ma è solo un'idea.

<br>
<br>

# CSS

- cambiata la custom property `--accent-color` in `pink` per non confonderla con la proprietà `accent-color` del range.
- Semplificato il linear gradient arrotondando le percentuali (è impercettibile nel risultato)
- Rimosse alcune proprietà che sembravano superflue in questa casistica, ma correggimi se non ho pensato a qualcosa (`background-repeat` e `font-size: 1rem` sul body);
- Spostata l'altezza di body a 100vh
- dove possibile ho semplificato i selettori avanzati (ad esempio invece di `input[type="range"]` ho usato l'id, visto che è presente per via di JS)

<br>
<br>

# JS

- Cambiati i nomi delle variabili, per renderli il più espliciti possibile ai "newbie"

- rimossa la parte relativa al fetch delle voci (spostate in basso sotto forma di commenti come aggiunte opzionali)

- invertito l'ordine delle istruzioni in modo che agevoli la spiegazione, sfruttando hoisting e scope delle functions tradizionali.

- Aggiunto controllo sul testo nella textarea per riabilitare il bottone.

- Come conseguenza, al click del bottone non abbiamo più il controllo della lunghezza del testo, ma raccogliamo testo e pitch e li passiamo alla funzione `speak`
