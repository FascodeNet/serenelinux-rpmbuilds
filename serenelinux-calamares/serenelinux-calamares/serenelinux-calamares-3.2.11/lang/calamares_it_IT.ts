<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS language="it_IT" version="2.1">
  <context>
    <name>BootInfoWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="61"/>
      <source>The &lt;strong&gt;boot environment&lt;/strong&gt; of this system.&lt;br&gt;&lt;br&gt;Older x86 systems only support &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;Modern systems usually use &lt;strong&gt;EFI&lt;/strong&gt;, but may also show up as BIOS if started in compatibility mode.</source>
      <translation>L'&lt;strong&gt;ambiente di avvio&lt;/strong&gt; di questo sistema. &lt;br&gt;&lt;br&gt;I vecchi sistemi x86 supportano solo &lt;strong&gt;BIOS&lt;/strong&gt;. &lt;bt&gt;I sistemi moderni normalmente usano &lt;strong&gt;EFI&lt;/strong&gt; ma possono anche apparire come sistemi BIOS se avviati in modalità compatibile.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="71"/>
      <source>This system was started with an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from an EFI environment, this installer must deploy a boot loader application, like &lt;strong&gt;GRUB&lt;/strong&gt; or &lt;strong&gt;systemd-boot&lt;/strong&gt; on an &lt;strong&gt;EFI System Partition&lt;/strong&gt;. This is automatic, unless you choose manual partitioning, in which case you must choose it or create it on your own.</source>
      <translation>Il sistema è stato avviato con un ambiente di boot &lt;strong&gt;EFI&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Per configurare l'avvio da un ambiente EFI, il programma d'installazione deve inserire un boot loader come &lt;strong&gt;GRUB&lt;/strong&gt; o &lt;strong&gt;systemd-boot&lt;/strong&gt; su una &lt;strong&gt;EFI System Partition&lt;/strong&gt;. Ciò avviene automaticamente, a meno che non si scelga il partizionamento manuale che permette di scegliere un proprio boot loader personale.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/BootInfoWidget.cpp" line="83"/>
      <source>This system was started with a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment.&lt;br&gt;&lt;br&gt;To configure startup from a BIOS environment, this installer must install a boot loader, like &lt;strong&gt;GRUB&lt;/strong&gt;, either at the beginning of a partition or on the &lt;strong&gt;Master Boot Record&lt;/strong&gt; near the beginning of the partition table (preferred). This is automatic, unless you choose manual partitioning, in which case you must set it up on your own.</source>
      <translation>ll sistema è stato avviato con un ambiente di boot &lt;strong&gt;BIOS&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;Per configurare l'avvio da un ambiente BIOS, il programma d'installazione deve installare un boot loader come &lt;strong&gt;GRUB&lt;/strong&gt; all'inizio di una partizione o nel &lt;strong&gt;Master Boot Record&lt;/strong&gt; vicino all'origine della tabella delle partizioni (preferito). Ciò avviene automaticamente, a meno che non si scelga il partizionamento manuale che permette di fare una configurazione personale.</translation>
    </message>
  </context>
  <context>
    <name>BootLoaderModel</name>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="59"/>
      <source>Master Boot Record of %1</source>
      <translation>Master Boot Record di %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="93"/>
      <source>Boot Partition</source>
      <translation>Partizione di avvio</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="100"/>
      <source>System Partition</source>
      <translation>Partizione di sistema</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="130"/>
      <source>Do not install a boot loader</source>
      <translation>Non installare un boot loader</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/BootLoaderModel.cpp" line="148"/>
      <source>%1 (%2)</source>
      <translation>%1 (%2)</translation>
    </message>
  </context>
  <context>
    <name>Calamares::BlankViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/BlankViewStep.cpp" line="61"/>
      <source>Blank Page</source>
      <translation>Pagina Vuota</translation>
    </message>
  </context>
  <context>
    <name>Calamares::DebugWindow</name>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="18"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="28"/>
      <source>GlobalStorage</source>
      <translation>GlobalStorage</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="38"/>
      <source>JobQueue</source>
      <translation>JobQueue</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="48"/>
      <source>Modules</source>
      <translation>Moduli</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="61"/>
      <source>Type:</source>
      <translation>Tipo:</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="68"/>
      <location filename="../src/calamares/DebugWindow.ui" line="82"/>
      <source>none</source>
      <translation>nessuna</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="75"/>
      <source>Interface:</source>
      <translation>Interfaccia:</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="97"/>
      <source>Tools</source>
      <translation>Strumenti</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="110"/>
      <source>Reload Stylesheet</source>
      <translation>Ricarica il foglio di stile</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.ui" line="117"/>
      <source>Widget Tree</source>
      <translation>Albero dei Widget</translation>
    </message>
    <message>
      <location filename="../src/calamares/DebugWindow.cpp" line="217"/>
      <source>Debug information</source>
      <translation>Informazioni di debug</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ExecutionViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="85"/>
      <source>Set up</source>
      <translation>Impostazione</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/ExecutionViewStep.cpp" line="85"/>
      <source>Install</source>
      <translation>Installa</translation>
    </message>
  </context>
  <context>
    <name>Calamares::FailJob</name>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="29"/>
      <source>Job failed (%1)</source>
      <translation>Operazione fallita (%1)</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="30"/>
      <source>Programmed job failure was explicitly requested.</source>
      <translation>Il fallimento dell'operazione programmata è stato richiesto esplicitamente.</translation>
    </message>
  </context>
  <context>
    <name>Calamares::JobThread</name>
    <message>
      <location filename="../src/libcalamares/JobQueue.cpp" line="175"/>
      <source>Done</source>
      <translation>Fatto</translation>
    </message>
  </context>
  <context>
    <name>Calamares::NamedJob</name>
    <message>
      <location filename="../src/libcalamares/JobExample.cpp" line="17"/>
      <source>Example job (%1)</source>
      <translation>Operazione d'esempio (%1)</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ProcessJob</name>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="43"/>
      <source>Run command '%1' in target system.</source>
      <translation>Esegui il comando '%1' nel sistema di destinazione</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="43"/>
      <source> Run command '%1'.</source>
      <translation>Esegui il comando '1%'.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/ProcessJob.cpp" line="50"/>
      <source>Running command %1 %2</source>
      <translation>Comando in esecuzione %1 %2</translation>
    </message>
  </context>
  <context>
    <name>Calamares::PythonJob</name>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="193"/>
      <source>Running %1 operation.</source>
      <translation>Operazione %1 in esecuzione.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="222"/>
      <source>Bad working directory path</source>
      <translation>Il percorso della cartella corrente non è corretto</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="223"/>
      <source>Working directory %1 for python job %2 is not readable.</source>
      <translation>La cartella corrente %1 per l'attività di Python %2 non è accessibile.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="229"/>
      <source>Bad main script file</source>
      <translation>File dello script principale non valido</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="230"/>
      <source>Main script file %1 for python job %2 is not readable.</source>
      <translation>Il file principale dello script %1 per l'attività di python %2 non è accessibile.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonJob.cpp" line="298"/>
      <source>Boost.Python error in job "%1".</source>
      <translation>Errore da Boost.Python nell'operazione "%1".</translation>
    </message>
  </context>
  <context>
    <name>Calamares::QmlViewStep</name>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="67"/>
      <source>Loading ...</source>
      <translation>Caricamento ...</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="88"/>
      <source>QML Step &lt;i&gt;%1&lt;/i&gt;.</source>
      <translation>Passaggio QML &lt;i&gt;%1&lt;/i&gt;.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/viewpages/QmlViewStep.cpp" line="268"/>
      <source>Loading failed.</source>
      <translation>Caricamento fallito.</translation>
    </message>
  </context>
  <context>
    <name>Calamares::RequirementsChecker</name>
    <message>
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="94"/>
      <source>Requirements checking for module &lt;i&gt;%1&lt;/i&gt; is complete.</source>
      <translation>Il controllo dei requisiti per il modulo &lt;i&gt;%1&lt;/i&gt; è completo.</translation>
    </message>
    <message numerus="yes">
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="115"/>
      <source>Waiting for %n module(s).</source>
      <translation>
        <numerusform>In attesa del(i) modulo(i) %n.</numerusform>
        <numerusform>In attesa di %n modulo(i).</numerusform>
      </translation>
    </message>
    <message numerus="yes">
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="116"/>
      <source>(%n second(s))</source>
      <translation>
        <numerusform>(%n secondo)</numerusform>
        <numerusform>(%n secondo(i))</numerusform>
      </translation>
    </message>
    <message>
      <location filename="../src/libcalamares/modulesystem/RequirementsChecker.cpp" line="121"/>
      <source>System-requirements checking is complete.</source>
      <translation>Il controllo dei requisiti di sistema è completo.</translation>
    </message>
  </context>
  <context>
    <name>Calamares::ViewManager</name>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="150"/>
      <source>Setup Failed</source>
      <translation>Installazione fallita</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="150"/>
      <source>Installation Failed</source>
      <translation>Installazione non riuscita</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="151"/>
      <source>Would you like to paste the install log to the web?</source>
      <translation>Si vuole mettere il log di installazione sul web?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="164"/>
      <source>Error</source>
      <translation>Errore</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="171"/>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="518"/>
      <source>&amp;Yes</source>
      <translation>&amp;Si</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="172"/>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="519"/>
      <source>&amp;No</source>
      <translation>&amp;No</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="178"/>
      <source>&amp;Close</source>
      <translation>&amp;Chiudi</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="189"/>
      <source>Install Log Paste URL</source>
      <translation>URL di copia del log d'installazione</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="192"/>
      <source>The upload was unsuccessful. No web-paste was done.</source>
      <translation>Il caricamento è fallito. Non è stata fatta la copia sul web.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="208"/>
      <source>Calamares Initialization Failed</source>
      <translation>Inizializzazione di Calamares fallita</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="209"/>
      <source>%1 can not be installed. Calamares was unable to load all of the configured modules. This is a problem with the way Calamares is being used by the distribution.</source>
      <translation>%1 non può essere installato. Calamares non ha potuto caricare tutti i moduli configurati. Questo è un problema del modo in cui Calamares viene utilizzato dalla distribuzione.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="215"/>
      <source>&lt;br/&gt;The following modules could not be loaded:</source>
      <translation>&lt;br/&gt;I seguenti moduli non possono essere caricati:</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="327"/>
      <source>Continue with setup?</source>
      <translation>Procedere con la configurazione?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="327"/>
      <source>Continue with installation?</source>
      <translation>Continuare l'installazione?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="329"/>
      <source>The %1 setup program is about to make changes to your disk in order to set up %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
      <translation>Il programma d'installazione %1 sta per modificare il disco di per installare %2. Non sarà possibile annullare queste modifiche.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="332"/>
      <source>The %1 installer is about to make changes to your disk in order to install %2.&lt;br/&gt;&lt;strong&gt;You will not be able to undo these changes.&lt;/strong&gt;</source>
      <translation>Il programma d'installazione %1 sta per eseguire delle modifiche al tuo disco per poter installare %2.&lt;br/&gt;&lt;strong&gt; Non sarà possibile annullare tali modifiche.&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="335"/>
      <source>&amp;Set up now</source>
      <translation>&amp;Installa adesso</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="335"/>
      <source>&amp;Install now</source>
      <translation>&amp;Installa adesso</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="343"/>
      <source>Go &amp;back</source>
      <translation>&amp;Indietro</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="392"/>
      <source>&amp;Set up</source>
      <translation>&amp;Installazione</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="392"/>
      <source>&amp;Install</source>
      <translation>&amp;Installa</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="394"/>
      <source>Setup is complete. Close the setup program.</source>
      <translation>Installazione completata. Chiudere il programma d'installazione.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="395"/>
      <source>The installation is complete. Close the installer.</source>
      <translation>L'installazione è terminata. Chiudere il programma d'installazione.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="397"/>
      <source>Cancel setup without changing the system.</source>
      <translation>Annulla l'installazione senza modificare il sistema.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="398"/>
      <source>Cancel installation without changing the system.</source>
      <translation>Annullare l'installazione senza modificare il sistema.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="408"/>
      <source>&amp;Next</source>
      <translation>&amp;Avanti</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="413"/>
      <source>&amp;Back</source>
      <translation>&amp;Indietro</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="419"/>
      <source>&amp;Done</source>
      <translation>&amp;Fatto</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="438"/>
      <source>&amp;Cancel</source>
      <translation>&amp;Annulla</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="511"/>
      <source>Cancel setup?</source>
      <translation>Annullare l'installazione?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="511"/>
      <source>Cancel installation?</source>
      <translation>Annullare l'installazione?</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="512"/>
      <source>Do you really want to cancel the current setup process?
The setup program will quit and all changes will be lost.</source>
      <translation>Si vuole annullare veramente il processo di installazione? Il programma d'installazione verrà terminato e tutti i cambiamenti saranno persi.</translation>
    </message>
    <message>
      <location filename="../src/libcalamaresui/ViewManager.cpp" line="514"/>
      <source>Do you really want to cancel the current install process?
The installer will quit and all changes will be lost.</source>
      <translation>Si vuole davvero annullare l'installazione in corso?
Il programma d'installazione sarà terminato e tutte le modifiche andranno perse.</translation>
    </message>
  </context>
  <context>
    <name>CalamaresPython::Helper</name>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="288"/>
      <source>Unknown exception type</source>
      <translation>Tipo di eccezione sconosciuto</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="306"/>
      <source>unparseable Python error</source>
      <translation>Errore Python non definibile</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="350"/>
      <source>unparseable Python traceback</source>
      <translation>Traceback Python non definibile</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/PythonHelper.cpp" line="357"/>
      <source>Unfetchable Python error.</source>
      <translation>Errore di Python non definibile.</translation>
    </message>
  </context>
  <context>
    <name>CalamaresUtils</name>
    <message>
      <location filename="../src/libcalamaresui/utils/Paste.cpp" line="25"/>
      <source>Install log posted to:
%1</source>
      <translation>Log d'installazione inviato a:
