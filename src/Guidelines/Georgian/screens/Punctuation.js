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
            <PageContentHeader currentPage="longform Georgian" />
            <div className="content text">
              <p className={'large-heading'}>Punctuation</p>
              <p className={'text'}>
                Follow the punctuation regulations of your locale. Additional
                conventions are outlined in this section.
              </p>
              <div id="fragment-vrsus-sentences">
                <p className={'heading'}>Fragments versus sentences</p>
                <p className={'text'}>
                  Add punctuation where needed, but err on the side of keeping
                  it minimal.
                </p>
                <p className={styles.block_306}>
                  Sometimes a phrase which is not obviously grammatically a
                  sentence should nevertheless be treated as a sentence because
                  of its context, e.g. if it's an answer to a specific question,
                  or if it's an example where dropping a word sounds completely
                  natural as a complete sentence.
                </p>
                <p className={styles.block_307}>
                  <span className={styles.text_6}>
                    Correct: ვისზე საუბრობ? მეზობელ ბიჭზე.{' '}
                  </span>
                  <span className={styles.text_7}>
                    Explanation: Two speakers. "მეზობელ ბიჭზე" is
                  </span>
                </p>
                <p className={styles.block_308}>
                  an answer to a specific question.
                </p>
                <p className={styles.block_309}>
                  <span className={styles.text_8}>Correct: მეზობელ ბიჭზე </span>
                  <span className={styles.text_9}>
                    Explanation: No context to suggest this is a
                  </span>
                </p>
                <p className={styles.block_310}>
                  sentence; treat it as a fragment.
                </p>
                <p className={styles.block_311}>
                  <span className={styles.text_8}>
                    Correct: ლეკვების დაბანა აბაზანაში{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Sounds like a web search as{' '}
                  </span>
                </p>
                <p className={styles.block_312}>
                  opposed to a dropped subject. Punctuate as
                </p>
                <p className={styles.block_313}>fragment.</p>
                <p className={styles.block_314}>
                  Interjections, greetings, and farewells said in isolation
                  should be considered complete sentences and punctuated as
                  such.
                </p>
                <p className={styles.block_315}>
                  <span className={styles.text_8}>
                    Correct: ეშმაკმა დალახვროს.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: interjection{' '}
                  </span>
                </p>
                <p className={styles.block_316}>
                  <span className={styles.text_8}>Correct: გამარჯობა. </span>
                  <span className={styles.text_9}>Explanation: greeting </span>
                </p>
                <p className={styles.block_317}>
                  <span className={styles.text_8}>
                    Correct: გაუმარჯოს ჩემს საუკეთესო მეგობარს.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Entire phrase is being used as an
                  </span>
                </p>
                <p className={styles.block_318}>interjection.</p>
                <p className={styles.block_319}>
                  Add punctuation to sentence fragments that sound like the end
                  of a sentence. For fragments that do not clearly sound like
                  the beginning or end of a sentence, leave out capitalization
                  and punctuation. Note that sentence fragments may be a result
                  of cut-off audio samples.
                </p>
                <p className={styles.block_320}>
                  <span className={styles.text_8}>
                    Correct: რას ფიქრობ? ეს თითქოს ასე არ არის{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Begins as complete sentence and
                  </span>
                </p>
                <p className={styles.block_321}>ends mid-stream.</p>
                <p className={styles.block_322}>
                  Correct: ყავის მაღაზიაში მივდივარ. მე
                </p>
                <p className={styles.block_323}>შევუკვეთავ რა ღირს ყავა?</p>
                <p className={styles.block_324}>
                  Explanation: Do not put a period, hyphen, or
                </p>
                <p className={styles.block_325}>
                  ellipsis, even if another sentence follows.
                </p>
                <p className={styles.block_326}>
                  <span className={styles.text_8}>
                    Correct: რამდენია სად არის{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Both sound like beginnings of{' '}
                  </span>
                </p>
                <p className={styles.block_327}>sentences.</p>
                <p className={styles.block_328}>
                  <span className={styles.text_8}>
                    Correct: სად არის სად არის სანაპირო?{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Repeated beginning of the{' '}
                  </span>
                </p>
                <p className={styles.block_329}>sentence.</p>
                <p className={styles.block_330}>
                  Correct: ცხოვრობდნენ მაგრამ შემდეგ
                </p>
                <p className={styles.block_331}>გადავწყვიტეთ</p>
                <p className={styles.block_332}>
                  Explanation: Sounds like the middle of a
                </p>
                <p className={styles.block_333}>sentence; End was cut off.</p>
                <p className={styles.block_334}>
                  If an utterance is not clearly a sentence according to the
                  above rules and examples, do not punctuate it as a sentence.
                </p>
              </div>
              <div id="commas">
                <p className={'heading'}>Commas</p>
                <p className={'text'}>
                  Only use commas where required. Err on the side of minimal
                  punctuation. Do not rely on intonation.
                </p>
                <p className={styles.block_337}>
                  Correct: სად არის უახლოესი ბენზინგასამართი
                </p>
                <p className={styles.block_338}>სადგური?</p>
                <p className={styles.block_339}>
                  Explanation: Even if the speaker uses long
                </p>
                <p className={styles.block_340}>
                  pauses in these places, do not use a comma.
                </p>
                <p className={styles.block_341}>
                  There are places where commas are allowed or
                </p>
                <p className={styles.block_342}>
                  required, but this example contains neither.
                </p>
                <p className={styles.block_343}>
                  Incorrect: სად არის, უახლოესი,
                </p>
                <p className={styles.block_344}>ბენზინგასამართი სადგური?</p>
                <p className={styles.block_345}>
                  Use a comma when a sentence starts with a discourse word,
                  interjection, or yes/no word. However: If there is a long
                  pause between a discourse word, interjection, or yes/no word
                  and a full sentence that follows it, treat that initial word
                  as a separate sentence.
                </p>
                <p className={styles.block_346}>
                  Correct: კარგი, მე ვიფიქრე რომ შენ გქონდა
                </p>
                <p className={styles.block_347}>კომპანია.</p>
                <p className={styles.block_348}>
                  Explanation: Discourse word. Other examples of
                </p>
                <p className={styles.block_349}>
                  discourse words in Georgian include "მაგრამ",
                </p>
                <p className={styles.block_350}>
                  "ასე რომ", "სინამდვილეში", and "ასევე".
                </p>
                <p className={styles.block_351}>
                  <span className={styles.text_8}>
                    Correct: ბოდიში, პატარავ.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Interjection. Other examples of
                  </span>
                </p>
                <p className={styles.block_352}>
                  interjections include "ვაუ", "ჰეი", "ჰაჰა", and
                </p>
                <p className={styles.block_353}>others.</p>
                <p className={styles.block_354}>
                  <span className={styles.text_8}>
                    Correct: დიახ, ყავის მაღაზიაში მივდივარ.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Yes/no word.{' '}
                  </span>
                </p>
                <p className={styles.block_355}>
                  <span className={styles.text_8}>
                    Correct: კარგი, ეს ნამდვილად კარგია.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Use a comma when there is no{' '}
                  </span>
                </p>
                <p className={styles.block_356}>
                  pause, or when there is a pause that isn't long.
                </p>
                <p className={styles.block_357}>
                  <span className={styles.text_8}>
                    Correct: კარგი. ეს ნამდვილად კარგია.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Use a period when there is a{' '}
                  </span>
                </p>
                <p className={styles.block_358}>
                  substantial pause after "კარგი".
                </p>
                <p className={styles.block_359}>
                  The phrase "Ok Google" in isolation is transcribed without a
                  comma or end punctuation. When the phrase appears before
                  longer utterances, place a comma after "Google".
                </p>
                <p className={styles.block_360}>Correct: Ok Google</p>
                <p className={styles.block_361}>
                  Correct: Ok Google, ზეთისხილის ხის ფოტოები
                </p>
                <p className={styles.block_362}>
                  Correct: Ok Google, მაჩვენე დეკანის საკონტაქტო
                </p>
                <p className={styles.block_363}>ინფორმაცია.</p>
                <p className={styles.block_364}>
                  Correct: Ok Google, როდისაა ხსენების დღე
                </p>
                <p className={styles.block_365}>წელს?</p>
              </div>
              <div id="intonation-marks">
                <p className={'heading'}>Intonation marks</p>
                <p className={'text'}>
                  Punctuate the following as questions: 1) All queries
                  syntactically built as questions, regardless of intonation. 2)
                  All queries which sound like they are being used as questions,
                  regardless of sentence structure.
                </p>
                <p className={styles.block_368}>
                  <span className={styles.text_8}>
                    Correct: სერიოზულად ამბობ?{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Syntactically built as a question, so
                  </span>
                </p>
                <p className={styles.block_369}>
                  punctuate as a question regardless of
                </p>
                <p className={styles.block_370}>intonation.</p>
                <p className={styles.block_371}>
                  <span className={styles.text_8}>
                    Correct: დილის 3:00-ზე?{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Rising intonation suggests it is a
                  </span>
                </p>
                <p className={styles.block_372}>
                  question, so punctuate as a question
                </p>
                <p className={styles.block_373}>regardless of structure.</p>
                <p className={styles.block_374}>
                  <span className={styles.text_8}>
                    Correct: ამინდი თბილისში{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: Query uses rising intonation, but is
                  </span>
                </p>
                <p className={styles.block_375}>
                  most likely a web search rather than a true
                </p>
                <p className={styles.block_376}>question.</p>
                <p className={styles.block_377}>
                  If a speaker uses clearly exclamatory intonation, use an
                  exclamation point. If there is any doubt, err on the side of
                  using period.
                </p>
                <p className={styles.block_378}>
                  <span className={styles.text_8}>Correct: ჰეი! </span>
                  <span className={styles.text_9}>
                    Explanation: Speaker sounds enthusiastic.{' '}
                  </span>
                </p>
                <p className={styles.block_379}>
                  <span className={styles.text_8}>Correct: ვაი. </span>
                  <span className={styles.text_9}>
                    Explanation: Speaker sounds unenthused.{' '}
                  </span>
                </p>
              </div>
              <div id="colon-and-quotation">
                <p className={'heading'}>Colon and quotation</p>
                <p className={'text'}>
                  Use a comma between reported speech verbs and direct
                  quotations. Do not put punctuation within quotation marks
                  unless the punctuation belongs to the reported speech.
                </p>
                <p className={styles.block_382}>
                  Correct: ჩემმა მეგობარმა თქვა, "ალიგატორ
                </p>
                <p className={styles.block_383}>ნიანგი".</p>
                <p className={styles.block_384}>
                  Incorrect: ჩემმა მეგობარმა თქვა, "ალიგატორ
                </p>
                <p className={styles.block_385}>ნიანგი."</p>
                <p className={styles.block_386}>
                  Incorrect: ჩემმა მეგობარმა თქვა "ალიგატორ
                </p>
                <p className={styles.block_385}>ნიანგი."</p>
                <p className={styles.block_386}>
                  Incorrect: ჩემმა მეგობარმა თქვა "ალიგატორ
                </p>
                <p className={styles.block_385}>ნიანგი".</p>
                <p className={styles.block_387}>
                  Explanation: The word "თქვა" is the most
                </p>
                <p className={styles.block_388}>
                  common reported speech verb in Georgian, but
                </p>
                <p className={styles.block_389}>
                  other words ("ჰკითხა", "უპასუხა", "პასუხი გასცა")
                </p>
                <p className={styles.block_390}>
                  can be used for reported speech.
                </p>
                <p className={styles.block_391}>Correct: თქვი "ონომატოპეა".</p>
                <p className={styles.block_392}>
                  Incorrect: თქვი, "ონომატოპეა".
                </p>
                <p className={styles.block_392}>
                  Incorrect: თქვი, "ონომატოპეა."
                </p>
                <p className={styles.block_393}>
                  Explanation: Omit the comma if the verb is in
                </p>
                <p className={styles.block_394}>the imperative.</p>
                <p className={styles.block_395}>
                  If the text in quotation marks qualifies as a sentence,
                  punctuate as if it were its own utterance. Do not alter its
                  end punctuation even if the quote is within a sentence. Do not
                  add excess punctuation after end quotation marks.
                </p>
                <p className={styles.block_396}>
                  Correct: ანამ თქვა, "მოდი შევხვდეთ 3:00-ზე."
                </p>
                <p className={styles.block_397}>
                  Incorrect: ანამ თქვა, "მოდი შევხვდეთ 3:00-ზე.".
                </p>
                <p className={styles.block_398}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_399}>
                  as a sentence. Do not add excess punctuation.
                </p>
                <p className={styles.block_400}>
                  Correct: ჯეინმა იკითხა, "ვხვდებით ერთმანეთს
                </p>
                <p className={styles.block_401}>3:00-ზე?"</p>
                <p className={styles.block_398}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_402}>
                  as a sentence. Do not add excess punctuation.
                </p>
                <p className={styles.block_403}>
                  Incorrect: ჯეინმა იკითხა, "ვხვდებით ერთმანეთს
                </p>
                <p className={styles.block_404}>3:00-ზე?".</p>
                <p className={styles.block_405}>
                  Correct: ჯეინმა თქვა, "იქ დამხვდი."
                </p>
                <p className={styles.block_406}>
                  Incorrect: ჯეინმა თქვა, "იქ დამხვდი."?
                </p>
                <p className={styles.block_398}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_399}>
                  as a sentence. Do not add excess punctuation.
                </p>
                <p className={styles.block_407}>
                  Correct: ჯოშმა თქვა, "მანდ ვიქნები. გპირდები."
                </p>
                <p className={styles.block_408}>მისი კალედრის შეუმოწმებლად.</p>
                <p className={styles.block_398}>
                  Explanation: Text in quotation marks qualifies
                </p>
                <p className={styles.block_409}>
                  as sentences. Do not alter its end punctuation
                </p>
                <p className={styles.block_410}>
                  even though the quote is within a sentence.
                </p>
                <p className={styles.block_411}>
                  Use a colon but no quotation marks in quotative voice actions
                  when the quote follows the command. Use quotation marks when
                  the quote is in the middle of the sentence.
                </p>
                <p className={styles.block_412}>
                  <span className={styles.text_8}>
                    Correct: გადათარგმნე ფრანგულად: როგორ ხარ?{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: The quote follows the command,
                  </span>
                </p>
                <p className={styles.block_413}>
                  so use a colon and omit quotation marks.
                </p>
                <p className={styles.block_414}>
                  <span className={styles.text_8}>
                    Correct: გადათარგმნე "რა გქვია?" ფრანგულად.{' '}
                  </span>
                  <span className={styles.text_9}>
                    Explanation: The quote is in the middle of a
                  </span>
                </p>
                <p className={styles.block_415}>
                  sentence, so use quotation marks and omit
                </p>
                <p className={styles.block_416}>colon.</p>
                <p className={styles.block_417}>
                  Correct: როგორ ამბობ "მე შენ მიყვარხარ."
                </p>
                <p className={styles.block_418}>ფრანგულად?</p>
                <p className={styles.block_419}>
                  Incorrect: როგორ ამბობ, "მე შენ მიყვარხარ."
                </p>
                <p className={styles.block_420}>ფრანგულად?</p>
                <p className={styles.block_421}>
                  Explanation: Omit commas after "ამბობ" verbs
                </p>
                <p className={styles.block_422}>in translation requests.</p>
                <p className={styles.block_423}>
                  Correct: example@gmail.com-ს: გამარჯობა,
                </p>
                <p className={styles.block_424}>დღემ როგორ ჩაიარა?</p>
                <p className={styles.block_425}>Correct: გაუგზავნე მაილი</p>
                <p className={styles.block_426}>
                  example@gmail.com-ს ტექსტით: გამარჯობა,
                </p>
                <p className={styles.block_424}>დღემ როგორ ჩაიარა?</p>
              </div>
              <div id="other-symbols">
                <p className={'heading'}>Other symbols</p>
                <p className={'text'}>
                  Apart from the English letters a through z and Georgian
                  characters Ⴀ through , you should not use any other symbol
                  than: 0-9
                  äâàáāçčćđéèéëêēïîíīñóôöüőōšûùúűūÿȳžÄÂÀÁĀÇČĆĐÉÈÉËÊĒÏÎÍĪÑÓÔÖŌŠÜÛÙÚŪŸȲŽ23,?
                  !~^\'"_°:.()&lt;&gt;{}[]√/@#$ €£+=%*&amp;-.;
                </p>
                <p className={styles.block_429}>
                  Use hyphen in phrases and compounds typically written with
                  hyphen. If in doubt, use hyphen. Check your locale's
                  dictionary for hyphenation.
                </p>
                <p className={styles.block_430}>Correct: მამა-პაპა.</p>
                <p className={styles.block_431}>Incorrect: მამაპაპა</p>
                <p className={styles.block_432}>Correct: დღე-ღამე</p>
                <p className={styles.block_433}>Incorrect: დღეღამე</p>
              </div>
              <div id="spoken-punctuation">
                <p className={'heading'}>Spoken punctuation</p>
                <p className={'text'}>
                  For sentence-level spoken punctuation, write out the full word
                  or words between curly brackets. Do not add punctuation
                  symbols after spoken punctuation. Be careful with homonyms.
                  (See exceptions in the next rule.)
                </p>
                <p className={styles.block_435}>
                  Correct: კარგი {`{წერტილი} {წერტილი} {წერტილი}`}
                </p>
                <p className={styles.block_436}>Incorrect: კარგი...</p>
                <p className={styles.block_437}>Incorrect: კარგი...</p>
                <p className={styles.block_438}>
                  Incorrect: კარგი{` {სამი წერტილი}`}
                </p>
                <p className={styles.block_439}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>კარგი წერტილი წერტილი </span>
                </p>
                <p className={styles.block_440}>
                  <span className={styles.text_5}>წერტილი </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_441}>
                  <span className={styles.text_10}>Example </span>
                  <span className={styles.text_8}>
                    Correct: გამარჯობა {`{მძიმე} `}როგორ ხარ{' '}
                  </span>
                </p>
                <p className={styles.block_442}>
                  <span className={styles.text_4}>audio: " </span>
                  <span className={styles.text_5}>
                    გამარჯობა მძიმე როგორ ხარ{' '}
                  </span>
                </p>
                <p
                  className={styles.block_443}
                >{`{კითხვის ნიშანი} კარგად ვარ {წერტილი}`}</p>
                <p className={styles.block_444}>
                  <span className={styles.text_5}>
                    კითხვის ნიშანი კარგად ვარ წერტილი{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_445}>
                  Incorrect: გამარჯობა, როგორ ხარ? კარგად ვარ.
                </p>
                <p className={styles.block_446}>
                  Correct: მან მითხრა,{` {ბრჭყალი}`} არ მოიყვანო
                </p>
                <p className={styles.block_447}>კატა. {`{ბრჭყალი}`}</p>
                <p className={styles.block_448}>
                  Incorrect: მან მითხრა, "არ მოიყვანო კატა."
                </p>
                <p className={styles.block_449}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    მან მითხრა ბრჭყალი არ მოიყვანო კატა ბრჭყალი{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_450}>
                  Correct: {`{მომღიმარი სახე}`}
                </p>
                <p className={styles.block_451}>Incorrect: :-)</p>
                <p className={styles.block_452}>Incorrect: მომღიმარი სახე</p>
                <p className={styles.block_453}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>მომღიმარი სახე </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_454}>
                  Don't spell out internal punctuation like hyphens in web
                  pages, email addresses, addresses, phone numbers, or other
                  word-level punctuation.
                </p>
                <p className={styles.block_455}>
                  Correct: მე ვცხოვრობ 4-ა ბინაში.
                </p>
                <p className={styles.block_456}>
                  Incorrect: მე ვცხოვრობ 4 {`{დეფისი}`} ა ბინაში.
                </p>
                <p className={styles.block_457}>
                  Incorrect: მე ვცხოვრობ ოთხი {`{დეფისი}`} ა ბინაში.
                </p>
                <p className={styles.block_458}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    მე ვცხოვრობ ოთხი დეფისი ა{' '}
                  </span>
                </p>
                <p className={styles.block_459}>
                  <span className={styles.text_5}>ბინაში </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_460}>Correct: www.fake-domain.com</p>
                <p className={styles.block_461}>
                  Incorrect: www {`{წერტილი} `}fake {`{დეფისი}`}
                </p>
                <p className={styles.block_462}>domain {`{წერტილი} `}com</p>
                <p className={styles.block_463}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_11}>w w w </span>
                  <span className={styles.text_5}>წერტილი </span>
                  <span className={styles.text_11}>fake </span>
                  <span className={styles.text_5}>დეფისი </span>
                </p>
                <p className={styles.block_464}>
                  <span className={styles.text_11}>domain </span>
                  <span className={styles.text_5}>წერტილი </span>
                  <span className={styles.text_11}>com </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_465}>
                  Correct: ის არის მსახიობი/მოდელი.
                </p>
                <p className={styles.block_466}>
                  Incorrect: ის არის მსახიობი {`{წილადის ნიშანი}`}
                </p>
                <p className={styles.block_467}>მოდელი.</p>
                <p className={styles.block_468}>
                  <span className={styles.text_4}>Example audio: " </span>
                  <span className={styles.text_5}>
                    ის არის მსახიობი წილადის ნიშანი მოდელი{' '}
                  </span>
                  <span className={styles.text_4}>" </span>
                </p>
                <p className={styles.block_469}>
                  Explanation: The slash sign gives us
                </p>
                <p className={styles.block_470}>
                  opportunity to add information to the previous
                </p>
                <p className={styles.block_471}>
                  Incorrect: ის არის მსახიობი წილადის ნიშანი
                </p>
                <p className={styles.block_467}>მოდელი.</p>
                <p className={styles.block_472}>
                  word or to explain it in a better way. We
                </p>
                <p className={styles.block_473}>
                  consider slash to be word-level punctuation.
                </p>
                <p className={styles.block_474}>
                  If a word that can refer to a punctuation mark is spoken in
                  isolation, it should be written out between curly brackets.
                </p>
                <p className={styles.block_475}>Correct: {`{ორწერტილი}`}</p>
                <p className={styles.block_476}>Correct: {`{ქვედა ტირე}`}</p>
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
