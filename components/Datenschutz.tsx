import React from 'react';

const Datenschutz: React.FC = () => {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="prose prose-invert mx-auto lg:prose-lg">
          <h1>Datenschutzerklärung</h1>
          <p>Stand: {new Date().toLocaleDateString('de-DE')}</p>

          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst. Ausführliche Informationen entnimm bitte der nachfolgenden Datenschutzerklärung.
          </p>

          <h3>Datenerfassung auf dieser Website</h3>
          <h4>Wer ist verantwortlich für die Datenerfassung?</h4>
          <p>
            Verantwortlich für die Datenverarbeitung ist die VoxOn.ai GmbH (Kontaktdaten siehe Impressum).
          </p>
          <h4>Wie erfassen wir deine Daten?</h4>
          <p>
            Daten werden zum einen dadurch erhoben, dass du sie uns mitteilst – etwa in Formularen. Weitere Daten werden automatisch oder nach Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst (z. B. Browser, Betriebssystem, Uhrzeit des Zugriffs).
          </p>
          <h4>Wofür nutzen wir deine Daten?</h4>
          <p>
            Ein Teil der Daten wird zur fehlerfreien Bereitstellung der Website benötigt. Andere Daten können zur Analyse des Nutzerverhaltens oder zur Bearbeitung deiner Anfrage genutzt werden.
          </p>
          <h4>Welche Rechte hast du?</h4>
          <p>
            Du hast jederzeit das Recht auf unentgeltliche Auskunft über Herkunft, Empfänger und Zweck deiner gespeicherten personenbezogenen Daten. Ebenso kannst du Berichtigung, Löschung oder Einschränkung der Verarbeitung verlangen sowie erteilte Einwilligungen für die Zukunft widerrufen. Außerdem steht dir ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>

          <h2>2. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Verantwortliche Stelle ist:<br />
            VoxOn.ai GmbH<br />
            Future Hub 12, 1010 Wien<br />
            Telefon: +43 (0) 660 000000<br />
            E-Mail: privacy@voxon.ai
          </p>
          <p>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
          </p>

          <h3>Widerruf deiner Einwilligung</h3>
          <p>
            Viele Datenverarbeitungsvorgänge sind nur mit deiner ausdrücklichen Einwilligung möglich. Du kannst eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung bleibt unberührt.
          </p>

          <h3>SSL- bzw. TLS-Verschlüsselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an einem Schloss-Symbol in deiner Browserzeile.
          </p>

          <h3>Auskunft, Löschung und Berichtigung</h3>
          <p>
            Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf Auskunft über deine gespeicherten personenbezogenen Daten sowie ggf. ein Recht auf Berichtigung oder Löschung dieser Daten.
          </p>

          <h2>3. Datenerfassung auf unserer Website</h2>
          <h3>Server-Log-Dateien</h3>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten Server-Log-Dateien, die dein Browser automatisch an uns übermittelt. Dies sind Browsertyp und Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden Rechners, Uhrzeit der Serveranfrage sowie IP-Adresse.
          </p>

          <h3>Kontaktformular & Demo-Anfrage</h3>
          <p>
            Wenn du uns per Formular kontaktierst, werden deine Angaben aus dem Formular inklusive der von dir dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne deine Einwilligung weiter.
          </p>

          <p>
            <em>Hinweis: Diese Datenschutzerklärung ist ein Placeholder. Bitte lass die finale Fassung von einer rechtskundigen Person prüfen und ergänzen.</em>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Datenschutz;
