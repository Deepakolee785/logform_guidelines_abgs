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
            <PageContentHeader currentPage="longform Tamil" />
            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
              <p className={'text'}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={'text'}>
                  Answers to questions and sentences with dropped subjects
                  should be transcribed as complete sentences.
                </p>
                <p className={styles.block_750}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : ந யாைர பற ேப றாய? பககத ட ைபயன.{' '}
                  </span>
                </p>
                <p className={styles.block_751}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>:{` "பககத ட ைபயன"`} ஒ </span>
                </p>
                <p className={styles.block_752}>
                  ைமயான வாக யம இலைல எனறா ம இைத அபப ேய ெமா ெபயரகக ம.
                </p>
                <p className={styles.block_753}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ந டட . </span>
                </p>
                <p className={styles.block_754}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ந டட </span>
                </p>
                <p className={styles.block_755}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Although the main verb and subject have been left out, it
                    is still transcribed as a complete sentence.
                  </span>
                </p>
                <p className={styles.block_756}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: பககத ட ைபயன </span>
                </p>
                <p className={styles.block_757}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: பககத ட ைபயன. </span>
                </p>
                <p className={styles.block_758}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "பககத ட ைபயன" is not a response to any question and is not
                    a complete sentence, so it is not treated as a complete
                    sentence.
                  </span>
                </p>
                <p className={styles.block_759}>
                  Interjections, greetings, and farewells said in isolation
                  should include ending punctuation.
                </p>
                <p className={styles.block_760}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: செச. </span>
                </p>
                <p className={styles.block_761}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: செச </span>
                </p>
                <p className={styles.block_762}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Interjections such as "செச", "ஆஹா", "ஓ", etc. can be used
                    alone as a sentence with proper punctuation.
                  </span>
                </p>
                <p className={styles.block_763}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: வணககம. </span>
                </p>
                <p className={styles.block_764}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: வணககம </span>
                </p>
                <p className={styles.block_765}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Greetings and farewells such as "வணககம", "வாழக", " டைப",
                    etc. can also be used alone as a sentence with proper
                    punctuation.
                  </span>
                </p>
                <p className={styles.block_766}>
                  Below are some examples of common interjections.
                </p>
                <p className={styles.block_767}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>ேஹா </span>
                </p>
                <p className={styles.block_768}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>அேதா </span>
                </p>
                <p className={styles.block_769}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_26}>
                    <sub className={styles.calibre3}>• </sub>
                  </span>
                  <span className={styles.text_27}>
                    <sub className={styles.calibre2}>ஹாஹா </sub>
                  </span>
                </p>
                <p className={styles.block_770}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>ஆய </span>
                </p>
                <p className={styles.block_771}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>ேகள </span>
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>ஒ </span>
                </p>
                <p className={styles.block_773}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>ஒ கட ேள </span>
                </p>
                <p className={styles.block_774}>
                  <span className={styles.text_3}>• </span>
                  <span className={styles.text_25}>வா </span>
                </p>
                <p className={styles.block_775}>
                  Do not add a period to web search queries. Web search queries
                  are spoken versions of what a person might type into a Google
                  search bar. Note: Web search queries are different from voice
                  action requests because they do not include a command directed
                  to a device.
                </p>
                <p className={styles.block_776}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: இந யா ன படஙகள </span>
                </p>
                <p className={styles.block_777}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: இந யா ன படஙகள. </span>
                </p>
                <p className={styles.block_778}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : This phrase is a web search, so don't add any punctuation
                    at the end.
                  </span>
                </p>
                <p className={styles.block_779}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ெசனைனக ைசகள </span>
                </p>
                <p className={styles.block_780}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ெசனைனக ைசகள. </span>
                </p>
                <p className={styles.block_781}>
                  Add ending punctuation to phrases that sound like the end of a
                  sentence. If they do not clearly sound like the end of a
                  sentence, leave out ending punctuation. Remember that some
                  sentences may sound incomplete because the audio has been cut
                  off.
                </p>
                <p className={styles.block_782}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : அ தத ட அர நத, அதனால உஙகள கவைலபபடா ரகள.{' '}
                  </span>
                </p>
                <p className={styles.block_783}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "அதனால உஙகள கவைலபபடா ரகள" sounds like the end of the
                  </span>
                </p>
                <p className={styles.block_784}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அ தத ட அர நத. அதனால உஙகள கவைலபபடா ரகள.{' '}
                  </span>
                </p>
                <p className={styles.block_785}>
                  sentence but it is not clear if "அ தத ட அர நத" is part of
                  another sentence so just combine the phrases with a comma.
                </p>
                <p className={styles.block_786}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : அதனால, அேநகர தஙக ைடய அவஙக எலலாம உஙகள மா ரி வயசானவஙகளா?
                  </span>
                </p>
                <p className={styles.block_787}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அதனால, அேநகர தஙக ைடய- அவஙக எலலாம உஙகள மா ரி வயசானவஙகளா?
                  </span>
                </p>
                <p className={styles.block_788}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அதனால, அேநகர தஙக ைடய... அவஙக எலலாம உஙகள மா ரி வயசானவஙகளா?
                  </span>
                </p>
                <p className={styles.block_789}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அதனால, அேநகர தஙக ைடய. அவஙக எலலாம உஙகள மா ரி வயசானவஙகளா?
                  </span>
                </p>
                <p className={styles.block_790}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The first phrase sounds like the beginning of a sentence,
                    however, it does not have an end so it should not be
                    transcribed with punctuation at the end.
                  </span>
                </p>
                <p className={styles.block_791}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : பகேடாேகா ராமத ல ஒ மளிைகக கைடக{' '}
                  </span>
                </p>
                <p className={styles.block_792}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : பகேடாேகா ராமத ல ஒ மளிைகக கைடக .{' '}
                  </span>
                </p>
                <p className={styles.block_793}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : This sounds like an incomplete sentence that is missing a
                    beginning and end. No need to add punctuation.
                  </span>
                </p>
                <p className={styles.block_794}>
                  A voice action is a request or command spoken to a device and
                  includes a command verb. Transcribe all voice actions as
                  complete sentences.
                </p>
                <p className={styles.block_795}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : மான நிைலையச ெசயலப த .{' '}
                  </span>
                </p>
                <p className={styles.block_796}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: மான நிைலையச ெசயலப த </span>
                </p>
                <p className={styles.block_797}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>மான நிைலையச ெசயலப த </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_510}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The voice action is a complete sentence so it is
                    transcribed with a period at the end.
                  </span>
                </p>
                <p className={styles.block_798}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>
                    : ெசனைன வைரபடதைதக காட .{' '}
                  </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_22}>
                    : Since this example includes a command{' '}
                  </span>
                </p>
                <p className={styles.block_799}>
                  directed to a device (காட ), it is a voice action. Include
                  ending punctuation.
                </p>
                <p className={styles.block_800}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : 3:00 க நிைன டடைல அைமகக ம: ேகா வாஙக.{' '}
                  </span>
                </p>
                <p className={styles.block_403}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Since this example includes a command directed to a device
                    (அைமகக ம), it is a voice action. Include ending punctuation.
                  </span>
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  Use commas only when necessary. If you are unsure whether to
                  use a comma, leave it out.
                </p>
                <p className={styles.block_803}>
                  Do not transcribe pauses with commas.
                </p>
                <p className={styles.block_804}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : அ தத ெபடேரால பஙக இங ந எவவள ரம?{' '}
                  </span>
                </p>
                <p className={styles.block_805}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அ தத ெபடேரால பஙக...இங ந எவவள ரம?{' '}
                  </span>
                </p>
                <p className={styles.block_806}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அ தத ெபடேரால பஙக, இங ந எவவள ரம?{' '}
                  </span>
                </p>
                <p className={styles.block_807}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    அ தத ெபடேரால பஙக இங ந எவவள ரம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_808}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Speaker pauses after "பஙக". Even if the speaker uses long
                    pauses, do not use a comma. There are places where commas
                    are allowed or required, but this example contains neither.
                  </span>
                </p>
                <p className={styles.block_809}>
                  Put a comma after common sentence openers such as
                  prepositional phrases, adverbials, and introductory clauses.
                </p>
                <p className={styles.block_810}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : ம படசத ல, எனக உடம சரி லைல.{' '}
                  </span>
                </p>
                <p className={styles.block_811}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : ம படசத ல எனக உடம சரி லைல.{' '}
                  </span>
                </p>
                <p className={styles.block_812}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "ம படசத ல" is an introductory clause and should be
                    punctuated with a comma.
                  </span>
                </p>
                <p className={styles.block_813}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ேநற , அவள அவ க நன </span>
                </p>
                <p className={styles.block_814}>னாள</p>
                <p className={styles.block_815}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ேநற அவள அவ க நன </span>
                </p>
                <p className={styles.block_816}>னாள</p>
                <p className={styles.block_817}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "ேநற " is an adverbial and should be separated from the
                    rest of the sentence with a comma.
                  </span>
                </p>
                <p className={styles.block_818}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : நாைளக ற , எலேலா ம பளளி ல இ பபாரகள.{' '}
                  </span>
                </p>
                <p className={styles.block_819}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : நாைளக ற எலேலா ம பளளி ல இ பபாரகள.{' '}
                  </span>
                </p>
                <p className={styles.block_820}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "நாைளக ற " is a prepositional phrase that should be
                    separated from the rest of the sentence with a comma.
                  </span>
                </p>
                <p className={styles.block_821}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However, if there is a long
                  pause after a discourse word, interjection, or yes/no word,
                  transcribe it as a complete sentence.
                </p>
                <p className={styles.block_822}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ஆமாம, அவ ம வ றாள. </span>
                </p>
                <p className={styles.block_823}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ஆமாம அவ ம வ றாள. </span>
                </p>
                <p className={styles.block_824}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "ஆமாம" is a yes/no word, so it should appear with a comma
                    even if there is no obvious pause after the discourse word.
                  </span>
                </p>
                <p className={styles.block_825}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : அேதா, யாராவ ெவளி ல இ க றாரகள.{' '}
                  </span>
                </p>
                <p className={styles.block_826}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அேதா யாராவ ெவளி ல இ க றாரகள.{' '}
                  </span>
                </p>
                <p className={styles.block_282}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "அேதா" is an interjection so it should have a comma after
                    it, before the rest of the sentence.
                  </span>
                </p>
                <p className={styles.block_827}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : கண பபாக, எனனால அைதச ெசயய ம.{' '}
                  </span>
                </p>
                <p className={styles.block_828}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : கண பபாக. எனனால அைதச ெசயய ம.{' '}
                  </span>
                </p>
                <p className={styles.block_829}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    கண பபாக எனனால அைதச ெசயய ம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_830}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : கண பபாக. எனனால அைதச ெசயய ம.{' '}
                  </span>
                </p>
                <p className={styles.block_828}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : கண பபாக, எனனால அைதச ெசயய ம.{' '}
                  </span>
                </p>
                <p className={styles.block_829}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    கண பபாக எனனால அைதச ெசயய ம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_831}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Speaker pauses for a long time between "கண பபாக" and
                    "எனனால".
                  </span>
                </p>
                <p className={styles.block_832}>Use commas in lists.</p>
                <p className={styles.block_833}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : இனிைமயான, ெபா ள ெபா நத, ெநஞைச அள ம பாடல ஒன காற ல
                  </span>
                </p>
                <p className={styles.block_834}>தந வநத .</p>
                <p className={styles.block_835}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : இனிைமயான ெபா ள ெபா நத ெநஞைச அள ம பாடல ஒன காற ல
                  </span>
                </p>
                <p className={styles.block_836}>தந வநத .</p>
                <p className={styles.block_837}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : இனிைமயான, ெபா ள ெபா நத, ெநஞைச அள ம, பாடல ஒன காற ல
                  </span>
                </p>
                <p className={styles.block_836}>தந வநத .</p>
                <p className={styles.block_838}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The sentence contains a list of adjectives which should be
                    separated with commas but don't use a comma after the last
                    list item.
                  </span>
                </p>
                <p className={styles.block_839}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_840}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: இபப க , ஜய </span>
                </p>
                <p className={styles.block_841}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: இபப க , ஜய. </span>
                </p>
                <p className={styles.block_677}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "இபப க " is a sign off, so there should be a comma after
                    it. Do not transcribe a period at the end.
                  </span>
                </p>
                <p className={styles.block_842}>
                  Do not use commas in sentences that contain only a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.
                </p>
                <p className={styles.block_843}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: வணககம காரத க. </span>
                </p>
                <p className={styles.block_844}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: வணககம, காரத க. </span>
                </p>
                <p className={styles.block_824}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : This example only consists of a greeting "வணககம" and an
                    addressee "காரத க." Therefore, it should not be transcribed
                    with a comma.
                  </span>
                </p>
                <p className={styles.block_845}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: வணககம, இ ஜானி. </span>
                </p>
                <p className={styles.block_846}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: வணககம இ ஜானி. </span>
                </p>
                <p className={styles.block_847}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Since "இ ஜானி" is a sentence, there should be a comma
                    separating it from the greeting.
                  </span>
                </p>
                <p className={styles.block_848}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>
                    : வணககம காரத க, இ ஜானி.{' '}
                  </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_24}>
                    : In this case, "வணககம காரத க"{' '}
                  </span>
                </p>
                <p className={styles.block_849}>
                  is the greeting, so there is a comma after "காரத க" since "இ
                  ஜானி" is a sentence.
                </p>
                <p className={styles.block_850}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>
                    : வணககம காரத க. இ ஜானி.{' '}
                  </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_22}>
                    : In this case, there is a long pause{' '}
                  </span>
                </p>
                <p className={styles.block_851}>
                  between the greeting and the following sentence, so "வணககம
                  காரத க" and "இ ஜானி" are both treated as separate sentences.
                  In cases like these, transcribe a period instead of a comma.
                </p>
                <p className={styles.block_852}>
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className={styles.block_853}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: ேவக, இஙேக வா. </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_24}>
                    : " ேவக" is a sentence initial{' '}
                  </span>
                </p>
                <p className={styles.block_854}>
                  addressee so transcribe a comma after it to separate it from
                  the sentence.
                </p>
                <p className={styles.block_855}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: எபப இ க ன ரகள, லா? </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_24}>
                    : " லா" is a sentence final addressee{' '}
                  </span>
                </p>
                <p className={styles.block_856}>
                  so transcribe a comma before it to separate it from the
                  sentence.
                </p>
                <p className={styles.block_857}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: ேவக, வணககம, இ லா. </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_22}>
                    : There is only a brief pause between{' '}
                  </span>
                </p>
                <p className={styles.block_858}>
                  " ேவக", "வணககம", and "இ லா", so they are separated by commas
                  and not periods.
                </p>
                <p className={styles.block_859}>
                  The phrase "Ok Google" by itself is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer sentences, place a comma after "Google".
                </p>
                <p className={styles.block_860}>
                  <span className={styles.text_}>C</span>
                  <span className={styles.text_2}>ORRECT</span>
                  <span className={styles.text_}>: Ok Google </span>
                </p>
                <p className={styles.block_861}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: Ok, Google </span>
                </p>
                <p className={styles.block_862}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: Ok Google. </span>
                </p>
                <p className={styles.block_863}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : "Ok Google" was spoken in isolation, so do not transcribe
                    it with a comma or period.
                  </span>
                </p>
                <p className={styles.block_864}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>
                    : Ok Google, இந யா ன படஙகள{' '}
                  </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_22}>
                    : "Ok Google" appears before the noun{' '}
                  </span>
                </p>
                <p className={styles.block_865}>
                  phrase "இந யா ன படஙகள", so transcribe a comma after "Ok
                  Google".
                </p>
                <p className={styles.block_866}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : Ok Google, ெசனைன வைரபடதைதக காட .{' '}
                  </span>
                </p>
                <p className={styles.block_867}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "Ok Google" appears before the command "ெசனைன வைரபடதைதக
                    காட " so transcribe a comma after "Ok Google".
                  </span>
                </p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Question marks</p>
                <p className={'text'}>
                  Transcribe a sentence as a question if it is structured
                  grammatically as a sentence, or if it sounds like a question
                  because of its intonation.
                </p>
                <p className={styles.block_870}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: நான உனக உதவலாமா? </span>
                </p>
                <p className={styles.block_871}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: நான உனக உதவலாமா. </span>
                </p>
                <p className={styles.block_327}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>நான உனக உதவலாமா </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_872}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Speaker talks with neutral intonation (ந நிைல ேபசசான ).
                    Even if the intonation does not sound like the intonation of
                    a question, this sentence is structured as a question.
                  </span>
                </p>
                <p className={styles.block_873}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ன மணிக ? </span>
                </p>
                <p className={styles.block_874}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ன மணிக </span>
                </p>
                <p className={styles.block_875}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ன மணிக </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_876}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Since the sentence has question intonation (ேகள ேபசசான ),
                    it is transcribed as a question, even though it is not
                    structured like a typical sentence.
                  </span>
                </p>
                <p className={styles.block_877}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>
                    : தககாளி, பழம அலல காயக ?{' '}
                  </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_22}>
                    : Even though this sentence just includes{' '}
                  </span>
                </p>
                <p className={styles.block_878}>
                  topics, this is a common form of asking a question of
                  preference so it should be punctuated properly (with
                </p>
                <p className={styles.block_879}>
                  commas separating the topics and a question mark at the end).
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Use a comma between reported speech verbs and direct
                  quotations, unless the speech verb is being used as a voice
                  command. Do not put punctuation within quotation marks unless
                  the punctuation belongs to the reported speech.
                </p>
                <p className={styles.block_881}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : என நணபன ெசானனான, "கட ரியன பாம ".{' '}
                  </span>
                </p>
                <p className={styles.block_528}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : என நணபன ெசானனான, "கட ரியன பாம ."{' '}
                  </span>
                </p>
                <p className={styles.block_604}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : என நணபன ெசானனான "கட ரியன பாம ."{' '}
                  </span>
                </p>
                <p className={styles.block_882}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Since "ெசானனான" is a verb that reports the exact words of
                    a speaker, quotation marks are used. There is no period
                    within the quotation because the phrase "கட ரியன பாம " is
                    not a complete sentence.
                  </span>
                </p>
                <p className={styles.block_883}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_14}>: "வணககம" என ெசாலல ம. </span>
                  <span className={styles.text_22}>E</span>
                  <span className={styles.text_23}>XPLANATION</span>
                  <span className={styles.text_24}>
                    : "ெசாலல ம" is being used as a{' '}
                  </span>
                </p>
                <p className={styles.block_884}>
                  command here, so a comma should not appear after it.
                </p>
                <p className={styles.block_885}>
                  If the text in quotation marks is a complete sentence,
                  transcribe it as a complete sentence. Do not change the
                  punctuation of the quotation, and do not add punctuation
                  immediately after the quotation marks.
                </p>
                <p className={styles.block_886}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : என க தா ேகடடாள, "ந பாவளிக ஊ க வநதாயா?"{' '}
                  </span>
                </p>
                <p className={styles.block_887}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: என க தா ேகடடாள, "ந </span>
                </p>
                <p className={styles.block_888}>பாவளிக ஊ க வநதாயா?".</p>
                <p className={styles.block_232}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "ந பாவளிக ஊ க வநதாயா?" is a complete question, so
                    transcribe a question mark inside the quotation. Do not
                    transcribe a period after the quotation marks.
                  </span>
                </p>
                <p className={styles.block_889}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : க தா ேகடடாள, "ந எபேபா வநதாய?"{' '}
                  </span>
                </p>
                <p className={styles.block_890}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : க தா ேகடடாள, "ந எபேபா வநதாய?".{' '}
                  </span>
                </p>
                <p className={styles.block_343}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "ந எபேபா வநதாய?" is a complete question, so transcribe a
                    question mark inside the quotation. Again, do not transcribe
                    a period after the quotation marks.
                  </span>
                </p>
                <p className={styles.block_891}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : என நணபன ெசானனான, "சரி." ஆனால அவர வர லைல.{' '}
                  </span>
                </p>
                <p className={styles.block_892}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Even though the statement "சரி." appears in the middle of
                    a larger sentence, final punctuation needs to be transcribed
                    within the quotation.
                  </span>
                </p>
                <p className={styles.block_893}>
                  Use a colon instead of quotation marks in voice actions when
                  the quote follows the command.
                </p>
                <p className={styles.block_894}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : ெஜரமன ெமா ல ெமா ெபயரததல: நான உனைனக காத க ேறன.
                  </span>
                </p>
                <p className={styles.block_385}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : ெஜரமன ெமா ல ெமா ெபயரததல: "நான உனைனக காத க ேறன."
                  </span>
                </p>
                <p className={styles.block_386}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "நான உனைனக காத க ேறன" follows the command "ெமா ெபயரததல",
                    so a colon is used before the phrase without any quotation
                    marks.
                  </span>
                </p>
                <p className={styles.block_895}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : க இெம ல அ பப ம example@gmail.com: இனைறய ெபா எபப க க நத என
                    ?
                  </span>
                </p>
                <p className={styles.block_896}>
                  Use quotation marks when the quote is in the middle of the
                  sentence.
                </p>
                <p className={styles.block_804}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : ெஜரமன ெமா ல "நான உனைனக காத க ேறன." எனபைத எபப ெசாலவாரகள?
                  </span>
                </p>
                <p className={styles.block_897}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : The quote is in the middle of a sentence, so use quotation
                    marks.
                  </span>
                </p>
                <p className={styles.block_898}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate the words, even if
                  you'd consider the words as sentences in other situations.
                </p>
                <p className={styles.block_899}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : ெரஞ ெமா ல "ஹேலா" எனபைத ெமா ெபயரகக ம.{' '}
                  </span>
                </p>
                <p className={styles.block_900}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : ெரஞ ெமா ல "ஹேலா." எனபைத ெமா ெபயரகக ம.{' '}
                  </span>
                </p>
                <p className={styles.block_901}>
                  Do not use quotation marks when the speaker is using a word to
                  say something about the word itself.
                </p>
                <p className={styles.block_902}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: வைரய த மம. </span>
                </p>
                <p className={styles.block_903}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: வைரய "த மம". </span>
                </p>
                <p className={styles.block_904}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Do not use quotation marks for defining words.
                  </span>
                </p>
                <p className={styles.block_905}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : அவர ெசால ெபாஙகல என ெசானனார.{' '}
                  </span>
                </p>
                <p className={styles.block_906}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அவர ெசால "ெபாஙகல" என ெசானனார.{' '}
                  </span>
                </p>
                <p className={styles.block_863}>
                  <span className={styles.text_}>E</span>
                  <span className={styles.text_2}>XPLANATION</span>
                  <span className={styles.text_}>
                    : Do not use quotation marks for referring to words.
                  </span>
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from Tamil letters and the Latin letters a through z,
                  you should not use any other symbol than:
                  äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23,?!~^\
                  '"_°:.()&lt;&gt;{}[]√/@#₹+=%*&amp;-.;
                </p>
                <p className={styles.block_909}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <p className={styles.block_910}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : ெசனைன பபர ஙஸ-ராயல ேசலஞசரஸ ேபாட ல{' '}
                  </span>
                </p>
                <p className={styles.block_272}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Since "ெசனைன பபர ஙஸ" and "ராயல ேசலஞசரஸ" are both sports
                    teams, transcribe the teams with a hyphen in between.
                  </span>
                </p>
                <p className={styles.block_911}>
                  Include a hyphen between locations in flight itineraries.
                </p>
                <p className={styles.block_912}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ெசனைன-லணடன மானஙக ம </span>
                </p>
                <p className={styles.block_913}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ெசனைன லணடன </span>
                </p>
                <p className={styles.block_914}>மானஙக ம</p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={'text'}>
                  If a speaker says the name of a punctuation mark, write out
                  the full word or words between curly brackets. Do not add
                  punctuation symbols after spoken punctuation.
                </p>
                <p className={styles.block_917}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : எபப இ க ரகள {`{ேகள க }`}{' '}
                  </span>
                </p>
                <p className={styles.block_918}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: எபப இ க ரகள? </span>
                </p>
                <p className={styles.block_919}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: எபப இ க ரகள ேகள க </span>
                </p>
                <p className={styles.block_920}>?</p>
                <p className={styles.block_921}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>எபப இ க ரகள ேகள க </span>
                </p>
                <p className={styles.block_922}>"</p>
                <p className={styles.block_923}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : சரி {`{ ளளி} { ளளி} { ளளி}`}{' '}
                  </span>
                </p>
                <p className={styles.block_284}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: சரி... </span>
                </p>
                <p className={styles.block_924}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>சரி ளளி ளளி ளளி </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_925}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: ளாட 4-B </span>
                </p>
                <p className={styles.block_926}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ளாட 4 {`{ேகா }`} B </span>
                </p>
                <p className={styles.block_927}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: ளாட நான {`{ேகா }`} B </span>
                </p>
                <p className={styles.block_928}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ளாட நான ேகா </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_929}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : ளாட 4-B is an address with established internal
                    punctuation (4-B), so use the punctuation symbols here,
                    don't type out "ேகா " between curly brackets.
                  </span>
                </p>
                <p className={styles.block_930}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: {`{நைக கம}`} </span>
                </p>
                <p className={styles.block_931}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: :-) </span>
                </p>
                <p className={styles.block_932}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: நைக கம </span>
                </p>
                <p className={styles.block_933}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>நைக கம </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_934}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : "நைக கம" is transcribed in curly brackets because the
                    speaker used its name. Don't type out the actual emoticon
                    but type out the words between curly brackets.
                  </span>
                </p>
                <p className={styles.block_935}>
                  However, don't spell out punctuation if it contradicts the
                  established transcription conventions of a certain phrase like
                  web pages, email addresses, addresses, phone numbers, etc.
                </p>
                <p className={styles.block_936}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: அைழப +44 2313 3659 </span>
                </p>
                <p className={styles.block_937}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : அைழப {`{பளஸ} `}44 2313 3659{' '}
                  </span>
                </p>
                <p className={styles.block_938}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    அைழப பளஸ நான நான இரண ன ஒன ன ன ஆ ஐந ஒனப{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_939}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Although the speaker said "பளஸ", phone numbers have an
                    established transcription convention that require the use of
                    the symbol. So use a "+" instead of spelling it out as{' '}
                    {`{பளஸ}`}.
                  </span>
                </p>
                <p className={styles.block_940}>
                  <span className={styles.text_12}>C</span>
                  <span className={styles.text_13}>ORRECT</span>
                  <span className={styles.text_12}>: www.google.co.in </span>
                  <span className={styles.text_15}>E</span>
                  <span className={styles.text_16}>XAMPLE AUDIO</span>
                  <span className={styles.text_15}>: " </span>
                  <span className={styles.text_17}>ட ள ட ள ட ள ளளி </span>
                </p>
                <p className={styles.block_941}>
                  <span className={styles.text_5}>ள ளளி ஒ ளளி ஐ என </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_942}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : ட ள ட ள ட ள {`{ ளளி}`}{' '}
                  </span>
                </p>
                <p className={styles.block_691}>
                  ள {`{ ளளி}`} ஒ {`{ ளளி}`} ஐ என
                </p>
                <p className={styles.block_812}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Although the speaker said " ளளி", URLs have an established
                    transcription convention that require the use of the
                    symbols. So use a "." instead of spelling it out as{' '}
                    {`{ ளளி}`}.
                  </span>
                </p>
                <p className={styles.block_943}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: பதமா ஒ ந ைக ம/மாட ம </span>
                </p>
                <p className={styles.block_944}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : பதமா ஒ ந ைக ம {`{சாயேகா }`} மாட ம.{' '}
                  </span>
                </p>
                <p className={styles.block_945}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>
                    பதமா ஒ ந ைக ம சாயேகா மாட ம{' '}
                  </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_946}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Since "சாயேகா " is considered to be a word-level
                    punctuation, the slash symbol, "/" is used and it is not
                    spelled out.
                  </span>
                </p>
                <p className={styles.block_947}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_948}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: {`{ ககால ளளி}`} </span>
                </p>
                <p className={styles.block_949}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: : </span>
                </p>
                <p className={styles.block_950}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>ககால ளளி </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_951}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The actual spelling " ககால ளளி" is transcribed in curly
                    brackets and not as the symbol ":" because it is spoken in
                    isolation.
                  </span>
                </p>
                <p className={styles.block_952}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>: {`{காற ளளி}`} </span>
                </p>
                <p className={styles.block_953}>
                  <span className={styles.text_}>I</span>
                  <span className={styles.text_2}>NCORRECT</span>
                  <span className={styles.text_}>: , </span>
                </p>
                <p className={styles.block_954}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>காற ளளி </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_955}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : The actual spelling "காற ளளி" is transcribed in curly
                    brackets and not as the symbol "," because it is spoken in
                    isolation.
                  </span>
                </p>
                <p className={styles.block_956}>
                  Treat spoken punctuation the same as regular punctuation.
                </p>
                <p className={styles.block_957}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_4}>ORRECT</span>
                  <span className={styles.text_5}>
                    : நான இஙேக இ க ேறன {`{ ற ப ளளி}`} ந எஙேக இ க றாய?
                  </span>
                </p>
                <p className={styles.block_958}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>: நான இஙேக இ க ேறன </span>
                </p>
                <p className={styles.block_959}>ற ப ளளி ந எஙேக இ க றாய?</p>
                <p className={styles.block_960}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_4}>NCORRECT</span>
                  <span className={styles.text_5}>
                    : நான இஙேக இ க ேறன. ந எஙேக இ க றாய?{' '}
                  </span>
                </p>
                <p className={styles.block_460}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XAMPLE AUDIO</span>
                  <span className={styles.text_3}>: " </span>
                  <span className={styles.text_5}>நான இஙேக இ க ேறன </span>
                </p>
                <p className={styles.block_961}>
                  <span className={styles.text_5}>ற ப ளளி ந எஙேக இ க றாய </span>
                  <span className={styles.text_3}>" </span>
                </p>
                <p className={styles.block_962}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_4}>XPLANATION</span>
                  <span className={styles.text_5}>
                    : Speaker says " ற ப ளளி" aloud, so type " ற ப ளளி" between
                    curly brackets. The speaker does not say "ேகள க " aloud
                    after the question "ந எஙேக இ க றாய" so transcribe it with
                    the question mark symbol "?"
                  </span>
                </p>
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
