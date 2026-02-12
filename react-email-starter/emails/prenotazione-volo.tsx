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
  nomePasseggero?: string;
  codicePrenotazione?: string;
  volo?: string;
  partenza?: string;
  arrivo?: string;
}

export const PrenotazioneVolo = ({
  nomePasseggero = "",
  codicePrenotazione = "",
  volo = "",
  partenza = "",
  arrivo = "",
}: Props) => {

  return (
    <Html>
      {/* 1. SPOSTA L'APERTURA DI TAILWIND QUI SOPRA */}
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
        {/* Ora Head è DENTRO Tailwind, così lui può scriverci dentro gli stili per l'hover */}
        <Head />
        <Preview>La tua prenotazione è confermata! (Rif: {codicePrenotazione})</Preview>

        <Body className="bg-gray-100 font-sans my-auto mx-auto px-2">
          <Container className="bg-white border border-gray-200 rounded-lg shadow-md mt-[40px] mb-[40px] max-w-[600px] overflow-hidden">

            {/* HEADER: Logo e Stato */}
            <Section className="bg-brand p-8 text-center">
              <Img
                src="cid:logo"
                width="auto"
                height="auto"
                alt="Logo Aerolinee Siciliane"
                className="mx-auto pb-4"
              />
              <Heading className="text-white text-2xl font-bold m-0 p-0">
                Prenotazione Confermata
              </Heading>
              <Text className="text-gray-200 mt-2 mb-0">
                Grazie per aver scelto di volare con Aerolinee Siciliane.
              </Text>
            </Section>

            {/* BOX CODICE PRENOTAZIONE (PNR) */}
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
                  <Column align="left" className="w-1/3">
                    <Text className="text-gray-500 text-xs font-bold uppercase m-0">Partenza</Text>
                    <Text className="text-brand text-3xl font-bold m-0 mt-1">10:45</Text>
                    <Text className="text-gray-800 font-semibold m-0">6 Mar 2026</Text>
                    <Text className="text-gray-500 text-sm m-0">{partenza}</Text>
                  </Column>
                  <Column align="center" className="w-1/3">
                    <div className="border-t-2 border-gray-300 w-full relative top-[-10px]"></div>
                    <Text className="text-gray-400 text-xs font-bold mt-2">Volo {volo}</Text>
                    <Text className="text-gray-400 text-xs">Diretto</Text>
                  </Column>
                  <Column align="right" className="w-1/3">
                    <Text className="text-gray-500 text-xs font-bold uppercase m-0">Arrivo</Text>
                    <Text className="text-brand text-3xl font-bold m-0 mt-1">18:30</Text>
                    <Text className="text-gray-800 font-semibold m-0">6 Mar 2026</Text>
                    <Text className="text-gray-500 text-sm m-0">{arrivo}</Text>
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
                </Column>
                <Column align="right">
                  <Text className="text-gray-500 text-xs font-bold uppercase m-0">Posto</Text>
                  <Text className="text-gray-800 font-medium text-lg m-0">14A (Finestrino)</Text>
                </Column>
              </Row>
            </Section>

            {/* CTA BUTTON */}
            <Section className="px-8 pb-8 text-center">
              <Button
                className="bg-brand text-white rounded-md px-8 py-4 font-bold text-center block w-full hover:bg-blue-800 transition-colors"
                href="https://aerolineesiciliane.it/checkin"
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
                Hai bisogno di aiuto? <a href="#" className="text-brand underline">Contatta il supporto</a>
              </Text>
              <Text className="text-gray-400 text-[10px]">
                © 2026 Aerolinee Siciliane. Tutti i diritti riservati. <br />
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