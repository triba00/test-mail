import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Row,
  Column,
  Img,
  Heading,
  Text,
  Button,
  Hr,
  Tailwind,
} from "@react-email/components";

interface Props {
  // Dati Passeggero e Prenotazione
  nomePasseggero?: string;
  codicePrenotazione?: string;

  // Dati Volo
  volo?: string;
  tipoVolo?: string; // Es: "Diretto" o "1 Scalo"
  posto?: string; // Es: "14A"
  classe?: string; // Es: "Economy" o "Business"

  // Partenza
  aeroportoPartenza?: string;
  dataPartenza?: string;
  oraPartenza?: string;

  // Arrivo
  aeroportoArrivo?: string;
  dataArrivo?: string;
  oraArrivo?: string;

  // Dati Compagnia / Link
  nomeCompagnia?: string;
  linkCheckin?: string;
  linkSupporto?: string;
  logoCid?: string; // ID per l'immagine allegata
}

export const PrenotazioneVolo = ({
  nomePasseggero = "Passeggero",
  codicePrenotazione = "---",
  volo = "---",
  tipoVolo = "Diretto",
  posto = "Non assegnato",
  classe = "Economy",
  aeroportoPartenza = "Partenza",
  dataPartenza = "--/--/----",
  oraPartenza = "--:--",
  aeroportoArrivo = "Arrivo",
  dataArrivo = "--/--/----",
  oraArrivo = "--:--",
  nomeCompagnia = "Aerolinee Siciliane",
  linkCheckin = "https://aerolineesiciliane.it/checkin",
  linkSupporto = "https://aerolineesiciliane.it/supporto",
  logoCid = "cid:logo"
}: Props) => {

  const annoCorrente = new Date().getFullYear();

  return (
    <Html>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#FF0000",
                accent: "#F6E300",
              },
            },
          },
        }}
      >
        <Head />
        <Preview>La tua prenotazione {codicePrenotazione} è confermata!</Preview>

        <Body className="bg-gray-100 font-sans my-auto mx-auto px-2">
          <Container className="bg-white border border-gray-200 rounded-lg shadow-md mt-[40px] mb-[40px] max-w-[600px] overflow-hidden">

            {/* HEADER */}
            <Section className="bg-brand p-8 text-center">
              <Img
                src={logoCid}
                width="auto"
                height="50" // Ho messo un'altezza fissa per evitare layout shift
                alt={`Logo ${nomeCompagnia}`}
                className="mx-auto pb-4"
              />
              <Heading className="text-white text-2xl font-bold m-0 p-0">
                Prenotazione Confermata
              </Heading>
              <Text className="text-gray-200 mt-2 mb-0">
                Grazie per aver scelto di volare con {nomeCompagnia}.
              </Text>
            </Section>

            {/* BOX PNR */}
            <Section className="p-8 pb-4">
              <Text className="text-gray-500 text-xs uppercase font-bold tracking-widest text-center mb-2">
                Codice di Riferimento (PNR)
              </Text>
              <Text className="text-4xl text-brand font-black text-center m-0 tracking-widest border-2 border-dashed border-gray-300 bg-gray-50 py-4 rounded-md">
                {codicePrenotazione}
              </Text>
            </Section>

            {/* DETTAGLI VOLO */}
            <Section className="px-8 py-4">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <Row>
                  {/* Colonna Partenza */}
                  <Column align="left" className="w-1/3">
                    <Text className="text-gray-500 text-xs font-bold uppercase m-0">Partenza</Text>
                    <Text className="text-brand text-3xl font-bold m-0 mt-1">{oraPartenza}</Text>
                    <Text className="text-gray-800 font-semibold m-0">{dataPartenza}</Text>
                    <Text className="text-gray-500 text-sm m-0">{aeroportoPartenza}</Text>
                  </Column>

                  {/* Colonna Centrale (Aereo) */}
                  <Column align="center" className="w-1/3">
                    <div className="border-t-2 border-gray-300 w-full relative top-[-10px]"></div>
                    <Text className="text-gray-400 text-xs font-bold mt-2">Volo {volo}</Text>
                    <Text className="text-gray-400 text-xs">{tipoVolo}</Text>
                  </Column>

                  {/* Colonna Arrivo */}
                  <Column align="right" className="w-1/3">
                    <Text className="text-gray-500 text-xs font-bold uppercase m-0">Arrivo</Text>
                    <Text className="text-brand text-3xl font-bold m-0 mt-1">{oraArrivo}</Text>
                    <Text className="text-gray-800 font-semibold m-0">{dataArrivo}</Text>
                    <Text className="text-gray-500 text-sm m-0">{aeroportoArrivo}</Text>
                  </Column>
                </Row>
              </div>
            </Section>

            {/* INFO PASSEGGERO */}
            <Section className="px-8 pb-6">
              <Row className="border-b border-gray-200 pb-4 mb-4">
                <Column>
                  <Text className="text-gray-500 text-xs font-bold uppercase m-0">Passeggero</Text>
                  <Text className="text-gray-800 font-medium text-lg m-0">{nomePasseggero}</Text>
                  <Text className="text-gray-400 text-xs m-0">{classe}</Text>
                </Column>
                <Column align="right">
                  <Text className="text-gray-500 text-xs font-bold uppercase m-0">Posto</Text>
                  <Text className="text-gray-800 font-medium text-lg m-0">{posto}</Text>
                </Column>
              </Row>
            </Section>

            {/* CTA BUTTON */}
            <Section className="px-8 pb-8 text-center">
              <Button
                className="bg-brand text-white rounded-md px-8 py-4 font-bold text-center block w-full hover:bg-blue-800 transition-colors"
                href={linkCheckin}
              >
                Effettua il Check-in Online
              </Button>
              <Text className="text-gray-400 text-xs mt-4">
                Il check-in apre 24 ore prima della partenza.
              </Text>
            </Section>

            <Hr className="border-gray-200 mx-8" />

            {/* FOOTER */}
            <Section className="p-8 bg-gray-50 text-center rounded-b-lg">
              <Text className="text-gray-500 text-xs mb-2">
                Hai bisogno di aiuto? <a href={linkSupporto} className="text-brand underline">Contatta il supporto</a>
              </Text>
              <Text className="text-gray-400 text-[10px]">
                © {annoCorrente} {nomeCompagnia}. Tutti i diritti riservati. <br />
                Non rispondere a questa email generata automaticamente.
              </Text>
            </Section>

          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PrenotazioneVolo;