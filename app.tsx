import React from 'react';
import { render } from '@react-email/render';
import { PrenotazioneVolo } from './react-email-starter/emails/prenotazione-volo';
import sendEmail from './services/emailService';

async function main() {

  // 1. Dati del passeggero (simulati)
  const datiVolo = {
    nome: "Giuseppe Tribastone",
    pnr: "GTR99X",
    partenza: "CTA Catania",
    arrivo: "MXP Milano Malpensa"
  };

  try {
    // 2. Generiamo l'HTML da React
    const emailHtml = await render(
      <PrenotazioneVolo
        nomePasseggero={datiVolo.nome}
        codicePrenotazione={datiVolo.pnr}
        partenza={datiVolo.partenza}
        arrivo={datiVolo.arrivo}
      />
    );

    // 3. DEFINIAMO GLI ALLEGATI
    // Puoi mettere quanti file vuoi in questo array
    const listaAllegati = [
      {
        // Logo inline bianco (sarà visibile nel corpo dell'email)
        filename: 'logo.png',
        path: './assets/logo-white.png',
        cid: 'logo' // Content-ID per referenziarlo nell'HTML
      },
      {
        // ESEMPIO A: File generato al volo (Testo)
        // Utile per log, ricevute semplici o se non hai file su disco
        filename: 'Dettagli_Prenotazione.txt',
        content: `Riepilogo Volo per ${datiVolo.nome}.\nCodice: ${datiVolo.pnr}\nGrazie per aver volato con noi.`
      },
      /* {
          // ESEMPIO B: File vero dal disco (PDF, Immagini)
          // Scommenta questo se hai un file nella cartella del progetto
          filename: 'Condizioni_Generali.pdf',
          path: './files/condizioni.pdf' 
      } 
      */
    ];

    console.log("Preparazione invio con allegati...");

    // 4. INVIAMO LA MAIL (Passiamo 4 argomenti ora!)
    await sendEmail(
      "giuseppet100@gmail.com", // <--- Metti qui la tua mail per il test
      `Conferma Prenotazione ${datiVolo.pnr}`, // Oggetto
      emailHtml, // HTML Renderizzato
      listaAllegati // <--- L'array degli allegati
    );

    console.log("Processo completato.");

  } catch (error) {
    console.error("Errore nel main:", error);
  }
}

main();