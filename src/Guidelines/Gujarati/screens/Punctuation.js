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
            <PageContentHeader currentPage="longform Gujarati" />
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
                <p className={styles.block_657}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>
                    : બસ ક્યાથી મળશ? અહીયા નથી.{' '}
                  </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XPLANATION</span>
                  <span className={styles.text_16}>
                    : Even though "અહીયા નથી" is not a{' '}
                  </span>
                </p>
                <p className={styles.block_658}>
                  complete sentence, it should be transcribed as one since it is
                  a natural response to the question.
                </p>
                <p className={styles.block_659}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: અહીયા નથી </span>
                </p>
                <p className={styles.block_660}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: અહીયા નથી. </span>
                </p>
                <p className={styles.block_661}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "અહીયા નથી" is not a response to any question and is not a
                    complete sentence, so it is not treated as a complete
                    sentence.
                  </span>
                </p>
                <p className={styles.block_662}>
                  Interjections, greetings, and farewells said in isolation
                  should include ending punctuation.
                </p>
                <p className={styles.block_663}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: માફ કરશો. </span>
                </p>
                <p className={styles.block_664}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: માફ કરશો </span>
                </p>
                <p className={styles.block_665}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Interjections such as "માફ કરશો" can be used alone as a
                    sentence with proper punctuation.
                  </span>
                </p>
                <p className={styles.block_666}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: નમલત. </span>
                </p>
                <p className={styles.block_667}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: નમલત </span>
                </p>
                <p className={styles.block_668}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Greetings and farewells such as "નમલત", etc. can also be
                    used alone as a sentence with proper punctuation.
                  </span>
                </p>
                <p className={styles.block_669}>
                  Below are some examples of common interjections.
                </p>
                <p className={styles.block_670}>
                  <span className={styles.text_5}>• </span>
                  <span className={styles.text_30}>માફ કરશો </span>
                </p>
                <p className={styles.block_671}>
                  <span className={styles.text_5}>• </span>
                  <span className={styles.text_30}>નમલત </span>
                </p>
                <p className={styles.block_672}>
                  <span className={styles.text_5}>• </span>
                  <span className={styles.text_30}>બરાબર </span>
                </p>
                <p className={styles.block_673}>
                  <span className={styles.text_5}>• </span>
                  <span className={styles.text_30}>ભિ </span>
                </p>
                <p className={styles.block_674}>
                  <span className={styles.text_5}>• </span>
                  <span className={styles.text_30}>ભિ પધાયા </span>
                </p>
                <p className={styles.block_675}>
                  <span className={styles.text_5}>• </span>
                  <span className={styles.text_30}>હા </span>
                </p>
                <p className={styles.block_676}>
                  <span className={styles.text_5}>• </span>
                  <span className={styles.text_30}>ઓહો </span>
                </p>
                <p className={styles.block_677}>
                  <span className={styles.text_5}>• </span>
                  <span className={styles.text_30}>કપાળ </span>
                </p>
                <p className={styles.block_675}>
                  <span className={styles.text_5}>• </span>
                  <span className={styles.text_30}>ના </span>
                </p>
                <p className={styles.block_678}>
                  Do not add ending punctuation to web search queries. Web
                  search queries are spoken versions of what a person might type
                  into a Google search bar. Note: Web search queries are
                  different from voice action requests because they do not
                  include a command directed to a device.
                </p>
                <p className={styles.block_679}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: પીઝા બનાવવાની રીત </span>
                </p>
                <p className={styles.block_680}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: પીઝા બનાવવાની રીત. </span>
                </p>
                <p className={styles.block_681}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : This phrase is a web search, so don't add any punctuation
                    at the end.
                  </span>
                </p>
                <p className={styles.block_682}>
                  Add ending punctuation to phrases that sound like the end of a
                  sentence. If they do not clearly sound like the end of a
                  sentence, leave out ending punctuation. Remember that some
                  sentences may sound incomplete because the audio has been cut
                  off.
                </p>
                <p className={styles.block_683}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: અન સાફ હવા છ. </span>
                </p>
                <p className={styles.block_684}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: અન સાફ હવા છ </span>
                </p>
                <p className={styles.block_685}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : This sounds like the end of a sentence. Add punctuation at
                    the end.
                  </span>
                </p>
                <p className={styles.block_686}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: સાથ કમ વાત નથી </span>
                </p>
                <p className={styles.block_687}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: સાથ કમ વાત નથી. </span>
                </p>
                <p className={styles.block_688}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : This sounds like an incomplete sentence that is missing a
                    beginning and end. No need to add punctuation.
                  </span>
                </p>
                <p className={styles.block_689}>
                  A voice action is a request or command spoken to a device and
                  includes a command verb. Transcribe all voice actions as
                  complete sentences.
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  Use commas only when necessary. If you are unsure whether to
                  use a comma, leave it out.
                </p>
                <p className={styles.block_692}>
                  Do not transcribe pauses with commas.
                </p>
                <p className={styles.block_693}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ન્સટળક રોડ િઈ જશો? </span>
                </p>
                <p className={styles.block_694}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ન્સટળક રોડ...િઈ જશો? </span>
                </p>
                <p className={styles.block_695}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ન્સટળક રોડ, િઈ જશો? </span>
                </p>
                <p className={styles.block_696}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>ન્સટળક રોડ </span>
                  <span className={styles.text_25}>[</span>
                  <span className={styles.text_6}>થોભો</span>
                  <span className={styles.text_25}>] </span>
                  <span className={styles.text_6}>િઈ જશો </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_697}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Even if the speaker uses long pauses, do not use a comma.
                    There are places where commas
                  </span>
                </p>
                <p className={styles.block_698}>
                  are allowed or required, but this example contains neither.
                </p>
                <p className={styles.block_699}>
                  Put a comma after common sentence openers such as
                  prepositional phrases, adverbials, and introductory clauses.
                </p>
                <p className={styles.block_700}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: ટકમા, ગમ ત કરો. </span>
                </p>
                <p className={styles.block_701}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: ટકમા ગમ ત કરો. </span>
                </p>
                <p className={styles.block_702}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "ટકમા" is a common sentence opener so include a comma
                    between it and the rest of the sentence.
                  </span>
                </p>
                <p className={styles.block_703}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However, if there is a long
                  pause after a discourse word, interjection, or yes/no word,
                  transcribe it as a complete sentence.
                </p>
                <p className={styles.block_704}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: પણ, માર ઈકવ છ. </span>
                </p>
                <p className={styles.block_705}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: પણ માર ઈકવ છ. </span>
                </p>
                <p className={styles.block_706}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "પણ" is a discourse word, so it should appear with a comma
                    even if there is no obvious pause after the discourse word.
                    Other examples of discourse words in English include "તોહ"
                    and "વાલતવ".
                  </span>
                </p>
                <p className={styles.block_707}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: અર હા, ભિી ગયો. </span>
                </p>
                <p className={styles.block_708}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: અર હા ભિી ગયો. </span>
                </p>
                <p className={styles.block_709}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "અર હા" is an interjection so it should have a comma after
                    it, before the rest of the sentence.
                  </span>
                </p>
                <p className={styles.block_710}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: હા, દસ દસ ની છ. </span>
                </p>
                <p className={styles.block_711}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: હા દસ દસ ની છ. </span>
                </p>
                <p className={styles.block_712}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>હા દસ દસ ની છ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_713}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: હા. દસ દસ ની છ. </span>
                </p>
                <p className={styles.block_714}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: હા, દસ દસ ની છ. </span>
                </p>
                <p className={styles.block_715}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>હા </span>
                  <span className={styles.text_25}>[</span>
                  <span className={styles.text_6}>િાબ થોભો</span>
                  <span className={styles.text_25}>] </span>
                  <span className={styles.text_6}>દસ દસ ની છ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_716}>Use commas in lists.</p>
                <p className={styles.block_717}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ત્યાની સામાન્સજક, આન્સથક, રાજકીય અન ધાન્સમક વ્યવ્લથા તન
                    સહજ સમજાતી જાય છ.
                  </span>
                </p>
                <p className={styles.block_718}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : ત્યાની સામાન્સજક આન્સથક રાજકીય અન ધાન્સમક વ્યવ્લથા તન સહજ
                    સમજાતી જાય છ.
                  </span>
                </p>
                <p className={styles.block_719}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The sentence contains a list of adjectives "સામાન્સજક"
                    "આન્સથક" "રાજકીય" which should be separated with commas but
                    don't use a comma after the last list item.
                  </span>
                </p>
                <p className={styles.block_720}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : ત્યાની સામાન્સજક, આન્સથક, રાજકીય, અન ધાન્સમક વ્યવ્લથા તન
                    સહજ સમજાતી જાય છ.
                  </span>
                </p>
                <p className={styles.block_721}>
                  Use commas in sign-offs, such as those at the end of a
                  message. Do not use end punctuation.
                </p>
                <p className={styles.block_722}>
                  Do not use commas in sentences that contain only a greeting
                  and an addressee. If a greeting occurs at the beginning of a
                  sentence or fragment, place a comma after the greeting. If the
                  greeting includes an addressee, place the comma after the
                  addressee.
                </p>
                <p className={styles.block_723}>
                  Except in greetings, sentence-initial and sentence-final
                  addressees should be separated by a comma.
                </p>
                <p className={styles.block_724}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: રમણ, અહી આવ. </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XPLANATION</span>
                  <span className={styles.text_16}>
                    : "રમણ" is a sentence initial addressee so
                  </span>
                </p>
                <p className={styles.block_725}>
                  transcribe a comma after it to separate it from the sentence.
                </p>
                <p className={styles.block_726}>
                  The phrase "Ok Google" by itself is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer sentences, place a comma after "Google".
                </p>
                <p className={styles.block_256}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: Ok Google </span>
                </p>
                <p className={styles.block_727}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Ok, Google </span>
                </p>
                <p className={styles.block_728}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: Ok Google. </span>
                </p>
                <p className={styles.block_729}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : "Ok Google" was spoken in isolation, so do not transcribe
                    a comma or period.
                  </span>
                </p>
                <p className={styles.block_730}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>: Ok Google, સમય શ છ? </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XPLANATION</span>
                  <span className={styles.text_14}>
                    : "Ok Google" appears before the{' '}
                  </span>
                </p>
                <p className={styles.block_731}>
                  question "સમય શ છ?", so transcribe a comma after "Ok Google".
                </p>
                <p className={styles.block_732}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>
                    : Ok Google, તમ આ કરી શકો મન મદદ?{' '}
                  </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XPLANATION</span>
                  <span className={styles.text_14}>
                    : "Ok Google" appears before the{' '}
                  </span>
                </p>
                <p className={styles.block_733}>
                  question "તમ આ કરી શકો મન મદદ?", so transcribe a comma after
                  "Ok Google".
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Question marks</p>
                <p className={'text'}>
                  Transcribe a sentence as a question if it is structured
                  grammatically as a sentence, or if it sounds like a question
                  because of its intonation.
                </p>
                <p className={styles.block_736}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: અન પછી? </span>
                </p>
                <p className={styles.block_737}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: અન પછી </span>
                </p>
                <p className={styles.block_738}>
                  <span className={styles.text_3}>E</span>
                  <span className={styles.text_}>XPLANATION</span>
                  <span className={styles.text_3}>
                    : Since the sentence has question intonation, it is
                    transcribed as a question, even though it is not structured
                    like a typical sentence.
                  </span>
                </p>
                <p className={'heaeding'}>Colon and quotation</p>
                <p className={'text'}>
                  Use a comma between reported speech verbs and direct
                  quotations, unless the speech verb is being used as a voice
                  command. Do not put punctuation within quotation marks unless
                  the punctuation belongs to the reported speech.
                </p>
                <p className={styles.block_741}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : મારા દોલત ઍ કહ્, "આિગટર રૉકડાઇિ".{' '}
                  </span>
                </p>
                <p className={styles.block_742}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : મારા દોલત ઍ કહ્, "આિગટર રૉકડાઇિ."{' '}
                  </span>
                </p>
                <p className={styles.block_743}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : મારા દોલત ઍ કહ્ "આિગટર રૉકડાઇિ."{' '}
                  </span>
                </p>
                <p className={styles.block_702}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Since "કહવ" is a verb that reports the exact words of a
                    speaker, quotation marks are used. There is no period within
                    the quotation because the phrase "આિગટર રૉકડાઇિ" is not a
                    complete sentence.
                  </span>
                </p>
                <p className={styles.block_744}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: "ઘોડો" બોિો. </span>
                </p>
                <p className={styles.block_745}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: "ઘોડો", બોિો. </span>
                </p>
                <p className={styles.block_746}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "બોિો" is being used as a command here, do not transcribe
                    a comma.
                  </span>
                </p>
                <p className={styles.block_747}>
                  If the text in quotation marks is a complete sentence,
                  transcribe it as a complete sentence. Do not change the
                  punctuation of the quotation, and do not add punctuation
                  immediately after the quotation marks.
                </p>
                <p className={styles.block_748}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : કૌન્સશક કહ્, "હ ખાઈશ."{' '}
                  </span>
                </p>
                <p className={styles.block_749}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : કૌન્સશક કહ્, "હ ખાઈશ.".{' '}
                  </span>
                </p>
                <p className={styles.block_750}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Since "હ ખાઈશ." is a complete sentence, there should be a
                    period inside the quotation marks. Because of this, do not
                    transcribe a period outside the quotation marks.
                  </span>
                </p>
                <p className={styles.block_751}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>
                    : રોન્સહત પછ, "આપણ 3 વાગ મળીય છ?"{' '}
                  </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XPLANATION</span>
                  <span className={styles.text_16}>
                    : "આપણ 3 વાગ મળીય છ?" is a complete{' '}
                  </span>
                </p>
                <p className={styles.block_752}>
                  question, so transcribe a question mark inside the
                </p>
                <p className={styles.block_753}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : રોન્સહત પછ, "આપણ 3 વાગ મળીય છ?". quotation. Again, do not
                    transcribe a period after the
                  </span>
                </p>
                <p className={styles.block_754}>quotation marks.</p>
                <p className={styles.block_755}>
                  <span className={styles.text_11}>C</span>
                  <span className={styles.text_12}>ORRECT</span>
                  <span className={styles.text_13}>
                    : શ રોહીત એ "ત્યા મળવાન." કહ્ હત ?{' '}
                  </span>
                  <span className={styles.text_14}>E</span>
                  <span className={styles.text_15}>XPLANATION</span>
                  <span className={styles.text_16}>
                    : Even though રોહીત's statement appears{' '}
                  </span>
                </p>
                <p className={styles.block_756}>
                  in the middle of a larger sentence, final punctuation needs to
                  be transcribed within the quotation.
                </p>
                <p className={styles.block_757}>
                  Use a colon instead of quotation marks in voice actions when
                  the quote follows the command.
                </p>
                <p className={styles.block_758}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ફ્રચ મા અનવાદ કરો: તમ કમ છો?{' '}
                  </span>
                </p>
                <p className={styles.block_759}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : ફ્રચ મા અનવાદ કરો: "તમ કમ છો?"{' '}
                  </span>
                </p>
                <p className={styles.block_760}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : "તમ કમ છો" follows the command "અનવાદ કરો", so a colon is
                    used before the phrase without any quotation marks.
                  </span>
                </p>
                <p className={styles.block_761}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : example@gmail.com ન ઇમિ મોકિો: તમારો ન્સદવસ કવો હતો?
                  </span>
                </p>
                <p className={styles.block_762}>
                  Use quotation marks when the quote is in the middle of the
                  sentence.
                </p>
                <p className={styles.block_763}>
                  Don't punctuate text after colons unless it is a complete
                  sentence.
                </p>
                <p className={styles.block_723}>
                  When speakers make a request for single words to be translated
                  into another language, don't punctuate the words, even if
                  you'd consider the words as sentences in other situations.
                </p>
                <p className={styles.block_764}>
                  Do not use quotation marks when the speaker is using a word to
                  say something about the word itself.
                </p>
                <p className={styles.block_765}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : પ જા કહ્ ન્સનયમ શબ્દન.{' '}
                  </span>
                </p>
                <p className={styles.block_749}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : પ જા કહ્ "ન્સનયમ" શબ્દન.{' '}
                  </span>
                </p>
                <p className={styles.block_766}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The speaker is referring to the word "ન્સનયમ", do not use
                    quotation marks.
                  </span>
                </p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from Gujarati letters and the Latin letters a through z,
                  you should not use any other symbol than: 0-9
                  äâàæÆçÇéèëêïîñÑôöŒœüûùμÿÄÂÀÉÈËÊÏÎÔÖÜÛÙŸ23,?!'"_°:.()&lt;&gt;{}
                  []√/@#₹+=%*&amp;-.;
                </p>
                <p className={styles.block_769}>
                  When two opposing teams are mentioned, include a hyphen
                  between their names.
                </p>
                <p className={styles.block_770}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : ગ જરાત િાય્સ-મબઈ ઇન્સ્ડય્સ વચ્ચની પહિી મચમા શ થય હત?
                  </span>
                </p>
                <p className={styles.block_771}>
                  Include a hyphen between locations in flight itineraries.
                </p>
                <p className={styles.block_772}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : હદરાબાદ-કોિકાતા ફ્િાઇટ{' '}
                  </span>
                </p>
                <p className={styles.block_773}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : હદરાબાદ કોિકાતા ફ્િાઇટ{' '}
                  </span>
                </p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={'text'}>
                  If a speaker says the name of a punctuation mark, write out
                  the full word or words between curly brackets. Do not add
                  punctuation symbols after spoken punctuation.
                </p>
                <p className={styles.block_776}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : તમ કમ છો {`{પ્રશ્ન ન્સચ્હ}`}{' '}
                  </span>
                </p>
                <p className={styles.block_777}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: તમ કમ છો? </span>
                </p>
                <p className={styles.block_778}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : તમ કમ છો પ્રશ્ન ન્સચ્હ?{' '}
                  </span>
                </p>
                <p className={styles.block_779}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>તમ કમ છો પ્રશ્ન ન્સચ્હ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_780}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : બરાબર {`{ટપક} {ટપક} {ટપક}`}{' '}
                  </span>
                </p>
                <p className={styles.block_781}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>: બરાબર... </span>
                </p>
                <p className={styles.block_506}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>બરાબર ટપક ટપક ટપક </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_782}>
                  However, don't spell out punctuation if it contradicts the
                  established transcription conventions of a certain phrase like
                  web pages, email addresses, addresses, phone numbers, etc.
                </p>
                <p className={styles.block_783}>
                  <span className={styles.text_3}>C</span>
                  <span className={styles.text_}>ORRECT</span>
                  <span className={styles.text_3}>: www.google.com </span>
                </p>
                <p className={styles.block_784}>
                  <span className={styles.text_4}>I</span>
                  <span className={styles.text_5}>NCORRECT</span>
                  <span className={styles.text_6}>
                    : www {`{ટપક}`} google {`{ટપક}`} com{' '}
                  </span>
                </p>
                <p className={styles.block_627}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>
                    ડબ્લ્ય ડબ્લ્ય ડબ્લ્ય ટપક ગગિ ટપક કોમ{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_785}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : Although the speaker said "ટપક ", URLs have an established
                    transcription convention that require the use of the
                    symbols. So use a "." instead of spelling it out as{' '}
                    {`{ટપક}`}.
                  </span>
                </p>
                <p className={styles.block_786}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_787}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>
                    : {`{ઉદ્ગારવાચક ન્સચ્હ}`}{' '}
                  </span>
                </p>
                <p className={styles.block_788}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: ! </span>
                </p>
                <p className={styles.block_446}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>ઉદ્ગારવાચક ન્સચ્હ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_789}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The actual spelling "ઉદ્ગારવાચક ન્સચ્હ" is transcribed in
                    curly brackets and not as the symbol "!" because it is
                    spoken in isolation.
                  </span>
                </p>
                <p className={styles.block_790}>
                  <span className={styles.text_4}>C</span>
                  <span className={styles.text_5}>ORRECT</span>
                  <span className={styles.text_6}>: {`{અધ ન્સવરામ}`} </span>
                </p>
                <p className={styles.block_788}>
                  <span className={styles.text_3}>I</span>
                  <span className={styles.text_}>NCORRECT</span>
                  <span className={styles.text_3}>: ; </span>
                </p>
                <p className={styles.block_791}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XAMPLE AUDIO</span>
                  <span className={styles.text_4}>: " </span>
                  <span className={styles.text_6}>અધ ન્સવરામ </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_792}>
                  <span className={styles.text_4}>E</span>
                  <span className={styles.text_5}>XPLANATION</span>
                  <span className={styles.text_6}>
                    : The actual spelling "અધ ન્સવરામ" is transcribed in curly
                    brackets and not as the symbol ";" because it is spoken in
                    isolation.
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