%1</translation>
    </message>
  </context>
  <context>
    <name>CalamaresWindow</name>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="101"/>
      <source>Show debug information</source>
      <translation>Mostra le informazioni di debug</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="155"/>
      <source>&amp;Back</source>
      <translation>&amp;Indietro</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="167"/>
      <source>&amp;Next</source>
      <translation>&amp;Avanti</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="180"/>
      <source>&amp;Cancel</source>
      <translation>&amp;Annulla</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="304"/>
      <source>%1 Setup Program</source>
      <translation>%1 Programma d'installazione</translation>
    </message>
    <message>
      <location filename="../src/calamares/CalamaresWindow.cpp" line="305"/>
      <source>%1 Installer</source>
      <translation>%1 Programma di installazione</translation>
    </message>
  </context>
  <context>
    <name>CheckerContainer</name>
    <message>
      <location filename="../src/modules/welcome/checker/CheckerContainer.cpp" line="37"/>
      <source>Gathering system information...</source>
      <translation>Raccolta delle informazioni di sistema...</translation>
    </message>
  </context>
  <context>
    <name>ChoicePage</name>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.ui" line="18"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="130"/>
      <source>Select storage de&amp;vice:</source>
      <translation>Selezionare un dispositivo di me&amp;moria:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="131"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="938"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="983"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1073"/>
      <source>Current:</source>
      <translation>Corrente:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="132"/>
      <source>After:</source>
      <translation>Dopo:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="305"/>
      <source>&lt;strong&gt;Manual partitioning&lt;/strong&gt;&lt;br/&gt;You can create or resize partitions yourself.</source>
      <translation>&lt;strong&gt;Partizionamento manuale&lt;/strong&gt;&lt;br/&gt;Si possono creare o ridimensionare le partizioni manualmente.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="806"/>
      <source>Reuse %1 as home partition for %2.</source>
      <translation>Riutilizzare %1 come partizione home per &amp;2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="939"/>
      <source>&lt;strong&gt;Select a partition to shrink, then drag the bottom bar to resize&lt;/strong&gt;</source>
      <translation>&lt;strong&gt;Selezionare una partizione da ridurre, trascina la barra inferiore per ridimensionare&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="956"/>
      <source>%1 will be shrunk to %2MiB and a new %3MiB partition will be created for %4.</source>
      <translation>%1 sarà ridotta a %2MiB ed una nuova partizione di %3MiB sarà creata per %4</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1012"/>
      <source>Boot loader location:</source>
      <translation>Posizionamento del boot loader:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1064"/>
      <source>&lt;strong&gt;Select a partition to install on&lt;/strong&gt;</source>
      <translation>&lt;strong&gt;Selezionare la partizione sulla quale si vuole installare&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1119"/>
      <source>An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
      <translation>Impossibile trovare una partizione EFI di sistema. Si prega di tornare indietro ed effettuare un partizionamento manuale per configurare %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1127"/>
      <source>The EFI system partition at %1 will be used for starting %2.</source>
      <translation>La partizione EFI di sistema su %1 sarà usata per avviare %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1135"/>
      <source>EFI system partition:</source>
      <translation>Partizione EFI di sistema:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1260"/>
      <source>This storage device does not seem to have an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Questo dispositivo di memoria non sembra contenere alcun sistema operativo. Come si vuole procedere?&lt;br/&gt;Si potranno comunque rivedere e confermare le scelte prima di apportare i cambiamenti al dispositivo.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1265"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1302"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1324"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1349"/>
      <source>&lt;strong&gt;Erase disk&lt;/strong&gt;&lt;br/&gt;This will &lt;font color="red"&gt;delete&lt;/font&gt; all data currently present on the selected storage device.</source>
      <translation>&lt;strong&gt;Cancellare disco&lt;/strong&gt;&lt;br/&gt;Questo &lt;font color="red"&gt;cancellerà&lt;/font&gt; tutti i dati attualmente presenti sul dispositivo di memoria.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1269"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1298"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1320"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1345"/>
      <source>&lt;strong&gt;Install alongside&lt;/strong&gt;&lt;br/&gt;The installer will shrink a partition to make room for %1.</source>
      <translation>&lt;strong&gt;Installare a fianco&lt;/strong&gt;&lt;br/&gt;Il programma di installazione ridurrà una partizione per dare spazio a %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1273"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1307"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1328"/>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1353"/>
      <source>&lt;strong&gt;Replace a partition&lt;/strong&gt;&lt;br/&gt;Replaces a partition with %1.</source>
      <translation>&lt;strong&gt;Sostituire una partizione&lt;/strong&gt;&lt;br/&gt;Sostituisce una partizione con %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1292"/>
      <source>This storage device has %1 on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Questo dispositivo di memoria ha %1. Come si vuole procedere?&lt;br/&gt;Si potranno comunque rivedere e confermare le scelte prima di apportare i cambiamenti al dispositivo.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1315"/>
      <source>This storage device already has an operating system on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Questo dispositivo di memoria contenere già un sistema operativo. Come si vuole procedere?&lt;br/&gt;Si potranno comunque rivedere e confermare le scelte prima di apportare i cambiamenti al dispositivo.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1340"/>
      <source>This storage device has multiple operating systems on it. What would you like to do?&lt;br/&gt;You will be able to review and confirm your choices before any change is made to the storage device.</source>
      <translation>Questo dispositivo di memoria contenere diversi sistemi operativi. Come si vuole procedere?&lt;br/&gt;Comunque si potranno rivedere e confermare le scelte prima di apportare i cambiamenti al dispositivo.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1532"/>
      <source>No Swap</source>
      <translation>No Swap</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1540"/>
      <source>Reuse Swap</source>
      <translation>Riutilizza Swap</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1543"/>
      <source>Swap (no Hibernate)</source>
      <translation>Swap (senza ibernazione)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1546"/>
      <source>Swap (with Hibernate)</source>
      <translation>Swap (con ibernazione)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ChoicePage.cpp" line="1549"/>
      <source>Swap to file</source>
      <translation>Swap su file</translation>
    </message>
  </context>
  <context>
    <name>ClearMountsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="42"/>
      <source>Clear mounts for partitioning operations on %1</source>
      <translation>Rimuovere i punti di mount per operazioni di partizionamento su %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="49"/>
      <source>Clearing mounts for partitioning operations on %1.</source>
      <translation>Rimozione dei punti di mount per le operazioni di partizionamento su %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearMountsJob.cpp" line="224"/>
      <source>Cleared all mounts for %1</source>
      <translation>Rimossi tutti i punti di mount per %1</translation>
    </message>
  </context>
  <context>
    <name>ClearTempMountsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="32"/>
      <source>Clear all temporary mounts.</source>
      <translation>Rimuovere tutti i punti di mount temporanei.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="39"/>
      <source>Clearing all temporary mounts.</source>
      <translation>Rimozione di tutti i punti di mount temporanei.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="51"/>
      <source>Cannot get list of temporary mounts.</source>
      <translation>Non è possibile ottenere la lista dei punti di mount temporanei.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ClearTempMountsJob.cpp" line="92"/>
      <source>Cleared all temporary mounts.</source>
      <translation>Rimossi tutti i punti di mount temporanei.</translation>
    </message>
  </context>
  <context>
    <name>CommandList</name>
    <message>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="142"/>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="155"/>
      <source>Could not run command.</source>
      <translation>Impossibile eseguire il comando.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="143"/>
      <source>The command runs in the host environment and needs to know the root path, but no rootMountPoint is defined.</source>
      <translation>Il comando viene eseguito nell'ambiente host e richiede il percorso di root ma nessun rootMountPoint (punto di montaggio di root) è definito.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CommandList.cpp" line="156"/>
      <source>The command needs to know the user's name, but no username is defined.</source>
      <translation>Il comando richiede il nome utente, nessun nome utente definito.</translation>
    </message>
  </context>
  <context>
    <name>Config</name>
    <message>
      <location filename="../src/modules/keyboard/Config.cpp" line="340"/>
      <source>Set keyboard model to %1.&lt;br/&gt;</source>
      <translation>Impostare il modello di tastiera a %1.&lt;br/&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/Config.cpp" line="347"/>
      <source>Set keyboard layout to %1/%2.</source>
      <translation>Impostare il layout della tastiera a %1/%2.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="334"/>
      <source>Set timezone to %1/%2.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="372"/>
      <source>The system language will be set to %1.</source>
      <translation>La lingua di sistema sarà impostata a %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/Config.cpp" line="379"/>
      <source>The numbers and dates locale will be set to %1.</source>
      <translation>I numeri e le date locali saranno impostati a %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="38"/>
      <source>Network Installation. (Disabled: Incorrect configuration)</source>
      <translation>Installazione di rete. (Disabilitato: Configurazione non valida)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="40"/>
      <source>Network Installation. (Disabled: Received invalid groups data)</source>
      <translation>Installazione di rete. (Disabilitata: Ricevuti dati dei gruppi non validi)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="42"/>
      <source>Network Installation. (Disabled: internal error)</source>
      <translation>Installazione di rete (disabilitata: errore interno)</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/Config.cpp" line="44"/>
      <source>Network Installation. (Disabled: Unable to fetch package lists, check your network connection)</source>
      <translation>Installazione di rete. (Disabilitata: impossibile recuperare le liste dei pacchetti, controllare la connessione di rete)</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="50"/>
      <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href="#details"&gt;Details...&lt;/a&gt;</source>
      <translation>Questo computer non soddisfa i requisiti minimi per la configurazione di %1.&lt;br/&gt;La configurazione non può continuare. &lt;a href="#details"&gt;Dettagli...&lt;/a&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="54"/>
      <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href="#details"&gt;Details...&lt;/a&gt;</source>
      <translation>Questo computer non soddisfa i requisiti minimi per installare %1. &lt;br/&gt;L'installazione non può continuare. &lt;a href="#details"&gt;Dettagli...&lt;/a&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="61"/>
      <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
      <translation>Questo computer non soddisfa alcuni requisiti raccomandati per la configurazione di %1.&lt;br/&gt;La configurazione può continuare ma alcune funzionalità potrebbero essere disabilitate.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="65"/>
      <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
      <translation>Questo computer non soddisfa alcuni requisiti consigliati per l'installazione di %1.&lt;br/&gt;L'installazione può continuare ma alcune funzionalità potrebbero non essere disponibili.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="75"/>
      <source>This program will ask you some questions and set up %2 on your computer.</source>
      <translation>Questo programma chiederà alcune informazioni e configurerà %2 sul computer.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="244"/>
      <source>&lt;h1&gt;Welcome to the Calamares setup program for %1&lt;/h1&gt;</source>
      <translation>Benvenuto nel programma di installazione Calamares di %1</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="245"/>
      <source>&lt;h1&gt;Welcome to %1 setup&lt;/h1&gt;</source>
      <translation>Benvenuto nell'installazione di %1</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="250"/>
      <source>&lt;h1&gt;Welcome to the Calamares installer for %1&lt;/h1&gt;</source>
      <translation>Benvenuto nel programma di installazione Calamares di %1</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/Config.cpp" line="251"/>
      <source>&lt;h1&gt;Welcome to the %1 installer&lt;/h1&gt;</source>
      <translation>Benvenuto nel programma di installazione di %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="164"/>
      <source>Your username is too long.</source>
      <translation>Il nome utente è troppo lungo.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="170"/>
      <source>'%1' is not allowed as username.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="177"/>
      <source>Your username must start with a lowercase letter or underscore.</source>
      <translation>Il tuo username deve iniziare con una lettera minuscola o un trattino basso.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="181"/>
      <source>Only lowercase letters, numbers, underscore and hyphen are allowed.</source>
      <translation>Solo lettere minuscole, numeri, trattini e trattini bassi sono permessi.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="227"/>
      <source>Your hostname is too short.</source>
      <translation>Hostname è troppo corto.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="231"/>
      <source>Your hostname is too long.</source>
      <translation>Hostname è troppo lungo.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="237"/>
      <source>'%1' is not allowed as hostname.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="243"/>
      <source>Only letters, numbers, underscore and hyphen are allowed.</source>
      <translation>Solo lettere, numeri, trattini e trattini bassi sono permessi.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="446"/>
      <source>Your passwords do not match!</source>
      <translation>Le password non corrispondono!</translation>
    </message>
  </context>
  <context>
    <name>ContextualProcessJob</name>
    <message>
      <location filename="../src/modules/contextualprocess/ContextualProcessJob.cpp" line="119"/>
      <source>Contextual Processes Job</source>
      <translation>Job dei processi contestuali</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="18"/>
      <source>Create a Partition</source>
      <translation>Creare una partizione</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="42"/>
      <source>Si&amp;ze:</source>
      <translation>Dimen&amp;sione:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="52"/>
      <source> MiB</source>
      <translation>MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="59"/>
      <source>Partition &amp;Type:</source>
      <translation>&amp;Tipo di partizione:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="71"/>
      <source>&amp;Primary</source>
      <translation>&amp;Primaria</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="81"/>
      <source>E&amp;xtended</source>
      <translation>E&amp;stesa</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="123"/>
      <source>Fi&amp;le System:</source>
      <translation>Fi&amp;le System:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="155"/>
      <source>LVM LV name</source>
      <translation>Nome LV di LVM</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="165"/>
      <source>&amp;Mount Point:</source>
      <translation>Punto di &amp;mount:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.ui" line="192"/>
      <source>Flags:</source>
      <translation>Flag:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="66"/>
      <source>En&amp;crypt</source>
      <translation>Cr&amp;iptare</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="161"/>
      <source>Logical</source>
      <translation>Logica</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="166"/>
      <source>Primary</source>
      <translation>Primaria</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="185"/>
      <source>GPT</source>
      <translation>GPT</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionDialog.cpp" line="265"/>
      <source>Mountpoint already in use. Please select another one.</source>
      <translation>Il punto di mount è già in uso. Sceglierne un altro.</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="38"/>
      <source>Create new %2MiB partition on %4 (%3) with file system %1.</source>
      <translation>Crea una nuova partizione da %2MiB su %4 (%3) con file system %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="49"/>
      <source>Create new &lt;strong&gt;%2MiB&lt;/strong&gt; partition on &lt;strong&gt;%4&lt;/strong&gt; (%3) with file system &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Crea una nuova partizione di &lt;strong&gt;%2MiB&lt;/strong&gt; su &lt;strong&gt;%4&lt;/strong&gt; (%3) con file system &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="61"/>
      <source>Creating new %1 partition on %2.</source>
      <translation>Creazione della nuova partizione %1 su %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionJob.cpp" line="73"/>
      <source>The installer failed to create partition on disk '%1'.</source>
      <translation>Il programma di installazione non è riuscito a creare la partizione sul disco '%1'.</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionTableDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="24"/>
      <source>Create Partition Table</source>
      <translation>Creare la tabella delle partizioni</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="43"/>
      <source>Creating a new partition table will delete all existing data on the disk.</source>
      <translation>La creazione di una nuova tabella delle partizioni cancellerà tutti i dati esistenti sul disco.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="69"/>
      <source>What kind of partition table do you want to create?</source>
      <translation>Che tipo di tabella delle partizioni vuoi creare?</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="76"/>
      <source>Master Boot Record (MBR)</source>
      <translation>Master Boot Record (MBR)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/CreatePartitionTableDialog.ui" line="86"/>
      <source>GUID Partition Table (GPT)</source>
      <translation>Tavola delle Partizioni GUID (GPT)</translation>
    </message>
  </context>
  <context>
    <name>CreatePartitionTableJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="39"/>
      <source>Create new %1 partition table on %2.</source>
      <translation>Creare una nuova tabella delle partizioni %1 su %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="47"/>
      <source>Create new &lt;strong&gt;%1&lt;/strong&gt; partition table on &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
      <translation>Creare una nuova tabella delle partizioni &lt;strong&gt;%1&lt;/strong&gt; su &lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="57"/>
      <source>Creating new %1 partition table on %2.</source>
      <translation>Creazione della nuova tabella delle partizioni %1 su %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreatePartitionTableJob.cpp" line="75"/>
      <source>The installer failed to create a partition table on %1.</source>
      <translation>Il programma di installazione non è riuscito a creare una tabella delle partizioni su %1.</translation>
    </message>
  </context>
  <context>
    <name>CreateUserJob</name>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="40"/>
      <source>Create user %1</source>
      <translation>Creare l'utente %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="47"/>
      <source>Create user &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Creare l'utente &lt;strong&gt;%1&lt;/strong&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="54"/>
      <source>Creating user %1.</source>
      <translation>Creazione utente %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="186"/>
      <source>Cannot create sudoers file for writing.</source>
      <translation>Impossibile creare il file sudoers in scrittura.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CreateUserJob.cpp" line="181"/>
      <source>Cannot chmod sudoers file.</source>
      <translation>Impossibile eseguire chmod sul file sudoers.</translation>
    </message>
  </context>
  <context>
    <name>CreateVolumeGroupDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/CreateVolumeGroupDialog.cpp" line="28"/>
      <source>Create Volume Group</source>
      <translation>Crea Gruppo di Volumi</translation>
    </message>
  </context>
  <context>
    <name>CreateVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="28"/>
      <source>Create new volume group named %1.</source>
      <translation>Crea un nuovo gruppo di volumi denominato %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="34"/>
      <source>Create new volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Crea un nuovo gruppo di volumi denominato &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="40"/>
      <source>Creating new volume group named %1.</source>
      <translation>Creazione del nuovo gruppo di volumi denominato %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/CreateVolumeGroupJob.cpp" line="52"/>
      <source>The installer failed to create a volume group named '%1'.</source>
      <translation>Il programma d'installazione non è riuscito a creare un gruppo di volumi denominato '%1'.</translation>
    </message>
  </context>
  <context>
    <name>DeactivateVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="24"/>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="36"/>
      <source>Deactivate volume group named %1.</source>
      <translation>Disattiva il gruppo di volumi denominato %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="30"/>
      <source>Deactivate volume group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Disattiva gruppo di volumi denominato &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeactivateVolumeGroupJob.cpp" line="48"/>
      <source>The installer failed to deactivate a volume group named %1.</source>
      <translation>Il programma di installazione non è riuscito a disattivare il gruppo di volumi denominato %1.</translation>
    </message>
  </context>
  <context>
    <name>DeletePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="31"/>
      <source>Delete partition %1.</source>
      <translation>Cancellare la partizione %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="38"/>
      <source>Delete partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Cancellare la partizione &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="45"/>
      <source>Deleting partition %1.</source>
      <translation>Cancellazione partizione %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/DeletePartitionJob.cpp" line="56"/>
      <source>The installer failed to delete partition %1.</source>
      <translation>Il programma di installazione non è riuscito a cancellare la partizione %1.</translation>
    </message>
  </context>
  <context>
    <name>DeviceInfoWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="97"/>
      <source>This device has a &lt;strong&gt;%1&lt;/strong&gt; partition table.</source>
      <translation>Questo dispositivo ha una tabella delle partizioni &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="104"/>
      <source>This is a &lt;strong&gt;loop&lt;/strong&gt; device.&lt;br&gt;&lt;br&gt;It is a pseudo-device with no partition table that makes a file accessible as a block device. This kind of setup usually only contains a single filesystem.</source>
      <translation>Questo è un dispositivo &lt;strong&gt;loop&lt;/strong&gt;.&lt;br&gt;&lt;br&gt;E' uno pseudo-dispositivo senza tabella delle partizioni che rende un file accessibile come block device. Questo tipo di configurazione contiene normalmente solo un singolo filesystem.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="111"/>
      <source>This installer &lt;strong&gt;cannot detect a partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The device either has no partition table, or the partition table is corrupted or of an unknown type.&lt;br&gt;This installer can create a new partition table for you, either automatically, or through the manual partitioning page.</source>
      <translation>Il programma d'installazione &lt;strong&gt;non riesce a rilevare una tabella delle partizioni&lt;/strong&gt; sul dispositivo di memoria selezionato.&lt;br&gt;&lt;br&gt;Il dispositivo o non ha una tabella delle partizioni o questa è corrotta, oppure è di tipo sconosciuto.&lt;br&gt;Il programma può creare una nuova tabella delle partizioni, automaticamente o attraverso la sezione del partizionamento manuale.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="121"/>
      <source>&lt;br&gt;&lt;br&gt;This is the recommended partition table type for modern systems which start from an &lt;strong&gt;EFI&lt;/strong&gt; boot environment.</source>
      <translation>&lt;br&gt;&lt;br&gt;Questo è il tipo raccomandato di tabella delle partizioni per i sistemi moderni che si avviano da un ambiente di boot &lt;strong&gt;EFI&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="127"/>
      <source>&lt;br&gt;&lt;br&gt;This partition table type is only advisable on older systems which start from a &lt;strong&gt;BIOS&lt;/strong&gt; boot environment. GPT is recommended in most other cases.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Warning:&lt;/strong&gt; the MBR partition table is an obsolete MS-DOS era standard.&lt;br&gt;Only 4 &lt;em&gt;primary&lt;/em&gt; partitions may be created, and of those 4, one can be an &lt;em&gt;extended&lt;/em&gt; partition, which may in turn contain many &lt;em&gt;logical&lt;/em&gt; partitions.</source>
      <translation>&lt;br&gt;&lt;br&gt;Questo tipo di tabella delle partizioni è consigliabile solo su sistemi più vecchi che si avviano da un ambiente di boot &lt;strong&gt;BIOS&lt;/strong&gt;. GPT è raccomandato nella maggior parte degli altri casi.&lt;br&gt;&lt;br&gt;&lt;strong&gt;Attenzione:&lt;/strong&gt; la tabella delle partizioni MBR è uno standar obsoleto dell'era MS-DOS.&lt;br&gt;Solo 4 partizioni &lt;em&gt;primarie&lt;/em&gt; possono essere create e di queste 4 una può essere una partizione &lt;em&gt;estesa&lt;/em&gt;, che può a sua volta contenere molte partizioni &lt;em&gt;logiche&lt;/em&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/DeviceInfoWidget.cpp" line="140"/>
      <source>The type of &lt;strong&gt;partition table&lt;/strong&gt; on the selected storage device.&lt;br&gt;&lt;br&gt;The only way to change the partition table type is to erase and recreate the partition table from scratch, which destroys all data on the storage device.&lt;br&gt;This installer will keep the current partition table unless you explicitly choose otherwise.&lt;br&gt;If unsure, on modern systems GPT is preferred.</source>
      <translation>Il tipo di &lt;strong&gt;tabella delle partizioni&lt;/strong&gt; attualmente presente sul dispositivo di memoria selezionato.&lt;br&gt;&lt;br&gt;L'unico modo per cambiare il tipo di tabella delle partizioni è quello di cancellarla e ricrearla da capo, distruggendo tutti i dati sul dispositivo.&lt;br&gt;Il programma di installazione conserverà l'attuale tabella a meno che no si scelga diversamente.&lt;br&gt;Se non si è sicuri, sui sistemi moderni si preferisce GPT.</translation>
    </message>
  </context>
  <context>
    <name>DeviceModel</name>
    <message>
      <location filename="../src/modules/partition/core/DeviceModel.cpp" line="84"/>
      <source>%1 - %2 (%3)</source>
      <extracomment>device[name] - size[number] (device-node[name])</extracomment>
      <translation>%1 - %2 (%3)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/DeviceModel.cpp" line="95"/>
      <source>%1 - (%2)</source>
      <extracomment>device[name] - (device-node[name])</extracomment>
      <translation>%1 - (%2)</translation>
    </message>
  </context>
  <context>
    <name>DracutLuksCfgJob</name>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="127"/>
      <source>Write LUKS configuration for Dracut to %1</source>
      <translation>Scrittura della configurazione LUKS per Dracut su %1</translation>
    </message>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="131"/>
      <source>Skip writing LUKS configuration for Dracut: "/" partition is not encrypted</source>
      <translation>Salto scrittura della configurazione LUKS per Dracut: la partizione "/" non è criptata</translation>
    </message>
    <message>
      <location filename="../src/modules/dracutlukscfg/DracutLuksCfgJob.cpp" line="148"/>
      <source>Failed to open %1</source>
      <translation>Impossibile aprire %1</translation>
    </message>
  </context>
  <context>
    <name>DummyCppJob</name>
    <message>
      <location filename="../src/modules/dummycpp/DummyCppJob.cpp" line="37"/>
      <source>Dummy C++ Job</source>
      <translation>Processo Dummy C++</translation>
    </message>
  </context>
  <context>
    <name>EditExistingPartitionDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="24"/>
      <source>Edit Existing Partition</source>
      <translation>Modifica la partizione esistente</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="54"/>
      <source>Content:</source>
      <translation>Contenuto:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="64"/>
      <source>&amp;Keep</source>
      <translation>&amp;Mantenere</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="74"/>
      <source>Format</source>
      <translation>Formattare</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="93"/>
      <source>Warning: Formatting the partition will erase all existing data.</source>
      <translation>Attenzione: la formattazione della partizione cancellerà tutti i dati!</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="103"/>
      <source>&amp;Mount Point:</source>
      <translation>Punto di &amp;Mount:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="123"/>
      <source>Si&amp;ze:</source>
      <translation>Di&amp;mensione:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="133"/>
      <source> MiB</source>
      <translation>MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="140"/>
      <source>Fi&amp;le System:</source>
      <translation>Fi&amp;le System:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.ui" line="153"/>
      <source>Flags:</source>
      <translation>Flag:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EditExistingPartitionDialog.cpp" line="272"/>
      <source>Mountpoint already in use. Please select another one.</source>
      <translation>Il punto di mount è già in uso. Sceglierne un altro.</translation>
    </message>
  </context>
  <context>
    <name>EncryptWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="18"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="36"/>
      <source>En&amp;crypt system</source>
      <translation>Cr&amp;iptare il sistema</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="46"/>
      <source>Passphrase</source>
      <translation>Frase di accesso</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.ui" line="56"/>
      <source>Confirm passphrase</source>
      <translation>Confermare frase di accesso</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="104"/>
      <location filename="../src/modules/partition/gui/EncryptWidget.cpp" line="114"/>
      <source>Please enter the same passphrase in both boxes.</source>
      <translation>Si prega di immettere la stessa frase di accesso in entrambi i riquadri.</translation>
    </message>
  </context>
  <context>
    <name>FillGlobalStorageJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="138"/>
      <source>Set partition information</source>
      <translation>Impostare informazioni partizione</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="164"/>
      <source>Install %1 on &lt;strong&gt;new&lt;/strong&gt; %2 system partition.</source>
      <translation>Installare %1 sulla &lt;strong&gt;nuova&lt;/strong&gt; partizione di sistema %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="170"/>
      <source>Set up &lt;strong&gt;new&lt;/strong&gt; %2 partition with mount point &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Impostare la &lt;strong&gt;nuova&lt;/strong&gt; %2 partizione con punto di mount &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="180"/>
      <source>Install %2 on %3 system partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Installare %2 sulla partizione di sistema %3 &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="187"/>
      <source>Set up %3 partition &lt;strong&gt;%1&lt;/strong&gt; with mount point &lt;strong&gt;%2&lt;/strong&gt;.</source>
      <translation>Impostare la partizione %3 &lt;strong&gt;%1&lt;/strong&gt; con punto di montaggio &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="200"/>
      <source>Install boot loader on &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Installare il boot loader su &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FillGlobalStorageJob.cpp" line="209"/>
      <source>Setting up mount points.</source>
      <translation>Impostazione dei punti di mount.</translation>
    </message>
  </context>
  <context>
    <name>FinishedPage</name>
    <message>
      <location filename="../src/modules/finished/FinishedPage.ui" line="18"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.ui" line="102"/>
      <source>&amp;Restart now</source>
      <translation>&amp;Riavviare ora</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="44"/>
      <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been set up on your computer.&lt;br/&gt;You may now start using your new system.</source>
      <translation>&lt;h1&gt;Tutto eseguito.&lt;/h1&gt;&lt;br/&gt;%1 è stato configurato sul tuo computer.&lt;br/&gt;Adesso puoi iniziare a utilizzare il tuo nuovo sistema.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="48"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style="font-style:italic;"&gt;Done&lt;/span&gt; or close the setup program.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Quando questa casella è selezionata, il tuo computer verrà riavviato immediatamente quando clicchi su &lt;span style="font-style:italic;"&gt;Finito&lt;/span&gt; oppure chiudi il programma di setup.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="54"/>
      <source>&lt;h1&gt;All done.&lt;/h1&gt;&lt;br/&gt;%1 has been installed on your computer.&lt;br/&gt;You may now restart into your new system, or continue using the %2 Live environment.</source>
      <translation>&lt;h1&gt;Tutto fatto.&lt;/ h1&gt;&lt;br/&gt;%1 è stato installato sul computer.&lt;br/&gt;Ora è possibile riavviare il sistema, o continuare a utilizzare l'ambiente Live di %2 .</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="59"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;When this box is checked, your system will restart immediately when you click on &lt;span style="font-style:italic;"&gt;Done&lt;/span&gt; or close the installer.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Quando questa casella è selezionata, il tuo sistema si riavvierà immediatamente quando clicchi su &lt;span style="font-style:italic;"&gt;Fatto&lt;/span&gt; o chiudi il programma di installazione.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="116"/>
      <source>&lt;h1&gt;Setup Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been set up on your computer.&lt;br/&gt;The error message was: %2.</source>
      <translation>&lt;h1&gt;Installazione fallita&lt;/h1&gt;&lt;br/&gt;%1 non è stato installato sul tuo computer.&lt;br/&gt;Il messaggio di errore è: %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedPage.cpp" line="122"/>
      <source>&lt;h1&gt;Installation Failed&lt;/h1&gt;&lt;br/&gt;%1 has not been installed on your computer.&lt;br/&gt;The error message was: %2.</source>
      <translation>&lt;h1&gt;Installazione Fallita&lt;/h1&gt;&lt;br/&gt;%1 non è stato installato sul tuo computer.&lt;br/&gt;Il messaggio di errore è: %2</translation>
    </message>
  </context>
  <context>
    <name>FinishedViewStep</name>
    <message>
      <location filename="../src/modules/finished/FinishedViewStep.cpp" line="67"/>
      <source>Finish</source>
      <translation>Termina</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedViewStep.cpp" line="125"/>
      <source>Setup Complete</source>
      <translation>Installazione completata</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedViewStep.cpp" line="125"/>
      <source>Installation Complete</source>
      <translation>Installazione completata</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedViewStep.cpp" line="127"/>
      <source>The setup of %1 is complete.</source>
      <translation>L'installazione di %1 è completa</translation>
    </message>
    <message>
      <location filename="../src/modules/finished/FinishedViewStep.cpp" line="128"/>
      <source>The installation of %1 is complete.</source>
      <translation>L'installazione di %1 è completata.</translation>
    </message>
  </context>
  <context>
    <name>FormatPartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="36"/>
      <source>Format partition %1 (file system: %2, size: %3 MiB) on %4.</source>
      <translation>Formatta la partitione %1 (file system: %2, dimensione: %3 MiB) su %4.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="47"/>
      <source>Format &lt;strong&gt;%3MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; with file system &lt;strong&gt;%2&lt;/strong&gt;.</source>
      <translation>Formatta la partizione &lt;strong&gt;%1&lt;/strong&gt; di dimensione &lt;strong&gt;%3MiB &lt;/strong&gt;  con il file system &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="58"/>
      <source>Formatting partition %1 with file system %2.</source>
      <translation>Formattazione della partizione %1 con file system %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/FormatPartitionJob.cpp" line="72"/>
      <source>The installer failed to format partition %1 on disk '%2'.</source>
      <translation>Il programma di installazione non è riuscito a formattare la partizione %1 sul disco '%2'.</translation>
    </message>
  </context>
  <context>
    <name>GeneralRequirements</name>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="149"/>
      <source>has at least %1 GiB available drive space</source>
      <translation>ha almeno %1 GiB di spazio disponibile</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="151"/>
      <source>There is not enough drive space. At least %1 GiB is required.</source>
      <translation>Non c'è abbastanza spazio sul disco. E' richiesto almeno %1 GiB</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="160"/>
      <source>has at least %1 GiB working memory</source>
      <translation>ha almeno %1 GiB di memoria</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="162"/>
      <source>The system does not have enough working memory. At least %1 GiB is required.</source>
      <translation>Il sistema non ha abbastanza memoria. E' richiesto almeno %1 GiB</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="171"/>
      <source>is plugged in to a power source</source>
      <translation>è collegato a una presa di alimentazione</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="172"/>
      <source>The system is not plugged in to a power source.</source>
      <translation>Il sistema non è collegato a una presa di alimentazione.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="179"/>
      <source>is connected to the Internet</source>
      <translation>è connesso a Internet</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="180"/>
      <source>The system is not connected to the Internet.</source>
      <translation>Il sistema non è connesso a internet.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="187"/>
      <source>is running the installer as an administrator (root)</source>
      <translation>sta eseguendo il programma di installazione come amministratore (root)</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="190"/>
      <source>The setup program is not running with administrator rights.</source>
      <translation>Il programma di installazione non è stato lanciato con i permessi di amministratore.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="191"/>
      <source>The installer is not running with administrator rights.</source>
      <translation>Il programma di installazione non è stato avviato con i diritti di amministrazione.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="199"/>
      <source>has a screen large enough to show the whole installer</source>
      <translation>ha uno schermo abbastanza grande da mostrare l'intero programma di installazione</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="202"/>
      <source>The screen is too small to display the setup program.</source>
      <translation>Lo schermo è troppo piccolo per mostrare il programma di installazione</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/GeneralRequirements.cpp" line="203"/>
      <source>The screen is too small to display the installer.</source>
      <translation>Schermo troppo piccolo per mostrare il programma d'installazione.</translation>
    </message>
  </context>
  <context>
    <name>HostInfoJob</name>
    <message>
      <location filename="../src/modules/hostinfo/HostInfoJob.cpp" line="42"/>
      <source>Collecting information about your machine.</source>
      <translation>Raccogliendo informazioni sulla tua macchina.</translation>
    </message>
  </context>
  <context>
    <name>IDJob</name>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="30"/>
      <location filename="../src/modules/oemid/IDJob.cpp" line="39"/>
      <location filename="../src/modules/oemid/IDJob.cpp" line="52"/>
      <location filename="../src/modules/oemid/IDJob.cpp" line="59"/>
      <source>OEM Batch Identifier</source>
      <translation>Codice Batch OEM</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="40"/>
      <source>Could not create directories &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation>Impossibile creare le cartelle &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="53"/>
      <source>Could not open file &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation>Impossibile aprire il file &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/IDJob.cpp" line="60"/>
      <source>Could not write to file &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation>Impossibile scrivere sul file &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
  </context>
  <context>
    <name>InitcpioJob</name>
    <message>
      <location filename="../src/modules/initcpio/InitcpioJob.cpp" line="31"/>
      <source>Creating initramfs with mkinitcpio.</source>
      <translation>Sto creando initramfs con mkinitcpio.</translation>
    </message>
  </context>
  <context>
    <name>InitramfsJob</name>
    <message>
      <location filename="../src/modules/initramfs/InitramfsJob.cpp" line="28"/>
      <source>Creating initramfs.</source>
      <translation>Sto creando initramfs.</translation>
    </message>
  </context>
  <context>
    <name>InteractiveTerminalPage</name>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="44"/>
      <source>Konsole not installed</source>
      <translation>Konsole non installata</translation>
    </message>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="44"/>
      <source>Please install KDE Konsole and try again!</source>
      <translation>Si prega di installare KDE Konsole e riprovare!</translation>
    </message>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalPage.cpp" line="102"/>
      <source>Executing script: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</source>
      <translation>Esecuzione script: &amp;nbsp;&lt;code&gt;%1&lt;/code&gt;</translation>
    </message>
  </context>
  <context>
    <name>InteractiveTerminalViewStep</name>
    <message>
      <location filename="../src/modules/interactiveterminal/InteractiveTerminalViewStep.cpp" line="41"/>
      <source>Script</source>
      <translation>Script</translation>
    </message>
  </context>
  <context>
    <name>KeyboardPage</name>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="206"/>
      <source>Set keyboard model to %1.&lt;br/&gt;</source>
      <translation>Impostare il modello di tastiera a %1.&lt;br/&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.cpp" line="210"/>
      <source>Set keyboard layout to %1/%2.</source>
      <translation>Impostare il layout della tastiera a %1%2.</translation>
    </message>
  </context>
  <context>
    <name>KeyboardQmlViewStep</name>
    <message>
      <location filename="../src/modules/keyboardq/KeyboardQmlViewStep.cpp" line="33"/>
      <source>Keyboard</source>
      <translation>Tastiera</translation>
    </message>
  </context>
  <context>
    <name>KeyboardViewStep</name>
    <message>
      <location filename="../src/modules/keyboard/KeyboardViewStep.cpp" line="45"/>
      <source>Keyboard</source>
      <translation>Tastiera</translation>
    </message>
  </context>
  <context>
    <name>LCLocaleDialog</name>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="23"/>
      <source>System locale setting</source>
      <translation>Impostazioni di localizzazione del sistema</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="30"/>
      <source>The system locale setting affects the language and character set for some command line user interface elements.&lt;br/&gt;The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Le impostazioni di localizzazione del sistema influenzano la lingua e il set di caratteri per alcuni elementi di interfaccia da linea di comando. &lt;br/&gt;L'impostazione attuale è &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="54"/>
      <source>&amp;Cancel</source>
      <translation>&amp;Annulla</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LCLocaleDialog.cpp" line="55"/>
      <source>&amp;OK</source>
      <translation>&amp;OK</translation>
    </message>
  </context>
  <context>
    <name>LicensePage</name>
    <message>
      <location filename="../src/modules/license/LicensePage.ui" line="18"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.ui" line="26"/>
      <source>&lt;h1&gt;License Agreement&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Accordo di Licenza&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="136"/>
      <source>I accept the terms and conditions above.</source>
      <translation>Accetto i termini e le condizioni sopra indicati.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="138"/>
      <source>Please review the End User License Agreements (EULAs).</source>
      <translation>Si prega di leggere l'Accordo di Licenza per l'Utente Finale (EULAs).</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="143"/>
      <source>This setup procedure will install proprietary software that is subject to licensing terms.</source>
      <translation>Questa procedura di configurazione installerà software proprietario che è soggetto ai termini di licenza.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="146"/>
      <source>If you do not agree with the terms, the setup procedure cannot continue.</source>
      <translation>Se non accetti i termini, la procedura di configurazione non può continuare.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="151"/>
      <source>This setup procedure can install proprietary software that is subject to licensing terms in order to provide additional features and enhance the user experience.</source>
      <translation>Questa procedura di configurazione installerà software proprietario sottoposto a termini di licenza, per fornire caratteristiche aggiuntive e migliorare l'esperienza utente.</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicensePage.cpp" line="156"/>
      <source>If you do not agree with the terms, proprietary software will not be installed, and open source alternatives will be used instead.</source>
      <translation>Se non se ne accettano i termini, il software proprietario non verrà installato e al suo posto saranno utilizzate alternative open source. </translation>
    </message>
  </context>
  <context>
    <name>LicenseViewStep</name>
    <message>
      <location filename="../src/modules/license/LicenseViewStep.cpp" line="43"/>
      <source>License</source>
      <translation>Licenza</translation>
    </message>
  </context>
  <context>
    <name>LicenseWidget</name>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="87"/>
      <source>URL: %1</source>
      <translation>URL: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="108"/>
      <source>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;by %2</source>
      <extracomment>%1 is an untranslatable product name, example: Creative Audigy driver</extracomment>
      <translation>&lt;strong&gt;%1 driver&lt;/strong&gt;&lt;br/&gt;da %2</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="115"/>
      <source>&lt;strong&gt;%1 graphics driver&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <extracomment>%1 is usually a vendor name, example: Nvidia graphics driver</extracomment>
      <translation>&lt;strong&gt;%1 driver video&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;da %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="121"/>
      <source>&lt;strong&gt;%1 browser plugin&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <translation>&lt;strong&gt;%1 plugin del browser&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;da %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="127"/>
      <source>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <translation>&lt;strong&gt;%1 codec&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;da %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="133"/>
      <source>&lt;strong&gt;%1 package&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <translation>&lt;strong&gt;%1 pacchetto&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;da %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="139"/>
      <source>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;by %2&lt;/font&gt;</source>
      <translation>&lt;strong&gt;%1&lt;/strong&gt;&lt;br/&gt;&lt;font color="Grey"&gt;da %2&lt;/font&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="162"/>
      <source>File: %1</source>
      <translation>File: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="185"/>
      <source>Hide license text</source>
      <translation>Nascondi il testo della licenza</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="185"/>
      <source>Show the license text</source>
      <translation>Mostra il testo della licenza</translation>
    </message>
    <message>
      <location filename="../src/modules/license/LicenseWidget.cpp" line="189"/>
      <source>Open license agreement in browser.</source>
      <translation>Apri l'accordo di licenza nel browser.</translation>
    </message>
  </context>
  <context>
    <name>LocalePage</name>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="124"/>
      <source>Region:</source>
      <translation>Area:</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="125"/>
      <source>Zone:</source>
      <translation>Zona:</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/LocalePage.cpp" line="126"/>
      <location filename="../src/modules/locale/LocalePage.cpp" line="127"/>
      <source>&amp;Change...</source>
      <translation>&amp;Cambia...</translation>
    </message>
  </context>
  <context>
    <name>LocaleQmlViewStep</name>
    <message>
      <location filename="../src/modules/localeq/LocaleQmlViewStep.cpp" line="32"/>
      <source>Location</source>
      <translation>Posizione</translation>
    </message>
  </context>
  <context>
    <name>LocaleViewStep</name>
    <message>
      <location filename="../src/modules/locale/LocaleViewStep.cpp" line="76"/>
      <source>Location</source>
      <translation>Posizione</translation>
    </message>
  </context>
  <context>
    <name>LuksBootKeyFileJob</name>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="28"/>
      <source>Configuring LUKS key file.</source>
      <translation>Configurazione in corso del file chiave LUKS.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="145"/>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="153"/>
      <source>No partitions are defined.</source>
      <translation>Non è stata specificata alcuna partizione.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="181"/>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="188"/>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="196"/>
      <source>Encrypted rootfs setup error</source>
      <translation>Errore nella configurazione del rootfs crittato</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="182"/>
      <source>Root partition %1 is LUKS but no passphrase has been set.</source>
      <translation>La partizione root %1 è LUKS ma non sono state configurate passphrase.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="189"/>
      <source>Could not create LUKS key file for root partition %1.</source>
      <translation>Impossibile creare il file chiave LUKS per la partizione root %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/luksbootkeyfile/LuksBootKeyFileJob.cpp" line="197"/>
      <source>Could not configure LUKS key file on partition %1.</source>
      <translation>Impossibile configurare il file chiave LUKS per la partizione %1.</translation>
    </message>
  </context>
  <context>
    <name>MachineIdJob</name>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="37"/>
      <source>Generate machine-id.</source>
      <translation>Genera machine-id.</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="53"/>
      <source>Configuration Error</source>
      <translation>Errore di Configurazione</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/MachineIdJob.cpp" line="54"/>
      <source>No root mount point is set for MachineId.</source>
      <translation>Non è impostato alcun punto di montaggio root per MachineId</translation>
    </message>
  </context>
  <context>
    <name>Map</name>
    <message>
      <location filename="../src/modules/localeq/Map.qml" line="243"/>
      <source>Timezone: %1</source>
      <translation>Fuso orario: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Map.qml" line="264"/>
      <source>Please select your preferred location on the map so the installer can suggest the locale
            and timezone settings for you. You can fine-tune the suggested settings below. Search the map by dragging
            to move and using the +/- buttons to zoom in/out or use mouse scrolling for zooming.</source>
      <translation>Seleziona la tua posizione sulla mappa in modo che il programma di installazione possa suggerirti la localizzazione e le impostazioni del fuso orario. Puoi modificare le impostazioni suggerite nella parte in basso. Trascina la mappa per spostarti e usa i pulsanti +/- oppure la rotella del mouse per ingrandire o rimpicciolire.</translation>
    </message>
  </context>
  <context>
    <name>NetInstallViewStep</name>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="47"/>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="54"/>
      <source>Package selection</source>
      <translation>Selezione del pacchetto</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="55"/>
      <source>Office software</source>
      <translation>Software per ufficio</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="56"/>
      <source>Office package</source>
      <translation>Pacchetto per ufficio</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="57"/>
      <source>Browser software</source>
      <translation>Software navigazione web</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="58"/>
      <source>Browser package</source>
      <translation>Pacchetto navigazione web</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="59"/>
      <source>Web browser</source>
      <translation>Browser web</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="60"/>
      <source>Kernel</source>
      <translation>Kernel</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="61"/>
      <source>Services</source>
      <translation>Servizi</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="62"/>
      <source>Login</source>
      <translation>Accesso</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="63"/>
      <source>Desktop</source>
      <translation>Ambiente desktop</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="64"/>
      <source>Applications</source>
      <translation>Applicazioni</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="65"/>
      <source>Communication</source>
      <translation>Comunicazione</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="66"/>
      <source>Development</source>
      <translation>Sviluppo</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="67"/>
      <source>Office</source>
      <translation>Ufficio</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="68"/>
      <source>Multimedia</source>
      <translation>Multimedia</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="69"/>
      <source>Internet</source>
      <translation>Internet</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="70"/>
      <source>Theming</source>
      <translation>Personalizzazione tema</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="71"/>
      <source>Gaming</source>
      <translation>Giochi</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/NetInstallViewStep.cpp" line="72"/>
      <source>Utilities</source>
      <translation>Utilità</translation>
    </message>
  </context>
  <context>
    <name>NotesQmlViewStep</name>
    <message>
      <location filename="../src/modules/notesqml/NotesQmlViewStep.cpp" line="23"/>
      <source>Notes</source>
      <translation>Note</translation>
    </message>
  </context>
  <context>
    <name>OEMPage</name>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="32"/>
      <source>Ba&amp;tch:</source>
      <translation>Lo&amp;amp;tto</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="42"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a batch-identifier here. This will be stored in the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Inserire un identificatore per il lotto. Questo verrà salvato nel sistema di destinazione.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMPage.ui" line="52"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;OEM Configuration&lt;/h1&gt;&lt;p&gt;Calamares will use OEM settings while configuring the target system.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;h1&gt;Configurazione OEM&lt;/h1&gt;&lt;p&gt;Calamares userà le impostazioni OEM nella configurazione del sistema di destinazione.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
  </context>
  <context>
    <name>OEMViewStep</name>
    <message>
      <location filename="../src/modules/oemid/OEMViewStep.cpp" line="122"/>
      <source>OEM Configuration</source>
      <translation>Configurazione OEM</translation>
    </message>
    <message>
      <location filename="../src/modules/oemid/OEMViewStep.cpp" line="128"/>
      <source>Set the OEM Batch Identifier to &lt;code&gt;%1&lt;/code&gt;.</source>
      <translation>Impostare l'Identificatore del Lotto OEM a &lt;code&gt;%1&lt;/code&gt;.</translation>
    </message>
  </context>
  <context>
    <name>Offline</name>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="37"/>
      <source>Select your preferred Region, or use the default one based on your current location.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="94"/>
      <location filename="../src/modules/localeq/Offline.qml" line="169"/>
      <location filename="../src/modules/localeq/Offline.qml" line="213"/>
      <source>Timezone: %1</source>
      <translation>Fuso orario: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="111"/>
      <source>Select your preferred Zone within your Region.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="182"/>
      <source>Zones</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/Offline.qml" line="229"/>
      <source>You can fine-tune Language and Locale settings below.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>PWQ</name>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="51"/>
      <source>Password is too short</source>
      <translation>Password troppo corta</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="67"/>
      <source>Password is too long</source>
      <translation>Password troppo lunga</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="143"/>
      <source>Password is too weak</source>
      <translation>Password troppo debole</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="151"/>
      <source>Memory allocation error when setting '%1'</source>
      <translation>Errore di allocazione della memoria quando si imposta '%1'</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="156"/>
      <source>Memory allocation error</source>
      <translation>Errore di allocazione di memoria</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="158"/>
      <source>The password is the same as the old one</source>
      <translation>La password coincide con la precedente</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="160"/>
      <source>The password is a palindrome</source>
      <translation>La password è un palindromo</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="162"/>
      <source>The password differs with case changes only</source>
      <translation>La password differisce solo per lettere minuscole e maiuscole</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="164"/>
      <source>The password is too similar to the old one</source>
      <translation>La password è troppo simile a quella precedente</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="166"/>
      <source>The password contains the user name in some form</source>
      <translation>La password contiene il nome utente in qualche campo</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="168"/>
      <source>The password contains words from the real name of the user in some form</source>
      <translation>La password contiene parti del nome utente reale in qualche campo</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="171"/>
      <source>The password contains forbidden words in some form</source>
      <translation>La password contiene parole vietate in alcuni campi</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="175"/>
      <source>The password contains less than %1 digits</source>
      <translation>La password contiene meno di %1 cifre</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="178"/>
      <source>The password contains too few digits</source>
      <translation>La password contiene poche cifre</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="182"/>
      <source>The password contains less than %1 uppercase letters</source>
      <translation>La password contiene meno di %1 lettere maiuscole</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="185"/>
      <source>The password contains too few uppercase letters</source>
      <translation>La password contiene poche lettere maiuscole</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="189"/>
      <source>The password contains less than %1 lowercase letters</source>
      <translation>La password contiene meno di %1 lettere minuscole</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="192"/>
      <source>The password contains too few lowercase letters</source>
      <translation>La password contiene poche lettere minuscole</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="196"/>
      <source>The password contains less than %1 non-alphanumeric characters</source>
      <translation>La password contiene meno di %1 caratteri non alfanumerici</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="200"/>
      <source>The password contains too few non-alphanumeric characters</source>
      <translation>La password contiene pochi caratteri non alfanumerici</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="204"/>
      <source>The password is shorter than %1 characters</source>
      <translation>La password ha meno di %1 caratteri</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="207"/>
      <source>The password is too short</source>
      <translation>La password è troppo corta</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="209"/>
      <source>The password is just rotated old one</source>
      <translation>La password è solo una rotazione della precedente</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="213"/>
      <source>The password contains less than %1 character classes</source>
      <translation>La password contiene meno di %1 classi di caratteri</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="216"/>
      <source>The password does not contain enough character classes</source>
      <translation>La password non contiene classi di caratteri sufficienti</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="220"/>
      <source>The password contains more than %1 same characters consecutively</source>
      <translation>La password contiene più di %1 caratteri uguali consecutivi</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="224"/>
      <source>The password contains too many same characters consecutively</source>
      <translation>La password contiene troppi caratteri uguali consecutivi</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="228"/>
      <source>The password contains more than %1 characters of the same class consecutively</source>
      <translation>La password contiene più di %1 caratteri consecutivi della stessa classe</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="232"/>
      <source>The password contains too many characters of the same class consecutively</source>
      <translation>La password contiene molti caratteri consecutivi della stessa classe</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="237"/>
      <source>The password contains monotonic sequence longer than %1 characters</source>
      <translation>La password contiene una sequenza monotona più lunga di %1 caratteri</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="241"/>
      <source>The password contains too long of a monotonic character sequence</source>
      <translation>La password contiene una sequenza di caratteri monotona troppo lunga</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="244"/>
      <source>No password supplied</source>
      <translation>Nessuna password fornita</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="246"/>
      <source>Cannot obtain random numbers from the RNG device</source>
      <translation>Impossibile ottenere numeri casuali dal dispositivo RNG</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="248"/>
      <source>Password generation failed - required entropy too low for settings</source>
      <translation>Generazione della password fallita - entropia richiesta troppo bassa per le impostazioni</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="254"/>
      <source>The password fails the dictionary check - %1</source>
      <translation>La password non supera il controllo del dizionario - %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="257"/>
      <source>The password fails the dictionary check</source>
      <translation>La password non supera il controllo del dizionario</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="261"/>
      <source>Unknown setting - %1</source>
      <translation>Impostazioni sconosciute - %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="265"/>
      <source>Unknown setting</source>
      <translation>Impostazione sconosciuta</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="269"/>
      <source>Bad integer value of setting - %1</source>
      <translation>Valore intero non valido per l'impostazione - %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="274"/>
      <source>Bad integer value</source>
      <translation>Valore intero non valido</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="278"/>
      <source>Setting %1 is not of integer type</source>
      <translation>Impostazione %1 non è di tipo intero</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="283"/>
      <source>Setting is not of integer type</source>
      <translation>Impostazione non è di tipo intero</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="287"/>
      <source>Setting %1 is not of string type</source>
      <translation>Impostazione %1 non è di tipo stringa</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="292"/>
      <source>Setting is not of string type</source>
      <translation>Impostazione non è di tipo stringa</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="294"/>
      <source>Opening the configuration file failed</source>
      <translation>Apertura del file di configurazione fallita</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="296"/>
      <source>The configuration file is malformed</source>
      <translation>Il file di configurazione non è corretto</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="298"/>
      <source>Fatal failure</source>
      <translation>Errore fatale</translation>
    </message>
    <message>
      <location filename="../src/modules/users/CheckPWQuality.cpp" line="300"/>
      <source>Unknown error</source>
      <translation>Errore sconosciuto</translation>
    </message>
    <message>
      <location filename="../src/modules/users/Config.cpp" line="651"/>
      <source>Password is empty</source>
      <translation>Password vuota</translation>
    </message>
  </context>
  <context>
    <name>PackageChooserPage</name>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="24"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="44"/>
      <source>Product Name</source>
      <translation>Nome Prodotto</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="57"/>
      <source>TextLabel</source>
      <translation>TextLabel</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/page_package.ui" line="73"/>
      <source>Long Product Description</source>
      <translation>Descrizione Estesa del Prodotto</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="25"/>
      <source>Package Selection</source>
      <translation>Selezione del Pacchetto</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageChooserPage.cpp" line="26"/>
      <source>Please pick a product from the list. The selected product will be installed.</source>
      <translation>Si prega di scegliere un prodotto dalla lista. Il prodotto selezionato verrà installato.</translation>
    </message>
  </context>
  <context>
    <name>PackageChooserViewStep</name>
    <message>
      <location filename="../src/modules/packagechooser/PackageChooserViewStep.cpp" line="61"/>
      <source>Packages</source>
      <translation>Pacchetti</translation>
    </message>
  </context>
  <context>
    <name>PackageModel</name>
    <message>
      <location filename="../src/modules/netinstall/PackageModel.cpp" line="167"/>
      <source>Name</source>
      <translation>Nome</translation>
    </message>
    <message>
      <location filename="../src/modules/netinstall/PackageModel.cpp" line="167"/>
      <source>Description</source>
      <translation>Descrizione</translation>
    </message>
  </context>
  <context>
    <name>Page_Keyboard</name>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="18"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="74"/>
      <source>Keyboard Model:</source>
      <translation>Modello della tastiera:</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/KeyboardPage.ui" line="135"/>
      <source>Type here to test your keyboard</source>
      <translation>Digitare qui per provare la tastiera</translation>
    </message>
  </context>
  <context>
    <name>Page_UserSetup</name>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="18"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="40"/>
      <source>What is your name?</source>
      <translation>Qual è il tuo nome?</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="55"/>
      <source>Your Full Name</source>
      <translation>Nome Completo</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="124"/>
      <source>What name do you want to use to log in?</source>
      <translation>Quale nome usare per l'autenticazione?</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="148"/>
      <source>login</source>
      <translation>accesso</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="223"/>
      <source>What is the name of this computer?</source>
      <translation>Qual è il nome di questo computer?</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="247"/>
      <source>&lt;small&gt;This name will be used if you make the computer visible to others on a network.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Questo nome sarà usato se rendi visibile il computer ad altre persone in una rete.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="250"/>
      <source>Computer Name</source>
      <translation>Nome Computer</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="325"/>
      <source>Choose a password to keep your account safe.</source>
      <translation>Scegliere una password per rendere sicuro il tuo account.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="349"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="374"/>
      <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Inserire la password due volte per controllare eventuali errori di battitura. Una buona password contiene lettere, numeri e segni di punteggiatura. Deve essere lunga almeno otto caratteri e dovrebbe essere cambiata a intervalli regolari.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="355"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="525"/>
      <source>Password</source>
      <translation>Password</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="380"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="550"/>
      <source>Repeat Password</source>
      <translation>Ripetere Password</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="455"/>
      <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password.</source>
      <translation>Quando questa casella è selezionata, la robustezza della password viene verificata e non sarà possibile utilizzare password deboli.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="458"/>
      <source>Require strong passwords.</source>
      <translation>È richiesta una password robusta.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="465"/>
      <source>Log in automatically without asking for the password.</source>
      <translation>Accedere automaticamente senza chiedere la password.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="472"/>
      <source>Use the same password for the administrator account.</source>
      <translation>Usare la stessa password per l'account amministratore.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="495"/>
      <source>Choose a password for the administrator account.</source>
      <translation>Scegliere una password per l'account dell'amministratore.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/page_usersetup.ui" line="519"/>
      <location filename="../src/modules/users/page_usersetup.ui" line="544"/>
      <source>&lt;small&gt;Enter the same password twice, so that it can be checked for typing errors.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Inserire la password due volte per controllare eventuali errori di battitura.&lt;/small&gt;</translation>
    </message>
  </context>
  <context>
    <name>PartitionLabelsView</name>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="190"/>
      <source>Root</source>
      <translation>Root</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="194"/>
      <source>Home</source>
      <translation>Home</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="198"/>
      <source>Boot</source>
      <translation>Boot</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="203"/>
      <source>EFI system</source>
      <translation>Sistema EFI</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="207"/>
      <source>Swap</source>
      <translation>Swap</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="211"/>
      <source>New partition for %1</source>
      <translation>Nuova partizione per %1</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="215"/>
      <source>New partition</source>
      <translation>Nuova partizione</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="239"/>
      <source>%1  %2</source>
      <extracomment>size[number] filesystem[name]</extracomment>
      <translation>%1 %2</translation>
    </message>
  </context>
  <context>
    <name>PartitionModel</name>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="159"/>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="199"/>
      <source>Free Space</source>
      <translation>Spazio disponibile</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="163"/>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="203"/>
      <source>New partition</source>
      <translation>Nuova partizione</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="296"/>
      <source>Name</source>
      <translation>Nome</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="298"/>
      <source>File System</source>
      <translation>File System</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="300"/>
      <source>Mount Point</source>
      <translation>Punto di mount</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/core/PartitionModel.cpp" line="302"/>
      <source>Size</source>
      <translation>Dimensione</translation>
    </message>
  </context>
  <context>
    <name>PartitionPage</name>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="18"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="26"/>
      <source>Storage de&amp;vice:</source>
      <translation>Dispositivo di me&amp;moria:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="55"/>
      <source>&amp;Revert All Changes</source>
      <translation>&amp;Annulla tutte le modifiche</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="91"/>
      <source>New Partition &amp;Table</source>
      <translation>Nuova &amp;Tabella delle partizioni</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="111"/>
      <source>Cre&amp;ate</source>
      <translation>Crea</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="118"/>
      <source>&amp;Edit</source>
      <translation>&amp;Modificare</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="125"/>
      <source>&amp;Delete</source>
      <translation>&amp;Cancellare</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="136"/>
      <source>New Volume Group</source>
      <translation>Nuovo Gruppo di Volumi</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="143"/>
      <source>Resize Volume Group</source>
      <translation>RIdimensiona Gruppo di Volumi</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="150"/>
      <source>Deactivate Volume Group</source>
      <translation>Disattiva Gruppo di Volumi</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="157"/>
      <source>Remove Volume Group</source>
      <translation>Rimuovi Gruppo di Volumi</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.ui" line="184"/>
      <source>I&amp;nstall boot loader on:</source>
      <translation>I&amp;nstalla boot loader su:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="219"/>
      <source>Are you sure you want to create a new partition table on %1?</source>
      <translation>Si è sicuri di voler creare una nuova tabella delle partizioni su %1?</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="254"/>
      <source>Can not create new partition</source>
      <translation>Impossibile creare nuova partizione</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionPage.cpp" line="255"/>
      <source>The partition table on %1 already has %2 primary partitions, and no more can be added. Please remove one primary partition and add an extended partition, instead.</source>
      <translation>La tabella delle partizioni su %1 contiene già %2 partizioni primarie, non se ne possono aggiungere altre. Rimuovere una partizione primaria e aggiungere una partizione estesa invece.</translation>
    </message>
  </context>
  <context>
    <name>PartitionViewStep</name>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="69"/>
      <source>Gathering system information...</source>
      <translation>Raccolta delle informazioni di sistema...</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="124"/>
      <source>Partitions</source>
      <translation>Partizioni</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="162"/>
      <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system.</source>
      <translation>Installare %1 &lt;strong&gt;a fianco&lt;/strong&gt; di un altro sistema operativo.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="166"/>
      <source>&lt;strong&gt;Erase&lt;/strong&gt; disk and install %1.</source>
      <translation>&lt;strong&gt;Cancellare&lt;/strong&gt; il disco e installare %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="169"/>
      <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition with %1.</source>
      <translation>&lt;strong&gt;Sostituire&lt;/strong&gt; una partizione con %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="173"/>
      <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning.</source>
      <translation>Partizionamento &lt;strong&gt;manuale&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="186"/>
      <source>Install %1 &lt;strong&gt;alongside&lt;/strong&gt; another operating system on disk &lt;strong&gt;%2&lt;/strong&gt; (%3).</source>
      <translation>Installare %1 &lt;strong&gt;a fianco&lt;/strong&gt; di un altro sistema operativo sul disco&lt;strong&gt;%2&lt;/strong&gt; (%3).</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="193"/>
      <source>&lt;strong&gt;Erase&lt;/strong&gt; disk &lt;strong&gt;%2&lt;/strong&gt; (%3) and install %1.</source>
      <translation>&lt;strong&gt;Cancellare&lt;/strong&gt; il disco &lt;strong&gt;%2&lt;/strong&gt; (%3) e installa %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="199"/>
      <source>&lt;strong&gt;Replace&lt;/strong&gt; a partition on disk &lt;strong&gt;%2&lt;/strong&gt; (%3) with %1.</source>
      <translation>&lt;strong&gt;Sostituire&lt;/strong&gt; una partizione sul disco &lt;strong&gt;%2&lt;/strong&gt; (%3) con %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="206"/>
      <source>&lt;strong&gt;Manual&lt;/strong&gt; partitioning on disk &lt;strong&gt;%1&lt;/strong&gt; (%2).</source>
      <translation>Partizionamento &lt;strong&gt;manuale&lt;/strong&gt; sul disco &lt;strong&gt;%1&lt;/strong&gt; (%2).</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="215"/>
      <source>Disk &lt;strong&gt;%1&lt;/strong&gt; (%2)</source>
      <translation>Disco &lt;strong&gt;%1&lt;/strong&gt; (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="241"/>
      <source>Current:</source>
      <translation>Corrente:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="259"/>
      <source>After:</source>
      <translation>Dopo:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="427"/>
      <source>No EFI system partition configured</source>
      <translation>Nessuna partizione EFI di sistema è configurata</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="428"/>
      <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;To configure an EFI system partition, go back and select or create a FAT32 filesystem with the &lt;strong&gt;%3&lt;/strong&gt; flag enabled and mount point &lt;strong&gt;%2&lt;/strong&gt;.&lt;br/&gt;&lt;br/&gt;You can continue without setting up an EFI system partition but your system may fail to start.</source>
      <translation>Una partizione EFI è necessaria per avviare %1.&lt;br/&gt;&lt;br/&gt; Per configurare una partizione EFI, tornare indietro e selezionare o creare un filesystem FAT32 con il parametro&lt;strong&gt;%3&lt;/strong&gt;abilitato e punto di montaggio &lt;strong&gt;%2&lt;/strong&gt;. &lt;br/&gt;&lt;br/&gt;Si può continuare senza impostare una partizione EFI ma il sistema potrebbe non avviarsi correttamente.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="442"/>
      <source>An EFI system partition is necessary to start %1.&lt;br/&gt;&lt;br/&gt;A partition was configured with mount point &lt;strong&gt;%2&lt;/strong&gt; but its &lt;strong&gt;%3&lt;/strong&gt; flag is not set.&lt;br/&gt;To set the flag, go back and edit the partition.&lt;br/&gt;&lt;br/&gt;You can continue without setting the flag but your system may fail to start.</source>
      <translation>Una partizione EFI è necessaria per avviare %1.&lt;br/&gt;&lt;br/&gt; Una partizione è stata configurata con punto di montaggio &lt;strong&gt;%2&lt;/strong&gt; ma il suo parametro &lt;strong&gt;%3&lt;/strong&gt; non è impostato.&lt;br/&gt;Per impostare il flag, tornare indietro e modificare la partizione.&lt;br/&gt;&lt;br/&gt;Si può continuare senza impostare il parametro ma il sistema potrebbe non avviarsi correttamente.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="441"/>
      <source>EFI system partition flag not set</source>
      <translation>Il flag della partizione EFI di sistema non è impostato.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="468"/>
      <source>Option to use GPT on BIOS</source>
      <translation>Opzione per usare GPT su BIOS</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="469"/>
      <source>A GPT partition table is the best option for all systems. This installer supports such a setup for BIOS systems too.&lt;br/&gt;&lt;br/&gt;To configure a GPT partition table on BIOS, (if not done so already) go back and set the partition table to GPT, next create a 8 MB unformatted partition with the &lt;strong&gt;bios_grub&lt;/strong&gt; flag enabled.&lt;br/&gt;&lt;br/&gt;An unformatted 8 MB partition is necessary to start %1 on a BIOS system with GPT.</source>
      <translation>Una tabella partizioni GPT è la migliore opzione per tutti i sistemi. Comunque il programma d'installazione supporta anche la tabella di tipo BIOS. &lt;br/&gt;&lt;br/&gt;Per configurare una tabella partizioni GPT su BIOS (se non già configurata) tornare indietro e impostare la tabella partizioni a GPT e creare una partizione non formattata di 8 MB con opzione &lt;strong&gt;bios_grub&lt;/strong&gt; abilitata.&lt;br/&gt;&lt;br/&gt;Una partizione non formattata di 8 MB è necessaria per avviare %1 su un sistema BIOS con GPT.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="497"/>
      <source>Boot partition not encrypted</source>
      <translation>Partizione di avvio non criptata</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="498"/>
      <source>A separate boot partition was set up together with an encrypted root partition, but the boot partition is not encrypted.&lt;br/&gt;&lt;br/&gt;There are security concerns with this kind of setup, because important system files are kept on an unencrypted partition.&lt;br/&gt;You may continue if you wish, but filesystem unlocking will happen later during system startup.&lt;br/&gt;To encrypt the boot partition, go back and recreate it, selecting &lt;strong&gt;Encrypt&lt;/strong&gt; in the partition creation window.</source>
      <translation>E' stata configurata una partizione di avvio non criptata assieme ad una partizione root criptata. &lt;br/&gt;&lt;br/&gt;Ci sono problemi di sicurezza con questo tipo di configurazione perchè dei file di sistema importanti sono tenuti su una partizione non criptata.&lt;br/&gt;Si può continuare se lo si desidera ma dopo ci sarà lo sblocco del file system, durante l'avvio del sistema.&lt;br/&gt;Per criptare la partizione di avvio, tornare indietro e ricrearla, selezionando &lt;strong&gt;Criptare&lt;/strong&gt; nella finestra di creazione della partizione.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="626"/>
      <source>has at least one disk device available.</source>
      <translation>ha almeno un'unità disco disponibile.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionViewStep.cpp" line="627"/>
      <source>There are no partitions to install on.</source>
      <translation>Non ci sono partizioni su cui installare.</translation>
    </message>
  </context>
  <context>
    <name>PlasmaLnfJob</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="30"/>
      <source>Plasma Look-and-Feel Job</source>
      <translation>Job di Plasma Look-and-Feel</translation>
    </message>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="62"/>
      <location filename="../src/modules/plasmalnf/PlasmaLnfJob.cpp" line="63"/>
      <source>Could not select KDE Plasma Look-and-Feel package</source>
      <translation>Impossibile selezionare il pacchetto di KDE Plasma Look-and-Feel</translation>
    </message>
  </context>
  <context>
    <name>PlasmaLnfPage</name>
    <message>
      <location filename="../src/modules/plasmalnf/page_plasmalnf.ui" line="18"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="61"/>
      <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is set up. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
      <translation>Scegliere il tema per l'ambiente desktop KDE Plasma. Si può anche saltare questa scelta e configurare il tema dopo aver installato il sistema. Cliccando su selezione del tema, ne sarà mostrata un'anteprima. </translation>
    </message>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfPage.cpp" line="66"/>
      <source>Please choose a look-and-feel for the KDE Plasma Desktop. You can also skip this step and configure the look-and-feel once the system is installed. Clicking on a look-and-feel selection will give you a live preview of that look-and-feel.</source>
      <translation>Scegliere il tema per il desktop KDE Plasma. Si può anche saltare questa scelta e configurare il tema dopo aver installato il sistema. Cliccando su selezione del tema, ne sarà mostrata un'anteprima dal vivo. </translation>
    </message>
  </context>
  <context>
    <name>PlasmaLnfViewStep</name>
    <message>
      <location filename="../src/modules/plasmalnf/PlasmaLnfViewStep.cpp" line="61"/>
      <source>Look-and-Feel</source>
      <translation>Look-and-Feel</translation>
    </message>
  </context>
  <context>
    <name>PreserveFiles</name>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="79"/>
      <source>Saving files for later ...</source>
      <translation>Salvataggio dei file per dopo ...</translation>
    </message>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="118"/>
      <source>No files configured to save for later.</source>
      <translation>Nessun file configurato per dopo.</translation>
    </message>
    <message>
      <location filename="../src/modules/preservefiles/PreserveFiles.cpp" line="172"/>
      <source>Not all of the configured files could be preserved.</source>
      <translation>Non tutti i file configurati possono essere preservati.</translation>
    </message>
  </context>
  <context>
    <name>ProcessResult</name>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="412"/>
      <source>
There was no output from the command.</source>
      <translation>Non c'era output dal comando.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="413"/>
      <source>
Output:
</source>
      <translation>
Output:
</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="417"/>
      <source>External command crashed.</source>
      <translation>Il comando esterno si è arrestato.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="418"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; crashed.</source>
      <translation>Il comando &lt;i&gt;%1&lt;/i&gt; si è arrestato.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="423"/>
      <source>External command failed to start.</source>
      <translation>Il comando esterno non si è avviato.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="424"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; failed to start.</source>
      <translation>Il comando %1 non si è avviato.
</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="428"/>
      <source>Internal error when starting command.</source>
      <translation>Errore interno all'avvio del comando.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="429"/>
      <source>Bad parameters for process job call.</source>
      <translation>Parametri errati per elaborare la chiamata al job.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="433"/>
      <source>External command failed to finish.</source>
      <translation>Il comando esterno non è stato portato a termine.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="434"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; failed to finish in %2 seconds.</source>
      <translation>Il comando &lt;i&gt;%1&lt;/i&gt; non è stato portato a termine in %2 secondi.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="441"/>
      <source>External command finished with errors.</source>
      <translation>Il comando esterno è terminato con errori.</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/utils/CalamaresUtilsSystem.cpp" line="442"/>
      <source>Command &lt;i&gt;%1&lt;/i&gt; finished with exit code %2.</source>
      <translation>Il comando &lt;i&gt;%1&lt;/i&gt; è terminato con codice di uscita %2.</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../src/libcalamares/locale/Label.cpp" line="29"/>
      <source>%1 (%2)</source>
      <translation>%1 (%2)</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="28"/>
      <source>unknown</source>
      <translation>sconosciuto</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="30"/>
      <source>extended</source>
      <translation>estesa</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="32"/>
      <source>unformatted</source>
      <translation>non formattata</translation>
    </message>
    <message>
      <location filename="../src/libcalamares/partition/FileSystem.cpp" line="34"/>
      <source>swap</source>
      <translation>swap</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="90"/>
      <source>Default Keyboard Model</source>
      <translation>Modello tastiera di default</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="136"/>
      <location filename="../src/modules/keyboard/keyboardwidget/keyboardglobal.cpp" line="173"/>
      <source>Default</source>
      <translation>Default</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="64"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="72"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="76"/>
      <location filename="../src/modules/machineid/Workers.cpp" line="93"/>
      <source>File not found</source>
      <translation>File non trovato</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="65"/>
      <source>Path &lt;pre&gt;%1&lt;/pre&gt; must be an absolute path.</source>
      <translation>Il percorso &lt;pre&gt;%1&lt;/pre&gt; deve essere un percorso assoluto.</translation>
    </message>
    <message>
      <location filename="../src/modules/machineid/Workers.cpp" line="94"/>
      <source>Could not create new random file &lt;pre&gt;%1&lt;/pre&gt;.</source>
      <translation>Impossibile creare un nuovo file random &lt;pre&gt;%1&lt;/pre&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageModel.cpp" line="70"/>
      <source>No product</source>
      <translation>Nessun prodotto</translation>
    </message>
    <message>
      <location filename="../src/modules/packagechooser/PackageModel.cpp" line="78"/>
      <source>No description provided.</source>
      <translation>Non è stata fornita alcuna descrizione.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionDialogHelpers.cpp" line="40"/>
      <source>(no mount point)</source>
      <translation>(nessun mount point)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/PartitionLabelsView.cpp" line="41"/>
      <source>Unpartitioned space or unknown partition table</source>
      <translation>Spazio non partizionato o tabella delle partizioni sconosciuta</translation>
    </message>
  </context>
  <context>
    <name>Recommended</name>
    <message>
      <location filename="../src/modules/welcomeq/Recommended.qml" line="40"/>
      <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
      <translation>Questo computer non soddisfa alcuni requisiti raccomandati per poter installare %1. L'installazione può continuare, ma alcune funzionalità potrebbero essere disabilitate. </translation>
    </message>
  </context>
  <context>
    <name>RemoveUserJob</name>
    <message>
      <location filename="../src/modules/removeuser/RemoveUserJob.cpp" line="34"/>
      <source>Remove live user from target system</source>
      <translation>Rimuovi l'utente live dal sistema di destinazione</translation>
    </message>
  </context>
  <context>
    <name>RemoveVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="24"/>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="36"/>
      <source>Remove Volume Group named %1.</source>
      <translation>Rimuovi Gruppo di Volumi denominato %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="30"/>
      <source>Remove Volume Group named &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Rimuovi gruppo di volumi denominato &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/RemoveVolumeGroupJob.cpp" line="48"/>
      <source>The installer failed to remove a volume group named '%1'.</source>
      <translation>Il programma di installazione non è riuscito a rimuovere il gruppo di volumi denominato '%1'.</translation>
    </message>
  </context>
  <context>
    <name>ReplaceWidget</name>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.ui" line="18"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="123"/>
      <source>Select where to install %1.&lt;br/&gt;&lt;font color="red"&gt;Warning: &lt;/font&gt;this will delete all files on the selected partition.</source>
      <translation>Selezionare dove installare %1.&lt;br/&gt;&lt;font color="red"&gt;Attenzione: &lt;/font&gt;questo eliminerà tutti i file dalla partizione selezionata.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="145"/>
      <source>The selected item does not appear to be a valid partition.</source>
      <translation>L'elemento selezionato non sembra essere una partizione valida.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="153"/>
      <source>%1 cannot be installed on empty space. Please select an existing partition.</source>
      <translation>%1 non può essere installato su spazio non partizionato. Si prega di selezionare una partizione esistente.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="163"/>
      <source>%1 cannot be installed on an extended partition. Please select an existing primary or logical partition.</source>
      <translation>%1 non può essere installato su una partizione estesa. Si prega di selezionare una partizione primaria o logica esistente.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="173"/>
      <source>%1 cannot be installed on this partition.</source>
      <translation>%1 non può essere installato su questa partizione.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="179"/>
      <source>Data partition (%1)</source>
      <translation>Partizione dati (%1)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="199"/>
      <source>Unknown system partition (%1)</source>
      <translation>Partizione di sistema sconosciuta (%1)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="203"/>
      <source>%1 system partition (%2)</source>
      <translation>%1 partizione di sistema (%2)</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="214"/>
      <source>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;The partition %1 is too small for %2. Please select a partition with capacity at least %3 GiB.</source>
      <translation>&lt;strong&gt;%4&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;La partizione %1 è troppo piccola per %2. Si prega di selezionare una partizione con capacità di almeno %3 GiB.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="236"/>
      <source>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;An EFI system partition cannot be found anywhere on this system. Please go back and use manual partitioning to set up %1.</source>
      <translation>&lt;strong&gt;%2&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Nessuna partizione EFI di sistema rilevata. Si prega di tornare indietro e usare il partizionamento manuale per configurare %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="247"/>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="263"/>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="288"/>
      <source>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 will be installed on %2.&lt;br/&gt;&lt;font color="red"&gt;Warning: &lt;/font&gt;all data on partition %2 will be lost.</source>
      <translation>&lt;strong&gt;%3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;%1 sarà installato su %2.&lt;br/&gt;&lt;font color="red"&gt;Attenzione: &lt;/font&gt;tutti i dati sulla partizione %2 saranno persi.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="255"/>
      <source>The EFI system partition at %1 will be used for starting %2.</source>
      <translation>La partizione EFI di sistema a %1 sarà usata per avviare %2.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ReplaceWidget.cpp" line="271"/>
      <source>EFI system partition:</source>
      <translation>Partizione EFI di sistema:</translation>
    </message>
  </context>
  <context>
    <name>Requirements</name>
    <message>
      <location filename="../src/modules/welcomeq/Requirements.qml" line="38"/>
      <source>&lt;p&gt;This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;
        Installation cannot continue.&lt;/p&gt;</source>
      <translation>Questo computer non soddisfa i requisiti minimi per poter installare %1. L'installazione non può continuare.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/Requirements.qml" line="40"/>
      <source>&lt;p&gt;This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;
        Setup can continue, but some features might be disabled.&lt;/p&gt;</source>
      <translation>Questo computer non soddisfa alcuni requisiti raccomandati per poter installare %1. L'installazione può continuare, ma alcune funzionalità potrebbero essere disabilitate. </translation>
    </message>
  </context>
  <context>
    <name>ResizeFSJob</name>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="46"/>
      <source>Resize Filesystem Job</source>
      <translation>Operazione di ridimensionamento del Filesystem</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="169"/>
      <source>Invalid configuration</source>
      <translation>Configurazione non valida</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="170"/>
      <source>The file-system resize job has an invalid configuration and will not run.</source>
      <translation>L'operazione di ridimensionamento del file-system ha una configurazione non valida e non verrà effettuata.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="175"/>
      <source>KPMCore not Available</source>
      <translation>KPMCore non Disponibile</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="176"/>
      <source>Calamares cannot start KPMCore for the file-system resize job.</source>
      <translation>Calamares non riesce ad avviare KPMCore per ridimensionare il file-system.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="184"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="193"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="204"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="213"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="231"/>
      <source>Resize Failed</source>
      <translation>Ridimensionamento fallito.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="186"/>
      <source>The filesystem %1 could not be found in this system, and cannot be resized.</source>
      <translation>Il filesystem %1 non è stato trovato su questo sistema, e non può essere ridimensionato.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="187"/>
      <source>The device %1 could not be found in this system, and cannot be resized.</source>
      <translation>Il dispositivo %1 non è stato trovato su questo sistema, e non può essere ridimensionato.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="195"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="206"/>
      <source>The filesystem %1 cannot be resized.</source>
      <translation>Il filesystem %1 non può essere ridimensionato.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="196"/>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="207"/>
      <source>The device %1 cannot be resized.</source>
      <translation>Il dispositivo %1 non può essere ridimensionato.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="214"/>
      <source>The filesystem %1 must be resized, but cannot.</source>
      <translation>Il filesystem %1 deve essere ridimensionato, ma non è possibile farlo.</translation>
    </message>
    <message>
      <location filename="../src/modules/fsresizer/ResizeFSJob.cpp" line="215"/>
      <source>The device %1 must be resized, but cannot</source>
      <translation>Il dispositivo %1 deve essere ridimensionato, non è possibile farlo</translation>
    </message>
  </context>
  <context>
    <name>ResizePartitionJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="40"/>
      <source>Resize partition %1.</source>
      <translation>Ridimensionare la partizione %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="47"/>
      <source>Resize &lt;strong&gt;%2MiB&lt;/strong&gt; partition &lt;strong&gt;%1&lt;/strong&gt; to &lt;strong&gt;%3MiB&lt;/strong&gt;.</source>
      <translation>Ridimensionare la partizione &lt;strong&gt;%1&lt;/strong&gt; da &lt;strong&gt;%2MiB&lt;/strong&gt; a &lt;strong&gt;%3MiB&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="58"/>
      <source>Resizing %2MiB partition %1 to %3MiB.</source>
      <translation>Sto ridimensionando la partizione %1 di dimensione %2MiB a %3MiB.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizePartitionJob.cpp" line="77"/>
      <source>The installer failed to resize partition %1 on disk '%2'.</source>
      <translation>Il programma di installazione non è riuscito a ridimensionare la partizione %1 sul disco '%2'.</translation>
    </message>
  </context>
  <context>
    <name>ResizeVolumeGroupDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/ResizeVolumeGroupDialog.cpp" line="30"/>
      <source>Resize Volume Group</source>
      <translation>RIdimensiona Gruppo di Volumi</translation>
    </message>
  </context>
  <context>
    <name>ResizeVolumeGroupJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="27"/>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="45"/>
      <source>Resize volume group named %1 from %2 to %3.</source>
      <translation>Ridimensiona il gruppo di volumi con nome %1 da %2 a %3.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="36"/>
      <source>Resize volume group named &lt;strong&gt;%1&lt;/strong&gt; from &lt;strong&gt;%2&lt;/strong&gt; to &lt;strong&gt;%3&lt;/strong&gt;.</source>
      <translation>Ridimensiona il gruppo di volumi con nome &lt;strong&gt;%1&lt;/strong&gt; da &lt;strong&gt;%2&lt;/strong&gt; a &lt;strong&gt;%3&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/ResizeVolumeGroupJob.cpp" line="60"/>
      <source>The installer failed to resize a volume group named '%1'.</source>
      <translation>Il programma di installazione non è riuscito a ridimensionare un volume di gruppo di nome '%1'</translation>
    </message>
  </context>
  <context>
    <name>ResultsListDialog</name>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="133"/>
      <source>For best results, please ensure that this computer:</source>
      <translation>Per ottenere prestazioni ottimali, assicurarsi che questo computer:</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="134"/>
      <source>System requirements</source>
      <translation>Requisiti di sistema</translation>
    </message>
  </context>
  <context>
    <name>ResultsListWidget</name>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="256"/>
      <source>This computer does not satisfy the minimum requirements for setting up %1.&lt;br/&gt;Setup cannot continue. &lt;a href="#details"&gt;Details...&lt;/a&gt;</source>
      <translation>Questo computer non soddisfa i requisiti minimi per l'installazione di %1.&lt;br/&gt;L'installazione non può continuare. &lt;a href="#details"&gt;Dettagli...&lt;/a&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="260"/>
      <source>This computer does not satisfy the minimum requirements for installing %1.&lt;br/&gt;Installation cannot continue. &lt;a href="#details"&gt;Details...&lt;/a&gt;</source>
      <translation>Questo computer non soddisfa i requisiti minimi per installare %1. &lt;br/&gt;L'installazione non può proseguire. &lt;a href="#details"&gt;Dettagli...&lt;/a&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="267"/>
      <source>This computer does not satisfy some of the recommended requirements for setting up %1.&lt;br/&gt;Setup can continue, but some features might be disabled.</source>
      <translation>Questo computer non soddisfa alcuni requisiti raccomandati per l'installazione di %1.&lt;br/&gt;L'installazione può continuare, ma alcune funzionalità potrebbero essere disabilitate.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="271"/>
      <source>This computer does not satisfy some of the recommended requirements for installing %1.&lt;br/&gt;Installation can continue, but some features might be disabled.</source>
      <translation>Questo computer non soddisfa alcuni requisiti consigliati per l'installazione di %1. &lt;br/&gt;L'installazione può proseguire ma alcune funzionalità potrebbero non essere disponibili.</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/checker/ResultsListWidget.cpp" line="280"/>
      <source>This program will ask you some questions and set up %2 on your computer.</source>
      <translation>Questo programma chiederà alcune informazioni e configurerà %2 sul computer.</translation>
    </message>
  </context>
  <context>
    <name>ScanningDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="64"/>
      <source>Scanning storage devices...</source>
      <translation>Rilevamento dei dispositivi di memoria...</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/ScanningDialog.cpp" line="64"/>
      <source>Partitioning</source>
      <translation>Partizionamento</translation>
    </message>
  </context>
  <context>
    <name>SetHostNameJob</name>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="37"/>
      <source>Set hostname %1</source>
      <translation>Impostare hostname %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="44"/>
      <source>Set hostname &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Impostare hostname &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="51"/>
      <source>Setting hostname %1.</source>
      <translation>Impostare hostname %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="122"/>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="129"/>
      <source>Internal Error</source>
      <translation>Errore interno</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="137"/>
      <location filename="../src/modules/users/SetHostNameJob.cpp" line="146"/>
      <source>Cannot write hostname to target system</source>
      <translation>Impossibile scrivere l'hostname nel sistema di destinazione</translation>
    </message>
  </context>
  <context>
    <name>SetKeyboardLayoutJob</name>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="53"/>
      <source>Set keyboard model to %1, layout to %2-%3</source>
      <translation>Imposta il modello di tastiera a %1, con layout %2-%3</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="345"/>
      <source>Failed to write keyboard configuration for the virtual console.</source>
      <translation>Impossibile scrivere la configurazione della tastiera per la console virtuale.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="346"/>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="350"/>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="357"/>
      <source>Failed to write to %1</source>
      <translation>Impossibile scrivere su %1</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="349"/>
      <source>Failed to write keyboard configuration for X11.</source>
      <translation>Impossibile scrivere la configurazione della tastiera per X11.</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboard/SetKeyboardLayoutJob.cpp" line="356"/>
      <source>Failed to write keyboard configuration to existing /etc/default directory.</source>
      <translation>Impossibile scrivere la configurazione della tastiera nella cartella /etc/default.</translation>
    </message>
  </context>
  <context>
    <name>SetPartFlagsJob</name>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="43"/>
      <source>Set flags on partition %1.</source>
      <translation>Impostare i flag sulla partizione: %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="49"/>
      <source>Set flags on %1MiB %2 partition.</source>
      <translation>Impostare le flag sulla partizione %2 da %1MiB.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="53"/>
      <source>Set flags on new partition.</source>
      <translation>Impostare i flag sulla nuova partizione.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="65"/>
      <source>Clear flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Rimuovere i flag sulla partizione &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="71"/>
      <source>Clear flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
      <translation>Rimuovere le flag dalla partizione &lt;strong&gt;%2&lt;/strong&gt; da %1MiB.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="75"/>
      <source>Clear flags on new partition.</source>
      <translation>Rimuovere i flag dalla nuova partizione.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="80"/>
      <source>Flag partition &lt;strong&gt;%1&lt;/strong&gt; as &lt;strong&gt;%2&lt;/strong&gt;.</source>
      <translation>Flag di partizione &lt;strong&gt;%1&lt;/strong&gt; come &lt;strong&gt;%2&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="89"/>
      <source>Flag %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition as &lt;strong&gt;%3&lt;/strong&gt;.</source>
      <translation>Flag della partizione &lt;strong&gt;%2&lt;/strong&gt; da %1MiB impostate come &lt;strong&gt;%3&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="96"/>
      <source>Flag new partition as &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Flag della nuova partizione come &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="108"/>
      <source>Clearing flags on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Rimozione dei flag sulla partizione &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="114"/>
      <source>Clearing flags on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
      <translation>Rimozione delle flag sulla partizione &lt;strong&gt;%2&lt;/strong&gt; da %1MiB in corso.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="119"/>
      <source>Clearing flags on new partition.</source>
      <translation>Rimozione dei flag dalla nuova partizione.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="124"/>
      <source>Setting flags &lt;strong&gt;%2&lt;/strong&gt; on partition &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation>Impostazione dei flag &lt;strong&gt;%2&lt;/strong&gt; sulla partizione &lt;strong&gt;%1&lt;/strong&gt;.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="133"/>
      <source>Setting flags &lt;strong&gt;%3&lt;/strong&gt; on %1MiB &lt;strong&gt;%2&lt;/strong&gt; partition.</source>
      <translation>Impostazione delle flag &lt;strong&gt;%3&lt;/strong&gt; sulla partizione &lt;strong&gt;%2&lt;/strong&gt; da %1MiB in corso.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="140"/>
      <source>Setting flags &lt;strong&gt;%1&lt;/strong&gt; on new partition.</source>
      <translation>Impostazione dei flag &lt;strong&gt;%1&lt;/strong&gt; sulla nuova partizione.</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/jobs/SetPartitionFlagsJob.cpp" line="156"/>
      <source>The installer failed to set flags on partition %1.</source>
      <translation>Impossibile impostare i flag sulla partizione %1.</translation>
    </message>
  </context>
  <context>
    <name>SetPasswordJob</name>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="40"/>
      <source>Set password for user %1</source>
      <translation>Impostare la password per l'utente %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="47"/>
      <source>Setting password for user %1.</source>
      <translation>Impostare la password per l'utente %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="81"/>
      <source>Bad destination system path.</source>
      <translation>Percorso di destinazione del sistema errato.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="82"/>
      <source>rootMountPoint is %1</source>
      <translation>punto di mount per root è %1</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="88"/>
      <source>Cannot disable root account.</source>
      <translation>Impossibile disabilitare l'account di root.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="89"/>
      <source>passwd terminated with error code %1.</source>
      <translation>passwd è terminato con codice di errore %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="97"/>
      <source>Cannot set password for user %1.</source>
      <translation>Impossibile impostare la password per l'utente %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/users/SetPasswordJob.cpp" line="98"/>
      <source>usermod terminated with error code %1.</source>
      <translation>usermod si è chiuso con codice di errore %1.</translation>
    </message>
  </context>
  <context>
    <name>SetTimezoneJob</name>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="34"/>
      <source>Set timezone to %1/%2</source>
      <translation>Impostare il fuso orario su %1%2</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="62"/>
      <source>Cannot access selected timezone path.</source>
      <translation>Impossibile accedere al percorso della timezone selezionata.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="63"/>
      <source>Bad path: %1</source>
      <translation>Percorso errato: %1</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="71"/>
      <source>Cannot set timezone.</source>
      <translation>Impossibile impostare il fuso orario.</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="72"/>
      <source>Link creation failed, target: %1; link name: %2</source>
      <translation>Impossibile creare il link, destinazione: %1; nome del link: %2</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="77"/>
      <source>Cannot set timezone,</source>
      <translation>Impossibile impostare il fuso orario,</translation>
    </message>
    <message>
      <location filename="../src/modules/locale/SetTimezoneJob.cpp" line="78"/>
      <source>Cannot open /etc/timezone for writing</source>
      <translation>Impossibile aprire il file /etc/timezone in scrittura</translation>
    </message>
  </context>
  <context>
    <name>ShellProcessJob</name>
    <message>
      <location filename="../src/modules/shellprocess/ShellProcessJob.cpp" line="37"/>
      <source>Shell Processes Job</source>
      <translation>Job dei processi della shell</translation>
    </message>
  </context>
  <context>
    <name>SlideCounter</name>
    <message>
      <location filename="../src/qml/calamares/slideshow/SlideCounter.qml" line="27"/>
      <source>%L1 / %L2</source>
      <extracomment>slide counter, %1 of %2 (numeric)</extracomment>
      <translation>%L1 / %L2</translation>
    </message>
  </context>
  <context>
    <name>SummaryPage</name>
    <message>
      <location filename="../src/modules/summary/SummaryPage.cpp" line="47"/>
      <source>This is an overview of what will happen once you start the setup procedure.</source>
      <translation>Questa è una panoramica di quello che succederà una volta avviata la procedura di configurazione.</translation>
    </message>
    <message>
      <location filename="../src/modules/summary/SummaryPage.cpp" line="49"/>
      <source>This is an overview of what will happen once you start the install procedure.</source>
      <translation>Una panoramica delle modifiche che saranno effettuate una volta avviata la procedura di installazione.</translation>
    </message>
  </context>
  <context>
    <name>SummaryViewStep</name>
    <message>
      <location filename="../src/modules/summary/SummaryViewStep.cpp" line="36"/>
      <source>Summary</source>
      <translation>Riepilogo</translation>
    </message>
  </context>
  <context>
    <name>TrackingInstallJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="37"/>
      <source>Installation feedback</source>
      <translation>Valutazione dell'installazione</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="43"/>
      <source>Sending installation feedback.</source>
      <translation>Invio della valutazione dell'installazione.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="60"/>
      <source>Internal error in install-tracking.</source>
      <translation>Errore interno in install-tracking.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="61"/>
      <source>HTTP request timed out.</source>
      <translation>La richiesta HTTP è scaduta.</translation>
    </message>
  </context>
  <context>
    <name>TrackingKUserFeedbackJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="122"/>
      <source>KDE user feedback</source>
      <translation>Riscontro dell'utente di KDE </translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="128"/>
      <source>Configuring KDE user feedback.</source>
      <translation>Sto configurando il riscontro dell'utente di KDE</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="150"/>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="156"/>
      <source>Error in KDE user feedback configuration.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="151"/>
      <source>Could not configure KDE user feedback correctly, script error %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="157"/>
      <source>Could not configure KDE user feedback correctly, Calamares error %1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>TrackingMachineUpdateManagerJob</name>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="71"/>
      <source>Machine feedback</source>
      <translation>Valutazione automatica</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="77"/>
      <source>Configuring machine feedback.</source>
      <translation>Configurazione in corso della valutazione automatica.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="100"/>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="106"/>
      <source>Error in machine feedback configuration.</source>
      <translation>Errore nella configurazione della valutazione automatica.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="101"/>
      <source>Could not configure machine feedback correctly, script error %1.</source>
      <translation>Non è stato possibile configurare correttamente la valutazione automatica, errore dello script %1.</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingJobs.cpp" line="107"/>
      <source>Could not configure machine feedback correctly, Calamares error %1.</source>
      <translation>Non è stato possibile configurare correttamente la valutazione automatica, errore di Calamares %1.</translation>
    </message>
  </context>
  <context>
    <name>TrackingPage</name>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="18"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="28"/>
      <source>Placeholder</source>
      <translation>Segnaposto</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="76"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Click here to send &lt;span style=" font-weight:600;"&gt;no information at all&lt;/span&gt; about your installation.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/page_trackingstep.ui" line="275"/>
      <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;a href="placeholder"&gt;&lt;span style=" text-decoration: underline; color:#2980b9;"&gt;Click here for more information about user feedback&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
      <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;a href="placeholder"&gt;&lt;span style=" text-decoration: underline; color:#2980b9;"&gt;Cliccare qui per maggiori informazioni sulla valutazione degli utenti&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="86"/>
      <source>Tracking helps %1 to see how often it is installed, what hardware it is installed on and which applications are used. To see what will be sent, please click the help icon next to each area.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="91"/>
      <source>By selecting this you will send information about your installation and hardware. This information will only be sent &lt;b&gt;once&lt;/b&gt; after the installation finishes.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="94"/>
      <source>By selecting this you will periodically send information about your &lt;b&gt;machine&lt;/b&gt; installation, hardware and applications, to %1.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/tracking/TrackingPage.cpp" line="98"/>
      <source>By selecting this you will regularly send information about your &lt;b&gt;user&lt;/b&gt; installation, hardware, applications and application usage patterns, to %1.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>TrackingViewStep</name>
    <message>
      <location filename="../src/modules/tracking/TrackingViewStep.cpp" line="49"/>
      <source>Feedback</source>
      <translation>Valutazione</translation>
    </message>
  </context>
  <context>
    <name>UsersPage</name>
    <message>
      <location filename="../src/modules/users/UsersPage.cpp" line="156"/>
      <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after setup.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Se più di una persona utilizzerà questo computer, puoi creare ulteriori account dopo la configurazione.&lt;/small&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/users/UsersPage.cpp" line="162"/>
      <source>&lt;small&gt;If more than one person will use this computer, you can create multiple accounts after installation.&lt;/small&gt;</source>
      <translation>&lt;small&gt;Se più di una persona utilizzerà questo computer, puoi creare ulteriori account dopo l'installazione.&lt;/small&gt;</translation>
    </message>
  </context>
  <context>
    <name>UsersQmlViewStep</name>
    <message>
      <location filename="../src/modules/usersq/UsersQmlViewStep.cpp" line="39"/>
      <source>Users</source>
      <translation>Utenti</translation>
    </message>
  </context>
  <context>
    <name>UsersViewStep</name>
    <message>
      <location filename="../src/modules/users/UsersViewStep.cpp" line="48"/>
      <source>Users</source>
      <translation>Utenti</translation>
    </message>
  </context>
  <context>
    <name>VariantModel</name>
    <message>
      <location filename="../src/calamares/VariantModel.cpp" line="232"/>
      <source>Key</source>
      <translation>Chiave</translation>
    </message>
    <message>
      <location filename="../src/calamares/VariantModel.cpp" line="236"/>
      <source>Value</source>
      <translation>Valore</translation>
    </message>
  </context>
  <context>
    <name>VolumeGroupBaseDialog</name>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="18"/>
      <source>Create Volume Group</source>
      <translation>Crea Gruppo di Volumi</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="24"/>
      <source>List of Physical Volumes</source>
      <translation>Lista dei volumi fisici</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="34"/>
      <source>Volume Group Name:</source>
      <translation>Nome Volume Group:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="47"/>
      <source>Volume Group Type:</source>
      <translation>Tipo Volume Group:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="60"/>
      <source>Physical Extent Size:</source>
      <translation>Dimensione fisica dell'estensione:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="70"/>
      <source> MiB</source>
      <translation>MiB</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="86"/>
      <source>Total Size:</source>
      <translation>Dimensione totale:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="106"/>
      <source>Used Size:</source>
      <translation>Dimensione utilizzata:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="126"/>
      <source>Total Sectors:</source>
      <translation>Totale Settori:</translation>
    </message>
    <message>
      <location filename="../src/modules/partition/gui/VolumeGroupBaseDialog.ui" line="146"/>
      <source>Quantity of LVs:</source>
      <translation>Numero di LV:</translation>
    </message>
  </context>
  <context>
    <name>WelcomePage</name>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="18"/>
      <source>Form</source>
      <translation>Modulo</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="79"/>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="98"/>
      <source>Select application and system language</source>
      <translation>Selezionare lingua per l'applicazione e il sistema</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="140"/>
      <source>&amp;About</source>
      <translation>&amp;Informazioni su</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="150"/>
      <source>Open donations website</source>
      <translation>Apri il sito web per le donazioni</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="153"/>
      <source>&amp;Donate</source>
      <translation>&amp;Donazioni</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="163"/>
      <source>Open help and support website</source>
      <translation>Apri il sito web per l'aiuto ed il supporto</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="166"/>
      <source>&amp;Support</source>
      <translation>&amp;Supporto</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="176"/>
      <source>Open issues and bug-tracking website</source>
      <translation>Apri il sito per la gestione di problemi e bug</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="179"/>
      <source>&amp;Known issues</source>
      <translation>&amp;Problemi conosciuti</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="189"/>
      <source>Open release notes website</source>
      <translation>Apri il sito web delle note di rilascio</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.ui" line="192"/>
      <source>&amp;Release notes</source>
      <translation>&amp;Note di rilascio</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="216"/>
      <source>&lt;h1&gt;Welcome to the Calamares setup program for %1.&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Benvenuto nel programma di installazione Calamares di %1.&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="217"/>
      <source>&lt;h1&gt;Welcome to %1 setup.&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Benvenuto nell'installazione di %1.&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="222"/>
      <source>&lt;h1&gt;Welcome to the Calamares installer for %1.&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Benvenuti nel programma di installazione Calamares per %1.&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="223"/>
      <source>&lt;h1&gt;Welcome to the %1 installer.&lt;/h1&gt;</source>
      <translation>&lt;h1&gt;Benvenuto nel programma d'installazione di %1.&lt;/h1&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="228"/>
      <source>%1 support</source>
      <translation>supporto %1</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="235"/>
      <source>About %1 setup</source>
      <translation>Informazioni sul sistema di configurazione %1</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="235"/>
      <source>About %1 installer</source>
      <translation>Informazioni sul programma di installazione %1</translation>
    </message>
    <message>
      <location filename="../src/modules/welcome/WelcomePage.cpp" line="238"/>
      <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2020 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Thanks to &lt;a href="https://calamares.io/team/"&gt;the Calamares team&lt;/a&gt; and the &lt;a href="https://www.transifex.com/calamares/calamares/"&gt;Calamares translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;&lt;a href="https://calamares.io/"&gt;Calamares&lt;/a&gt; development is sponsored by &lt;br/&gt;&lt;a href="http://www.blue-systems.com/"&gt;Blue Systems&lt;/a&gt; - Liberating Software.</source>
      <translation>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;&lt;strong&gt;%2&lt;br/&gt;per %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;Copyright 2017-2020 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;Grazie al &lt;a href="https://calamares.io/team/"&gt;Team di Calamares &lt;/a&gt; ed al &lt;a href="https://www.transifex.com/calamares/calamares/"&gt;team dei traduttori di Calamares&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;Lo sviluppo di &lt;a href="https://calamares.io/"&gt;Calamares&lt;/a&gt; è sponsorizzato da &lt;br/&gt;&lt;a href="http://www.blue-systems.com/"&gt;Blue Systems&lt;/a&gt; - Liberating Software.</translation>
    </message>
  </context>
  <context>
    <name>WelcomeQmlViewStep</name>
    <message>
      <location filename="../src/modules/welcomeq/WelcomeQmlViewStep.cpp" line="41"/>
      <source>Welcome</source>
      <translation>Benvenuti</translation>
    </message>
  </context>
  <context>
    <name>WelcomeViewStep</name>
    <message>
      <location filename="../src/modules/welcome/WelcomeViewStep.cpp" line="48"/>
      <source>Welcome</source>
      <translation>Benvenuti</translation>
    </message>
  </context>
  <context>
    <name>about</name>
    <message>
      <location filename="../src/modules/welcomeq/about.qml" line="47"/>
      <source>&lt;h1&gt;%1&lt;/h1&gt;&lt;br/&gt;
                        &lt;strong&gt;%2&lt;br/&gt;
                        for %3&lt;/strong&gt;&lt;br/&gt;&lt;br/&gt;
                        Copyright 2014-2017 Teo Mrnjavac &amp;lt;teo@kde.org&amp;gt;&lt;br/&gt;
                        Copyright 2017-2020 Adriaan de Groot &amp;lt;groot@kde.org&amp;gt;&lt;br/&gt;
                        Thanks to &lt;a href='https://calamares.io/team/'&gt;the Calamares team&lt;/a&gt;
                        and the &lt;a href='https://www.transifex.com/calamares/calamares/'&gt;Calamares
                        translators team&lt;/a&gt;.&lt;br/&gt;&lt;br/&gt;
                        &lt;a href='https://calamares.io/'&gt;Calamares&lt;/a&gt;
                        development is sponsored by &lt;br/&gt;
                        &lt;a href='http://www.blue-systems.com/'&gt;Blue Systems&lt;/a&gt; -
                        Liberating Software.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/about.qml" line="96"/>
      <source>Back</source>
      <translation>Indietro</translation>
    </message>
  </context>
  <context>
    <name>i18n</name>
    <message>
      <location filename="../src/modules/localeq/i18n.qml" line="46"/>
      <source>&lt;h1&gt;Languages&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the language and character set for some command line user interface elements. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/i18n.qml" line="106"/>
      <source>&lt;h1&gt;Locales&lt;/h1&gt; &lt;/br&gt;
                    The system locale setting affects the numbers and dates format. The current setting is &lt;strong&gt;%1&lt;/strong&gt;.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/localeq/i18n.qml" line="158"/>
      <source>Back</source>
      <translation>Indietro</translation>
    </message>
  </context>
  <context>
    <name>keyboardq</name>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="45"/>
      <source>Keyboard Model</source>
      <translation>Modello di tastiera</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="377"/>
      <source>Layouts</source>
      <translation>Schemi</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="148"/>
      <source>Keyboard Layout</source>
      <translation>Schemi tastiere</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="60"/>
      <source>Click your preferred keyboard model to select layout and variant, or use the default one based on the detected hardware.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="253"/>
      <source>Models</source>
      <translation>Modelli</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="260"/>
      <source>Variants</source>
      <translation>Varianti</translation>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="276"/>
      <source>Keyboard Variant</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/keyboardq/keyboardq.qml" line="386"/>
      <source>Test your keyboard</source>
      <translation>Provare la tastiera</translation>
    </message>
  </context>
  <context>
    <name>localeq</name>
    <message>
      <location filename="../src/modules/localeq/localeq.qml" line="81"/>
      <source>Change</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>notesqml</name>
    <message>
      <location filename="../src/modules/notesqml/notesqml.qml" line="50"/>
      <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;These are example release notes.&lt;/p&gt;</source>
      <translation>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;Questo è un esempio di note di rilascio.&lt;/p&gt;</translation>
    </message>
  </context>
  <context>
    <name>release_notes</name>
    <message>
      <location filename="../src/modules/welcomeq/release_notes.qml" line="45"/>
      <source>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;This an example QML file, showing options in RichText with Flickable content.&lt;/p&gt;

            &lt;p&gt;QML with RichText can use HTML tags, Flickable content is useful for touchscreens.&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;This is bold text&lt;/b&gt;&lt;/p&gt;
            &lt;p&gt;&lt;i&gt;This is italic text&lt;/i&gt;&lt;/p&gt;
            &lt;p&gt;&lt;u&gt;This is underlined text&lt;/u&gt;&lt;/p&gt;
            &lt;p&gt;&lt;center&gt;This text will be center-aligned.&lt;/center&gt;&lt;/p&gt;
            &lt;p&gt;&lt;s&gt;This is strikethrough&lt;/s&gt;&lt;/p&gt;

            &lt;p&gt;Code example:
            &lt;code&gt;ls -l /home&lt;/code&gt;&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;Lists:&lt;/b&gt;&lt;/p&gt;
            &lt;ul&gt;
                &lt;li&gt;Intel CPU systems&lt;/li&gt;
                &lt;li&gt;AMD CPU systems&lt;/li&gt;
            &lt;/ul&gt;

            &lt;p&gt;The vertical scrollbar is adjustable, current width set to 10.&lt;/p&gt;</source>
      <translation>&lt;h3&gt;%1&lt;/h3&gt;
            &lt;p&gt;Questo è un file QML di esempio, che mostra le opzioni in RichText con contenuto scorrevole&lt;/p&gt;

            &lt;p&gt;QML con RichText può utilizzare tag HTML, il contenuto scorrevole è utile per i touchscreen.&lt;/p&gt;

            &lt;p&gt;&lt;b&gt;Questo è un testo in grassetto&lt;/b&gt;&lt;/p&gt;
            &lt;p&gt;&lt;i&gt;Questo è un testo in corsivo&lt;/i&gt;&lt;/p&gt;
            &lt;p&gt;&lt;u&gt;Questo è un testo sottolineato&lt;/u&gt;&lt;/p&gt;
            &lt;p&gt;&lt;center&gt;Questo testo sarà allineato al centro.&lt;/center&gt;&lt;/p&gt;
            &lt;p&gt;&lt;s&gt;Questo è un testo barrato&lt;/s&gt;&lt;/p&gt;

           &lt;p&gt;Esempio di codice:
           &lt;code&gt;ls -l /home&lt;/code&gt;&lt;/p&gt;

          &lt;p&gt;&lt;b&gt;Liste:&lt;/b&gt;&lt;/p&gt;
          &lt;ul&gt;
             &lt;li&gt;Sistemi con CPU Intel&lt;/li&gt;
             &lt;li&gt;Sistemi con CPU AMD&lt;/li&gt;
          &lt;/ul&gt;

          &lt;p&gt;La barra di scorrimento verticale è regolabile, la larghezza corrente è impostata a 10.&lt;/p&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/release_notes.qml" line="76"/>
      <source>Back</source>
      <translation>Indietro</translation>
    </message>
  </context>
  <context>
    <name>usersq</name>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="36"/>
      <source>Pick your user name and credentials to login and perform admin tasks</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="52"/>
      <source>What is your name?</source>
      <translation>Qual è il tuo nome?</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="59"/>
      <source>Your Full Name</source>
      <translation>Nome Completo</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="80"/>
      <source>What name do you want to use to log in?</source>
      <translation>Quale nome usare per l'autenticazione?</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="87"/>
      <source>Login Name</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="103"/>
      <source>If more than one person will use this computer, you can create multiple accounts after installation.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="118"/>
      <source>What is the name of this computer?</source>
      <translation>Qual è il nome di questo computer?</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="125"/>
      <source>Computer Name</source>
      <translation>Nome Computer</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="140"/>
      <source>This name will be used if you make the computer visible to others on a network.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="155"/>
      <source>Choose a password to keep your account safe.</source>
      <translation>Scegliere una password per rendere sicuro il tuo account.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="166"/>
      <source>Password</source>
      <translation>Password</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="185"/>
      <source>Repeat Password</source>
      <translation>Ripetere Password</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="204"/>
      <source>Enter the same password twice, so that it can be checked for typing errors. A good password will contain a mixture of letters, numbers and punctuation, should be at least eight characters long, and should be changed at regular intervals.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="216"/>
      <source>Validate passwords quality</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="226"/>
      <source>When this box is checked, password-strength checking is done and you will not be able to use a weak password..</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="234"/>
      <source>Log in automatically without asking for the password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="243"/>
      <source>Reuse user password as root password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="253"/>
      <source>Use the same password for the administrator account.</source>
      <translation>Usare la stessa password per l'account amministratore.</translation>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="268"/>
      <source>Choose a root password to keep your account safe.</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="279"/>
      <source>Root Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="298"/>
      <source>Repeat Root Password</source>
      <translation type="unfinished"/>
    </message>
    <message>
      <location filename="../src/modules/usersq/usersq.qml" line="318"/>
      <source>Enter the same password twice, so that it can be checked for typing errors.</source>
      <translation type="unfinished"/>
    </message>
  </context>
  <context>
    <name>welcomeq</name>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="35"/>
      <source>&lt;h3&gt;Welcome to the %1 &lt;quote&gt;%2&lt;/quote&gt; installer&lt;/h3&gt;
            &lt;p&gt;This program will ask you some questions and set up %1 on your computer.&lt;/p&gt;</source>
      <translation>&lt;h3&gt;Benvenuti al programma d'installazione %1 &lt;quote&gt;%2&lt;/quote&gt;&lt;/h3&gt;
&lt;p&gt;</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="66"/>
      <source>About</source>
      <translation>Informazioni su</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="80"/>
      <source>Support</source>
      <translation>Supporto</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="91"/>
      <source>Known issues</source>
      <translation>Problemi conosciuti</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="102"/>
      <source>Release notes</source>
      <translation>Note di rilascio</translation>
    </message>
    <message>
      <location filename="../src/modules/welcomeq/welcomeq.qml" line="114"/>
      <source>Donate</source>
      <translation>Donazioni</translation>
    </message>
  </context>
</TS>
