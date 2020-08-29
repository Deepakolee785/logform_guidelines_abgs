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
            <PageContentHeader currentPage="longform Bangla" />
            <div className="content text">
              <p className={styles.block_527}>Punctuation </p>
              <p className={styles.block_528}>
                Follow the punctuation regulations of your language. Additional
                conventions are outlined in this section.{' '}
              </p>
              <p className={styles.block_529}>Fragments versus sentences </p>
              <p className={styles.block_530}>
                Answers to questions and sentences with dropped subjects should
                be transcribed as complete sentences.{' '}
              </p>
              <p className={styles.block_531}>
                Correct: কােক িনেয় কথা হে ? দেরাজার বাইের য।{' '}
              </p>
              <p className={styles.block_532}>
                <span className={styles.text_14}>
                  Correct: দেরাজার বাইের য{' '}
                </span>
                <span className={styles.text_15}>
                  Explanation: "দেরাজার বাইের য" is not a response to any{' '}
                </span>
              </p>
              <p className={styles.block_533}>
                question, and it is not a complete sentence, so it is not{' '}
              </p>
              <p className={styles.block_534}>
                transcribed as a complete sentence.{' '}
              </p>
              <p className={styles.block_535}>
                Interjections, greetings, and farewells said in isolation should
                include ending punctuation.{' '}
              </p>
              <p className={styles.block_536}>
                <span className={styles.text_24}>
                  Correct: আসসালাময়ালাই ম।{' '}
                </span>
                <span className={styles.text_25}>
                  Explanation: This is a greeting, so there should{' '}
                </span>
              </p>
              <p className={styles.block_537}>
                be punctuation at the end of the sentence.{' '}
              </p>
              <p className={styles.block_538}>
                Do not add ending punctuation to web search queries. Web search
                queries are spoken versions of what a person might type into a
                Google search bar. Note: Web search queries are different from
                voice action requests because they do not include a command
                directed to a device.{' '}
              </p>
              <p className={styles.block_323}>
                Add ending punctuation to phrases that sound like the end of a
                sentence. If they do not clearly sound like the end of a
                sentence, leave out ending punctuation. Remember that some
                sentences may sound incomplete because the audio has been cut
                off.{' '}
              </p>
              <p className={styles.block_539}>
                A voice action is a request or command spoken to a device and
                includes a command verb. Transcribe all voice actions as
                complete sentences.{' '}
              </p>
              <p className={styles.block_540}>Commas </p>
              <p className={styles.block_541}>
                Use commas only when necessary. If you are unsure whether to use
                a comma, leave it out.{' '}
              </p>
              <p className={styles.block_542}>
                Do not transcribe pauses with commas.{' '}
              </p>
              <p className={styles.block_543}>
                Correct: কাথায় সব থেক কােছর ল ট?{' '}
              </p>
              <p className={styles.block_544}>
                Incorrect: কাথায়, সব থেক, কােছর ল ট?{' '}
              </p>
              <p className={styles.block_545}>
                Explanation: Even if the speaker uses long{' '}
              </p>
              <p className={styles.block_546}>
                pauses, do not use a comma. There are places{' '}
              </p>
              <p className={styles.block_547}>
                where commas are allowed or required, but this{' '}
              </p>
              <p className={styles.block_548}>example contains neither. </p>
              <p className={styles.block_549}>
                Use a comma when a sentence starts with a discourse word,
                interjection, or yes/no word. However, if there is a long pause
                after a discourse word, interjection, or yes/no word, transcribe
                it as a complete sentence.{' '}
              </p>
              <p className={styles.block_550}>
                Correct: খব ভাল, আিম ভািবিন এ তামার কা ািন।{' '}
              </p>
              <p className={styles.block_551}>
                Incorrect: খব ভাল আিম ভািবিন এ তামার{' '}
              </p>
              <p className={styles.block_552}>কা ািন। </p>
              <p className={styles.block_553}>
                Explanation: "খব ভাল" is a discourse word, so it should{' '}
              </p>
              <p className={styles.block_554}>
                appear with a comma even if there is no obvious pause{' '}
              </p>
              <p className={styles.block_555}>after the discourse word. </p>
              <p className={styles.block_556}>Correct: দঃিখত, আমােক মা ক ন। </p>
              <p className={styles.block_557}>
                Incorrect: দঃিখত আমােক মা ক ন।{' '}
              </p>
              <p className={styles.block_558}>
                Explanation: " ঃিখত", is an interjection, so a comma{' '}
              </p>
              <p className={styles.block_559}>
                should appear after it. Other examples of interjections{' '}
              </p>
              <p className={styles.block_560}>
                include "ওয়াও", "ইসস", "উহহ", "ওহ", "হা হা হা"{' '}
              </p>
              <p className={styles.block_561}>
                Correct: অবশ য়, আিম এটা কের দখােবা।{' '}
              </p>
              <p className={styles.block_562}>
                Incorrect: অবশ য় আিম এটা কের দখােবা।{' '}
              </p>
              <p className={styles.block_563}>
                Correct: অবশ য়। আিম এটা কের দখােবা।{' '}
              </p>
              <p className={styles.block_564}>
                Incorrect: অবশ য়. আিম এটা কের দখােবা।{' '}
              </p>
              <p className={styles.block_565}>
                Explanation: If the speaker uses a long pause{' '}
              </p>
              <p className={styles.block_566}>
                after "", there should be a danda after it, not a{' '}
              </p>
              <p className={styles.block_567}>comma. </p>
              <p className={styles.block_568}>
                Use commas in sign-offs, such as those at the end of a message.
                Do not use end punctuation.{' '}
              </p>
              <p className={styles.block_569}>
                Do not use commas in sentences that contain only a greeting and
                an addressee. If a greeting occurs at the beginning of a
                sentence or fragment, place a comma after the greeting. If the
                greeting includes an addressee, place the comma after the
                addressee.{' '}
              </p>
              <p className={styles.block_223}>
                The phrase "Ok Google" by itself is transcribed without a comma
                or end punctuation. When the phrase appears before longer
                sentences, place a comma after "Google".{' '}
              </p>
              <p className={styles.block_570}>Correct: Ok Google </p>
              <p className={styles.block_571}>Incorrect: Ok, Google </p>
              <p className={styles.block_572}>Incorrect: Ok Google। </p>
              <p className={styles.block_573}>
                Explanation: "Ok Google" was spoken in{' '}
              </p>
              <p className={styles.block_574}>
                isolation, so do not transcribe a comma or{' '}
              </p>
              <p className={styles.block_575}>danda. </p>
              <p className={styles.block_576}>
                <span className={styles.text_26}>
                  Correct: Ok Google, সংসদ ভবেনর ছিব{' '}
                </span>
                <span className={styles.text_25}>
                  Explanation: "Ok Google" appears before the phrase{' '}
                </span>
              </p>
              <p className={styles.block_577}>
                "সংসদ ভবেনর ছিব", so transcribe a comma after "Ok{' '}
              </p>
              <p className={styles.block_578}>Google". </p>
              <p className={styles.block_579}>
                Correct: Ok Google, মায়ন আহেমদ স িক ত তথ{' '}
              </p>
              <p className={styles.block_580}>দখান। </p>
              <p className={styles.block_581}>
                Correct: Ok Google, াধ নতা িদবস কেব অন ত হয়?{' '}
              </p>
              <p className={styles.block_582}>Question marks </p>
              <p className={styles.block_583}>
                Transcribe a sentence as a question if it is structured
                grammatically as a sentence, or if it sounds like a question
                because of its intonation.{' '}
              </p>
              <p className={styles.block_584}>Correct: ক বলেল? </p>
              <p className={styles.block_585}>Correct: পের? </p>
              <p className={styles.block_586}>Correct: এই মহেত করেব ক ? </p>
              <p className={styles.block_587}>Colon and quotation </p>
              <p className={styles.block_588}>
                If the text in quotation marks is a complete sentence,
                transcribe it as a complete sentence. Do not change the
                punctuation of the quotation, and do not add punctuation
                immediately after the quotation marks.{' '}
              </p>
              <p className={styles.block_589}>
                Correct: কিরম বেল, "চেলা দপের দখা কির।"{' '}
              </p>
              <p className={styles.block_590}>
                Incorrect: কিরম বেল, "চেলা দপের দখা কির।"।{' '}
              </p>
              <p className={styles.block_591}>
                Explanation: Since "চেলা দপের দখা কির।" is a{' '}
              </p>
              <p className={styles.block_592}>
                complete sentence, there should be a period{' '}
              </p>
              <p className={styles.block_593}>
                inside the quotation marks. Because of this, do{' '}
              </p>
              <p className={styles.block_594}>
                not transcribe a period outside the quotation{' '}
              </p>
              <p className={styles.block_595}>marks. </p>
              <p className={styles.block_596}>
                Correct: কিরম জে স করেলন, "আমরা িক পের দখা করিছ?"{' '}
              </p>
              <p className={styles.block_597}>
                Incorrect: কিরম িজে স করেলন, "আমরা িক দপের{' '}
              </p>
              <p className={styles.block_598}>দখা করিছ?" । </p>
              <p className={styles.block_599}>
                Use a colon instead of quotation marks in voice actions when the
                quote follows the command.{' '}
              </p>
              <p className={styles.block_600}>
                Correct: ইংের জ হেত অনবাদ: আপিন কমন আেছন?{' '}
              </p>
              <p className={styles.block_601}>
                Incorrect: ইংের জ হেত অনবাদ "আপিন কমন আেছন?"{' '}
              </p>
              <p className={styles.block_602}>
                Use quotation marks when the quote is not at the end of the
                sentence.{' '}
              </p>
              <p className={styles.block_603}>
                Correct: আপনারা িকভােব বেলন "আিম তামােক ভালবািস" া{' '}
              </p>
              <p className={styles.block_604}>ভাষােত? </p>
              <p className={styles.block_605}>
                Explanation: The quote is in the middle of a{' '}
              </p>
              <p className={styles.block_606}>
                sentence, so use quotation marks.{' '}
              </p>
              <p className={styles.block_607}>
                When speakers make a request for single words to be translated
                into another language, don't punctuate or capitalize the words,
                even if you'd consider the words as sentences in other
                situations.{' '}
              </p>
              <p className={styles.block_608}>
                Do not use quotation marks when the speaker is using a word to
                say something about the word itself.{' '}
              </p>
              <p className={styles.block_609}>Other symbols </p>
              <p className={styles.block_610}>
                Apart from Bengali letters and the Latin letters a through z,
                you should not use any other symbol than: 0-9
                äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23,?
                !~^\'\_°:.()""{}[]√/@#৳+=%*&amp;-.;{' '}
              </p>
              <p className={styles.block_611}>Spoken punctuation </p>
              <p className={styles.block_612}>
                If a speaker says the name of a punctuation mark, write out the
                full word or words between curly brackets. Do not add
                punctuation symbols after spoken punctuation.{' '}
              </p>
              <p className={styles.block_613}>
                Correct: আসসালাময়ালাইকম {`{কমা}`} আপিন কমন আেছন{' '}
              </p>
              <p className={styles.block_614}>{`{ েবাধক িচ }`} </p>
              <p className={styles.block_615}>
                Incorrect: আসসালাময়ালাইকম, আপিন কমন আেছন?{' '}
              </p>
              <p className={styles.block_616}>
                Incorrect: আসসালাময়ালাইকম কমা আপিন কমন আেছন{' '}
              </p>
              <p className={styles.block_617}>েবাধক িচ </p>
              <p className={styles.block_618}>
                Incorrect: আসসালাময়ালাইকম কমা, আপিন কমন আেছন{' '}
              </p>
              <p className={styles.block_619}>েবাধক? </p>
              <p className={styles.block_620}>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_10}>
                  আসসালাময়ালাইকম কমা আপিন কমন আেছন েবাধক িচ{' '}
                </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_621}>
                Correct: ঠক আেছ {`{ডট} {ডট} {ডট}`}{' '}
              </p>
              <p className={styles.block_622}>Incorrect: ঠক আেছ... </p>
              <p className={styles.block_623}>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_10}>ঠক আেছ ডট ডট ডট </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_624}>
                <span className={styles.text_27}>Example </span>
                <span className={styles.text_24}>
                  Correct: আিম 4-এ ােট বাস কির।{' '}
                </span>
              </p>
              <p className={styles.block_625}>
                <span className={styles.text_11}>audio: " </span>
                <span className={styles.text_10}>
                  আিম চার ড াশ এ ােট বাস কির{' '}
                </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_626}>
                Incorrect: আিম 4 {`{ড াশ}`} এ ােট বাস কির।{' '}
              </p>
              <p className={styles.block_627}>
                Explanation: Apartment 4-A is an address with{' '}
              </p>
              <p className={styles.block_628}>
                established internal punctuation (4-A), so use{' '}
              </p>
              <p className={styles.block_629}>
                the punctuation symbols here, don't type out{' '}
              </p>
              <p className={styles.block_630}>
                "dash" between curly brackets.{' '}
              </p>
              <p className={styles.block_631}>Correct: {`{হািস মখ} `}</p>
              <p className={styles.block_632}>Incorrect: :-) </p>
              <p className={styles.block_633}>Incorrect: হািস মখ </p>
              <p className={styles.block_599}>
                However, don't spell out punctuation if it contradicts the
                established transcription conventions of a certain phrase like
                web pages, email addresses, addresses, phone numbers, etc.{' '}
              </p>
              <p className={styles.block_634}>Correct: www.google.com </p>
              <p className={styles.block_635}>
                Incorrect: www {`{క} `}google{` {క} `}com{' '}
              </p>
              <p className={styles.block_636}>
                Incorrect: www ডট google ডট com{' '}
              </p>
              <p className={styles.block_637}>
                Explanation: ডাি উ ডাি উ ডাি উ ডট google ডট কম{' '}
              </p>
              <p className={styles.block_638}>
                <span className={styles.text_12}>
                  Correct: +91 1234 123456{' '}
                </span>
                <span className={styles.text_7}>Example audio: " </span>
                <span className={styles.text_8}>
                  াস নয় এক এক ই িতন চার এক ই িতন{' '}
                </span>
              </p>
              <p className={styles.block_639}>
                <span className={styles.text_10}>চার পাচ ছয় </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_640}>
                Explanation: Although the speaker said " াস", phone{' '}
              </p>
              <p className={styles.block_641}>
                numbers have an established transcription convention{' '}
              </p>
              <p className={styles.block_642}>
                that require the use of the symbol. So use a "+" instead of{' '}
              </p>
              <p className={styles.block_643}>spelling it out as {`{ াস}`}. </p>
              <p className={styles.block_306}>
                If a word that can refer to a punctuation mark is spoken in
                isolation, it should be written out between curly brackets.{' '}
              </p>
              <p className={styles.block_644}>
                <span className={styles.text_27}>Example </span>
                <span className={styles.text_26}>Correct: {`{কােলান}`} </span>
              </p>
              <p className={styles.block_645}>
                <span className={styles.text_11}>audio: " </span>
                <span className={styles.text_10}>কােলান </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_646}>Incorrect: : </p>
              <p className={styles.block_647}>
                Explanation: The actual spelling " কােলান" is transcribed{' '}
              </p>
              <p className={styles.block_648}>
                in curly brackets and not as the symbol ":" because it is{' '}
              </p>
              <p className={styles.block_649}>spoken in isolation. </p>
              <p className={styles.block_650}>Correct: {`{আ ারে ার}`} </p>
              <p className={styles.block_651}>
                <span className={styles.text_11}>Example audio: " </span>
                <span className={styles.text_10}>আ ারে ার </span>
                <span className={styles.text_11}>" </span>
              </p>
              <p className={styles.block_652}>Incorrect: _ </p>
              <p className={styles.block_653}>
                Explanation: The actual spelling "আ ারে ার" is{' '}
              </p>
              <p className={styles.block_628}>
                transcribed in curly brackets and not as the symbol "_"{' '}
              </p>
              <p className={styles.block_654}>
                because it is spoken in isolation.{' '}
              </p>
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
