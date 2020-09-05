import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Toolbar, Hidden } from '@material-ui/core'
import PageContentHeader from '../../../Components/common/PageContentHeader'
import RightContentNav from '../../../Components/layouts/RightContentNav'
import Wrapper from '../Wrapper'
import styles from '../css/styles.module.css'

const Punctuation = () => {
  const classes = useStyles()

  const headingIds = [
    'fragment-vrsus-sentences',
    'commas',
    'intonation-marks',
    'colon-and-quotation',
    'other-symbols',
    'spoken-punctuation',
  ]

  return (
    <Wrapper>
      <Grid container>
        <Grid sm={12} md={9} item>
          <Paper className={classes.content}>
            <Toolbar />
            {/*  */}
            <PageContentHeader currentPage="longform Telugu" />
            <div className="content text">
              <p className={'large-heading'}>Punctuation </p>
              <p className={'text'}>
                Follow the punctuation regulations of your language. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={'text'}>
                  Answers to questions and sentences with dropped subjects
                  should be transcribed as complete sentences.
                </p>
                <p className={styles.block_921}>
                  <span className={styles.text_6}>
                    Correct: క ర ఉ ా? ల ర .{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: "ల ర " అన ప ాక ం ాక{' '}
                  </span>
                </p>
                <p className={styles.block_922}>అ ప శ సహజం ా వ సమ నం కనుక</p>
                <p className={styles.block_923}>ప ాక ంల ాయ .</p>
                <p className={styles.block_924}>Correct: ా వసు ా?</p>
                <p className={styles.block_925}>Incorrect: ా వసు ా</p>
                <p className={styles.block_926}>
                  Explanation: కర ల నప ట ఇక డ య ఆ సమ ా క ఉండటం, ఇం ా అ సహజం ా ప
                  ం పద ావటం అల ాయ .
                </p>

                <p className={styles.block_929}>Correct: ప ంట ాడ</p>
                <p className={styles.block_640}>Incorrect: ప ంట ాడ .</p>
                <p className={styles.block_930}>
                  Explanation: ఇక డ " ర ంట ాడ " ఏ ప శ సమ నం ాదు ఇం ా ప ాక ం క
                  ాదు అందు ప ాక ం ా ప గణ ంచట దు.
                </p>

                <p className={'text'}>
                  Interjections, greetings, and farewells said in isolation
                  should include ending punctuation.
                </p>
                <p className={styles.block_934}>Correct: అబ .</p>
                <p className={styles.block_340}>Incorrect: అబ</p>
                <p className={styles.block_935}>
                  Explanation: "అబ ", " ", "ఆ ", "ఓహ " ఇ ఆశ ా ర ాల స న ామ హ ం ప
                  ాక ం ా ా డవచు .
                </p>

                <p className={styles.block_938}>Correct: .</p>
                <p className={styles.block_939}>Incorrect:</p>
                <p className={styles.block_940}>
                  Explanation: " ", "హల " వంట పలక ంప ల , "బ " వంట డ ల ల ఇ ాట స న
                  ప ాక ం ా ాడవచు . ామ హ ం
                </p>
                <p className={styles.block_936}></p>
                <p className={styles.block_941}></p>
                <p className={styles.block_942}>
                  Below are some examples of common interjections.
                </p>
                <p className={styles.block_943}>● అబ</p>
                <p className={styles.block_944}>● ాం ల</p>
                <p className={styles.block_945}>● ఆ</p>
                <p className={styles.block_946}>
                  <span className={styles.text_22}>● </span>
                  అమ
                </p>
                <p className={styles.block_947}>● ఓ</p>
                <p className={styles.block_948}>● ఓ వ</p>
                <p className={styles.block_943}>● వ</p>
                <p className={styles.block_949}>
                  Do not add ending punctuation to web search queries. Web
                  search queries are spoken versions of what a person might type
                  into a Google search bar. Note: Web search queries are
                  different from voice action requests because they do not
                  include a command directed to a device.
                </p>
                <p className={styles.block_950}>Correct: గ ం ాయ యటం ఎల</p>
                <p className={styles.block_951}>Incorrect: గ ం ాయ యటం ఎల .</p>
                <p className={styles.block_952}>Explanation: ఇ ర , అందు వర</p>
                <p className={styles.block_953}>
                  ామ హ ం త ంచ ాదు, ఒక ళ ఇం ష పద
                </p>
                <p className={styles.block_954}>టల య ాదు.</p>
                <p className={styles.block_955}>Correct: గ ప</p>
                <p className={styles.block_302}>Incorrect: గ ప .</p>
                <p className={styles.block_956}>Explanation: ఇ క ర అందు</p>
                <p className={styles.block_957}>టల యటం ల వర ామ హ ం ట టం</p>
                <p className={styles.block_958}>య ాదు.</p>
                <p className={styles.block_959}>
                  Add end punctuation to phrases that sound like the end of a
                  sentence. If they do not clearly sound like the end of a
                  sentence, leave out ending punctuation. Remember that some
                  sentences may sound incomplete because the audio has been cut
                  off.
                </p>
                <p className={styles.block_960}>Correct: కష , ాశపడక .</p>
                <p className={styles.block_961}>Incorrect: కష , ాశపడక</p>
                <p className={styles.block_962}>
                  Explanation: ా ా ంతంల ా ఉండటం ామ
                </p>
                <p className={styles.block_963}>ట టం జ ం .</p>
                <p className={styles.block_964}>Correct: ఎంత ఎక డ చు?</p>
                <p className={styles.block_965}>Incorrect: ఎంత- ఎక డ చు?</p>
                <p className={styles.block_966}>
                  Explanation: దట పదం ప శ ఆరంభంల క ం
                </p>
                <p className={styles.block_967}>ఎట వంట అదనప సమ రం ల క వటం</p>
                <p className={styles.block_968}>Incorrect: ఎంత... ఎక డ చు?</p>
                <p className={styles.block_969}>Incorrect: ఎంత? ఎక డ చు?</p>
                <p className={styles.block_970}>ామ హ ం ల క ం వ పదబం ామ</p>
                <p className={styles.block_971}>హ ం ట టం జ ం .</p>
                <p className={styles.block_972}>Correct: ళ త ంట మధ ల ఆ</p>
                <p className={styles.block_973}>Incorrect: ళ త ంట , మధ ల ఆ .</p>
                <p className={styles.block_974}>
                  Explanation: ఇ దల త ల అసంప ాక ం
                </p>
                <p className={styles.block_265}>అందువలన ామ హ ం ట టం తగదు.</p>
                <p className={styles.block_975}>
                  A voice action is a request or command spoken to a device and
                  includes a command verb. Transcribe all voice actions as
                  complete sentences.
                </p>
                <p className={styles.block_976}>Correct: ఉ హరణ@ ల . ా ల</p>
                <p className={styles.block_977}>పంప : , ఏంట సంగత ల ?</p>
                <p className={styles.block_978}>Incorrect: ఉ హరణ@ ల . ా ల</p>
                <p className={styles.block_979}>పంప : , ఏంట సంగత ల</p>
                <p className={styles.block_980}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఉ హరణ ఎ ల </span>
                </p>
                <p className={styles.block_981}>
                  <span className={styles.text_14}>ా ల పంప ఏంట సంగత ల </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_982}>
                  Explanation: స ర య అన ప ాక ం.
                </p>
                <p className={styles.block_983}>ామ హ ం ట .</p>
                <p className={styles.block_984}>
                  <span className={styles.text_6}>
                    Correct: గ ం ాయ వండటం త క .{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: ఈ ఉ హరణల యం ఆ శం{' '}
                  </span>
                </p>
                <p className={styles.block_985}>
                  ( త క ) ఇవ టం జ ం కనుక ఇ స ర య.
                </p>
                <p className={styles.block_986}>ా ా ంతప ామ ట ం .</p>
                <p className={styles.block_987}>
                  <span className={styles.text_6}>Correct: గ చూ ంచు. </span>
                  <span className={styles.text_7}>
                    Explanation: ఇందుల క యం ఆ శం{' '}
                  </span>
                </p>
                <p className={styles.block_988}>ఉన ందున (చూ ంచు) అ ఇ స ర య.</p>
                <p className={styles.block_989}>ామ హ ం ట .</p>
                <p className={styles.block_990}>
                  <span className={styles.text_6}>
                    Correct: 3:00 గంటల అల రం ట : ామ ను ా .{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: ఇందుల యం ఆ శం ( ట ){' '}
                  </span>
                </p>
                <p className={styles.block_991}>ఉన ందున, ఇ స ర య. ామ హ ం</p>
                <p className={styles.block_992}>ట .</p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  Use commas only when necessary. If you are unsure whether to
                  use a comma, leave it out.
                </p>
                <p className={styles.block_995}>
                  Do not transcribe pauses with commas.
                </p>
                <p className={styles.block_996}>Correct: దగ ల ట ల బంక ఎక డ?</p>
                <p className={styles.block_997}>
                  Incorrect: దగ ల ...దగ లల ... ట ల బంక ఎక డ?
                </p>
                <p className={styles.block_998}>
                  Incorrect: దగ ల , దగ ల , ట ల బంక ఎక డ?
                </p>
                <p className={styles.block_999}>
                  Explanation: వక సు ర ా ల ా నప ట అక డ ామ ల ట కం . ామ ల ట దగ ట ల
                  ఉంట ా ఉ హరణల అ ల వ . అవసర న
                </p>
                <p className={styles.block_1002}>Use commas in lists.</p>
                <p className={styles.block_1003}>Correct: ఆ అంద న, న, సర అమ</p>
                <p className={styles.block_1004}>నడ సు ం .</p>
                <p className={styles.block_1005}>Incorrect: ఆ అంద న న సర అమ</p>
                <p className={styles.block_1006}>నడ సు ం .</p>
                <p className={styles.block_1007}>
                  Explanation: వర స షణ ల మధ అంతరం సం
                </p>
                <p className={styles.block_1008}>
                  ఇక డ ామ ాడటం జ ం . వ షణం తర ాత
                </p>
                <p className={styles.block_1009}>ామ ాడ ాదు.</p>
                <p className={styles.block_1010}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_1011}>Correct: ఇట , ందు</p>
                <p className={styles.block_1012}>Incorrect: ఇట ందు.</p>
                <p className={styles.block_1013}>
                  Explanation: "ఇట " అ సంత ా మ ంద సం తం
                </p>
                <p className={styles.block_1014}>అందుక ఇక డ ామ ా . ా వర ఫ ా</p>
                <p className={styles.block_1015}>ట కం .</p>
                <p className={styles.block_1016}>
                  <span className={styles.text_6}>Correct: భవ య ల , మం </span>
                  <span className={styles.text_7}>
                    Explanation: "భవ య ల " అన సం తం అందు{' '}
                  </span>
                </p>
                <p className={styles.block_1017}>
                  ప క న ామ ఉం . వర ఫ ా ట వదు .
                </p>
                <p className={styles.block_1018}>
                  Do not use commas in sentences that contain only a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.
                </p>
                <p className={styles.block_1019}>Correct: ా .</p>
                <p className={styles.block_1020}>Incorrect: , ా .</p>
                <p className={styles.block_1021}>
                  Explanation: ఈ ఉ హరణల వలం పలక ంప ఇం ా
                </p>
                <p className={styles.block_655}>వ ర మ త ఉం అందువలన ల ామ</p>
                <p className={styles.block_1022}>ట క డదు.</p>
                <p className={styles.block_1023}>Correct: , ను సరయ .</p>
                <p className={styles.block_1024}>Incorrect: ను సరయ</p>
                <p className={styles.block_1025}>
                  Explanation: " ను సరయ " అన ాక ం, అందు
                </p>
                <p className={styles.block_1026}>పలక ంప తర ాత ామ ట .</p>
                <p className={styles.block_1027}>
                  <span className={styles.text_6}>Correct: ా , ను సరయ . </span>
                  <span className={styles.text_7}>
                    Explanation: ఈ సందర ంల " ా " అన{' '}
                  </span>
                </p>
                <p className={styles.block_1028}>
                  పలక ంప , అందు " ా " తర ాత ామ ట , " ను
                </p>
                <p className={styles.block_1029}>సరయ " ాక ం కనుక.</p>
                <p className={styles.block_1030}>
                  The phrase "Ok Google" by itself is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer sentences, place a comma after "Google".
                </p>
                <p className={styles.block_272}>Correct: Ok Google</p>
                <p className={styles.block_1031}>Incorrect: Ok, Google</p>
                <p className={styles.block_618}>Incorrect: Ok, Google.</p>
                <p className={styles.block_1032}>
                  Explanation: "Ok Google" ా ప బ ం కనుక
                </p>
                <p className={styles.block_1033}>ామ ల ఫ ా ట ాదు.</p>
                <p className={styles.block_1034}>
                  <span className={styles.text_6}>
                    Correct: Ok Google, మ ట ట ల{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: "Ok Google" "మ ట ట ల "{' '}
                  </span>
                </p>
                <p className={styles.block_1035}>
                  అన మ ాచక ాక ం మ ందు వ ం కనుక
                </p>
                <p className={styles.block_1036}>తర ాత ామ ట .</p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Question marks</p>
                <p className={'text'}>
                  Transcribe a sentence as a question if it is structured
                  grammatically as a sentence, or if it sounds like a question
                  because of its intonation.
                </p>
                <p className={styles.block_1039}>
                  <span className={styles.text_6}>Correct: జం ా ? </span>
                  <span className={styles.text_7}>
                    Explanation: ఉ రణల ప శ ల ా అ ంచక{' '}
                  </span>
                </p>
                <p className={styles.block_1040}>ా ఇ ా కరణ పరం ా ప .</p>
                <p className={styles.block_1041}>Incorrect: జంం ా .</p>
                <p className={styles.block_1042}>Correct: దు న 3 గంటల ా?</p>
                <p className={styles.block_1043}>Incorrect: దు న 3 గంటల ా</p>
                <p className={styles.block_1044}>
                  Explanation: ఉ రణల ప ా ర కత ఉన ందున
                </p>
                <p className={styles.block_1045}>
                  ప శ ా ాయటం జ ం అ ాం కం ా ాక ం
                </p>
                <p className={styles.block_1046}>ానప ట .</p>
                <p className={styles.block_1047}>
                  <span className={styles.text_6}>
                    Correct: గ మ పండ పం ాయ ?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: ఈ ాక ంల వలం వసు వ ల ఉన ప ట{' '}
                  </span>
                </p>
                <p className={styles.block_1048}>
                  ఇ ప ం ామ న పద ావ న ప ా ర కం ట టం
                </p>
                <p className={styles.block_366}>
                  జ ం (ప ల వర ర ం వర ప ా ర కం ).
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Do not put a comma before or after the quotative marker "అ ".
                </p>
                <p className={styles.block_1051}>
                  Correct: త డ " ల ప ల " అ అ డ .
                </p>
                <p className={styles.block_1052}>
                  Incorrect: త డ , " ల ప ల " అ అ డ
                </p>
                <p className={styles.block_1053}>
                  Incorrect: త డ అ డ " ల ప ల ."
                </p>
                <p className={styles.block_1054}>
                  Explanation: " ల ప ల " అన వక న మ టల
                </p>
                <p className={styles.block_1055}>
                  కనుక ాట ట ష మ ర ల మధ ట టం జ ం .
                </p>
                <p className={styles.block_1056}>
                  అ ప ాక ం ానందున ట ష మ ర ల ల పల
                </p>
                <p className={styles.block_1057}>ఫ ా ట టం జరగల దు.</p>
                <p className={styles.block_1058}>Correct: "అ మ ట య " అ అనం .</p>
                <p className={styles.block_1059}>
                  If the text in quotation marks is a complete sentence,
                  transcribe it as a complete sentence. Do not change the
                  punctuation of the quotation, and do not add punctuation
                  immediately after the quotation marks.
                </p>
                <p className={styles.block_1060}>
                  Correct: ా అ డ "3:00 కల మ ."
                </p>
                <p className={styles.block_1061}>
                  Incorrect: ా అ డ "3:00 కల మ .".
                </p>
                <p className={styles.block_1062}>
                  Explanation: "3:00 కల మ ." ప ాక ం కనుక
                </p>
                <p className={styles.block_1063}>
                  ట ష మ ర ల ల పల ఫ ా ట టం జ ం .
                </p>
                <p className={styles.block_1064}>అందువలన ఫ ా బయట ట ాదు.</p>
                <p className={styles.block_1065}>
                  Correct: "ఖ తం ా వ ా ను. ఒట ." అ అం ఆద
                </p>
                <p className={styles.block_1066}>ాల ండ చూడక ం .</p>
                <p className={styles.block_1067}>
                  Explanation: ఆద ా ఖ ాక ం మధ ల వ నప ట
                </p>
                <p className={styles.block_1068}>ఫ ా ట టం జ ం .</p>
                <p className={styles.block_1069}>
                  Use a colon instead of quotation marks in voice actions when
                  the quote follows the command.
                </p>
                <p className={styles.block_1070}>
                  Correct: ం ల అనువ ంచం : ఎల ఉ ర ?
                </p>
                <p className={styles.block_1071}>
                  Incorrect: ం ల అనువ ంచం : "ఎల ఉ ర ?"
                </p>
                <p className={styles.block_1072}>
                  Explanation: "ఎల ఉ ర " అన "అనువ ంచం "
                </p>
                <p className={styles.block_1073}>
                  అన ఆ శం తర ాత వ నందున ట ష మ ర ల
                </p>
                <p className={styles.block_1074}>ల క ం ల ాడడం జ ం .</p>
                <p className={styles.block_1075}>
                  Correct: త ళంల ఎల అడ ా : ా ా ాల .
                </p>
                <p className={styles.block_1076}>
                  Correct: ఈ ల పంపం example@gmail.com
                </p>
                <p className={styles.block_1077}>: ఏంట సంగత ల ?</p>
                <p className={styles.block_1078}>
                  Use quotation marks when the quote is not at the end of the
                  sentence.
                </p>
                <p className={styles.block_1079}>
                  <span className={styles.text_6}>
                    Correct: " ంట ?" ం ల అనువ ంచం .{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: ా ఖ ా ా రంభంల ఉం కనుక ట ష{' '}
                  </span>
                </p>
                <p className={styles.block_1080}>మ ర ల ా .</p>
                <p className={styles.block_1081}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate the words, even if
                  you'd consider the words as sentences in other situations.
                </p>
                <p className={styles.block_1082}>
                  Do not use quotation marks when the speaker is using a word to
                  say something about the word itself.
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from Telugu letters and the Latin letters a through z,
                  you should not use any other symbol than: 0-9
                  äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23,?
                  !~^\'\_°:.()""{}[]√/@#₹+=%*&amp;-.;
                </p>
                <p className={styles.block_1085}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <p className={styles.block_1086}>
                  <span className={styles.text_6}>
                    Correct: ఇం య - ా ా మ ళ త ా?{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: "ఇం య " " ా ా " ండ శప జట{' '}
                  </span>
                </p>
                <p className={styles.block_1087}>ర ావ న ాట మధ ఫ ట .</p>
                <p className={styles.block_1088}>
                  Include a hyphen between locations in flight itineraries.
                </p>
                <p className={styles.block_1089}>Correct: -జ ప</p>
                <p className={styles.block_1090}>Incorrect: జ ప</p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={'text'}>
                  If a speaker says the name of a punctuation mark, write out
                  the full word or words between curly brackets. Do not add
                  punctuation symbols after spoken punctuation.
                </p>
                <p className={styles.block_241}>
                  Correct: ఎల ఉ వ {`{ప ా ర కం}`}
                </p>
                <p className={styles.block_1093}>Incorrect: ఎల ఉ వ ?</p>
                <p className={styles.block_1094}>Incorrect: ఎల ఉ వ ప ా ర కం</p>
                <p className={styles.block_1095}>Incorrect: ఎల ఉ వ ప ా ర కం?</p>
                <p className={styles.block_1096}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>ఎల ఉ వ ప ా ర కం </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_1097}>
                  Correct: స {`{చుక}`}
                  {`{చుక}`}
                  {`{చుక}`}
                </p>
                <p className={styles.block_1098}>Incorrect: స ...</p>
                <p className={styles.block_1099}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>స చుక చుక చుక </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_1100}>
                  <span className={styles.text_17}>Example </span>
                  <span className={styles.text_18}>
                    Correct: ను అ ార ంట 4-ఏ ల ఉంట ను.{' '}
                  </span>
                </p>
                <p className={styles.block_682}>
                  <span className={styles.text_11}>audio: " </span>
                  <span className={styles.text_12}>
                    ను అ ార ంట ల గ త ఏ ల ఉంట ను{' '}
                  </span>
                  <span className={styles.text_11}>" </span>
                  <span className={styles.text_24}>
                    Incorrect: ను అ ార ంట ల గ {`{త}`} ఏ ల{' '}
                  </span>
                </p>
                <p className={styles.block_683}>ఉంట ను.</p>
                <p className={styles.block_683}>
                  Explanation: అ ార ంట 4-ఏ అన ర మ
                </p>
                <p className={styles.block_683}>అల (4-ఏ) ా ాయ . అందు ఇక డ ామ</p>
                <p className={styles.block_683}>సం ల ా ాట " త" అ ాల బ ట</p>
                <p className={styles.block_683}>మధ ాయకం .</p>
                <p className={styles.block_685}>Correct: {}</p>
                <p className={styles.block_681}>Incorrect: :-)</p>
                <p className={styles.block_681}>Incorrect:</p>
                <p className={styles.block_1101}>Example audio: " "</p>
                <p className={styles.block_683}>Explanation: " " ాల బ ట ల</p>
                <p className={styles.block_683}>ాయట ారణం వక పలకట . జ న</p>
                <p className={styles.block_683}>బ మ ాక ం ప ల ాల బ ట లలల</p>
                <p className={styles.block_683}>ాయ .</p>
                <p className={styles.block_684}>
                  However, don't spell out punctuation if it contradicts the
                  established transcription conventions of a certain phrase like
                  web pages, email addresses, addresses, phone numbers, etc.
                </p>
                <p className={styles.block_861}>
                  <span className={styles.text_10}>
                    Correct: +91 1234 123456 ాల యం{' '}
                  </span>
                  <span className={styles.text_11}>Example audio: " </span>
                  <span className={styles.text_12}>ఒకట ఒకట ండ మ డ </span>
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_14}>
                    ల గ ఒకట ండ మ డ ల గ ఐదు{' '}
                  </span>
                  <span className={styles.text_16}>s</span>
                  <span className={styles.text_14}>ఆర ాల </span>
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_14}>యం </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_685}>Correct: www.google.com</p>
                <p className={styles.block_683}>
                  Incorrect: {`www {చుక} google {చుక} com`}
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>
                    డబ డబ డబ చుక గ గ చుక ా{' '}
                  </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_683}>Explanation: వక " " అ నప ట</p>
                <p className={styles.block_683}>య ఆ ఎ లను ఒక ష పద ల ాయవల</p>
                <p className={styles.block_683}>ఉన ందున ప లల ాక ం ల</p>
                <p className={styles.block_683}>ాయ .</p>
                <p className={styles.block_684}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_1102}>
                  <span className={styles.text_17}>Example </span>
                  <span className={styles.text_18}>Correct: {`{ల} `}</span>
                </p>
                <p className={styles.block_1103}>
                  <span className={styles.text_15}>audio: " </span>
                  <span className={styles.text_14}>ల </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_1104}>Incorrect: :</p>
                <p className={styles.block_1105}>Explanation: జ న ం " ల " ాల</p>
                <p className={styles.block_655}>బ ట ల ాయ హ ం ాడక ం ఎందుకంట</p>
                <p className={styles.block_1106}>ా ఒంట ా పలకటం వలన.</p>
                <p className={styles.block_1107}>Correct: {`{అండ}`}</p>
                <p className={styles.block_515}>
                  <span className={styles.text_15}>Example audio: " </span>
                  <span className={styles.text_14}>అండ </span>
                  <span className={styles.text_15}>" </span>
                </p>
                <p className={styles.block_1108}>Incorrect: _</p>
                <p className={styles.block_1109}>
                  Explanation: "అండ " అ ాల బ ట ల
                </p>
                <p className={styles.block_1110}>ప లల ాయ హ ం ా ాదు, ఎందుకంట</p>
                <p className={styles.block_1111}>ా పలకటం వలన.</p>
                <p className={styles.block_1112}>
                  Treat spoken punctuation the same as regular punctuation, and
                  capitalize the following sentence as normal.
                </p>
                <p className={styles.block_1113}>
                  Correct: క ర ఉ ా {`{ప ా ర కం}`} ల ర .
                </p>
                <p className={styles.block_1114}>
                  Incorrect: క ర ఉ ా {`{ప ా ర కం}`}? ల ర .
                </p>
                <p className={styles.block_1115}>Incorrect: క ర ఉ ా ల ర .</p>
                <p className={styles.block_1116}>Incorrect: క ర ఉ ా? ల ర .</p>
              </div>
            </div>
          </Paper>
        </Grid>
        <Hidden smDown>
          <Grid sm={3} item className={classes.rightNav}>
            <RightContentNav title="Punctuation" headingIds={headingIds} />
          </Grid>
        </Hidden>
      </Grid>
    </Wrapper>
  )
}

export default Punctuation

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    margin: '1rem',
  },
  rightNav: {
    position: 'fixed',
    top: '5rem',
    right: '2rem',
    [theme.breakpoints.down('md')]: {
      right: '0.4rem',
      fontSize: '0.75rem',
    },
  },
}))
