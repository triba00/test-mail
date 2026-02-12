import React from 'react';
import { render } from '@react-email/render';
import { PrenotazioneVolo } from './react-email-starter/emails/prenotazione-volo';
import sendEmail from './services/emailService';

async function main() {

  const datiBiglietto = {
    passeggero: "Giuseppe Tribastone",
    pnr: "GTR99X",
    numeroVolo: "AZ204",
    tipo: "Diretto",
    classe: "Business Class",
    posto: "14A",
    dep_city: "CTA Catania",
    dep_date: "12 Dic 2026",
    dep_time: "10:45",
    arr_city: "MXP Milano",
    arr_date: "12 Dic 2026",
    arr_time: "12:30",
    checkin: "https://aerolineesiciliane.it/checkin?pnr=GTR99X",
    supporto: "https://aerolineesiciliane.it/help"
  };

  try {
    const emailHtml = await render(
      <PrenotazioneVolo
        nomePasseggero={datiBiglietto.passeggero}
        codicePrenotazione={datiBiglietto.pnr}
        volo={datiBiglietto.numeroVolo}
        tipoVolo={datiBiglietto.tipo}
        classe={datiBiglietto.classe}
        posto={datiBiglietto.posto}

        aeroportoPartenza={datiBiglietto.dep_city}
        dataPartenza={datiBiglietto.dep_date}
        oraPartenza={datiBiglietto.dep_time}

        aeroportoArrivo={datiBiglietto.arr_city}
        dataArrivo={datiBiglietto.arr_date}
        oraArrivo={datiBiglietto.arr_time}

        linkCheckin={datiBiglietto.checkin}
        linkSupporto={datiBiglietto.supporto}
      />
    );

    const listaAllegati = [
      {
        filename: 'logo.png',
        path: './assets/logo-white.png',
        cid: 'logo'
      },
      {
        filename: 'Dettagli_Prenotazione.txt',
        content: `Riepilogo Volo per ${datiBiglietto.passeggero}.\nCodice: ${datiBiglietto.pnr}\nGrazie per aver volato con noi.`
      }
    ];

    console.log("Preparazione invio con allegati...");

    await sendEmail(
      "giuseppet100@gmail.com",
      `Conferma Prenotazione ${datiBiglietto.pnr}`,
      emailHtml,
      listaAllegati
    );

    console.log("Processo completato.");

  } catch (error) {
    console.error("Errore nel main:", error);
  }
}

main();